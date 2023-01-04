import { createContext, useState } from "react";
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

  return <HabitsContext.Provider value={{}}>{children}</HabitsContext.Provider>;
};
