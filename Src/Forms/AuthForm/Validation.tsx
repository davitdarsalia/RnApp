import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, () => "Email Must Be At Least 10 Length Symbols")
    .max(100, () => "Your Email Is Too Long")
    .email()
    .required(() => "Email Is Required"),

  password: Yup.string()
    .min(8, () => "Password Must Be At Least 8 Length Symbols")
    .max(250, () => "Your Password Is Too Long")
    .required(() => "Password Is Required"),
});
