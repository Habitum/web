import { api } from "./api";

import { iHabits } from "../contexts/HabitsContext/types";

export const createHabit = async (body: iHabits) => {
  try {
    await api.post("/habits", body);

    return true;
  } catch (err) {
    console.error(err);
  }
};
