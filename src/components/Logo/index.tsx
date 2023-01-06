import React from "react";

import { Container } from "./styles";

import { tLogo } from "./types";

const Logo = () => {
  const name: tLogo = "habitum";

  return <Container>{name}</Container>;
};

export default Logo;
