import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { iStyledLinkProps } from "./types";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: var(--text-size-300);
  font-weight: var(--text-weight-200);
  text-align: center;
  transition: var(--transition);

  ${({ variant }: iStyledLinkProps) => {
    switch (variant) {
      default:
      case "default":
        return css`
          color: var(--color-brand-100);
          border-bottom: 0.0938rem solid transparent;

          :hover {
            color: var(--color-brand-200);
            border-bottom: 0.0938rem solid var(--color-brand-200);
          }
        `;

      case "icon-text":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          color: var(--color-grey-100);
          width: max-content;
          text-transform: uppercase;
          border-bottom: 0.0938rem solid transparent;

          svg {
            color: var(--color-brand-100);
            transition: var(--transition);
          }

          :hover {
            color: var(--color-brand-200);
            border-bottom: 0.0938rem solid var(--color-brand-200);

            svg {
              color: var(--color-brand-200);
            }
          }
        `;

      case "button":
        return css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          color: var(--color-brand-100);
          height: 2.5rem;
          padding: 0 1.5rem;
          border: 0.0938rem solid var(--color-brand-100);
          border-radius: var(--radius);

          :hover {
            background-color: var(--color-brand-100);
            color: var(--color-white);
          }
        `;

      case "link-footer":
        return css`
          text-decoration: none;
          color: var(--color-grey-300);
          font-weight: var(--text-weight-500);
          text-align: left;

          :hover {
            color: var(--color-brand-100);
          }
        `;
    }
  }}
`;
