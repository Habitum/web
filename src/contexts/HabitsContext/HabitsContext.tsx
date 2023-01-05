import { createContext, useState } from "react";

import { toast } from "react-toastify";

import { iHabits, iHabitsProviderProps, iHabitsProviderValue } from "./types";

import { deleteHabit } from "../../services/deleteHabit";
import { createHabit } from "../../services/createHabit";
import { editHabit } from "../../services/editHabit";

export const HabitsContext = createContext({} as iHabitsProviderValue);

export const HabitsProvider = ({ children }: iHabitsProviderProps) => {
  const [star, setStar] = useState(0);

  const [bit, setBit] = useState(0);

  const [habit, setHabit] = useState([] as iHabits[]);

 
  return (
    <HabitsContext.Provider
      value={{
        star,
        setStar,
        bit,
        setBit,
        habit,
        setHabit,
        habitCreate,
        habitEdit,
        habitDelete,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
