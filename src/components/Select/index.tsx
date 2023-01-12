import { iSelectProps } from "./types";

import { StyledSelect } from "./styles";

const Select = ({ label, name, options, register }: iSelectProps) => {
  const createOption = (value: string) => <option key={value} value={value}>{value}</option>;

  return (
    <StyledSelect>
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} {...register}>
        {options?.map(option => createOption(option))}
      </select>
    </StyledSelect>
  )
}

export default Select;
