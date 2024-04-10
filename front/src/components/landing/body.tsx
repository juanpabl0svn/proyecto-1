import Link from "next/link";
import DollarSignIcon from "../icons/dolar.icon";
import CreditCardIcon from "../icons/credit-card.icon";
import FileArchiveIcon from "../icons/file-archive.icon";
import BarChartIcon from "../icons/bar-char.icon";

export default function Body() {
  return (
    <main className="flex-1">
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Bienvenido a Coop Comultrasan
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tu compañero de confianza en finanzas.{" "}
              <span className="font-bold">
                Haciendo tu dinero trabajar por ti
              </span>
            </p>
          </div>
          <img
            alt="Bank"
            className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/post.png"
            width="700"
          />
        </div>
      </div>
      <div className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros servicios
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Servicios que cumplan con tus necesidades financieras
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <DollarSignIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">Ahorros</h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Deja tu dinero crecer con altas tasas de interés en nuestras
              cuentas
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <CreditCardIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">
              Prestamos
            </h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Financia tus sueños con nuestros préstamos a tasas competitivas
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
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
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <BarChartIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">
              Inversiones
            </h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Crece tu dinero con nuestras opciones de inversión por medio de especialistas
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 body-font">
        <div className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ingresa hoy mismo
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experiencia en el mercado, servicios actualizados, atención al cliente instantanea, y mucho más...
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
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray- bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-600 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Ver mas
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
