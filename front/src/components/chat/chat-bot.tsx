"use client";

import { useState } from "react";

const $ = (selector: string) => document.querySelector(selector);

export default function ChatBot() {
  const [chats, setChats] = useState([]);

  const handleClick = () => {
    const chat = $("#chat-bot") as HTMLElement;
    chat.classList.toggle("translate-x-[150%]");
  };

  return (
    <aside className="fixed right-6 bottom-8 h-[400px]">
      <article
        className="bg-red-500 w-20 aspect-square absolute bottom-0 right-0"
        onClick={handleClick}
      ></article>
      <article
        id="chat-bot"
        className=" bg-gray-500 rounded-md transition-all duration-300 ease-in-out h-full z-10 relative"
      >
        <header className="flex justify-between px-2 h-[10%] items-center">
          <div>
            <img src="" alt="" />
            <p>Tu amigo</p>
          </div>
          <span className="text-xl mr-1 cursor-pointer" onClick={handleClick}>
            x
          </span>
        </header>
        <section className="h-[80%] pt-2 bg-white dark:bg-gray-700 shadow-inner flex flex-col gap-3 px-4">
          <p className="max-w-[60%] w-fit text-wrap  p-2 rounded-lg bg-gray-400 text-black">
            Hola, ¿Como puedo ayudarte hoy?
          </p>
          <p className="max-w-[60%] w-fit text-wrap  p-2 rounded-lg bg-gray-200 text-black self-end">
            ¿Como puedes ayudarme?
          </p>
        </section>
        <section className="h-[10%] flex">
          <textarea className="h-full w-full resize-none rounded-bl-md outline-none text-black pt-2 px-2 leading-tight bg-gray-200" />
          <button className="bg-gray-900 w-20 rounded-br-md line-h">
            Enviar
          </button>
        </section>
      </article>
    </aside>
  );
}
