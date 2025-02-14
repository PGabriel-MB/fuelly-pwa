import React, { } from "react"
import { formStyle } from "./styles"
import { TextField } from "@/app/components/TextField";

export interface LoginFormProps {
  email: string;
  password: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email = '', password = '', onChange }) => {
  return (
    <div className={formStyle}>
      <TextField
        label="Email"
        inputProps={{
          placeholder: "someName@email.com",
          type: "email",
          value: email,
          onChange
        }}
      />

      <TextField
        label="Senha"
        inputProps={{
          placeholder: "******",
          type: "password",
          value: password,
          onChange
        }}
      />
    </div>
  )
}

export default LoginForm;