import type { Metadata } from "next";
import HomeNavbar from "@/components/layout/HomeNavbar";

export const metadata: Metadata = {
  title: "curso",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNavbar />
      {children}
    </>
  );
}
