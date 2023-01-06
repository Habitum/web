import React from "react";

import { StyledLink } from "../../../styles/StyledLink";

import { StyledRegisterFormHeader } from "./styles";

const RegisterFormHeader = () => {
  return (
    <>
      <StyledRegisterFormHeader>
        <h3>Cadastro</h3>
        <StyledLink to="/login" variant="default">
          Ir para o Login
        </StyledLink>
      </StyledRegisterFormHeader>
    </>
  );
};

export default RegisterFormHeader;
