import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import Input from "../Input";

import { iLoginFormValues } from "./types";

import { formSchema } from "./schema";

import { StyledLoginForm } from "./styles";

const LoginForm = () => {
  const { userLogin, globalLoading } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iLoginFormValues>({ mode: "onChange", resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data);
  };

  return (
    <>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <Input placeholder="Digite seu email" name="email" label="Email" type="email" register={register("email")} />
        {errors.email && (
          <p className="FormError">
            <>{errors.email.message}</>
          </p>
        )}
        <Input placeholder="Digite sua senha" name="password" label="Senha" type="password" register={register("password")} />
        {errors.password && (
          <p className="FormError">
            <>{errors.password?.message}</>
          </p>
        )}
        <button type="submit" className="LoginSubmitBtn">
          {globalLoading ? "Logando..." : "Logar"}
        </button>
        <Link to="/register">Cadastro</Link>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
