import { api } from "./api";

import { iHabitData } from "../contexts/HabitsContext/types";

export const createHabit = async (body: iHabitData) => {
  try {
    await api.post("/habits", body, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("@USER_ID")}`
      }
    });

    return true;
  } catch (err) {
    console.error(err);
  }
};
