import EditIcon from "@/components/icons/edit.icon";
import DeleteIcon from "@/components/icons/delete.icon";
import { useState } from "react";
import { IUSER } from "@/models/types";

export default function Member({
  user,
  handleDelete,
  handleEdit,
  isTheHead,
}: {
  user: IUSER;
  handleDelete: any;
  handleEdit: any;
  isTheHead: boolean;
}) {
  const [edit, setEdit] = useState(false);

  return (
    <aside
      className={`w-[95%] max-w-[800px] h-full shadow-xl border border-gray-400 rounded-xl p-9 flex gap-4 flex-wrap justify-center items-center relative ${
        isTheHead ? "bg-gray-400" : "bg-gray-300"
      } `}
    >
      <EditIcon
        onClick={handleEdit}
        className={`absolute right-20 top-2 cursor-pointer hover:stroke-white transition-all duration-200 ease-in-out ${
          edit ? "stroke-white" : ""
        } `}
      />
      <DeleteIcon
        className="absolute right-5 top-2 cursor-pointer transition-all duration-200 ease-in-out hover:rotate-12"
        onClick={handleDelete}
      />
      <article className="flex flex-col">
        <label htmlFor="">NIT</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          defaultValue={user.nit}
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Nombres</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          defaultValue={user.name}
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          defaultValue={user.email}
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Celular</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          defaultValue={user.phone_number}
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Fecha nacimiento</label>
        <input
          type="date"
          className="py-1 px-2 rounded-md w-40"
          defaultValue={user.birth_date}
          disabled={!edit}
        />
      </article>
    </aside>
  );
}
