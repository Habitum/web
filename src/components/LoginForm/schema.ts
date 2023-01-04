import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().required("Digite um email válido").email("Email inválido"),
  password: yup.string().required("Digite uma senha"),
});
