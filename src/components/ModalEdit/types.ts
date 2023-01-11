export interface iEditForm {
  title: string;
  description: string;
  difficulty: string;
  personal_reward: string;
};

export interface iEdit {
  id: number;
  data: string;
};

export interface iEditModal{
  setModal:  React.Dispatch<React.SetStateAction<boolean>>;
};
