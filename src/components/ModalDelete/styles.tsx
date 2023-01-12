import styled from "styled-components";
import { ModalBox } from "../../styles/modal";
import { MdDelete } from "react-icons/md";

export const StyledModalConfirmDelete = styled(ModalBox)`
  width: 21.875rem;
  height: 11.25rem;

  background: #eeeeee;
  border-radius: 0.5rem;

  padding: 1.25rem;

  .divTop {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .divButton {
    display: flex;
    justify-content: space-between;
    margin-top: 0.9375rem;
    width: 100%;
  }
  .Warning {
    color: #000000;
  }
`;

export const IconDeleteModal = styled(MdDelete)`
  color: var(--color-alert);
  width: 1.25rem;
  height: 1.375rem;
  cursor: pointer;
  margin-bottom: 0.625rem;
`;
