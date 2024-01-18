import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  className?: string;
};

function Logo({ className }: PropTypes) {
  return (
    <Link href={"/"} >
      <Image src={logo} alt="Logo"  className={twMerge(className,'w-44')}/>
    </Link>
  );
}

export default Logo;
