export interface iHabitsProviderProps {
  children: React.ReactNode;
}

export interface iHabitsProviderValue {
  star: number;
  setStar: React.Dispatch<React.SetStateAction<number>>;
  bit: number;
  setBit: React.Dispatch<React.SetStateAction<number>>;
  habit: iHabits[];
  setHabit: React.Dispatch<React.SetStateAction<iHabits[]>>;
  habitCreate: (body: iHabitData) => Promise<boolean | undefined>;
  habitEdit: (id: number, data: iHabits) => void;
  habitDelete: (id: number) => void;
  userEdit: (body: iUserEdit) => void;
}

export interface iHabitData {
  title: string;
  description: string;
  personal_reward: string;
  dificulty: string;
  constancy: string;
  userId: number;
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
  name?: string,
  userName?:string,
  email?:string
}

export interface iUserEdit{
  name?: string,
  userName?:string,
  email?:string
}