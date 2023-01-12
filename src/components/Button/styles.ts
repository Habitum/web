import { iButtonStyles } from "./types";

import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 7.25rem;
  height: 2.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 1.5rem;
  gap: 0.625rem;
  
  font-family: var(--font-family-inter);
  font-size: var(--text-button-size-200);
  font-weight: var(--text-weight-200);
  border-radius: var(--radius);
  border: none;

  cursor: pointer;
  transition: ease 0.3s;

  ${({ variant }: iButtonStyles) => {
    switch (variant) {
      default:
      case "primary":
        return css`
          background-color: var(--color-brand-100);
          color: var(--color-white);
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
      case "forms":
        return css`
          color: var(--color-white);
          background-color: var(--color-brand-100);
          width: 100%;
          height: 3.75rem;
          margin-top: 1rem;
          border: none;
          :hover {
            background-color: var(--color-brand-200);
          }
        `;
      case "forms-disabled":
        return css`
          color: var(--color-white);
          background-color: var(--color-brand-200);
          width: 100%;
          height: 3.75rem;
          margin-top: 1rem;
          border: none;
          pointer-events: none;
        `;
      case "cancel":
        return css`
          width: 5.625rem;
          height: 1.1875rem;
          font-family: var(--font-family-inter);
          font-style: normal;
          font-weight: var(--text-weight-200);
          font-size: 1rem;
          line-height: 1.1875rem;
          text-transform: uppercase;
          color: var(--color-grey-100);
          border: none;
          background: none;
        `;
      case "cancel-secondary":
        return css`
          color: var(--color-alert);
          width: 300px;
          height: 18px;
          border: none;
          background: none;
          `;
      case "icon":
        return css`
          border: none;
          background: transparent;
        `
    }
  }}
`;
