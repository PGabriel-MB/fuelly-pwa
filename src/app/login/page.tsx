import { LoginForm } from "@/components/auth/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-400">
      <div className="w-full max-w-md p-8 rounded">
        <Image
          src="/brand/fuelly-logo.svg"
          alt="Fuelly logo"
          className="mx-auto mb-6"
          width={120}
          height={117} />
        <LoginForm />
      </div>
    </div>
  );
}