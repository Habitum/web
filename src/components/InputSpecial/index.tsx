import { iInputSpecial } from "./types";

import { StyledInputSpecial } from "./styles";

const InputSpecial = ({ type, label, name, placeholder, isRequired, options, register }: iInputSpecial) => {
  const createOption = (value: string) => {
    return <option key={value} value={value}>{value}</option>
  }

  return (
    <StyledInputSpecial>
      <label htmlFor={name}>
        {label} {isRequired && <span>*</span>}
      </label>

      {
        type === "textarea" ?
          (<textarea name={name} id={name} placeholder={placeholder} {...register}></textarea>)
          :
          (
            <select name={name} id={name} {...register}>
              {options?.map(option => createOption(option))}
            </select>
          )
      }
    </StyledInputSpecial>
  )
}

export default InputSpecial;