"use client";
import { createClient } from "@/utils/supabase/client";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function TournamentsManager() {
  const supabase = createClient();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { title, prize, description, date_end } = Object.fromEntries(
      new FormData(e.currentTarget) as any
    );

    if (!title || !prize || !description || !date_end) {
      console.error("All fields are required");
      return;
    }

    const wantsToCreate = await Swal.fire({
      title: `¿Seguro que deseas crear el torneo ${title}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => result.isConfirmed);

    if (!wantsToCreate) return;

    const { error } = await supabase.from("tournaments").insert([
      {
        title,
        prize,
        description,
        date_end,
        image: "/image.png",
      },
    ]);

    if (error) {
      toast.error("Error creando el torneo, intente de nuevo", {
        position: "bottom-center",
      });
      console.error("Error creating tournament:", error);
      return;
    }

    toast.success("Torneo creado", {
      position: "bottom-center",
    });

  };

  return (
    <main className="pt-[9rem] h-[600px]">
      <h1 className="text-center text-4xl font-bold mb-20">Crear de torneos</h1>
      <form
        className="flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="max-w-sm w-full rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Titulo
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="title"
                name="title"
                placeholder="Torneo de futbol, Concurso de baile, etc..."
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="prize"
              >
                Premio
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="prize"
                name="prize"
                placeholder="Playstation 5, $1´000.000 en cartera, etc..."
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="description"
              >
                Descripción
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                id="description"
                placeholder="Se llevará a cabo en (lugar) y pueden estar ..."
                required
                name="description"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="date_end"
              >
                Fecha fin
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="date"
                id="date_end"
                placeholder="manish@example.com"
                required
                name="date_end"
              />
            </div>
          </div>
          <button className="bg-blue-300 py-2 rounded-md text-white hover:bg-blue-500 transition-all ease-in-out duration-200">
            Crear
          </button>
        </div>
      </form>
    </main>
  );
}
