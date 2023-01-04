import { iLoginFormValues } from "../components/LoginForm/types";
import { iRegisterFormValues } from "../components/RegisterForm/types";

export interface iUserProviderProps {
  children: React.ReactNode;
}


export interface iUserContext {
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogin: (userData: iLoginFormValues) => Promise<void>;
  userRegister: (userData: iRegisterFormValues) => Promise<void>;
  userLogout: () => void;
}
