import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-400 p-2">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4">
        <Image
          src="/brand/fuelly-logo.svg"
          alt="Fuelly logo"
          className="mx-auto mb-6"
          width={120}
          height={117} />
        <div className="w-full max-w-md p-4 rounded-lg bg-white shadow-lg">
          <h1 className="text-2xl text-red-400 font-bold mb-6 text-center">Bem Vindo!</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}