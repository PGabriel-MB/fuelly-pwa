import React, {} from "react"
import { formStyle } from "./styles"

import { TextField } from "@/app/components/TextField"

const SignUpForm: React.FC = () => {
  return (
    <div className={formStyle}>
      <TextField
        label="Nome"
        inputProps={{
          placeholder: "Seu nome",
          type: "text"
        }}
      />

      <TextField
        label="Email"
        inputProps={{
          placeholder: "someName@email.com",
          type: "email"
        }}
      />

      <TextField
        label="Senha"
        inputProps={{
          placeholder: "******",
          type: "password"
        }}
      />

      <TextField
        label="Confirme sua Senha"
        inputProps={{
          placeholder: "******",
          type: "password"
        }}
      />

      <TextField
        label="Telefone"
        inputProps={{
          placeholder: "(12) 99999-9999",
          type: "number"
        }}
      />
    </div>
  )
}

export default SignUpForm;