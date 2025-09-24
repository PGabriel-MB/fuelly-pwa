"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { IMaskInput } from "react-imask";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { DatePicker } from "../ui/datepicker";
import { AxiosError } from "axios";

const signUpSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido").min(9, "O email deve ter pelo menos 9 caracteres"),
  phone: z.string().min(10, "Telefone inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirm: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
}).refine((data) => data.password === data.confirm, {
  message: "As senhas devem coincidir",
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export function RegisterForm() {
  const { register: authRegister } = useAuth();

  const { register, handleSubmit, formState: { errors }, control } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [birthDateError, setBirthDateError] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isDifferentPass, setIsDifferentPass] = useState(false);

  const onSubmit = async (data: SignUpFormData) => {
    if (data.password !== data.confirm) {
      setIsDifferentPass(true);
      toast.error("As senhas devem coincidir");
      setTimeout(() => { setIsDifferentPass(false); }, 3000);
      return;
    }

    if (!birthDate) {
      setBirthDateError("Data de nascimento é obrigatória");
      toast.error("Data de nascimento é obrigatória");
      setTimeout(() => { setBirthDateError(null); }, 3000);
      return;
    }

    // @TODO: Add validation birthDate

    try {
      await authRegister(
        data.name,
        data.email,
        data.password,
        data.phone,
        birthDate!,
        "BR"
      );
      toast.success("Cadastro realizado com sucesso!");

      setTimeout(() => {
        redirect("/login");
      }, 500);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Nome"
          inputMode="text"
          aria-invalid={!!errors.name}
          {...register("name")}
          required
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Input
          type="email"
          placeholder="E-mail"
          inputMode="email"
          aria-invalid={!!errors.email}
          {...register("email")}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <IMaskInput
              {...field}
              mask="(00) 00000-0000"
              inputMode="tel"
              placeholder="Telefone"
              required
              className="w-full h-9 px-3 py-1 text-red-600 bg-transparent border border-red-200 rounded-md shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <DatePicker label="" withLabel={false} value={birthDate} onChange={setBirthDate} />
        {!birthDate && (
          <p className="text-red-500 text-sm mt-1">{birthDateError}</p>
        )}
      </div>
      <div className="w-full relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          aria-invalid={!!errors.password}
          {...register("password")}
          required
        />
        <Button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-red-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </Button>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="w-full relative">
        <Input
          type={showConfirm ? "text" : "password"}
          placeholder="Senha"
          aria-invalid={!!errors.confirm}
          {...register("confirm")}
          required
        />
        <Button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-red-500"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          {showConfirm ? <Eye /> : <EyeOff />}
        </Button>
        {errors.confirm && (
          <p className="text-red-500 text-sm mt-1">{errors.confirm.message}</p>
        )}
      </div>
      <div className="text-right mb-4">
        <label className="text-red-600">
          {isDifferentPass ? "As senhas devem coincidir" : " "}
        </label>
      </div>
      <Button
        type="submit"
        className="w-full bg-red-500 mt-4"
      >
        Cadastrar
      </Button>
      <Button
        type="button"
        variant="link"
        className="w-full text-red-500"
        onClick={() => redirect("/login")}
      >
        Já tenho uma conta
      </Button>
    </form>
  );
}