import styled from "styled-components";

import { ModalBox } from "../../styles/modal";
import { MdDelete } from "react-icons/md";

export const StyledModalEdit = styled(ModalBox)`
  border-radius: 0.5rem;
  background-color: var(--color-white);
  overflow: hidden;

  .headerModal {
    background: var(--color-brand-100);
    border-radius: 0.5rem 0.5rem 0px 0px;

    padding: 1.25rem;
    gap: 0.625rem;

    width: 43.75rem;
    height: 4.3125rem;
    color: var(--color-grey-400);

    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--text-weight-200);
    font-size: 1.5rem;
    line-height: 1.8125rem;
  }

  .divIconDelete {
    display: flex;
    gap: 0.75rem;
    flex-wrap: nowrap;
  }

  .divIconDelete > p {
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--text-weight-300);
    font-size: 1rem;
    line-height: 1.1875rem;
    color: var(--color-alert);
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .formContent {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 2.5rem 1.25rem 2.5rem;
  }

  .divSelect {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1rem;
  }

  .labelSelect {
    margin-left: 3.125rem;
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--text-weight-200);
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: var(--color-grey-100);
    margin-bottom: 0.5rem;
  }

  select {
    padding: 0.625rem 1rem;
    font-weight: var(--text-weight-300);
    border: 0.1rem solid var(--color-brand-200);
    border-radius: var(--radius);
    color: var(--color-brand-200);
    outline-color: var(--color-brand-100);
    margin-bottom: 1.25rem;
    width: 7.375rem;
  }

  .FormError {
    font-size: var(--text-size-500);
    color: var(--color-alert);
  }

  .bottomModal {
    padding: 1.25rem;
    background: var(--color-grey-400);
  }

  .divButton {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.625rem;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    max-width: 23.125rem;

    .headerModal {
      display: flex;
      justify-content: center;
      max-width: 23.125rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow: hidden;
    }

    .formContent {
      display: flex;
      flex-direction: column;
      padding: 0rem 2.5rem;
    }

    .divSelect {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0.625rem;
      width: 100%;
    }

    .divIconDelete {
      align-self: center;
    }

    .labelSelect {
      margin: 0rem 0rem 0.625rem 0rem;
    }

    .divButton {
      justify-content: center;
      gap: 2.25rem;
    }

    .bottomModal {
      align-items: center;
    }
  }
`;

export const IconDelete = styled(MdDelete)`
  color: var(--color-alert);
  width: 0.9838rem;
  height: 1.125rem;
  cursor: pointer;
`;
