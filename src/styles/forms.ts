import styled from "styled-components";

export const StyledFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--text-title-size-300);
  color: var(--color-brand-200);
  font-weight: var(--text-weight-200);
  padding-bottom: 1.25rem;
  margin-top: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 23.4375rem;
  max-width: 90%;
  gap: 0.25rem;
  position: relative;
  z-index: 99;
  background-color: var(--color-grey-400);
  padding: 2.5rem 1.25rem;
  border-radius: var(--radius);

  .FormError {
    font-size: var(--text-size-500);
    color: var(--color-alert);
  }

  .FormQuestion {
    font-size: var(--text-size-400);
    color: var(--color-grey-200);
    font-weight: var(--text-weight-200);
    align-self: center;
    padding: 1.25rem 0rem;
    margin-top: 1rem;
  }
`;
