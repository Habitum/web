import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputSpecial {
  type: "select" | "textarea",
  label: string,
  name: string,
  placeholder?: string,
  isRequired?: boolean,
  options?: string[],
  register?: UseFormRegisterReturn<string>
}