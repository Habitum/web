import React from "react";

import { iInput } from "./types";

import { StyledInputDiv } from "./styles";

const Input = ({ type, label, name, placeholder, register }: iInput) => {
  return (
    <StyledInputDiv>
      {label && (
        <label className="FormLabel" htmlFor={name}>
          {label}
        </label>
      )}
      <input className="FormInput" placeholder={placeholder} id={name} type={type} {...register} />
    </StyledInputDiv>
  );
};

export default Input;
