"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FlagIcon from "../icons/flag.icon";
import UserIcon from "../icons/user.icon";
import { useUserContext } from "@/context/user.context";
import { useState } from "react";
import LogIn from "../login/login";
import Modal from "./modal";

export default function Header() {
  const { isLoggedIn } = useUserContext();

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <Modal onClick={() => setShowLogin(false)}>
          <LogIn onClick={() => setShowLogin(false)} />
        </Modal>
      )}
      <header className="bg-gray-700 body-font">
        <article className="container flex items-center justify-between px-4 py-4 md:py-6">
          <section className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2 " href="#">
              <FlagIcon className="h-6 w-6" />
              <span className="font-semibold tracking-tighter">
                Coop. Comultrasan
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-2 text-sm font-medium tracking-wide">
              <Link className="text-gray-100 underline" href="#">
                Home
              </Link>
              <Link className="text-gray-100" href="#">
                Services
              </Link>
              <Link className="text-gray-100" href="#">
                About
              </Link>
              <Link className="text-gray-100" href="#">
                Contact
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
