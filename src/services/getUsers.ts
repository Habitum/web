import { iUser } from "../contexts/UserContext/types";

import { api } from "./api";

import { loginUser } from "./loginUser";

export async function getUsers() {
  const { accessToken } = await loginUser({
    email: "getusers@email.com",
    password: "Get123,",
  });

  const response = await api.get<iUser[]>("/users/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
