import { iUser } from "../contexts/UserContext/types";

import { api } from "./api";

const token = localStorage.getItem("@TOKEN");
const userID = localStorage.getItem("@USER_ID");

export async function getUser() {
  const response = await api.get<iUser>("/users/" + userID + "?_embed=habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
