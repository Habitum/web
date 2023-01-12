
export interface iModalBaseProps{
  setModal:  React.Dispatch<React.SetStateAction<boolean>>;
  profilePic?: string;
  setProfile: React.Dispatch<React.SetStateAction<string | undefined>>
}
  
export interface iEditForm{
  name?: string;
  userName?:string;
  email?:string;
}
