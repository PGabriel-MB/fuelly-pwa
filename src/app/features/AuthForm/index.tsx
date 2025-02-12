"use client";
import React, { useState } from "react";

import LoginForm from './LoginForm'
import SignUpForm from './SingUpForm'
import { layoutStyle, } from "./styles";

import Image from "next/image";
import { Button } from "@/app/components/Button";


const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={layoutStyle}>
      <Image
        src="/brand/fuelly-logo-home.svg"
        alt="Logomarca da Fuelly"
        width={120}
        height={117}
        sizes="(max-width: 120px)"
      />

      {isLogin ? <LoginForm /> : <SignUpForm />}

      <div className="flex space-around gap-2 w-full max-w-md">
        {isLogin ?
        (<>
            <Button styleType="primary" onClick={() => setIsLogin(false)}>Cadastrar</Button>
            <Button styleType="secondary" onClick={() => null}>Login</Button>
          </>) : (<>
            <Button styleType="secondary" onClick={() => setIsLogin(true)}>Login</Button>
            <Button styleType="primary" onClick={() => null}>Cadastrar</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default AuthForm;
