"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import UserIcon from "../icons/user.icon";
import { useUserContext } from "@/context/user.context";
import { useEffect, useState } from "react";
import LogIn from "../login/login";
import Modal from "./modal";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { isLoggedIn, logOut, user } = useUserContext();

  const [showLogin, setShowLogin] = useState(false);

  const path = usePathname();

  const router = useRouter();

  useEffect(() => {
    let lastScroll = window.scrollY;

    const header = document.querySelector("#header");

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 140)
        return header?.classList.remove("-translate-y-full");

      if (currentScroll > lastScroll) {
        header?.classList.add("-translate-y-full");
      } else {
        header?.classList.remove("-translate-y-full");
      }

      lastScroll = currentScroll;
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  const handleLogOut = () => {
    logOut();
    document.cookie =
      "comultrasan=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    router.replace("/");
  };

  return (
    <>
      {showLogin && (
        <Modal onClick={() => setShowLogin(false)}>
          <LogIn onClick={() => setShowLogin(false)} />
        </Modal>
      )}
      <header
        id="header"
        className="fixed w-full transition-all duration-300 ease-in-out top-0 z-10 text-center"
      >
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
            <Link
              className={`text-gray-600 ${
                path === "/tournaments" ? "underline" : ""
              }`}
              href="/tournaments"
            >
              Torneos
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  className={`text-gray-600 ${
                    path === "/members" ? "underline" : ""
                  }`}
                  href="/members"
                >
                  Miembros
                </Link>
                <Link
                  className={`text-gray-600 ${
                    path === "/prizes" ? "underline" : ""
                  }`}
                  href="/prizes"
                >
                  Premios
                </Link>
              </>
            )}
            <Link
              className={`text-gray-600 `}
              href={path === "/" ? "/#convenios" : "/?id=convenios"}
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

            {user?.is_admin && (
              <>
                <Link
                  className={`text-gray-600 ${
                    path === "/tournaments-manager" ? "underline" : ""
                  }`}
                  href="/tournaments-manager"
                >
                  Administrar torneos
                </Link>
                <Link
                  className={`text-gray-600 ${
                    path === "/stastics" ? "underline" : ""
                  }`}
                  href="/stastics"
                >
                  Estadísticas
                </Link>
              </>
            )}
          </nav>
          <section className="flex items-center justify-end mr-2 flex-grow gap-3">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:underline"
              href="#"
            >
              {isLoggedIn && (
                <>
                  <UserIcon className="w-4 h-4" />
                  <p>{user?.name}</p>
                </>
              )}
            </Link>

            <Button
              size="sm"
              variant="outline"
              id="login"
              onClick={(e) =>
                !isLoggedIn ? setShowLogin(true) : handleLogOut()
              }
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </Button>
            {!isLoggedIn && (
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  if (path === "/register") return;
                  router.push("/register");
                }}
              >
                Register
              </Button>
            )}
          </section>
        </div>
      </header>
    </>
  );
}
