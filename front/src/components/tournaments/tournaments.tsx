import { useUserContext } from "@/context/user.context";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState<any>([]);

  const supabase = createClient();

  const { isLoggedIn, user } = useUserContext();

  const [isInTournament, setIsInTournament] = useState<any>({});

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("tournaments").select("*");

      const { data: tournamentData, error: tournamentError } = await supabase
        .from("tournaments_users")
        .select("*")
        .eq("id_user", user?.id_user);

      if (tournamentData) {
        const tournamentDict = tournamentData.reduce((acc: any, curr: any) => {
          acc[curr.id_tournament] = true;
          return acc;
        }, {});

        setIsInTournament(tournamentDict);
      }

      if (data) {
        setTournaments(data);
      }
    })();
  }, [user?.id_user]);

  const handleClick = async (id_tournament: string) => {
    toast.remove();
    if (!isLoggedIn) {
      toast.error("Debes iniciar sesión para inscribirte en un torneo");
      (document.getElementById("login") as HTMLButtonElement).click();
      return;
    }

    if (isInTournament[id_tournament]) {
      await supabase
        .from("tournaments_users")
        .delete()
        .eq("id_tournament", id_tournament);
      const newObj = { ...isInTournament };
      delete newObj[id_tournament];
      setIsInTournament(newObj);
    } else {
      await supabase
        .from("tournaments_users")
        .insert([{ id_user: user?.id_user, id_tournament }]);
      setIsInTournament({ ...isInTournament, [id_tournament]: true });
    }
  };

  return (
    <main className="pt-28 flex justify-center gap-4 flex-wrap bg-gray-300 min-h-dvh h-full pb-10">
      {tournaments.map((tournament: any) => {
        return (
          <section
            key={tournament.id_tournament}
            className="w-[600px] aspect-square p-4 border border-black rounded-sm bg-white"
          >
            <img src="/tournament.png" alt="" />
            <h2 className="text-2xl font-bold">{tournament.title}</h2>
            <p>{tournament.id_tournament}</p>

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
              <div className="flex flex-col">
                <button
                  onClick={() => handleClick(tournament.id_tournament)}
                  className="bg-blue-500 rounded-md p-2 text-white hover:bg-blue-800 transition-all duration-200 ease-in-out"
                >
                  {isInTournament[tournament.id_tournament]
                    ? "Inscrito"
                    : "Inscribirme"}
                </button>
                {isInTournament[tournament.id_tournament] && (
                  <span className="text-sm text-gray-400">Oprima para desinscribir</span>
                )}
              </div>
            </article>
          </section>
        );
      })}
    </main>
  );
}
