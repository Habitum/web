import { UseFormRegisterReturn } from "react-hook-form";

type variant = "primary" | "secondary";

export interface iInput {
  type: "text" | "password" | "email" | "url" | "textarea";
  label?: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
  variant?: variant;
  rows?: number;
  cols?: number;
}
