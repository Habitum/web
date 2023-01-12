import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Digite um nome"),
  userName: yup.string().required("Digite um nome de usuário"),
  email: yup.string().required("Digite um email válido").email("Email inválido"),
  password: yup
    .string()
    .required("Digite uma senha")
    .matches(/.{6,}$/, "A senha precisa conter no mínimo 6 caracteres.")
    .matches(/(?=.*?[0-9])/, "A senha precisa conter pelo menos um número.")
    .matches(/(?=.*?[A-Z])(?=.*?[a-z])/, "A senha precisa conter pelo menos uma letra maiúscula e uma minúscula."),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
