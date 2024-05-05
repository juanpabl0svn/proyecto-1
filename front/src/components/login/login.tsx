import { hiddeModal } from "../global/modal";

import { useUserContext } from "@/context/user.context";

import { createClient } from "@/utils/supabase/client";

import toast from "react-hot-toast";

export default function LogIn({ onClick }: { onClick: () => void }) {
  const { logIn } = useUserContext();

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.remove();

    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget) as any
    );

    try {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("email", email)
        .eq("password", password)
        .limit(1)
        .single();

      if (error || !data) throw new Error("Error al iniciar sesión");

      logIn(data);

      document.cookie = `comultrasan=${data.id_user}`;

      toast.success(`Bienvenido ${data.name}`);

      hiddeModal(onClick);
    } catch (error) {
      toast.error("Usuario o contraseña incorrectos");
      console.log(error);
    }
  };

  return (
    <aside className="w-[clamp(350px,30vw,450px)] show-modal-class">
      <span
        className="absolute -right-2 -top-8 text-xl cursor-pointer opacity-70 hover:opacity-100 text-white"
        onClick={() => hiddeModal(onClick)}
      >
        X
      </span>
      <div className="bg-gray-800 rounded-lg  overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,_0,_0,_0.1),_0_10px_10px_-5px_rgba(0,_0,_0,_0.04)]">
        <div className="p-8">
          <h2 className="text-center text-3xl font-extrabold text-white">
            Bienvenido
          </h2>
          <p className="mt-4 text-center text-gray-400">
            Ingresa tu usuario y contraseña
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  placeholder="Email"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  required
                  autoComplete="email"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mt-4">
                <input
                  placeholder="Contraseña"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  required
                  autoComplete="current-password"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <div className="text-sm">
                <a
                  className="font-medium text-indigo-700 hover:text-indigo-400"
                  href="#"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                className="text-white relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md  bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-600 text-center">
          <span className="text-gray-400">¿No tienes una cuenta?</span>
          <a
            className="font-medium text-indigo-500 hover:text-indigo-400 m-1"
            href="#"
          >
            Registrate
          </a>
        </div>
      </div>
    </aside>
  );
}
