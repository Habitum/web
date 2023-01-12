import { iUser } from "../contexts/UserContext/types";

import { api } from "./api";

import { loginUser } from "./loginUser";

export async function getUsers() {
  const { accessToken } = await loginUser({
    email: "leandro@mail.com",
    password: "123456",
  });

  const response = await api.get<iUser[]>("/users/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
