import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Digite um nome"),
  userName: yup.string().required("Digite um nome de usuário"),
  email: yup.string().required("Digite um email válido").email("Email inválido"),
  password: yup.string().required("Digite uma senha"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
