import React from "react";
import Logo from "../../components/Logo";

import RegisterForm from "../../components/Forms/RegisterForm";
import Wave from "../../components/Wave";

import { StyledRegisterPage } from "./styles";

const Register = () => {
  return (
    <StyledRegisterPage>
      <Logo variant="special" />
      <RegisterForm />
      <Logo variant="secondary" />
      <div className="wave-container">
        <Wave />
      </div>
    </StyledRegisterPage>
  );
};

export default Register;
