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
} from "../../lib/storage/auth";
import { reqLogin } from "../services/auth";

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = getAuthToken();

    if (token) {
      reqLogin()
    }
  }, []);
}
