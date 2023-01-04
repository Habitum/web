import React, { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { iLoginFormValues } from "../components/LoginForm/types";
import { iRegisterFormValues } from "../components/RegisterForm/types";
import { iUserContext, iUserProviderProps } from "./UserContextTypes";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (userLoginData: iLoginFormValues) => {
    try {
      setGlobalLoading(true);
      toast.success("Logado com sucesso");
      console.log(userLoginData);
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

  return <UserContext.Provider value={{ globalLoading, setGlobalLoading, userLogin, userLogout, userRegister }}>{children}</UserContext.Provider>;
};
