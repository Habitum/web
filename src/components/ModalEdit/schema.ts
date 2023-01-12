import * as yup from "yup";

export const modalSchema = yup.object().shape({
  title: yup.string().required("Escolha um título"),
  description: yup.string(),
  dificulty: yup.string().required("Escolha uma dificuldade"),
  personal_reward: yup.string().required("É preciso haver uma recompensa"),
});
