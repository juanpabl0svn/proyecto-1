"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const getDaysInMonth = (month: number, year: number): number => {
  if (month == 2) {
    return year % 4 == 0 ? 29 : DAYS[month];
  }
  return DAYS[month];
};

export default function Calendar() {
  const { current: date } = useRef(new Date());

  const [events, setEvents] = useState<any>([]);

  const supabase = createClient();

  useEffect(() => {
    (async () => {
      const year = date.getFullYear();
      const month = date.getMonth(); // 0-indexed

      const startDate = new Date(year, month, 1).toISOString();
      const endDate = new Date(year, month + 1, 1).toISOString();

      const { data, error } = await supabase
        .from("tournaments")
        .select("*")
        .gte("date_end", startDate)
        .lt("date_end", endDate);

      if (error) {
        console.error("Error fetching tournaments:", error);
        return;
      }

      const events: [any] = Array.from({ length: 31 }).fill([]) as any;

      for (let i = 0; i < data.length; i++) {
        const [_, __, day] = data[i].date_end.split("-") as [any, number, any];

        events[+day - 1] = [...events[+day - 1], data[i]];
      }

      setEvents(events as any);
    })();
  }, []);

  return (
    <aside className="py-28">
      <h1 className="text-center text-2xl my-10">
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </h1>
      <article className="grid grid-cols-7 mx-auto text-center w-[clamp(700px,80vw,1100px)] mb-10">
        <p>Lunes</p>
        <p>Martes</p>
        <p>Miercoles</p>
        <p>Jueves</p>
        <p>Viernes</p>
        <p>Sabado</p>
        <p>Domingo</p>
      </article>
      <article className="grid grid-cols-7 mx-auto  w-[clamp(700px,80vw,1100px)]">
        {Array.from({ length: date.getDay() + 1 }).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-square border bg-gray-100 border-black  pl-1 pt-1"
          ></div>
        ))}
        {Array.from({
          length: getDaysInMonth(date.getMonth(), date.getFullYear()),
        }).map((_, i) => {
          const thereIsAnEvent = events[i];

          return (
            <div
              className={`w-full aspect-square overflow-y-auto overflow-x-hidden border border-black pl-1 pt-1 ${
                date.getDate() === i + 1 ? "bg-gray-400 text-white" : ""
              }`}
              key={i}
            >
              <p>{i + 1}</p>
              <ul className="flex felx-col flex-wrap break-words gap-3 ">
                {thereIsAnEvent &&
                  thereIsAnEvent?.map((event: any) => (
                    <Link
                      href={`/tournaments?id=${event.id_tournament}`}
                      key={event.id_tournament}
                      className="cursor-pointer flex items-center gap-1"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <p>{event.title}</p>
                    </Link>
                  ))}
              </ul>
            </div>
          );
        })}
      </article>
      <article></article>
    </aside>
  );
}
