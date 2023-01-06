import styled from "styled-components";

export const StyledSpinner = styled.img`
  animation: spinner 1s infinite linear;
  height: 1.5rem;

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
