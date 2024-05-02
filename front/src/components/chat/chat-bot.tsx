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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      (
        (e.target as HTMLTextAreaElement)?.nextSibling as HTMLButtonElement
      )?.click();
      return;
    } else if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.value += "\n";
    }
  };

  return (
    <aside className="fixed right-4 bottom-8 h-[400px]">
      <article
        className="cursor-pointer w-14 aspect-square absolute bottom-0 right-3"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#597e8d"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z" />
          <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
        </svg>
      </article>
      <article
        id="chat-bot"
        className=" bg-gray-400 rounded-md transition-all duration-500 ease-in-out h-full z-10 relative translate-x-[150%] shadow-2xl"
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
        <section className="h-[80%] pt-2 bg-white dark:bg-gray-300 shadow-inner flex flex-col gap-3 px-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`max-w-[60%] w-fit text-wrap dark:text-white  p-2 rounded-lg bg-gray-400 text-black ${
                msg.from === "user" ? "self-end" : ""
              }`}
            >
              {msg.label}
            </p>
          ))}
        </section>
        <form className="h-[10%] flex" onSubmit={handleNewMessage}>
          <textarea
            className="w-full resize-none rounded-bl-md outline-none dark:text-white text-black pt-2 px-2 leading-tight dark:bg-gray-500 bg-gray-200"
            onKeyDown={handleKeyDown}
            name="textarea"
          />
          <button className="dark:bg-gray-900 bg-gray-400 w-20 rounded-br-md line-h">
            Enviar
          </button>
        </form>
      </article>
    </aside>
  );
}
