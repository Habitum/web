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
  habitCreate: (body:iHabits) => void;
  habitEdit: (id: number, data: iHabits) => void;
  habitDelete: (id:number) => void;
}

export interface iHabits {
  title: string;
  description: string;
  personal_reward: string;
  dificulty: string;
  userId: number;
  id: number;
}

export interface iBody {
  userId: string | null;
}
