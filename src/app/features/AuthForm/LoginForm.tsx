import React, { } from "react"
import { formStyle } from "./styles"
import { TextField } from "@/app/components/TextField";

export interface LoginFormProps {
  email: string;
  password: string;
  onChangeEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email = '', password = '', onChangeEmail, onChangePassword }) => {
  return (
    <div className={formStyle}>
      <TextField
        label="Email"
        inputProps={{
          placeholder: "someName@email.com",
          type: "email",
          value: email,
          onChange: onChangeEmail
        }}
      />

      <TextField
        label="Senha"
        inputProps={{
          placeholder: "******",
          type: "password",
          value: password,
          onChange: onChangePassword
        }}
      />
    </div>
  )
}

export default LoginForm;