import { createClient } from "@/utils/supabase/client";
import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { PieChart } from "@mui/x-charts/PieChart";

import { BarChart } from "@mui/x-charts/BarChart";
import { IUSER } from "@/models/types";

const under20Func = async (supabase: SupabaseClient) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .lte(
      "birth_date",
      new Date(new Date().getFullYear() - 20, 0, 1).toISOString()
    );

  return data?.length ?? 0;
};

const from21to50fFunc = async (supabase: SupabaseClient) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .gte(
      "birth_date",
      new Date(new Date().getFullYear() - 50, 0, 1).toISOString()
    )
    .lt(
      "birth_date",
      new Date(new Date().getFullYear() - 20, 0, 1).toISOString()
    );

  return data?.length ?? 0;
};

const over50Func = async (supabase: SupabaseClient) => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .gt(
      "birth_date",
      new Date(new Date().getFullYear() - 50, 0, 1).toISOString()
    );

  return data?.length ?? 0;
};

const lastThreeFunc = async (supabase: SupabaseClient): Promise<IUSER[]> => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return data as IUSER[];
};

export default function Statistics() {
  const supabase = createClient();

  const [valueUnder20, setValueUnder20] = useState(0);
  const [value21to50, setValue21to50] = useState(0);
  const [valueOver50, setValueOver50] = useState(0);

  const [last3Users, setLast3Users] = useState<IUSER[]>([]);

  useEffect(() => {
    (async () => {
      const results = await Promise.all([
        under20Func(supabase),
        from21to50fFunc(supabase),
        over50Func(supabase),
        lastThreeFunc(supabase),
      ]);

      const total = results[0] + results[1] + results[2];
      setValueUnder20((results[0] / total) * 100);
      setValue21to50((results[1] / total) * 100);
      setValueOver50((results[2] / total) * 100);
      setLast3Users(results[3]);
    })();
  }, []);

  return (
    <main className="w-full h-dvh relative mt-22 flex justify-center items-center">
      <div>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: valueUnder20, label: "Menores a 20 años" },
                { id: 1, value: value21to50, label: "Entre 21 y 50 años" },
                { id: 2, value: valueOver50, label: "Mayores a 50 años" },
              ],
            },
          ]}
          width={600}
          height={600}
        />
      </div>

      <div>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Ultimos en registrar (AÑOS)"],
            },
          ]}
          colors={["red", "blue", "green"]}
          series={last3Users.map((user) => {
            return {
              data: [
                new Date(user.birth_date).getFullYear() * -1 +
                  new Date().getFullYear(),
              ],
            };
          })}
          width={500}
          height={300}
        />
      </div>
    </main>
  );
}
