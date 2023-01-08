import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";
import RegisterFormHeader from "./RegisterFormHeader";

import { iRegisterFormValues } from "./types";

import { formSchema } from "./schema";

import { StyledRegisterForm } from "./styles";
import Button from "../Button";
import Spinner from "../Spinner";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({ mode: "onChange", resolver: yupResolver(formSchema) });

  const { userRegister, globalLoading } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    userRegister(data);
  };

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <RegisterFormHeader />
        <Input name="name" type="text" label="Nome" placeholder="Digite seu nome" register={register("name")} />
        {errors.name && (
          <p className="FormError">
            <>{errors.name.message}</>
          </p>
        )}
        <Input name="userName" type="text" label="Username" placeholder="Digite seu nome de usuário" register={register("userName")} />
        {errors.userName && (
          <p className="FormError">
            <>{errors.userName.message}</>
          </p>
        )}
        <Input name="email" type="email" label="Email" placeholder="Digite seu email" register={register("email")} />
        {errors.email && (
          <p className="FormError">
            <>{errors.email.message}</>
          </p>
        )}
        <Input name="password" type="password" label="Senha" placeholder="Senha" register={register("password")} />
        {errors.password && (
          <p className="FormError">
            <>{errors.password.message}</>
          </p>
        )}
        <Input name="confirmPassword" type="password" label="Confirmar Senha" placeholder="Confirmar senha" register={register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="FormError">
            <>{errors.confirmPassword.message}</>
          </p>
        )}
        <Button name={globalLoading ? <Spinner /> : "CRIAR CONTA"} variant="forms" />
      </StyledRegisterForm>
    </>
  );
};

export default RegisterForm;
