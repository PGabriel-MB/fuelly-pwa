"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function RegisterForm() {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return;

    // register(name,email, passwor)
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
        type="phone"
        placeholder="Telefone"
        value={phone}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <div className="w-full relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-red-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </Button>
      </div>
      <div className="w-full relative">
        <Input
          type={showConfirm ? "text" : "password"}
          placeholder="Senha"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
        <Button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-red-500"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          {showConfirm ? <Eye /> : <EyeOff />}
        </Button>
      </div>
      <div className="text-right mb-4">
        <label className="text-red-600">
          {password !== confirm ? "As senhas devem coincidir" : " "}
        </label>
      </div>
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