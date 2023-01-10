import React from "react";
import { StyledLink } from "../../../styles/StyledLink";
import { StyledFormHeader } from "./styles";
import { iFormHeaderProps } from "./types";

const FormHeader = ({ name, linkname, linkto } : iFormHeaderProps) => {
  return (
    <>
      <StyledFormHeader>
        <h3>{name}</h3>
        <StyledLink to={linkto} variant="default">
          {linkname}
        </StyledLink>
      </StyledFormHeader>
    </>
  );
};

export default FormHeader;
