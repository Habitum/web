import React from "react";

import { iInput } from "./types";

import { StyledInputDiv } from "./styles";

const Input = ({ type, label, name, placeholder, register }: iInput) => {
  return (
    <StyledInputDiv>
      {label && <label htmlFor={name}>{label}</label>}
      <input placeholder={placeholder} id={name} type={type} {...register} />
    </StyledInputDiv>
  );
};

export default Input;
