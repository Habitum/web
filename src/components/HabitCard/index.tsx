import { useContext, useState } from "react";

import { BsPencilFill, BsCheckSquareFill } from "react-icons/bs"
import { HiFire } from "react-icons/hi"
import { RiHistoryFill } from "react-icons/ri";

import { iHabitCardProps } from "./types";

import { StyledHabitCard } from "./style"
import { ModalEditHabit } from "../ModalEdit";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const HabitsCard = ({id} : iHabitCardProps) => {
  const [editModal, setEditModal] = useState(false)
  const [checkHabit, setCheckHabit] = useState(false)

  const { setUser, user } = useContext(UserContext)

  const goal = user?.habits.find(currentHabit => currentHabit.id === id);
  
  if(goal == null){
    return null;
  }

  const addBits = () => {    
    setCheckHabit(!checkHabit);
      if(user === null){
        return
      };
    setUser({...user, bits: user.bits +5 });

  };

  const decreaseBits = () => {
    setCheckHabit(!checkHabit);
    if(user === null){
      return
    };
    setUser({...user, bits: user.bits -5 });
  };

  return(
    <StyledHabitCard variant={checkHabit? "done" : "to-do"} key={goal.id}>
      {editModal && <ModalEditHabit id={id} setModal={setEditModal}/>}
      
      <div className="card-info">
        <p><span className="checksquare"></span>{goal.title}</p>
        <p className="constancy">
          <i><HiFire/></i> Sequência:<span>{goal.constancy}</span>
        </p>
      </div>

      <div className="card-edit-box">
        <button type="button" onClick={() => setEditModal(true)} className="edit-icon"><i><BsPencilFill/></i></button>        
        <div className="checkbox-container">
          <button type="button" onClick={addBits} className="check-icon"> <i><BsCheckSquareFill/></i></button>
        </div>  
          <button type="button" onClick={decreaseBits} className="history-icon"><i><RiHistoryFill/></i></button>
      </div>
    </StyledHabitCard>
  )
};
