import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 40vh;
  padding: 2.5rem;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font: var(--text-weight-400) var(--text-logo-size) var(--font-family-racing-sans-one);
    color: var(--color-brand-100);
  }

  h2 {
    font: var(--text-weight-200) var(--text-title-size-200) var(--font-family-inter);
    color: var(--color-brand-100);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--text-title-size-100);
    }
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  padding: 5rem 1.25rem;
  background: var(--color-brand-100);
  position: relative;
  `;

export const StyledSection = styled.section`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2.5rem;
`;

export const StyledDevCard = styled.div`
  width: 100%;
  max-width: 21.875rem;
  padding: 2rem 1.25rem;
  background: var(--color-brand-200);
  border-radius: var(--radius);
  box-shadow: -.5rem 1rem 1.5rem rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 50%;
    border-radius: .5rem .5rem 50% 50%;
    border: 0.125rem solid var(--color-brand-100);
  }

  h3 {
    text-align: center;
    font: var(--text-weight-200) var(--text-size-100) var(--font-family-montserrat);
    color: var(--color-grey-400);
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }
`;
