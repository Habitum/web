import { iRegisterFormValues } from "../components/Forms/RegisterForm/types";
import { IRegisterResponse } from "../contexts/UserContext/types";

import { api } from "./api";

export const registerUser = async (userRegisterData: iRegisterFormValues) => {
  const response = await api.post<IRegisterResponse>("/register", userRegisterData);

  return response.data;
};
