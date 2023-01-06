import React from "react";

import { FaUserAlt } from "react-icons/fa";

import Header from "../../components/Header";

import { StyledLink } from "../../styles/StyledLink";
import { StyledHero } from "./styles";

import imageHero from '../../assets/images/image-hero.svg' 

const LandingPage = () => {
  return (
    <>
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

      <section>
        <StyledHero>
          <img src={imageHero} alt="Criando Hábitos" />
          <h2>
            Completar <strong>tarefas</strong> e <strong>hábitos</strong> será
            ainda mais divertido
          </h2>
        </StyledHero>
      </section>
    </>
  );
};

export default LandingPage;
