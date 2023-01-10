import { iHabitCardProps } from "./types";

import { StyledHabitCard } from "./style"

import { BsPencilFill } from "react-icons/bs"
import { HiFire } from "react-icons/hi"
import { RiHistoryFill } from "react-icons/ri";
import { useContext } from "react";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

export const HabitsCard = ({id} : iHabitCardProps) => {
  const { habit } = useContext(HabitsContext);

  const goal = habit.find(currentHabit => currentHabit.id === id);

  if(goal == null){
    return null;
  }

  return(
          <StyledHabitCard variant="to-do" key={goal.id}>
            <div className="card-info">
                <p><span className="checksquare"></span>{goal.title}</p>
                <p className="constancy">
                  <i><HiFire/></i> Constância: <span>{} dia</span>
                </p>
            </div>

              <div className="card-edit-box">
                <button type="button"><i><BsPencilFill/></i></button>
                
                <div className="checkbox-container">
                <input checked type="checkbox" name="check" id="check" />
                  <span className="checkmark"></span>
                </div>
                
                <i className="history-icon"><RiHistoryFill/></i>
              </div>
          </StyledHabitCard>
    )
}