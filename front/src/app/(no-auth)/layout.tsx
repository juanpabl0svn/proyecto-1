import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();

  const user = cookieStore.get("comultrasan")?.value;

  if (user) {
    return redirect("/");
  }

  return children;
}
