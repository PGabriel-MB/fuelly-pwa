import React, {} from "react"
import { formStyle } from "./styles"

import { TextField } from "@/app/components/TextField"

const SignUpForm: React.FC = () => {
  return (
    <div className={formStyle}>
      <h1>SignUp Form</h1>
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
          placeholder: "Seu nome",
          type: "email"
        }}
      />
    </div>
  )
}

export default SignUpForm;