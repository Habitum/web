import { api } from "./api";

export const deleteHabit = async (id: number) => {
  const token = localStorage.getItem("@TOKEN");

  const userId = localStorage.getItem("@USER_ID");

  const body = {
    userId: userId,
  };

  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    await api.delete(`/habits/${id}`, { data: body });

    return true;
  } catch (err) {
    console.error(err);
  }
};
