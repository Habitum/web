import { UseFormRegisterReturn } from "react-hook-form";

export interface iSelectProps {
  label: string;
  name: string;
  options?: string[];
  register?: UseFormRegisterReturn<string>;
};
