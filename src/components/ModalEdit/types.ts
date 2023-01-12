
export interface iEdit {
  id: number;
  data: string;
};

export interface iEditModal{
  setModal:  React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
};
