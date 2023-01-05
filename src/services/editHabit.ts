import { iHabits } from "../contexts/HabitsContext/types";
import { api } from "./api";

export const editHabit = async (id: number, data: iHabits) => {

    const token = localStorage.getItem("@TOKEN");

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      await api.put(`/habits/${id}`, data);

      return true
    } catch (err) {
      console.error(err)
    }
  };