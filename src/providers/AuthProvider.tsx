"use client";

import React, { useState, useEffect } from "react";
import * as authService from "@/services/auth";

import { AuthContext } from "@/contexts/AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      authService.setAuthToken(storedToken); // Set the token for future requests
    }
  }, []);

  const login = async (email: string, password: string) => {
    const data = await authService.login(email, password);
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await authService.register(name, email, password);
    return data
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    authService.logout();
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}