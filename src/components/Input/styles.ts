import { iInput } from "./types";

import styled, { css } from "styled-components";

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  padding-top: 1rem;

  label {
    font-weight: var(--text-weight-200);
    color: var(--color-grey-100);
    font-size: var(--text-size-400);
  }
`;

export const StyledInput = styled.input<iInput>`
  padding: 0.625rem 1rem;
  font-weight: var(--text-weight-300);
  border: 0.1rem solid var(--color-brand-200);
  border-radius: var(--radius);
  color: var(--color-brand-200);
  outline-color: var(--color-brand-100);

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          :focus {
            border: 1.5px solid var(--color-brand-100);
          }
        `;
      case "secondary":
        return css`
          border: 1.5px solid var(--color-brand-200);
          width: 18.75rem;
          height: 9.375rem;
          :focus {
            border: 0.1rem solid var(--color-brand-100);
          }
        `;
    }
  }}
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  border: 0.0938rem solid var(--color-brand-200);
  border-radius: var(--radius);
  width: 100%;
  height: 9.375rem;
  padding: 0.625rem;
  outline-color: var(--color-brand-100);
  :focus {
    border: 1.6px solid var(--color-brand-100);
  }
`;
