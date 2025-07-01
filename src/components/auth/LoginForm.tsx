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
      <div className="flex gap-2 flex-row justify-between">
        <Button
          type="button"
          variant={"ghost"}
          className="w-30 font-bold text-red-500" onClick={() => redirect("/register")}>
          Cadastrar
        </Button>
        <Button type="submit" className="w-30 bg-red-400 border-2">
          Entrar
        </Button>
      </div>
    </form>
  );
}