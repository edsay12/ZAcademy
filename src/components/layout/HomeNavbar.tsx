import {
  AiFillEdit,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";

import { MdNotificationsNone, MdOutlineAddBox } from "react-icons/md";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

import Logo from "../Logo";
import { LinkType } from "@/app/@types";
import LinkList from "../Link/LinkList";
import { Input } from "../Input";
import Button from "../Button";



function HomeNavbar() {
  const [isNavOppen, setIsNavOppen] = useState<boolean>(false);
 

  

  const links: LinkType[] = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "cousers",
      path: "/courses",
    },
    {
      name: "pricing",
      path: "/pricing",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "blog",
      path: "/blog",
    },
  ];

  const toggleMenu = () => {
    setIsNavOppen((current) => !current);
  };

  return (
    <>
      <nav className={`flex items-center relative z-[1000000] top-0 left-0 right-0 w-full bg-blue-700  shadow-md `}>
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
              {isNavOppen ? <AiOutlineClose></AiOutlineClose>   : <AiOutlineMenu></AiOutlineMenu>}
              
            </div>

            <div
              className={`mx-auto lg:flex  lg:static lg:flex-row  lg:z-auto -z-20 lg:ml-24 lg:items-center lg:justify-between lg:space-y-0 space-y-5 lg:pt-0 lg:p-0  absolute left-0 -z-1 p-5 pt-7 flex-col bg-blue-700   w-full transition-all ease-in ${
                isNavOppen ? "top-[100%]" : "top-[-490px]"
              }`}
            >
              
              <div className="">
                <LinkList Links={links} className="flex lg:flex-row lg:items-center flex-col  gap-6 " />
              </div>
              <div>
                <Input
                  placeholder="Search Courses"
                  type="Text"
                  ico={<AiOutlineSearch />}
                  autoComplete="off"
                />
              </div>
              <div className="w-32 w-50">
                <Button text="Entrar" textColor="text-white" />
              </div>
            </div>
          </>
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
