import styled from "styled-components";
import { DefaultContainer } from "../../styles/container";

export const StyledHero = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10.5rem;
  padding: 0 1.25rem;
  padding-bottom: 1.5rem;

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

export const StyledSectionRanking = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--color-brand-200);
  padding: 8rem 0;
`;

export const StyledContainer = styled(DefaultContainer)`
  padding: 0 1.25rem;
`;

export const StyledDescription = styled.div`
  font-size: var(--text-size-200);
  font-weight: var(--text-weight-200);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  max-width: 31.25rem;

  @media (min-width: 700px) {
    gap: 2.375rem;
  }
`;

export const Teste = styled.div`
  width: 100px;
  height: 500px;
  background-color: #fff;
`;
