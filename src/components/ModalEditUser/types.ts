

export interface iModalBaseProps{
  setModal:  React.Dispatch<React.SetStateAction<boolean>>;
  profilePic: string  
}
  
export interface iEditForm{
  name?: string,
  userName?:string,
  email?:string
}