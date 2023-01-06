import React from "react";

import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import Wave from "../../components/Wave";

import { StyledLoginPage } from "./styles";

const Login = () => {
  return (
    <StyledLoginPage>
      <Logo variant="primary" />
      <LoginForm />
      <Wave />
    </StyledLoginPage>
  );
};

export default Login;
