"use client";

import { useUserContext } from "@/context/user.context";

const $ = (selector: string) => document.querySelector(selector);

export default function ChatBot() {
  const { messages, addMessage } = useUserContext();

  const handleClick = () => {
    const chat = $("#chat-bot") as HTMLElement;
    chat.classList.toggle("translate-x-[150%]");
  };

  function handleNewMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = (
      (e.target as HTMLFormElement).textarea as HTMLTextAreaElement
    ).value;

    if (message.trim() === "") return;

    const newMessage = {
      label: message,
      from: "user",
      to: "admin",
    };

    addMessage(newMessage);

    ((e.target as HTMLFormElement).textarea as HTMLTextAreaElement).value = "";
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e);
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      (
        (e.target as HTMLTextAreaElement)?.nextSibling as HTMLButtonElement
      )?.click();
    }
  };

  return (
    <aside className="fixed right-6 bottom-8 h-[400px]">
      <article
        className="bg-red-500 w-20 aspect-square absolute bottom-0 right-5"
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
        <section className="h-[80%] pt-2 bg-white dark:bg-gray-700 shadow-inner flex flex-col gap-3 px-4 overflow-y-auto">
          {/* <p className="max-w-[60%] w-fit text-wrap  p-2 rounded-lg bg-gray-400 text-black">
            Hola, ¿Como puedo ayudarte hoy?
          </p>
          <p className="max-w-[60%] w-fit text-wrap  p-2 rounded-lg bg-gray-200 text-black self-end">
            ¿Como puedes ayudarme?
          </p> */}
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`max-w-[60%] w-fit text-wrap  p-2 rounded-lg bg-gray-400 text-black ${
                msg.from === "user" ? "self-end" : ""
              }`}
            >
              {msg.label}
            </p>
          ))}
        </section>
        <form className="h-[10%] flex" onSubmit={handleNewMessage}>
          <textarea
            className="w-full resize-none rounded-bl-md outline-none text-black pt-2 px-2 leading-tight bg-gray-200"
            onKeyUp={handleKeyUp}
            name="textarea"
          />
          <button className="bg-gray-900 w-20 rounded-br-md line-h">
            Enviar
          </button>
        </form>
      </article>
    </aside>
  );
}
