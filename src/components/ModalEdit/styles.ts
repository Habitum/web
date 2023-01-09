import styled from "styled-components";
import { ModalBox } from "../../styles/modal";
import { MdDelete } from "react-icons/md";

export const StyledModalEdit = styled(ModalBox)`
  max-width: 700px;
  height: 550px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: unset;
  align-items: unset;

  border-radius: 0.5rem;

  background-color: var(--color-white);

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
    flex-wrap: wrap;
    max-width: 43.75rem;
  }

  .divMain {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 2.5rem;
  }

  .divSelect {
    display: flex;
    flex-direction: column;
    margin-left: 12.5rem;
    margin-top: 2.1875rem;
    align-items: flex-end;
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
    padding: 10px 16px;
    font-weight: var(--text-weight-300);
    border: 1.6px solid var(--color-brand-200);
    border-radius: var(--radius);
    color: var(--color-brand-200);
    outline-color: var(--color-brand-100);
    margin-bottom: 1.25rem;
    width: 7.375rem;
  }

  .bottomModal {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 1.25rem;
    gap: 1.25rem;

    width: 43.75rem;
    height: 5rem;
    background: var(--color-grey-400);

    margin-top: 2.5rem;
  }

`;

export const IconDelete = styled(MdDelete)`
  color: var(--color-alert);
  width: 0.9838rem;
  height: 1.125rem;
  cursor: pointer;
`;