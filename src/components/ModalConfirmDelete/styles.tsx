import styled from "styled-components";
import { ModalBox } from "../../styles/modal";
import { MdDelete } from "react-icons/md";


export const StyledModalConfirmDelete = styled(ModalBox)`
  width: 350px;
  height: 180px;

  background: #eeeeee;
  border-radius: 8px;

  padding: 20px;

  .divTop{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .divButton{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    width: 100%;
  }
`;

export const IconDeleteModal = styled(MdDelete)`
  color: var(--color-alert);
  width: 20px;
  height: 22px;
  cursor: pointer;
  margin-bottom: 10px;
`;
