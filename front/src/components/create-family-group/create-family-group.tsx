import { useUserContext } from "@/context/user.context";
import { createClient } from "@/utils/supabase/client";

import toast from "react-hot-toast";

export default function CreateFamilyGroup() {
  const supabase = createClient();

  const { user, createFamily } = useUserContext();

  const handleCurrency = (e: any) => {
    let number = e.target.value.replace(/[^\d.]/g, "");

    number = parseFloat(number).toLocaleString("en-US");

    if (number === "NaN") {
      number = "";
    }

    e.target.value = "$ " + number;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    try {
      await supabase
        .from("families")
        .insert({ head_of_family: user?.id_user!, family_group: randomNumber });

      const { data } = await supabase
        .from("families")
        .select("id_family")
        .order("id_family", { ascending: false })
        .limit(1)
        .single();

      await supabase
        .from("users")
        .update({ family: data?.id_family })
        .eq("id_user", user?.id_user!);

      createFamily(data?.id_family);
    } catch (error) {
      console.log(error);
      toast.error("Algo salió mal");
    }
  };

  return (
    <form
      className="bg-slate-300 w-[clamp(300px,70vw,600px)] flex flex-wrap p-5 gap-3 justify-center rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2">
        <label htmlFor="stratum">Estrato</label>
        <select name="stratum" id="stratum" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="income">Ingresos</label>
        <input
          type="text"
          onChange={handleCurrency}
          className="w-32"
          max="14"
          required
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="people_in_charge">Personas a cargo</label>
        <select name="people_in_charge" id="people_in_charge" required>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="+4">+4</option>
        </select>
      </div>

      <div className="flex gap-2">
        <label htmlFor="income">Ingresos</label>
        <input
          type="text"
          className="w-32"
          max="14"
          required
          onChange={handleCurrency}
        />
      </div>

      <button className=" bg-blue-500 p-4 rounded-lg text-white curs">
        Crear grupo familiar
      </button>
    </form>
  );
}
