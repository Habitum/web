import styled from "styled-components";

export const ModalWrapper = styled.div`
  inset: 0;
  width: 100%;
  min-height: 100vh;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const ModalBox = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
