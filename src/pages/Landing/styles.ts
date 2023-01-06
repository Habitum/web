import styled from "styled-components";
import { DefaultContainer } from "../../styles/container";

export const StyledHero = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10.5rem;

  @media (min-width: 510px) {
    margin-top: 8.25rem;
  }

  img {
    display: none;

    @media (min-width: 700px) {
      width: 50%;
      max-width: 29.625rem;
      display: block;
    }
  }

  h2 {
    color: var(--color-brand-200);
    font-size: 2.875rem;
    text-align: center;
    font-weight: var(--text-weight-200);

    strong {
      color: var(--color-brand-100);
    }

    @media (min-width: 700px) {
      font-size: 3.5rem;
      max-width: 31.25rem;
    }
  }
`;
