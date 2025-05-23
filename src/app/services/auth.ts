import type { LoginFormProps } from "../features/AuthForm/LoginForm";
import { SignUpFormProps } from "../features/AuthForm/SingUpForm";
import type { AuthData, SignUpData } from "../types";

import { api } from "./baseConfig";

export type LoginProps = LoginFormProps;

export type SignUpdProps = SignUpFormProps;

const reqLogin = async (loginBody: LoginProps) =>
  await api.post<AuthData>('/auth/login', loginBody);

const reqSignUp = async (signUpBody: SignUpdProps) => {
  let { passwordConfirmation, ...sBody } = signUpBody;
  const body = { ...sBody, country_code: "BR" };
  await api.post<SignUpData>('/auth/signup', body);
}

export {
  reqLogin,
  reqSignUp
}