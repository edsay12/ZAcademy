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

  const handdleSize = () => {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener("resize", handdleSize);
    }
    return () => {
      removeEventListener("resize", handdleSize); // CleanerUp
    };
  }, []);

  return (
    <>
      <header className="bg-blue-700">
        <TopBar setShowNav={setShowNav} showNav={showNav} />
        <Banner/>
      </header>
      <div className="">{children}</div>
    </>
  );
}
