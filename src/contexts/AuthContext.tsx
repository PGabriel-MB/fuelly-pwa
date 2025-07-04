"use client";

import React, { createContext, useContext } from "react";
import { AuthContextType } from "@/models/auth";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}
