"use client"
import { LinkType } from "@/app/@types";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CategoriesActiveLink({ name, path }: LinkType) {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <div key={name} className="  relative">
      <Link href={path} className="inline">
        {name}
      </Link>
      {isActive && <div className="w-full h-1 bg-yellow-700 absolute bottom-0"></div>}
    </div>
  );
}

export default CategoriesActiveLink;
