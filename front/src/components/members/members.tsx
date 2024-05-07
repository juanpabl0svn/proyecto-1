"use client";

import Swal from "sweetalert2";

import Member from "./member/member";

import { useUserContext } from "@/context/user.context";
import { useEffect, useState } from "react";

import { IUSER } from "@/models/types";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";

export default function Members() {
  const { user } = useUserContext();

  const [users, setUsers] = useState<IUSER[]>([]);

  const [isHead, setIsHead] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("family", user?.family!);

        const { data: data2, error: error2 } = await supabase
          .from("families")
          .select()
          .eq("id_family", user?.family!)
          .eq("head_of_family", user?.id_user)
          .single();

        if (error) {
          console.error({ error });
          return;
        }

        setIsHead(data2 ? true : false);

        if (data) {
          data.sort((a: IUSER, b: IUSER) => a.id_user - b.id_user);

          setUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);

  const handleEdit = async (user: IUSER) => {
    return Swal.fire({
      title: `¿Seguro que deseas modificar a ${user.name}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const index = users.findIndex((u) => u.id_user === user.id_user);

        try {
          if (user.id_user === 0) {
            const { id_user, ...rest } = user;

            await supabase.from("users").insert(rest);
          } else {
            await supabase
              .from("users")
              .update(user)
              .eq("id_user", user.id_user);
          }

          const newMembers = users.with(index, user);
          setUsers(newMembers);
          toast.success("Usuario editado correctamente");
        } catch (error) {
          toast.error("Error al editar el usuario");
        }

        return true;
      }

      return false;
    });
  };

  const handleDelete = (user: IUSER) => {
    Swal.fire({
      title: `¿Seguro que deseas eliminar a ${user.name}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const newMembers = users.filter((u) => u.id_user !== user.id_user);

        try {
          await supabase.from("users").delete().eq("id_user", user.id_user);
          setUsers(newMembers);
          toast.success("Usuario eliminado correctamente");
        } catch (error) {
          toast.error("Error al eliminar el usuario");
        }
      }
    });
  };

  return (
    <main className="min-h-[calc(100dvh-150px)] w-full flex flex-col items-center py-5 gap-6 mt-28 first:bg-slate-600">
      {users.length > 0 ? (
        users.map((member: IUSER) => {
          return (
            <Member
              key={member.id_user}
              user={member}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              isHead={isHead}
            />
          );
        })
      ) : (
        <p>No hay usuarios</p>
      )}

      {isHead && (
        <button
          className="bg-gray-200 dark:text-black px-3 py-2 rounded-sm hover:text-white hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={() =>
            setUsers([
              ...users,
              {
                id_user: 0,
                name: "",
                email: "",
                password: "1234",
                birth_date: "",
                phone_number: "",
                family: user?.family!,
                nit: "",
              },
            ])
          }
        >
          Nuevo +
        </button>
      )}
    </main>
  );
}
