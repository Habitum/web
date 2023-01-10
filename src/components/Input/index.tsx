import React from "react";

import { iInput } from "./types";

import { StyledInput, StyledInputDiv } from "./styles";

const Input = ({ type, label, name, placeholder, register, variant }: iInput) => {
  return (
    <StyledInputDiv>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledInput placeholder={placeholder} type={type} name={name} {...register} variant={variant} label={label} />
    </StyledInputDiv>
  );
};

export default Input;
