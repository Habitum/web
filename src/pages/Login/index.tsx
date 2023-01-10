import React from "react";

import LoginForm from "../../components/Forms/LoginForm";
import Logo from "../../components/Logo";
import Wave from "../../components/Wave";

import { StyledLoginPage } from "./styles";

const Login = () => {
  return (
    <StyledLoginPage>
      <Logo variant="primary" />
      <LoginForm />
      <div className="wave-container">
        <Wave />
      </div>
    </StyledLoginPage>
  );
};

export default Login;
