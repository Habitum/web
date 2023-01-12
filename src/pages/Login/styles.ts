import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.75rem;
  position: relative;
  min-height: 700px;

  .wave-container {
    width: 100%;
    height: 62%;
    background-color: var(--color-brand-200);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
