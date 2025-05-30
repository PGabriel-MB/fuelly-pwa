'use client';
import { useAuth } from "../contexts/AuthContext";

export default function HomePage() {
  const { logout } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Fuelly!</h1>
      <p className="text-muted-foreground">Você está logado!</p>
      <button className="bg-primary p-3 rounded-md" onClick={() => logout()}>Logout</button>
    </main>
  );
}
