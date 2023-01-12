import styled from "styled-components";

export const StyledRanking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 34.375rem;
  height: 25rem;
  overflow: auto;

  @media (min-width: 850px) {
    width: 50%;
    transform: translateX(-2.6875rem);
  }

  h2 {
    font-family: var(--font-family-montserrat);
    font-size: 1.875rem;
    font-weight: var(--text-weight-300);
    color: var(--color-grey-400);

    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 0.25rem;
      background-color: var(--color-brand-100);
      margin: 0.625rem auto;

      @media (min-width: 370px) {
        width: 126%;
        transform: translateX(-10%);
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 0.625rem;
    padding: 0.625rem;
    background-color: var(--color-white);
    width: 100%;
    border-radius: var(--radius);

    .LoadingRank {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 23rem;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.3125rem;
      width: 100%;
      font-size: 0.75rem;
      font-weight: var(--text-weight-200);
      color: var(--color-grey-100);

      p {
        flex-grow: 1;
      }

      div {
        display: flex;
        align-items: center;
        color: var(--color-brand-100);
      }
    }
  }
`;
