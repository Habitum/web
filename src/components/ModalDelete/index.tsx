import { useContext } from "react";

import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import Button from "../Button";
import { ModalWrapper } from "../../styles/modal";

import { iDeleteModal } from "./types";

import { IconDeleteModal, StyledModalConfirmDelete } from "./styles";
import { getUser } from "../../services/getUser";
import { UserContext } from "../../contexts/UserContext/UserContext";

const ModalDelete = ({ setOpen, id }: iDeleteModal) => {

  const { setUser } = useContext(UserContext);
  const { habitDelete } = useContext(HabitsContext);

  const deleteInfo = async (id: number) => {
    const userID = localStorage.getItem("@USER_ID");

    const data = {
      userId: Number(userID),
    };

    habitDelete(id, data);

    const response = await getUser();
    setUser(response);

    setOpen(false)
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
