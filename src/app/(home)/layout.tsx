"use client";
import type { Metadata } from "next";

import TopBar from "@/components/layout/HomeNavbar";
import { useEffect, useState } from "react";
import Banner from "@/components/layout/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  


  return (
    <>
      <header className="bg-blue-700">
        <TopBar />
        <Banner/>
      </header>
      <main className="">{children}</main>
    </>
  );
}
