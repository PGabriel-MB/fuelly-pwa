"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";


export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);

      // redirect("/"); 
      alert("Login successful! Redirecting to home page...");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show a notification)
    }
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