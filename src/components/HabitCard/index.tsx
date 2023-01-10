import { StyledHabitCard } from "./style"

import { BsPencilFill } from "react-icons/bs"
import { HiFire } from "react-icons/hi"
import { RiHistoryFill } from "react-icons/ri";

export const HabitsCard = () => {

    return(
          <StyledHabitCard variant="done">
            <div className="card-info">
                <p><span className="checksquare"></span>Título do card</p>
                <p className="constancy">
                  <i><HiFire/></i> Constância: <span>{""} dia</span>
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