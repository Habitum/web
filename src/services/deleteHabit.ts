import { iDeleteHabit } from "../contexts/HabitsContext/types";
import { api } from "./api";

export const deleteHabit = async (id: number, data: iDeleteHabit) => {
  const token = localStorage.getItem("@TOKEN");

  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    await api.delete(`/habits/${id}`, { data: data });

    return true;
  } catch (err) {
    console.error(err);
  }
};
