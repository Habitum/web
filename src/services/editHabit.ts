import { api } from "./api";

import { iHabits } from "../contexts/HabitsContext/types";

export const editHabit = async (id: number, data: iHabits) => {
  const token = localStorage.getItem("@TOKEN");

  console.log(data);

  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await api.patch(`/habits/${id}`, data);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
