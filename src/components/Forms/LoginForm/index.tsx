import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext/UserContext";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../Button";
import FormHeader from "../FormHeader";
import Input from "../../Input";
import Spinner from "../../Spinner";

import { iLoginFormValues } from "./types";

import { formSchema } from "./schema";

import { StyledLink } from "../../../styles/StyledLink";
import { StyledForm } from "../../../styles/forms";

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
    <StyledForm onSubmit={handleSubmit(submit)}>
      <FormHeader name="Login" linkname="Voltar" linkto="/" />
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
      <Button name={globalLoading ? <Spinner /> : "Entrar"} variant={globalLoading ? "forms-disabled" : "forms"} />
      <p className="FormQuestion">Ainda não tem conta? Crie uma conta</p>
      <StyledLink to="/register" variant="default">
        CRIAR CONTA
      </StyledLink>
    </StyledForm>
  );
};

export default LoginForm;
