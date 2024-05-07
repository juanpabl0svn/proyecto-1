"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import EyeOpen from "../global/svg/eye-open";
import EyeClose from "../global/svg/eye-close";

export default function Register() {
  const [viewPassword, setViewPassword] = useState(false);

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
      <form className="mt-8 space-y-6 border border-black p-14 rounded-xl">
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
