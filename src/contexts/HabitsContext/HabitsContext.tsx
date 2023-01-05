import { createContext, useState,useContext, useEffect,} from "react";

import { toast } from "react-toastify";

import { iHabits, iHabitsProviderProps, iHabitsProviderValue } from "./types";

import { deleteHabit } from "../../services/deleteHabit";
import { createHabit } from "../../services/createHabit";
import { editHabit } from "../../services/editHabit";


import { UserContext } from "../UserContext/UserContext";


export const HabitsContext = createContext({} as iHabitsProviderValue);

export const HabitsProvider = ({ children }: iHabitsProviderProps) => {

  const { user,setUser } = useContext(UserContext);
  const [star, setStar] = useState(0);

  const [bit, setBit] = useState(0);

  const [habit, setHabit] = useState([] as iHabits[]);

  useEffect(()=>  {
  
  },[user,setUser]);

  const habitCreate = async (body: iHabits) => {
    const response = await createHabit(body);

    if (response) {
      toast.success("Hábito criado com sucesso!");
    } else {
      toast.error("Algo deu errado");
    }
  };

  const habitEdit = async (id: number, data: iHabits) => {
    const response = await editHabit(id, data);

    if (response) {
      toast.success("Hábito editado com sucesso!");
    } else {
      toast.error("Algo deu errado");
    }
  };

  const habitDelete = async (id: number) => {
    const response = await deleteHabit(id);

    if (response) {
      toast.success("Hábito deletado com sucesso!");
    } else {
      toast.error("Algo deu errado");
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
        habitCreate,
        habitEdit,
        habitDelete,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
