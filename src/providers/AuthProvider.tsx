import React, { useState, useEffect } from "react";
import * as authService from "@/services/auth";
import { User } from "@/models/user";

import { AuthContext } from "@/contexts/AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Aqui você pode buscar o usuário do localStorage/cookies se já estiver logado
    // Exemplo:
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (email: string, password: string) => {
    const data = await authService.login(email, password);
    setUser(data.user);
    // localStorage.setItem("user", JSON.stringify(data.user));
    // localStorage.setItem("token", data.token);
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await authService.register(name, email, password);
    setUser(data.user);
    // localStorage.setItem("user", JSON.stringify(data.user));
    // localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUser(null);
    // localStorage.removeItem("user");
    // localStorage.removeItem("token");
    authService.logout();
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}