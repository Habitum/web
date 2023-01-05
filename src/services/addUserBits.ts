import { iUserUpdate } from "../contexts/HabitsContext/types";

import { api } from "./api";

export async function addUserBits(id: number) {
    const token = localStorage.getItem("@TOKEN");
  const body = {
    bits: 0,
    stars: 0,
  };
  try {
    const { data } = await api.patch<iUserUpdate>(`/users/${id}`, body,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    console.log(data)
    return data;
  } catch (err) {
    console.error(err);
  }
}
