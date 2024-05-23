"use client";

import { createClient } from "@/utils/supabase/client";
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

      const eventsGroupedByDay = data?.reduce(
        (acc: Record<string, any>, event: any) => {
          const day = event.date_end.toString();
          if (!acc[day]) {
            acc[day] = [];
          }
          acc[day].push(event);
          return acc;
        },
        {}
      );

      console.log(eventsGroupedByDay);

      setEvents(eventsGroupedByDay as any);
    })();
  }, []);

  return (
    <aside className="mt-28">
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
            key={crypto.randomUUID()}
            className="w-full aspect-square border bg-gray-100 border-black  pl-1 pt-1"
          ></div>
        ))}
        {Array.from({
          length: getDaysInMonth(date.getMonth(), date.getFullYear()),
        }).map((_, i) => {
          const currentDate = `${date.getFullYear()}-${
            date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1
          }-${i + 1}`;

          const thereIsAnEvent = events[currentDate];

          return (
            <div
              className={`w-full aspect-square border border-black pl-1 pt-1 ${
                date.getDate() === i + 1 ? "bg-gray-400 text-white" : ""
              }`}
              key={crypto.randomUUID()}
            >
              <p>{i + 1}</p>
              <ul className="flex felx-col flex-wrap break-words gap-3">
                {thereIsAnEvent &&
                  thereIsAnEvent?.map((event: any) => (
                    <li className="cursor-pointer flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <p>{event.title}</p>
                    </li>
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
