/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { FaUserAlt } from "react-icons/fa";

import Header from "../../components/Header";
import Wave from "../../components/Wave";

import { StyledLink } from "../../styles/StyledLink";
import { StyledContainer, StyledDescription, StyledHero, StyledSectionRanking } from "./styles";

import imageHero from "../../assets/img/image-hero.svg";
import Ranking from "../../components/Ranking";
import Footer from "../../components/Footer";

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
            Completar <strong>tarefas</strong> e <strong>hábitos</strong> será ainda mais divertido
          </h2>
        </StyledHero>
      </section>

      <StyledSectionRanking>
        <Wave />

        <StyledContainer>
          <StyledDescription>
            <p>Crie e alcance metas para este ano de forma fácil, gerenciável e produtiva, do seu próprio jeito.</p>
            <p>Torne a questão de abdicar ou cumprir hábitos uma tarefa gameficada, divertida e motivacional.</p>
            <p>A cada hábito realizado com sucesso, você acumula bits que poderão fazer com que você entre no ranking</p>
          </StyledDescription>
          <Ranking />
        </StyledContainer>
      </StyledSectionRanking>

      <Footer />
    </>
  );
};

export default LandingPage;
