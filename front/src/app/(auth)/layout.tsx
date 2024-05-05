"use client";

import { useUserContext } from "@/context/user.context";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user,isLoggedIn } = useUserContext();

  const router = useRouter();

  if (!isLoggedIn) return router.replace("/");

  return children;
}
