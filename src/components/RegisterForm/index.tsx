import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";
import RegisterFormHeader from "./RegisterFormHeader";

import { iRegisterFormValues } from "./types";

import { formSchema } from "./schema";

import { StyledRegisterForm } from "./styles";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({ mode: "onChange", resolver: yupResolver(formSchema) });

  const { userRegister, globalLoading } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    await userRegister(data);
  };

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <RegisterFormHeader />
        <Input name="avatar" type="url" label="Avatar" placeholder="Insira o link do seu avatar" register={register("avatar")} />
        {errors.avatar && (
          <p className="FormError">
            <>{errors.avatar.message}</>
          </p>
        )}
        <Input name="name" type="text" label="Nome" placeholder="Digite seu nome" register={register("name")} />
        {errors.name && (
          <p className="FormError">
            <>{errors.name.message}</>
          </p>
        )}
        <Input name="username" type="text" label="Username" placeholder="Digite seu nome de usuário" register={register("username")} />
        {errors.username && (
          <p className="FormError">
            <>{errors.username.message}</>
          </p>
        )}
        <Input name="email" type="email" label="Email" placeholder="Digite seu email" register={register("email")} />
        {errors.email && (
          <p className="FormError">
            <>{errors.email.message}</>
          </p>
        )}
        <Input name="password" type="password" placeholder="Senha" register={register("password")} />
        {errors.password && (
          <p className="FormError">
            <>{errors.password.message}</>
          </p>
        )}
        <Input name="confirmPassword" type="password" placeholder="Confirmar senha" register={register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="FormError">
            <>{errors.confirmPassword.message}</>
          </p>
        )}
        <button className="RegisterSubmitBtn" type="submit">
          {globalLoading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </StyledRegisterForm>
    </>
  );
};

export default RegisterForm;
