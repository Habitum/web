import styled from "styled-components";
import { ModalBox } from "../../styles/modal";

export const Modal = styled(ModalBox)`
  max-width: 100%;
  height: 100%;
  background: var(--color-white);
  border-radius: var(--radius);
  justify-content: flex-start;
  overflow: auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: 43.75rem;
    height: 34.375rem;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  padding: 1.25rem;
  background: var(--color-brand-100);
  text-align: center;

  h4 {
    margin: 0;
    font: var(--text-weight-200) var(--text-size-100) var(--font-family-inter);
    color: var(--color-white);
  }

  @media (min-width: 768px) {
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: start;
  }
`;

export const ModalForm = styled.form`
  width: 100%;

  .FormContainer {
    padding: 0 2.5rem;

    p {
      margin: 0.625rem;
      font: var(--text-weight-300) var(--text-size-500) var(--font-family-inter);
      color: var(--color-grey-200);
    }

    .FormError {
      color: var(--color-alert);
    }

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;

      p {
        width: 14.375rem;
      }

      .side-left,
      .side-right {
        width: 50%;
      }

      .side-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: end;
      }
    }
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  padding: 1.25rem 2.5rem;
  background: var(--color-grey-400);
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    width: 50%;
    border: none;
  }

  button:nth-child(1) {
    height: 2.5rem;
    font: var(--text-weight-200) var(--text-button-size-200) var(--font-family-inter);
    color: var(--color-grey-100);
  }

  @media (min-width: 768px) {
    border-radius: 0 0 0.5rem 0.5rem;
    gap: 1.25rem;
    position: absolute;
    bottom: 0;

    button {
      width: max-content;
    }
  }
`;
