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
import { LoginProps, reqLogin } from "../services/auth";
import { getUser } from "../services/user";
import { User } from "../types/user";

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getAuthToken();

    if (token && user) {
      getUser(user.id)
        .then(resp => setUser(resp.data))
        .catch(() => logout());
    }
  }, []);

  const login = async (loginData: LoginProps) => {
    const response = await reqLogin(loginData);
    const { token, id: userId } = response.data;

    setAuthToken(token);
    setUser({ ...user, id: userId } as User);
  }

  const logout = () => {
    removeAuthToken();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
