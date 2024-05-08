import { useUserContext } from "@/context/user.context";
import { createClient } from "@/utils/supabase/client";
import Confetti from "react-confetti";
import { useState } from "react";
import Swal from "sweetalert2";

const PRIZES = [
  "una pizza familiar para tu familia",
  "un día de spa para toda tu familia",
  "un día de picnic para toda tu familia",
  "un día de cine para toda tu familia",
];

export default function Prizes() {
  const { user } = useUserContext();

  const supabase = createClient();

  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = async () => {
    try {
      const { data } = await supabase
        .from("users")
        .select()
        .eq("family", user?.family);

      if (data?.length! > 2) {
        const randomPrize = Math.floor(Math.random() * PRIZES.length);
        const prize = PRIZES[randomPrize];
        setShowConfetti(true);

        Swal.fire({
          title: "Felicidades",
          text: `Has ganado ${prize}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        setTimeout(() => {
          setShowConfetti(false);
        }, 8000);
      } else {
        Swal.fire({
          title: "Lo sentimos",
          text: `No tienes suficientes miembros en tu familia para reclamar un premio`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full mt-20 h-dvh grid place-content-center">
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <button
        onClick={handleClick}
        className="bg-yellow-500 text-white p-4 rounded-xl hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out "
      >
        Reclama tu premio
      </button>
    </main>
  );
}
