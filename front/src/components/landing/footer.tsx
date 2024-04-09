import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-700 body-font">
      <div className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Grupos familiares
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Ingresa con tu grupo familiar y disfruta de los beneficios especiales, solo para ti, tampoco te pierdas de rifas, sorteos y mucho más.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contacto
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Ver mas
          </Link>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link className="text-sm underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm underline" href="#">
            Privacy Policy
          </Link>
        </div>
        <p className="mx-auto max-w-[600px] text-center text-gray-500 text-xs dark:text-gray-400">
          © 2023 Coop Comultrasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
