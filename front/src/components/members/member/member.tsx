
import EditIcon from "@/components/icons/edit.icon";
import DeleteIcon from "@/components/icons/delete.icon";

export default function Member() {


    const handleOnClick = () => {
        
    }



  return (
    <aside className="w-[95%] max-w-[800px] h-64 dark:bg-gray-900 bg-gray-300 shadow-xl border border-gray-400 rounded-xl p-6 flex gap-4 flex-wrap justify-center items-center relative">
      <EditIcon className="absolute right-20 top-2 cursor-pointer hover:stroke-white transition-all duration-200 ease-in-out" />
      <DeleteIcon
        className="absolute right-5 top-2 cursor-pointer transition-all duration-200 ease-in-out hover:rotate-12"
        onClick={handleOnClick}
      />
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
  );
}
