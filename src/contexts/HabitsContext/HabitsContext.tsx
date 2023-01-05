import { createContext, useState } from "react";
import { api } from "../../services/api";
import {
  iHabits,
  iHabitsProviderProps,
  iHabitsProviderValue,
} from "./HabitsContextTypes";

export const HabitsContext = createContext({} as iHabitsProviderValue);

export const HabitsProvider = ({ children }: iHabitsProviderProps) => {
  const [star, setStar] = useState(0);

  const [bit, setBit] = useState(0);

  const [habit, setHabit] = useState([] as iHabits[]);

  const CreateHabit = async (body: iHabits) => {
    try {
      await api.post("/habits", body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HabitsContext.Provider
      value={{
        star,
        setStar,
        bit,
        setBit,
        habit,
        setHabit,
        CreateHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
