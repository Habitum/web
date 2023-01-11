import React from "react";

import { FaDiscord, FaGithub } from "react-icons/fa";

import { StyledLink } from "../../styles/StyledLink";

import Logo from "../Logo";

import {
  ContainerFooter,
  ContainerLogo,
  StyledFooter,
  LinkIconFooter,
  LinksGroups,
  LinksIconsGroup,
} from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <ContainerFooter>
        <ContainerLogo>
          <h2>
            <Logo variant="primary" />
          </h2>
          <p>Todos os direitos reservados © Habitum 2023</p>
        </ContainerLogo>
        <LinksGroups>
          <h3>Contato</h3>
          <a href="mailto:kenzinho@mail.com" rel="noreferrer">
            kenzinho@mail.com
          </a>
          <a href="tel:+5599999999999">+55 (99) 9 9999-9999</a>
        </LinksGroups>
        <LinksGroups>
          <h3>Sobre</h3>
          <a href="https://kenzie.com.br/" target="_blank" rel="noreferrer">
            A Kenzie Academy Brasil
          </a>
          <StyledLink to="/devs" variant="link-footer">
            Time de desenvolvedores
          </StyledLink>
          <StyledLink to="/project" variant="link-footer">
            O projeto
          </StyledLink>
        </LinksGroups>
        <LinksGroups>
          <h3>Dúvidas</h3>
          <StyledLink to="/faq" variant="link-footer">
            FAQ
          </StyledLink>
          <StyledLink to="/community" variant="link-footer">
            Comunidade
          </StyledLink>
        </LinksGroups>
        <LinksIconsGroup>
          <LinkIconFooter
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </LinkIconFooter>
          <LinkIconFooter
            href="https://github.com/Habitum/web"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </LinkIconFooter>
        </LinksIconsGroup>
      </ContainerFooter>
    </StyledFooter>
  );
};

export default Footer;
