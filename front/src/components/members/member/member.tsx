import EditIcon from "@/components/icons/edit.icon";
import DeleteIcon from "@/components/icons/delete.icon";
import { useState } from "react";
import { IUSER } from "@/models/types";
import Swal from "sweetalert2";
import { useUserContext } from "@/context/user.context";

export default function Member({
  user,
  handleDelete,
  handleEdit,
  isHead,
}: {
  user: IUSER;
  handleDelete: any;
  handleEdit: any;
  isHead: boolean;
}) {
  const [edit, setEdit] = useState(!user.id_user);

  const [currentUser, setCurrentUser] = useState<IUSER>(user);

  const { user: userLoggedIn } = useUserContext();

  const handleEditProcess = async () => {
    if (!edit) {
      setEdit(true);
      return;
    }

    const wishToEdit = await handleEdit(currentUser);

    if (!wishToEdit) {
      setCurrentUser(user);
    }
    setEdit(false);
  };

  return (
    <aside
      className={`w-[95%] max-w-[800px] h-full shadow-xl border border-gray-400 rounded-xl p-9 flex gap-4 flex-wrap justify-center items-center relative ${
        userLoggedIn?.id_user === user.id_user ? "bg-gray-400" : "bg-gray-300"
      } `}
    >
      {isHead && (
        <>
          <EditIcon
            onClick={() => handleEditProcess()}
            className={`absolute right-20 rounded-full top-2 cursor-pointer hover:bg-white transition-all duration-200 ease-in-out p-2 ${
              edit ? "bg-white" : ""
            } `}
          />

          {user.id_user !== userLoggedIn?.id_user && (
            <DeleteIcon
              className="absolute right-5 top-2 cursor-pointer transition-all p-2 duration-200 ease-in-out hover:rotate-12 hover:bg-red-400 rounded-full"
              onClick={() => handleDelete(user)}
            />
          )}
        </>
      )}
      <article className="flex flex-col">
        <label htmlFor="">NIT</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          value={currentUser?.nit}
          name="nit"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
          }
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Nombres</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          value={currentUser?.name}
          name="name"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
          }
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          value={currentUser?.email}
          name="email"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
          }
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Celular</label>
        <input
          type="text"
          className="py-1 px-2 rounded-md w-40"
          value={currentUser?.phone_number}
          name="phone_number"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
          }
          disabled={!edit}
        />
      </article>
      <article className="flex flex-col">
        <label htmlFor="">Fecha nacimiento</label>
        <input
          type="date"
          className="py-1 px-2 rounded-md w-40"
          value={currentUser?.birth_date}
          name="birth_date"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
          }
          disabled={!edit}
        />
      </article>
      {edit && (
        <>
          <button
            disabled={JSON.stringify(user) === JSON.stringify(currentUser)}
            onClick={() => handleEdit(currentUser)}
            className={`bg-green-400 self-end cursor-pointer text-white px-3 py-1 rounded-md hover:bg-green-500 transition-all duration-200 ease-in-out disabled:bg-gray-400`}
          >
            Guardar
          </button>
          <button
            onClick={() => {
              setCurrentUser(user);
              setEdit(false);
            }}
            className="bg-red-400 cursor-pointer self-end text-white px-3 py-1 rounded-md hover:bg-red-500 transition-all duration-200 ease-in-out"
          >
            Cancelar
          </button>
        </>
      )}
    </aside>
  );
}
