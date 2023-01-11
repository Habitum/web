import { api } from "./api";

import { iHabits } from "../contexts/HabitsContext/types";


export const editHabit = async (id: number, data: iHabits) => {
  const token = localStorage.getItem("@TOKEN");

  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    await api.patch(`/habits/${id}`, data);

    

    return true;
  } catch (err) {
    console.error(err);
  }
};
