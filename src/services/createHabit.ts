import { api } from "./api";

import { iHabitData, iHabitResponse } from "../contexts/HabitsContext/types";

export const createHabit = async (body: iHabitData) => {
  try {
    const response = await api.post<iHabitResponse>("/habits", body, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
      }
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
