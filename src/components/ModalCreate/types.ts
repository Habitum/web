export interface iModalForm {
  title: string,
  description: string,
  personal_reward: string,
  dificulty: "fácil" | "médio" | "difícil",
  constancy: string,
}

export interface iModalProps {
  handleModal: () => void
}