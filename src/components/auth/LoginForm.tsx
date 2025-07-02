"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Chame sua função de login aqui
    // Exemplo: await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full bg-red-500 border-2 mt-4">
        Entrar
      </Button>
      <Button
        type="button"
        variant={"link"}
        className="w-full font-bold text-red-500" onClick={() => redirect("/register")}>
        Ainda não tem uma conta? Cadastre-se
      </Button>
    </form>
  );
}