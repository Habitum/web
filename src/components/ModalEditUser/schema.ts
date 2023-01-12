import * as yup from "yup";

export const formEditSchema = yup.object().shape({
  name: yup.string().required("Digite um nome Valido"),
  userName: yup.string().required("Digite um userName Valido"),
  email: yup.string().email("Email inválido").required("Digite um email Valido"),
});