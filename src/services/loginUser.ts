import { iLoginFormValues } from "../components/Forms/LoginForm/types";
import { ILoginResponse } from "../contexts/UserContext/types";

import { api } from "./api";

export const loginUser = async (userLoginData: iLoginFormValues) => {
  const response = await api.post<ILoginResponse>("/login", userLoginData);

  return response.data;
};
