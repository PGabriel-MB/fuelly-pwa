import type { LoginFormProps } from "../features/AuthForm/LoginForm";
import type { AuthData } from "../types";

import { api } from "./baseConfig";

export type LoginProps = LoginFormProps;

const handleLogin = async (loginBody: LoginProps) => {
  api.get<AuthData>('/auth/login', );
}

export {
  handleLogin
}