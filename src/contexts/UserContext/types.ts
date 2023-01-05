import { iLoginFormValues } from "../../components/LoginForm/types";
import { iRegisterFormValues } from "../../components/RegisterForm/types";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserContext {
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogin: (userData: iLoginFormValues) => Promise<void>;
  userRegister: (userData: iRegisterFormValues) => Promise<void>;
  userLogout: () => void;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>
}

export interface iUser {
  email: string;
  img: string;
  name: string;
  userName: string;
  id: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: iUser;
}

export interface IRegisterResponse {
  accessToken: string;
  user: iUser;
}
