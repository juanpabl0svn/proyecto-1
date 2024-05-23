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

  const [events, setEvents] = useState([]);

  const supabase = createClient();

  useEffect(() => {
    (async () => {})();
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
            key={i}
            className="w-full aspect-square border bg-gray-100 border-black  pl-1 pt-1"
          ></div>
        ))}
        {Array.from({
          length: getDaysInMonth(date.getMonth(), date.getFullYear()),
        }).map((_, i) => (
          <div
            className={`w-full aspect-square border border-black pl-1 pt-1 ${
              date.getDate() === i + 1 ? "bg-gray-300" : ""
            }`}
            key={i}
          >
            <p>{i + 1}</p>
            {(i == 5 || i == 10 || i == 14 || i == 24 || i == 29) && (
              <ul className="">
                <li className="cursor-pointer flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div> Event
                </li>
              </ul>
            )}
          </div>
        ))}
      </article>
      <article></article>
    </aside>
  );
}
