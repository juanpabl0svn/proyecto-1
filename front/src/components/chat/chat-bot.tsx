"use client";

import { useState } from "react";

export default function ChatBot() {
  const [chats, setChats] = useState([]);

  return (
    <aside className="fixed right-6 bottom-8 h-[400px] bg-gray-500 rounded-md">
      <header className="flex justify-between px-2 h-[10%] items-center">
        <img src="" alt="" />
        <p>Tu amigo</p>
      </header>
      <article className="h-[80%] pt-2">
        <p className="max-w-[60%] w-fit text-wrap ml-5 bg-gray-300 p-2 rounded-lg">
          Hola, ¿Como puedo ayudarte hoy?
        </p>
      </article>
      <article className="h-[10%] flex">
        <textarea className="h-full w-full resize-none rounded-bl-md outline-none" />
        <button>Enviar</button>
      </article>
    </aside>
  );
}
