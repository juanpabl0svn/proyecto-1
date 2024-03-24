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
              Welcome to the Coop Comultrasan
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your trusted partner in finance. Making your money work for you.
            </p>
          </div>
          <img
            alt="Bank"
            className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/placeholder.svg"
            width="700"
          />
        </div>
      </div>
      <div className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Providing a range of financial services to meet your needs.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <DollarSignIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">Savings</h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Let your money grow with our high-interest savings accounts.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <CreditCardIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">Loans</h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Finance your dreams with our easy and affordable loan options.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <FileArchiveIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">Security</h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Your money is safe with us. We use the latest technology to
              protect your assets.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:p-8 dark:border-gray-800">
            <BarChartIcon className="w-20 h-20" />
            <h3 className="text-xl font-semibold tracking-tighter">
              Investments
            </h3>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              Grow your wealth with our expertly managed investment portfolios.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 body-font">
        <div className="container grid items-center justify-center gap-4 px-4 py-12 md:py-24">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join us today
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the difference of banking with the Coop Comultrasan.
              Let us help you achieve your financial goals.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray- bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-600 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
