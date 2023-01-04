import { UseFormRegisterReturn } from "react-hook-form";

export interface iInput {
  type: "text" | "password" | "email" | "url";
  label?: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
}
