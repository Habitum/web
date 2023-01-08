import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 192px;

  @media (width < 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;
