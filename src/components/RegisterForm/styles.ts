import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 375px;
  max-width: 90%;
  gap: 4px;
  position: relative;
  z-index: 99;
  background-color: var(--color-grey-400);
  padding: 40px 20px;
  border-radius: var(--radius);

  .FormError {
    font-size: var(--text-size-500);
    color: var(--color-alert);
  }
`;
