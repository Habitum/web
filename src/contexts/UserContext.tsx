import React, { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { iLoginFormValues } from "../components/LoginForm/types";
import { iRegisterFormValues } from "../components/RegisterForm/types";
import { iUserContext, iUserProviderProps } from "./UserContextTypes";

import { api } from "../services/api";
import { getUser } from "../services/getUser";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);

  const token = localStorage.getItem("@TOKEN");
  
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {

      if (token) {
        try {
          setGlobalLoading(true);
          const response = await getUser();

          setUser(response);

          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, [token]);

  const userLogin = async (userLoginData: iLoginFormValues) => {
    try {
      setGlobalLoading(true);
      toast.success("Logado com sucesso");
      console.log(userLoginData);

      const response = await api.post<iLoginResponse>("/login", userLoginData);

      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USER_ID", response.data.user.id + "");
    
      setUser(response.data.user);

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
      console.log(userRegisterData);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      toast.error("Ops, deu algo errado");
    } finally {
      setGlobalLoading(false);
    }
  };

  const userLogout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return <UserContext.Provider value={{ globalLoading, setGlobalLoading, userLogin, userLogout, userRegister, user }}>{children}</UserContext.Provider>;
};
function useEffect(arg0: () => void, arg1: (string | null)[]) {
  throw new Error("Function not implemented.");
}

