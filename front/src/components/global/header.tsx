"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FlagIcon from "../icons/flag.icon";
import UserIcon from "../icons/user.icon";
import { useUserContext } from "@/context/user.context";
import { useState } from "react";
import LogIn from "../login/login";
import Modal from "./modal";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./theme-switch/theme-switch";

export default function Header({ isDarkMode }: { isDarkMode: boolean }) {
  const { isLoggedIn } = useUserContext();

  const [showLogin, setShowLogin] = useState(false);

  const path = usePathname();

  return (
    <>
      {showLogin && (
        <Modal onClick={() => setShowLogin(false)}>
          <LogIn onClick={() => setShowLogin(false)} />
        </Modal>
      )}
      <header className="bg-gray-700 body-font">
        <article className="flex items-center justify-between px-4 py-4 md:py-5">
          <ThemeSwitch isDarkMode={isDarkMode} />
          <section className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2 " href="/">
              <img src="/logo.png" alt="" className="mix-blend-multiply h-22 w-44" />
            </Link>
            <nav className="flex items-center space-x-2 text-sm font-medium tracking-wide">
              <Link
                className={`text-gray-100 ${path === "/" ? "underline" : ""}`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`text-gray-100 ${
                  path === "/members" ? "underline" : ""
                }`}
                href="/members"
              >
                Miembros
              </Link>
              <Link
                className={`text-gray-100 ${path === "" ? "underline" : ""}`}
                href="#"
              >
                Información
              </Link>
              <Link
                className={`text-gray-100 ${
                  path === "/calendar" ? "underline" : ""
                }`}
                href="/calendar"
              >
                Calendario
              </Link>
            </nav>
          </section>
          <section className="flex items-center space-x-4">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium text-gray-100 hover:underline"
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
              onClick={(e) => setShowLogin(true)}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </Button>
          </section>
        </article>
      </header>
    </>
  );
}
