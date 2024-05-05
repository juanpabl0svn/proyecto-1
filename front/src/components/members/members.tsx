"use client";

import Swal from "sweetalert2";

import Member from "./member/member";

import { useUserContext } from "@/context/user.context";
import { useEffect, useState } from "react";

import { IUSER } from "@/models/types";
import { createClient } from "@/utils/supabase/client";

export default function Members() {
  const { user } = useUserContext();

  const [users, setUsers] = useState<IUSER[]>([]);

  const supabase = createClient();

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("family", +user?.family!);

        if (error) {
          console.error(error);
          return;
        }

        if (data) {
          setUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleEdit = async (user: IUSER) => {
    return Swal.fire({
      title: `¿Seguro que deseas modificar a ${user.name}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const index = users.findIndex((u) => u.id_user === user.id_user);

        const newMembers = users.with(index, user);
        setUsers(newMembers);
        Swal.fire("Editado correctamente!", "", "success");

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
    }).then((result) => {
      if (result.isConfirmed) {
        const newMembers = users.filter((u) => u.id_user !== user.id_user);
        setUsers(newMembers);
        Swal.fire("Eliminado correctamente", "", "success");
      }
    });
  };

  return (
    <main className="min-h-[calc(100dvh-150px)] w-full flex flex-col items-center pt-5 gap-6 mt-28">
      {users.length > 0 ? (
        users.map((member: IUSER) => {
          return (
            <Member
              key={member.id_user}
              user={member}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              isTheHead={user?.id_user === member?.id_user}
            />
          );
        })
      ) : (
        <p>No hay usuarios</p>
      )}
      <button className="bg-gray-200 dark:text-black px-3 py-2 rounded-sm hover:text-white hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
        Nuevo +
      </button>
    </main>
  );
}
