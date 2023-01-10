import { useContext } from "react";

import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import { ModalWrapper } from "../../styles/modal";
import Button from "../Button";

import { iDeleteModal } from "./types";

import { IconDeleteModal, StyledModalConfirmDelete } from "./styles";

const ModalDelete = ({ setOpen }: iDeleteModal) => {
  const { habitDelete } = useContext(HabitsContext);

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
            onClick={() => habitDelete}
          />
        </div>
      </StyledModalConfirmDelete>
    </ModalWrapper>
  );
};

export default ModalDelete;
