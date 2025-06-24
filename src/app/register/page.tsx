import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-md p-8 rounded shadow bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar</h1>
        <RegisterForm />
      </div>
    </div>
  );
}