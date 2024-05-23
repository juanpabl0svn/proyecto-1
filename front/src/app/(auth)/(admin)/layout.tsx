"use client";

import { useUserContext } from "@/context/user.context";

import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUserContext();


  const router = useRouter();

  if (!user?.is_admin) {
    return router.replace("/");
  }

  return children;
}
