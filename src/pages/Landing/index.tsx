import React from "react";

import { FaUserAlt } from "react-icons/fa";

import Header from "../../components/Header";
import { StyledLink } from "../../styles/StyledLink";

import { ListMenu, StyledLandingPage } from "./styles";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Header>
        <ListMenu>
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
        </ListMenu>
      </Header>
    </StyledLandingPage>
  );
};

export default LandingPage;
