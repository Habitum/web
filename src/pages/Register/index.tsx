import React from "react";
import Logo from "../../components/Logo";

import RegisterForm from "../../components/RegisterForm";
import Wave from "../../components/Wave";

import { StyledRegisterPage } from "./styles";

const Register = () => {
  return (
    <StyledRegisterPage>
      <Logo variant="special" />
      <RegisterForm />
      <Logo variant="secondary" />
      <Wave />
    </StyledRegisterPage>
  );
};

export default Register;
