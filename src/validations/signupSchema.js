import { object, ref, string } from "yup";

export const signupSchema = object({
  email: string().email("Ingrese un mail valido").required("Ingrese un mail"),
  password: string()
    .min(6, "minimo 6 caracteres")
    .required("Ingrese un password"),
  repeatPassword: string()
    .oneOf([ref("password")], "los password no son iguales")
    .required("vuelve a inngresar la contraseña"),
});
