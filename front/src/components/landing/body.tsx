'use client'

import Link from "next/link";
import DollarSignIcon from "../icons/dolar.icon";
import CreditCardIcon from "../icons/credit-card.icon";
import FileArchiveIcon from "../icons/file-archive.icon";
import BarChartIcon from "../icons/bar-char.icon";

import { useEffect } from "react";

export default function Body() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return;

    const convenios = document.getElementById(id) as HTMLElement;

    if (convenios) {
      convenios.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);
  return (
    <main className="flex-1 mt-10">
      <aside className="bg-gray-100 dark:bg-gray-800">
        <section className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
          <article className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Bienvenido a Coop Comultrasan ...
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tu compañero de confianza en finanzas.{" "}
              <span className="font-bold">
                Haciendo tu dinero trabajar por ti
              </span>
            </p>
          </article>
          <img
            alt="Bank"
            className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/portada_financiera.webp"
            width="700"
          />
        </section>
      </aside>
      <aside className="grid items-center justify-center gap-4 px-4 py-12 md:py-24">
        <article className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros servicios
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Servicios que cumplan con tus necesidades financieras
          </p>
        </article>
        <article className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <section className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <DollarSignIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">Ahorros</h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Deja tu dinero crecer con altas tasas de interés en nuestras
              cuentas
            </p>
          </section>
          <section className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <CreditCardIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">
              Prestamos
            </h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Financia tus sueños con nuestros préstamos a tasas competitivas
            </p>
          </section>
          <section className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <FileArchiveIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">
              Seguridad
            </h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Tu dinero esta a salvo aqui.
              <span className="font-bold block">
                Usamos la mejor y ultima tecnologia en nuestros productos
              </span>
            </p>
          </section>
          <section className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <BarChartIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">
              Inversiones
            </h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Crece tu dinero con nuestras opciones de inversión por medio de
              especialistas
            </p>
          </section>
        </article>
      </aside>

      <aside className="bg-gray-200 text-center py-8 shadow-inner">
        <h2 id="convenios" className="text-4xl font-semibold tracking-tighter">
          Nuestros convenios
        </h2>
        <section className="mt-8 mx-6 flex flex-wrap gap-5 justify-center">
          <img src="/smartfit.jpeg" alt="smartfit" className="rounded-md" />
          <img src="/colombo.png" alt="smartfit" className="rounded-md" />
          <img src="/udem.png" alt="smartfit" className="rounded-md" />
        </section>
      </aside>
      <aside className="bg-gray-100 body-font">
        <section className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
          <article className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ingresa hoy mismo
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experiencia en el mercado, servicios actualizados, atención al
              cliente instantanea, y mucho más...
            </p>
          </article>
          <article className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contacto
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray- bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-600 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Ver mas
            </Link>
          </article>
        </section>
      </aside>
    </main>
  );
}
