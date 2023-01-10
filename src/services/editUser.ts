import { iUserEdit } from "../contexts/HabitsContext/types";
import { iUser } from "../contexts/UserContext/types";
import { api } from "./api";

const token = localStorage.getItem("@TOKEN");
const userID = localStorage.getItem("@USER_ID");

export async function editUser(body: iUserEdit) {
  const response = await api.patch<iUser>("/users/" + userID, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
