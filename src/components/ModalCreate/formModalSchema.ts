import * as yup from "yup";

export const formModalSchema = yup.object().shape({
  title: yup.string().required("O título é obrigatório").max(30, "O máximo de caracteres é até 30"),
  description: yup.string(),
  personal_reward: yup.string().required("É preciso haver uma recompensa"),
  dificulty: yup.string().required("É preciso medir uma dificuldade"),
  constancy: yup.string().required("É preciso uma meta de constância")
});
