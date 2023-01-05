import { createContext, useContext, useEffect, useState } from "react";

import { addUserBits } from "../../services/addUserBits";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import {
  iHabits,
  iHabitsProviderProps,
  iHabitsProviderValue,
} from "./HabitsContextTypes";

export const HabitsContext = createContext({} as iHabitsProviderValue);

export const HabitsProvider = ({ children }: iHabitsProviderProps) => {

  const { user,setUser } = useContext(UserContext);
  const [star, setStar] = useState(0);

  const [bit, setBit] = useState(0);

  const [habit, setHabit] = useState([] as iHabits[]);

  useEffect(()=>  {
    (async () => {
      if (!user?.bits) {
        const userId = localStorage.getItem("@USER_ID");
    
        const updateUser = await addUserBits(Number(userId));
        setUser(updateUser);

      }
    })();
    
      
  },[user,setUser])

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
