import { useUserContext } from "@/context/user.context";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState<any>([]);

  const supabase = createClient();

  const { isLoggedIn } = useUserContext();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("tournaments").select("*");

      if (data) {
        setTournaments(data);
      }
    })();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    toast.remove();
    if (!isLoggedIn) {
      toast.error("Debes iniciar sesión para inscribirte en un torneo");
      (document.getElementById("login") as HTMLButtonElement).click();
      return;
    }

    const { textContent } = e.target as HTMLElement;

    if (textContent === "Inscribirme") {
      toast.success("Te has inscrito en el torneo");
      (e.target as HTMLElement).textContent = "Inscrito";
    }
  };

  return (
    <main className="pt-28 flex justify-center gap-4 flex-wrap bg-gray-300 min-h-dvh h-full pb-10">
      {tournaments.map((tournament: any) => {
        // const isInscribed = user.tournaments

        return (
          <section
            key={tournament.id}
            className="w-[600px] p-4 border border-black rounded-sm bg-white"
          >
            <img src="/tournament.png" alt="" />
            <h2 className="text-2xl font-bold">{tournament.title}</h2>

            <article className="flex w-full justify-between px-4">
              <div>
                <p>{tournament.description}</p>
                <p>
                  <span className="font-bold">Termina: </span>
                  {tournament.date_end}
                </p>
                <p>
                  <span className="font-bold">Premio: </span>
                  {tournament.prize}
                </p>
              </div>
              <button
                onClick={handleClick}
                className="bg-blue-500 rounded-md p-2 text-white hover:bg-blue-800 transition-all duration-200 ease-in-out"
              >
                Inscribirme
              </button>
            </article>
          </section>
        );
      })}
    </main>
  );
}
