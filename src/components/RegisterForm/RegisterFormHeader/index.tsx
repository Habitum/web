import React from "react";

import { Link } from "react-router-dom";

import { StyledRegisterFormHeader } from "./styles";

const RegisterFormHeader = () => {
  return (
    <>
      <StyledRegisterFormHeader>
        <h3>Cadastro</h3>
        <Link to="/login">Voltar para o login</Link>
      </StyledRegisterFormHeader>
    </>
  );
};

export default RegisterFormHeader;
