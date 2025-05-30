'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import type { LoginFormProps } from './LoginForm'
import type { SignUpFormProps } from './SingUpForm'

import LoginForm from './LoginForm'
import SignUpForm from './SingUpForm'
import { layoutStyle, } from "./styles";

import Image from "next/image";
import { Button } from "@/app/components/Button";
import { useAuth } from "@/app/contexts/AuthContext";
import { reqSignUp } from "@/app/services/auth";


const AuthForm: React.FC = () => {
  const { login } = useAuth();
  const router = useRouter();
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

  const sendLoginData = async (loginBody: LoginFormProps) => {
    // userteste@email.com
    // usertest
    await login({ ...loginBody })
      .then(() => {
        router.push("/home");
      });
  }

  const sendSignUpData = async (signUpBody: SignUpFormProps) => {
    await reqSignUp(signUpBody)
      .then(() => {
        router.push("/");
      });
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

      {isLogin ?
        <LoginForm
          {...loginForm}
          onChangeEmail={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
          onChangePassword={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
        /> :
        <SignUpForm
          {...signUpForm}
          onChangeName={(e) => setSignUpForm({ ...signUpForm, name: e.target.value })}
          onChangeEmail={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
          onChangePassword={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
          onChangePasswordConfirmation={(e) => setSignUpForm({ ...signUpForm, passwordConfirmation: e.target.value })}
          onChangePhone={(e) => setSignUpForm({ ...signUpForm, phone: e.target.value })}
        />}

      <div className="flex space-around gap-2 w-full max-w-md">
        {isLogin ?
          (<>
            <Button styleType="primary" onClick={() => changeAuthForm(false)}>Cadastrar</Button>
            <Button styleType="secondary" onClick={() => sendLoginData(loginForm)}>Login</Button>
          </>) : (<>
            <Button styleType="primary" onClick={() => changeAuthForm(true)}>Login</Button>
            <Button styleType="secondary" disabled={signUpForm.password != signUpForm.passwordConfirmation} onClick={() => sendSignUpData(signUpForm)}>Cadastrar</Button>
          </>
          )}
      </div>
    </div>
  )
}

export default AuthForm;
