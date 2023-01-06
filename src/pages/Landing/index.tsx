import React from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";

import { StyledLandingPage } from "./styles";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Header />
      <h1>LandingPage provisória</h1>
      {/* Provisório para testes */}
      <Link to="/login">Login</Link>
      <Link to="/register">Cadastro</Link>
      {/* Provisório para testes */}
    </StyledLandingPage>
  );
};

export default LandingPage;
