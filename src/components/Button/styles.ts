import { iButtonStyles } from "./types";

import styled, { css } from "styled-components";

export const StyledButton = styled.button`

  border-radius: var(--radius);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 1.5rem;
  gap: 0.625rem;
  width: 7.25rem;
  height: 2.5rem;
  font-family: var(--font-family-inter);
  font-size: var(--text-button-size-200);
  font-weight: var(--text-weight-200);
  cursor: pointer;

  ${({ variant }: iButtonStyles) => {
    switch (variant) {
      default:
      case "primary":
        return css`
          color: var(--color-white);
          background-color: var(--color-brand-100);
          :hover {
            background-color: var(--color-brand-200);
          }
        `;
      case "outline":
        return css`
          border: 0.0938rem solid var(--color-brand-100);
          background-color: var(--color-white);
          color: var(--color-brand-100);
          :hover {
            background-color: var(--color-brand-100);
            color: var(--color-white);
          }
        `;
    }
  }}
`;
