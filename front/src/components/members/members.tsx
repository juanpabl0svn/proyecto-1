"use client";

import Swal from "sweetalert2";

import Member from "./member/member";

export default function Members() {
  const handleOnClick = (e: any) => {
    Swal.fire({
      title: `¿Seguro que deseas eliminar a Juan Pablo Sanchez ?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado correctamente!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <main className="min-h-[calc(100dvh-69px)] w-full flex flex-col items-center pt-5 gap-6">
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />







      <button className="bg-gray-200 dark:text-black px-3 py-2 rounded-sm hover:text-white hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
        Nuevo +
      </button>
    </main>
  );
}
