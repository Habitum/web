

export interface iModalBaseProps{
    setModal:  React.Dispatch<React.SetStateAction<boolean>>
  }
  
export interface iEditForm{
  name?: string,
  userName?:string,
  email?:string
}