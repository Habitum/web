import React from "react";

import { StyledFormHeader } from "../../../styles/forms";

import { iFormHeaderProps } from "./types";

import { StyledLink } from "../../../styles/StyledLink";

const FormHeader = ({ name, linkname, linkto }: iFormHeaderProps) => {
  return (
    <StyledFormHeader>
      <h3>{name}</h3>
      <StyledLink to={linkto} variant="default">
        {linkname}
      </StyledLink>
    </StyledFormHeader>
  );
};

export default FormHeader;
