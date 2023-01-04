import { createContext } from "react";
import {
  iHabitsProviderProps,
  iHabitsProviderValue,
} from "./HabitsContextTypes";

export const HabitsContext = createContext({} as iHabitsProviderValue);

export const HabitsProvider = ({ children }: iHabitsProviderProps) => {



  return ( <HabitsContext.Provider value={{}}>{children}</HabitsContext.Provider>);
};
