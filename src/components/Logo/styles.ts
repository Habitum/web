import { iLogoStyles } from "./types";

import styled, { css } from "styled-components";

export const Container = styled.p`
  font-family: var(--font-family-racing-sans-one);
  font-size: var(--text-logo-size);
  font-weight: var(--text-weight-400);
  line-height: 1;
  z-index: 1;

  ${({ variant }: iLogoStyles) => {
    switch (variant) {
      default:
      case "primary":
        return css`
          color: var(--color-brand-100);
        `;
      case "secondary":
        return css`
          color: var(--color-grey-400);

          @media (width < 750px) {
            display: none;
          }
        `;
      case "special":
        return css`
          color: var(--color-brand-100);
          display: none;

          @media (width < 750px) {
            display: block;
          }
        `;
    }
  }}
`;
