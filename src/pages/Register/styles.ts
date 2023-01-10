import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10%;
  position: relative;
  min-height: 750px;

  .wave-container {
    width: 100%;
    height: 62%;
    background-color: var(--color-brand-200);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (width < 750px) {
    flex-direction: column;
    gap: 20px;
    min-height: 950px;
  }
`;
