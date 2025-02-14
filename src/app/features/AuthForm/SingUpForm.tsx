import React, {} from "react"
import { formStyle } from "./styles"

import { TextField } from "@/app/components/TextField"

export interface SignUpFormProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  name = '',
  email = '',
  password = '',
  passwordConfirmation = '',
  phone = '',
  onChange
}) => {
  return (
    <div className={formStyle}>
      <TextField
        label="Nome"
        inputProps={{
          placeholder: "Seu nome",
          type: "text",
          value: name,
          onChange
        }}
      />

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

      <TextField
        label="Confirme sua Senha"
        inputProps={{
          placeholder: "******",
          type: "password",
          value: passwordConfirmation,
          onChange
        }}
      />

      <TextField
        label="Telefone"
        inputProps={{
          placeholder: "(12) 99999-9999",
          type: "number",
          value: phone,
          onChange
        }}
      />
    </div>
  )
}

export default SignUpForm;