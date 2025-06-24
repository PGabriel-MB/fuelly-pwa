import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-md p-8 rounded shadow bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar</h1>
        <LoginForm />
      </div>
    </div>
  );
}