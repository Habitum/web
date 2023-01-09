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
          margin-top: 1rem;
          :focus {
            border: 1.5px solid var(--color-brand-100);
          }
        `;
      case "secondary":
        return css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border: 0.1rem solid var(--color-brand-200);
          width: 300px;
          height: 150px;
          gap: 0.625rem;
          :focus {
            border: 0.1rem solid var(--color-brand-100);
          }
        `;
    }
  }}
`;
