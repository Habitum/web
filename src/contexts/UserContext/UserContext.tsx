import React, { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { iLoginFormValues } from "../../components/Forms/LoginForm/types";
import { iRegisterFormValues } from "../../components/Forms/RegisterForm/types";
import { iUser, iUserContext, iUserProviderProps } from "./types";

import { getUser } from "../../services/getUser";
import { loginUser } from "../../services/loginUser";
import { registerUser } from "../../services/registerUser";
import { getUsers } from "../../services/getUsers";

import avatar from "../../assets/profilePics/male_2 6.svg";
import { api } from "../../services/api";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(true);
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    (async () => {
      if (token) {
        try {
          const response = await getUser();
          setUser(response);
        } catch (error) {
          console.log(error);
        } finally {
          setGlobalLoading(false);
        }
      }
      setGlobalLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (userLoginData: iLoginFormValues) => {
    setUser(null);
    try {
      setGlobalLoading(true);

      const response = await loginUser(userLoginData);

      const userID = response.user.id + "";

      const token = response.accessToken;

      localStorage.setItem("@TOKEN", response.accessToken);
      localStorage.setItem("@USER_ID", response.user.id + "");

      const getUserHabits = await api.get("/users/" + userID + "?_embed=habits", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(getUserHabits.data);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou senha incorretos!");
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const userRegister = async (userRegisterData: iRegisterFormValues) => {
    try {
      setGlobalLoading(true);
      delete userRegisterData.confirmPassword;

      userRegisterData.stars = 0;
      userRegisterData.bits = 0;
      userRegisterData.sequence = 0;
      userRegisterData.img = avatar;

      await registerUser(userRegisterData);

      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Ops, deu algo errado");
    } finally {
      setGlobalLoading(false);
    }
  };

  const userLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const getUsersList = async () => {
    try {
      const data = await getUsers();

      const ranking = data.sort((a ,b) => (a.bits > b.bits) ? 1 : -1);
      console.log(ranking)
      return ranking;

    } catch (error) {
      console.log(error);
    }
  };

  const userGet = async () => {
    try {
      const response = await getUser();

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
        userLogin,
        userLogout,
        getUsersList,
        userGet,
        userRegister,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
