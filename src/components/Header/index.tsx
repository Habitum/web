import React from "react";

import Logo from "../Logo";

import { iHeaderProps } from "./types";

import { Container, Nav, StyledHeader } from "./styles";

const Header = ({ children }: iHeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        <h1>
          <Logo variant="primary" />
        </h1>
        <Nav>{children}</Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
