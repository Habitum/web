import { iHabits } from "../contexts/HabitsContext/types";

import { api } from "./api";

export const createHabit = async (body: iHabits) => {
    try {
      await api.post("/habits", body);

      return true

    } catch (err) {
    console.error(err)
    }
  };