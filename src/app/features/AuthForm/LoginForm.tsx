import React, { } from "react"
import { formStyle } from "./styles"
import { TextField } from "@/app/components/TextField";

const LoginForm: React.FC = () => {
  return (
    <div className={formStyle}>
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
    </div>
  )
}

export default LoginForm;