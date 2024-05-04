"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FlagIcon from "../icons/flag.icon";
import UserIcon from "../icons/user.icon";
import { useUserContext } from "@/context/user.context";
import { useEffect, useState } from "react";
import LogIn from "../login/login";
import Modal from "./modal";
import { usePathname } from "next/navigation";

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  const { isLoggedIn, logOut } = useUserContext();

  const [showLogin, setShowLogin] = useState(false);

  const path = usePathname();

  useEffect(() => {
    let lastScroll = window.scrollY;

    const header = document.querySelector("#header");

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        header?.classList.add("-translate-y-full");
      } else {
        header?.classList.remove("-translate-y-full");
      }

      lastScroll = currentScroll;
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <>
      {showLogin && (
        <Modal onClick={() => setShowLogin(false)}>
          <LogIn onClick={() => setShowLogin(false)} />
        </Modal>
      )}
      <header id="header" className="fixed w-full transition-all duration-300 ease-in-out top-0">
        <div className="bg-white flex justify-end relative h-24 shadow-lg">
          <Link className="flex items-center flex-grow" href="/">
            <img src="/logo.png" alt="" className="h-22 w-44 " />
          </Link>
          <nav className="flex items-center gap-3 text-sm font-medium tracking-wide">
            <Link
              className={`text-gray-600 ${path === "/" ? "underline" : ""}`}
              href="/"
            >
              Home
            </Link>
            {isLoggedIn && (
              <Link
                className={`text-gray-600 ${
                  path === "/members" ? "underline" : ""
                }`}
                href="/members"
              >
                Miembros
              </Link>
            )}
            <Link
              className={`text-gray-600 ${path === "" ? "underline" : ""}`}
              href="/#convenios"
            >
              Convenios
            </Link>
            <Link
              className={`text-gray-600 ${
                path === "/calendar" ? "underline" : ""
              }`}
              href="/calendar"
            >
              Calendario
            </Link>
          </nav>
          <section className="flex items-center justify-end mr-2 flex-grow gap-3">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:underline"
              href="#"
            >
              {isLoggedIn && <UserIcon className="w-4 h-4" />}
              <span className="font-semibold tracking-tighter sm:hidden">
                Account
              </span>
            </Link>

            <Button
              size="sm"
              variant="outline"
              onClick={(e) => (!isLoggedIn ? setShowLogin(true) : logOut())}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </Button>
          </section>
        </div>
      </header>
    </>
  );
}
