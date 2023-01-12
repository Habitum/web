export interface iHabitsProviderProps {
  children: React.ReactNode;
}

export interface iHabitsProviderValue {
  star: number;
  setStar: React.Dispatch<React.SetStateAction<number>>;
  habit: iHabits[];
  setHabit: React.Dispatch<React.SetStateAction<iHabits[]>>;
  habitCreate: (body: iHabitData) => Promise<boolean | undefined>;
  habitEdit: (id: number, data: iHabits) => void;
  habitDelete: (id:number, data:iDeleteHabit) => void;
  userEdit: (body: iUserEdit) => void;
  isOpenModalCreate:boolean | null;
  setIsOpenModalCreate:React.Dispatch<React.SetStateAction<boolean | null>>;
  modalOn: boolean | null;
  setModalOn:React.Dispatch<React.SetStateAction<boolean | null>>;
}

export interface iHabitData {
  title: string;
  description: string;
  personal_reward: string;
  dificulty: string;
  constancy: string;
  userId: number | string | null;
}

export interface iHabitResponse {
  title: string;
  description: string;
  personal_reward: string;
  dificulty: string;
  constancy: string;
  userId: number;
  id: number;
}

export interface iHabits extends iHabitData {
  id: number;
}

export interface iBody {
  userId: string | null;
}

export interface iUserUpdate {
  email: string;
  img: string;
  name: string;
  userName: string;
  id: string;
  bits: number;
  star: number;
}

export interface iUserEdit{
  name?: string;
  userName?:string;
  email?:string;
  img?: string;
}

export interface iDeleteHabit {
  userId: null | number;
}
