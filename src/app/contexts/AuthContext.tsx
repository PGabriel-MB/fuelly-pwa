import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import { api } from "../services/baseConfig";
import {
  getAuthToken,
  setAuthToken,
  removeAuthToken
} from  "../../lib/storage/auth";

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
