import type { Metadata } from "next";
import HomeNavbar from "@/components/layout/HomeNavbar";
import Footer from "@/components/layout/Footer";

import { CatergoriesLinkTypes, LinkType } from "../@types";
import SectionContainer from "@/components/Section/SectionContainer";
import CategoriesLinkButtons from "@/components/CategoriesLinkButtons/CategoriesLinkButtons";

export const metadata: Metadata = {
  title: "instrutor",
  description: "pagina do instrutor",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNavbar />

      {children}
      <Footer />
    </>
  );
}
