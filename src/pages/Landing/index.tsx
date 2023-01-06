import React from "react";

import { FaUserAlt } from "react-icons/fa";

import Header from "../../components/Header";
import { StyledLink } from "../../styles/StyledLink";

import { StyledLandingPage } from "./styles";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Header>
        <ul>
          <li>
            <StyledLink to={"/login"} variant="icon-text">
              <FaUserAlt /> Login
            </StyledLink>
          </li>
          <li>
            <StyledLink to={"/register"} variant="button">
              Criar Conta
            </StyledLink>
          </li>
        </ul>
      </Header>
    </StyledLandingPage>
  );
};

export default LandingPage;
