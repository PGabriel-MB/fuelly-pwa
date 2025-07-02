"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import * as authService from "@/services/auth";
import { User } from "@/models/user";
import { AuthContextType } from "@/models/auth";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}
