import { useContext, useState } from "react";

import { BsPencilFill, BsCheckSquareFill } from "react-icons/bs"
import { HiFire } from "react-icons/hi"
import { RiHistoryFill } from "react-icons/ri";

import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import { iHabitCardProps } from "./types";

import { StyledHabitCard } from "./style"
import { ModalEditHabit } from "../ModalEdit";

export const HabitsCard = ({id} : iHabitCardProps) => {
  const [editModal, setEditModal] = useState(false)
  const [checkHabit, setCheckHabit] = useState(false)

  const { habit } = useContext(HabitsContext);

  const goal = habit.find(currentHabit => currentHabit.id === id);
  
  const finishHabit = () => {
    setCheckHabit(!checkHabit);
  }

  if(goal == null){
    return null;
  }

  return(
    <StyledHabitCard variant={checkHabit? "done" : "to-do"} key={goal.id}>
      {editModal && <ModalEditHabit setModal={setEditModal}/>}
      
      <div className="card-info">
        <p><span className="checksquare"></span>{goal.title}</p>
        <p className="constancy">
          <i><HiFire/></i> Sequência: <span>{goal.constancy}</span>
        </p>
      </div>

      <div className="card-edit-box">
        <button type="button" onClick={() => setEditModal(true)} className="edit-icon"><i><BsPencilFill/></i></button>        
        <div className="checkbox-container">
          <button type="button" onClick={finishHabit} className="check-icon"> <i><BsCheckSquareFill/></i></button>
        </div>  
          <button type="button" onClick={finishHabit} className="history-icon"><i><RiHistoryFill/></i></button>
      </div>
    </StyledHabitCard>
  )
};
