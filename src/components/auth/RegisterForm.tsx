"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return;
    // Chame sua função de cadastro aqui
    // Exemplo: await register({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
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
      <Input
        type="password"
        placeholder="Confirme a senha"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
        required
      />
      <Button
        type="submit"
        className="w-full bg-red-500 mt-4"
        disabled={password !== confirm}
      >
        Cadastrar
      </Button>
      <Button
        type="button"
        variant="link"
        className="w-full text-red-500"
        onClick={() => redirect("/login")}
        disabled={password !== confirm}
      >
        Já tenho uma conta
      </Button>
    </form>
  );
}