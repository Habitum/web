import { api } from "./api";

export async function getUser() {
  const userID = localStorage.getItem("@USER_ID");
  const token = localStorage.getItem("@TOKEN");
  const response = await api.get("/users/" + userID + "?_embed=habits", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
