"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import EyeOpen from "../global/svg/eye-open";
import EyeClose from "../global/svg/eye-close";
import { createClient } from "@/utils/supabase/client";
import { useUserContext } from "@/context/user.context";
import { IUSER } from "@/models/types";
import { useRouter } from "next/navigation";

export default function Register() {
  const [viewPassword, setViewPassword] = useState(false);

  const { logIn } = useUserContext();

  const supabase = createClient();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userValue = Object.fromEntries(new FormData(e.currentTarget) as any);

    try {
      const { data } = await supabase
        .from("users")
        .select()
        .or(`nit.eq.${userValue.nit},email.eq.${userValue.email}`)
        .single();

      if (data) {
        return toast.error(
          `El usuario ya existe con ese ${
            data.nit === userValue.nit ? "NIT" : "email"
          }`
        );
      }

      await supabase.from("users").insert(userValue);

      const { data: data2, error: error2 } = await supabase
        .from("users")
        .select()
        .eq("email", userValue.email)
        .eq("password", userValue.password)
        .limit(1)
        .single();

      if (error2) {
        return toast.error("Algo salió mal");
      }

      logIn(data2! as IUSER);

      document.cookie = `comultrasan=${data2?.id_user}`;

      router.replace("/");
    } catch (error) {
      toast.error("Algo salió mal");
    }
  };

  const noNumbersAllowed = (e: any) => {
    toast.remove();
    const value = e.target.value;

    const regex = /[a-zA-Z]/;

    if (regex.test(value)) {
      toast.error(
        `No pueden haber letras en el ${
          e.target.name === "phone_number" ? "celular" : "NIT"
        }`
      );

      e.target.value = value.slice(0, -1);
    }
  };

  return (
    <aside className="fixed w-full min-h-dvh grid place-content-center">
      <form
        className="mt-8 space-y-6 border border-black p-14 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="rounded-md shadow-sm">
          <div>
            <input
              placeholder="NIT"
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
              autoComplete="NIT"
              type="text"
              name="nit"
              id="nit"
              onChange={noNumbersAllowed}
            />
          </div>
          <div className="mt-4">
            <input
              placeholder="Nombre"
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
              autoComplete="name"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="mt-4">
            <input
              placeholder="Email"
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
              autoComplete="current-email"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="mt-4">
            <input
              placeholder="Celular"
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
              autoComplete="current-password"
              type="text"
              name="phone_number"
              id="phone_number"
              onChange={noNumbersAllowed}
            />
          </div>
          <div className="mt-4">
            <input
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
              autoComplete="current-password"
              type="date"
              name="birth_date"
              id="birth_date"
            />
          </div>
          <div className="mt-4 relative">
            <input
              placeholder="Contraseña"
              className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              required
              autoComplete="current-password"
              type={viewPassword ? "text" : "password"}
              name="password"
              id="password"
            />
            <div
              className="absolute right-2 top-1/2 w-7 h-7 -translate-y-1/2 cursor-pointer z-10"
              onClick={() => setViewPassword(!viewPassword)}
            >
              {viewPassword ? <EyeOpen /> : <EyeClose />}
            </div>
          </div>
        </div>

        <div>
          <button
            className="text-white relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md  bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Crear usuario
          </button>
        </div>
      </form>
    </aside>
  );
}
