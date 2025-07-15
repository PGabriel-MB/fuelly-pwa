
type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone: string, birth_date: Date, country_code: string) => Promise<void>;
  logout: () => void;
};

export type { AuthContextType };