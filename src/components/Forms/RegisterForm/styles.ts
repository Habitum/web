import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 23.4375rem;
  max-width: 90%;
  gap: .25rem;
  position: relative;
  z-index: 99;
  background-color: var(--color-grey-400);
  padding: 2.5rem 1.25rem;
  border-radius: var(--radius);

  .FormError {
    font-size: var(--text-size-500);
    color: var(--color-alert);
  }
`;
