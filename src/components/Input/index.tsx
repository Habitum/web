import React from "react";

import { iInput } from "./types";

import { StyledInput, StyledInputDiv, StyledTextArea } from "./styles";

const Input = ({ type, label, name, placeholder, register, variant }: iInput) => {
  if (type !== "textarea") {
    return (
      <StyledInputDiv>
        {label && <label htmlFor={name}>{label}</label>}
        <StyledInput name={name} id={name} placeholder={placeholder} type={type} {...register} variant={variant} autoComplete="off" />
      </StyledInputDiv>
    );
  } else {
    return (
      <StyledInputDiv>
        {label && <label htmlFor={name}>{label}</label>}
        <StyledTextArea name={name} id={name} placeholder={placeholder} {...register} />
      </StyledInputDiv>
    );
  }
};

export default Input;
