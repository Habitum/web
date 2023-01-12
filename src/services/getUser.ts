import { api } from "./api";

const userID = localStorage.getItem("@USER_ID");
const token = localStorage.getItem("@TOKEN");

export async function getUser() {
  const response = await api.get("/users/" + userID + "?_embed=habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
