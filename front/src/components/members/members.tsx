export default function Members() {
  return (
    <main className="min-h-[calc(100dvh-69px)] w-full flex flex-col items-center pt-5 gap-6">
      <aside className="w-[95%] h-64 dark:bg-gray-900 bg-gray-300 shadow-xl border border-gray-400 rounded-xl p-6 flex gap-4 flex-wrap justify-center items-center">
        <article className="flex flex-col">
          <label htmlFor="">NIT</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value="999999999"
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Nombres</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value={"Juan Pablo"}
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Apellidos</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            disabled
            value={"Sanchez Villegas"}
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value="juan@gmail.com"
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Celular</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value="300123123"
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Fecha nacimiento</label>
          <input type="date" className="py-1 px-2 rounded-md w-40" disabled />
        </article>
      </aside>
      <aside className="w-[95%] h-64 dark:bg-gray-900 bg-gray-300 shadow-xl border border-gray-400 rounded-xl p-6 flex gap-4 flex-wrap justify-center items-center">
        <article className="flex flex-col">
          <label htmlFor="">NIT</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value="999999999"
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Nombres</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value={"Juan Pablo"}
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Apellidos</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            disabled
            value={"Sanchez Villegas"}
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value="juan@gmail.com"
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Celular</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md w-40"
            value="300123123"
            disabled
          />
        </article>
        <article className="flex flex-col">
          <label htmlFor="">Fecha nacimiento</label>
          <input type="date" className="py-1 px-2 rounded-md w-40" disabled />
        </article>
      </aside>
      <button className="bg-gray-200 px-3 py-2 rounded-sm hover:text-white hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
        Nuevo +
      </button>
    </main>
  );
}
