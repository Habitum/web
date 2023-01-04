import * as yup from "yup";

export const formSchema = yup.object().shape({
  avatar: yup.string().required("Insira um link válido"),
  name: yup.string().required("Digite um nome"),
  username: yup.string().required("Digite um nome de usuário"),
  email: yup.string().required("Digite um email válido").email("Email inválido"),
  password: yup.string().required("Digite uma senha"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
