import type { Metadata } from "next";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
  title: "Entre ou cadastre-se",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-screen h-screen bg-blue-700">{children}</div>;
}