import { useContext } from "react";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";
import { ModalWrapper } from "../../styles/modal";
import Button from "../Button";
import { IconDelete } from "../ModalEdit/styles";

import { StyledModalConfirmDelete } from "./styles";

const ModalConfirmDelete = ({setOpen}) => {

  const { habitDelete } = useContext(HabitsContext);

  return ( 
    <ModalWrapper>
        <StyledModalConfirmDelete>
           <IconDelete/>
           <p>Você tem certeza em excluir este hábito? Lembre-se que esta ação não poderá ser desfeita.</p>
            <Button name='Não' onClick={setOpen(false)}/>
            <Button name='Sim, Eu quero excluir' onClick={habitDelete}/>
        </StyledModalConfirmDelete>
    </ModalWrapper>
  )
}

export default ModalConfirmDelete