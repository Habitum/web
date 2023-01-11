import styled from "styled-components";


export const StyledSection = styled.section`
  width: 100%;
  max-width: 32.5rem;
  min-height: 80vh;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;
  background: var(--color-brand-200);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const StyledAsk = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  hr {
    background: var(--color-brand-100);
  }
`;

export const StyledQuestion = styled.h3`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  font-size: var(--text-size-300);
  font-weight: var(--text-weight-300);
  line-height: 1.8;
  color: var(--color-white);
  cursor: pointer;
  user-select: none;
`

export const StyledAnswer = styled.p`
  text-align: justify;
  text-align-last: left;
  font-size: var(--text-size-300);
  font-weight: var(--text-weight-400);
  color: var(--color-grey-300);
  animation: ShowAnswer .4s forwards;

  @keyframes ShowAnswer {
    from {
      opacity: 0;
      transform: translateY(-2.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`