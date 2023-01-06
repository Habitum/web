import React from "react";

import { Container } from "./styles";

import { iLogoStyles, tLogo } from "./types";

const Logo = ({ variant }: iLogoStyles) => {
  const name: tLogo = "habitum";

  return <Container variant={variant}>{name}</Container>;
};

export default Logo;
