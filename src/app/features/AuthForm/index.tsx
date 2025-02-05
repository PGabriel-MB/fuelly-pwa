"use client";
import React, { useState } from "react";

import LoginForm from './LoginForm'
import SignUpForm from './SingUpForm'
import { layoutStyle, } from "./styles";
import Image from "next/image";


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
    </div>
  )
}

export default AuthForm;
