import { StyledHabitCard } from "./style"

import { BsPencilFill } from "react-icons/bs"
import { HiFire } from "react-icons/hi"

export const HabitsCard = () => {


    return(
        <StyledHabitCard>
            <div>
                <p>Título do card</p>
                <p>
                  <i className="fire-icon"><HiFire/></i> Constância: <span></span>
                </p>
              </div>

              <div>
                <button type="button"><i><BsPencilFill/></i></button>
                  <input type="checkbox" name="check" id="check"/>
              </div>
        </StyledHabitCard>
    )
}