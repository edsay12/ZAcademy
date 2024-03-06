"use client";
import {
  AiFillEdit,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";

import { MdNotificationsNone, MdOutlineAddBox } from "react-icons/md";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Logo from "../Logo";
import { LinkType } from "@/app/@types";
import LinkList from "../Link/LinkList";
import { Input } from "../Input";
import Button from "../Button";
import Link from "next/link";
import UserDropDown from "../userDropdown";
import UserDropdown from "../userDropdown";

function HomeNavbar() {
  const links: LinkType[] = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Seja um instrutor",
      path: "/work-with-us",
    },
  ];
  const [isNavOppen, setIsNavOppen] = useState<boolean>(false);
  const session = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsNavOppen((current) => !current);
  };

  const handdleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputValue = inputRef.current?.value;
    if (inputValue != "") {
      router.push(`/course/search?src=${inputValue}&page=1`);
    }
    //
    return;
  };

  return (
    <>
      <nav
        className={`flex items-center relative z-[1000000] top-0 left-0 right-0 pb-2 w-full bg-blue-700  shadow-md `}
      >
        <div
          className={`appcontainer  mx-auto h-24 relative  bg-blue-700    text-gray-400 flex justify-between items-center transition-all duration-300  `}
        >
          <>
            <div className="w-36 z-10">
              <Logo />
            </div>
            <div
              className="text-2xl cursor-pointer flex lg:hidden"
              onClick={toggleMenu}
            >
              {isNavOppen ? (
                <AiOutlineClose></AiOutlineClose>
              ) : (
                <AiOutlineMenu></AiOutlineMenu>
              )}
            </div>

            <div
              className={`mx-auto lg:flex  lg:static lg:flex-row  lg:z-auto -z-20 lg:ml-24 lg:items-center lg:justify-between lg:space-y-0 space-y-5 lg:pt-0 lg:p-0  absolute left-0 -z-1 p-5 pt-7 flex-col bg-blue-700   w-full transition-all ease-in ${
                isNavOppen ? "top-[100%]" : "top-[-490px]"
              }`}
            >
              <div className="">
                <LinkList
                  Links={links}
                  className="flex lg:flex-row lg:items-center flex-col  gap-6 "
                />
              </div>
              <div className="group">
                <form
                  onSubmit={(event) => handdleSubmit(event)}
                  className="flex gap-2  "
                >
                  <Input
                    placeholder="Procure por cursos"
                    type="Text"
                    ico={<AiOutlineSearch />}
                    autoComplete="off"
                    ref={inputRef}
                  />
                </form>
              </div>
              <div className="flex gap-10 items-center ">
                <div>
                  <div className="relative">
                    <Link href={"/cart"} className="text-2xl text-white">
                      <AiOutlineShoppingCart />
                    </Link>
                    <div className=" absolute w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white -top-1 -right-2">
                      2
                    </div>
                  </div>
                </div>

                {session.data?.user ? (
                  <>
                    <div className="w-14 bg-transparent">
                      <UserDropdown/>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="w-14 bg-transparent">
                      <Link href={"/auth?type=signup"} className="text-white">
                        Cadastrar
                      </Link>
                    </div>
                    <div className="w-32 w-50">
                      <Link
                        href={"/auth"}
                        className="text-white p-4 font-bold pl-7 pr-7 rounded-full bg-yellow-700 "
                      >
                        Entrar
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
