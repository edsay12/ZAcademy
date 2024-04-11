import { ReactNode } from "react";
import MainSideBar from "./_components/main-sidebar";
import { getServerSession } from "next-auth";
import { nextOptions } from "@/lib/auth";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(nextOptions);

  return (
    <div className="grid grid-cols-[16rem_1fr]  ">
      <MainSideBar user={session?.user} />
      <main className="border">{children}</main>
    </div>
  );
}
