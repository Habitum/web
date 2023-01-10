import React from "react";

import { iInput } from "./types";

import { StyledInput, StyledInputDiv, StyledTextArea } from "./styles";

const Input = ({ type, label, name, placeholder, register, variant, rows, cols }: iInput) => {
  if (type !== "textarea") {
    return (
      <StyledInputDiv>
        {label && <label htmlFor={name}>{label}</label>}
        <StyledInput placeholder={placeholder} type={type} name={name} {...register} variant={variant} />
      </StyledInputDiv>
    );
  } else {
    return (
      <StyledInputDiv>
        {label && <label htmlFor={name}>{label}</label>}
        <StyledTextArea placeholder={placeholder} rows={rows} cols={cols} {...register} />
      </StyledInputDiv>
    );
  }
};

export default Input;
