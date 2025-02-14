"use client";
import React, { useState } from "react";

import type { LoginFormProps } from './LoginForm'
import type { SignUpFormProps } from './SingUpForm'

import LoginForm from './LoginForm'
import SignUpForm from './SingUpForm'
import { layoutStyle, } from "./styles";

import Image from "next/image";
import { Button } from "@/app/components/Button";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState<LoginFormProps>({ email: '', password: '' });
  const [signUpForm, setSignUpForm] = useState<SignUpFormProps>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: ''
  });

  const changeAuthForm = (value: boolean) => {
    setIsLogin(value);
  }

  return (
    <div className={layoutStyle}>
      <Image
        src="/brand/fuelly-logo-home.svg"
        alt="Logomarca da Fuelly"
        width={120}
        height={117}
        sizes="(max-width: 120px)"
      />

      {isLogin ? // corrigir as funções de onchange dos formulários
      <LoginForm
        {...loginForm}
        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
      /> :
      <SignUpForm
        {...signUpForm}
        onChange={(e) => setSignUpForm({...signUpForm, name: e.target.value})}
      />}

      <div className="flex space-around gap-2 w-full max-w-md">
        {isLogin ?
        (<>
            <Button styleType="primary" onClick={() => changeAuthForm(false)}>Cadastrar</Button>
            <Button styleType="secondary" onClick={() => null}>Login</Button>
          </>) : (<>
            <Button styleType="primary" onClick={() => changeAuthForm(true)}>Login</Button>
            <Button styleType="secondary" onClick={() => null}>Cadastrar</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default AuthForm;
