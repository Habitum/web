import styled from "styled-components";

import { FaUserEdit } from "react-icons/fa";

import { ModalBox } from "../../styles/modal";

export const ModalBaseStyled = styled(ModalBox)`
  background-color: white;
  padding-top: 1.5625rem;
  max-width: 100%;
  height: 100%;
  border-radius: 1rem;

  @media (min-width: 43.75rem) {
    padding-top: 1.5625rem;
    max-width: 25rem;
    height: 36.125rem;
  }
  form {
    width: 100%;
    margin-top: 5.625rem;
    @media (min-width: 43.75rem) {
      margin-top: 0rem;
    }
    label {
      margin: 0 auto;
      width: 60%;
      @media (min-width: 43.75rem) {
        width: 80%;
      }
    }
    input {
      margin: 0 auto;
      width: 60%;
      margin-bottom: 2.5rem;
      @media (min-width: 43.75rem) {
        margin-bottom: 1.25rem;
        width: 80%;
      }
    }
    .FormError {
      font-size: var(--text-size-500);
      color: var(--color-alert);
      width: 60%;
      margin: 0 auto;
      @media (min-width: 43.75rem) {
        width: 80%;
      }
    }
  }

  .button-div {
    width: 100%;
    height: 140px;
    margin-top: 6.5625rem;
    padding: 2.6875rem;
    background-color: var(--color-grey-400);
    display: flex;
    justify-content: center;
    gap: 2.1875rem;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

    @media (min-width: 43.75rem) {
      height: 6.25rem;
      margin-top: 18px;
      padding: 1.5rem;
    }
    button:first-child {
      background-color: transparent;
      font-size: var(--text-button-size-100);
      font-weight: var(--text-weight-200);
      margin-bottom: 0.5625rem;
      border: none;
      :hover{
        text-decoration: underline;
      }
    }
  }
`;

export const EditIcon = styled(FaUserEdit)`
  background-color: var(--color-brand-200);
  color: var(--color-grey-300);
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  padding: 0.3125rem;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

export const EditUser = styled.div`
  margin: 0rem auto;
  width: 11.25rem;
  border-bottom: 0.125rem solid var(--color-brand-200);
  padding-bottom: 1.5625rem;
  margin-top: 1.5625rem;
  @media (min-width: 43.75rem) {
    margin-top: 0rem;
  }

  div:first-child {
    position: relative;
    width: 6.25rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .profile-img {
      background-color: var(--color-grey-300);
      border-radius: 100%;
      width: 9.375rem;
    }
  }
`;

export const SelectPic = styled.div`
  position: absolute;
  background-color: var(--color-brand-200);
  width: 16.25rem;
  height: 9.375rem;
  left: 50%;
  transform: translateX(-50%);
  bottom: -9.25rem;
  z-index: 3;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
  padding: 0.5rem;
  overflow: auto;
  @media (min-width: 43.75rem) {
    left: 4.6875rem;
    bottom: -9.25rem;
    transform: translateX(0);
  }

  img {
    background-color: var(--color-grey-300);
    border-radius: 100%;
    width: 3.125rem;
    height: 3.125rem;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      transform: scale(1.05);
    }
  }
`;
