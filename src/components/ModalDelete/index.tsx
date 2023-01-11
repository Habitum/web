import { useContext } from "react";

import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import Button from "../Button";
import { ModalWrapper } from "../../styles/modal";

import { iDeleteModal } from "./types";

import { IconDeleteModal, StyledModalConfirmDelete } from "./styles";

const ModalDelete = ({ setOpen, id }: iDeleteModal) => {
  const { habitDelete } = useContext(HabitsContext);

  const deleteInfo = (id: number) => {
    const userID = localStorage.getItem("@USER_ID");

    const data = {
      userId: Number(userID),
    };

    habitDelete(id, data);
  };

  return (
    <ModalWrapper>
      <StyledModalConfirmDelete>
        <div className="divTop">
          <IconDeleteModal />
          <p>
            Você tem certeza em excluir este hábito? Lembre-se que esta ação não
            poderá ser desfeita.
          </p>
        </div>
        <div className="divButton">
          <Button name="Não" variant="cancel" onClick={() => setOpen(false)} />
          <Button
            name="Sim, Eu quero excluir"
            variant="cancel-secondary"
            onClick={() => deleteInfo(id)}
          />
        </div>
      </StyledModalConfirmDelete>
    </ModalWrapper>
  );
};

export default ModalDelete;
