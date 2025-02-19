import React, {} from "react"
import { formStyle } from "./styles"

import { TextField } from "@/app/components/TextField"

export interface SignUpFormProps {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  onChangeName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirmation?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhone?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  name = '',
  email = '',
  password = '',
  passwordConfirmation = '',
  phone = '',
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onChangePasswordConfirmation,
  onChangePhone
}) => {
  return (
    <div className={formStyle}>
      <TextField
        label="Nome"
        inputProps={{
          placeholder: "Seu nome",
          type: "text",
          value: name,
          onChange: onChangeName
        }}
      />

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

      <TextField
        label="Confirme sua Senha"
        inputProps={{
          placeholder: "******",
          type: "password",
          value: passwordConfirmation,
          onChange: onChangePasswordConfirmation
        }}
      />

      <TextField
        label="Telefone"
        inputProps={{
          placeholder: "(12) 99999-9999",
          type: "number",
          value: phone,
          onChange: onChangePhone
        }}
      />
    </div>
  )
}

export default SignUpForm;