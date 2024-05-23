"use client";
import { useRef } from "react";

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

export default function Calendar() {
  const { current: date } = useRef(new Date());

  return (
    <aside className="mt-28">
      <h1 className="text-center text-2xl my-10">
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </h1>
      <article className="grid grid-cols-7 mx-auto text-center w-[clamp(700px,80vw,1100px)] mb-10">
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </article>
      <article className="grid grid-cols-7 mx-auto  w-[clamp(700px,80vw,1100px)]">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            className={`w-full aspect-square border border-black dark:border-white pl-1 pt-1 ${
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
