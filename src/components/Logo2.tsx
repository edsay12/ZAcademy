import Image from "next/image";
import logo2 from "../../public/Logo2.png";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type PropTypes = {
  className?: string;
};

function Logo2({ className }: PropTypes) {
  return (
    <Link href={"/"} >
      <Image src={logo2} alt="Logo"  className={twMerge('w-44',className)}/>
    </Link>
  );
}

export default Logo2;
