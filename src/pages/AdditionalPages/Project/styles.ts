import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  padding: 2.5rem 1.25rem;
  background: linear-gradient(180deg, var(--color-grey-100), var(--color-brand-200)) ;
`;

export const StyledContainer = styled.section`
  width: 100%;
  max-width: 43.75rem;
  margin: 0 auto;
  background: var(--color-brand-200);
  border-radius: var(--radius);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 1.25rem 2.5rem;
    font: var(--text-weight-400) var(--text-logo-size) var(--font-family-racing-sans-one);
    color: var(--color-white);
  }

  > a {
    margin: 1.25rem;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  padding: 1.25rem;
  background: var(--color-white);
  border-radius: 0 0 .5rem .5rem;
  border-bottom: .75rem solid var(--color-brand-200);
  display: flex;
  flex-direction: column;
  gap: 2.15rem;

  p {
    text-align: justify;
    font: var(--text-weight-300) var(--text-size-300) /1.8 var(--font-family-inter);
    color: var(--color-grey-100);

    a, strong {
      font-weight: var(--text-weight-200);
      color: var(--color-brand-100);
    }
    
    a {
      text-decoration-style: dotted;
    }
  }

  hr {
    background: var(--color-brand-100);
  }
`;
