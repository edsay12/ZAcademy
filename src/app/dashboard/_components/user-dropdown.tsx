import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {Session} from 'next-auth'

type UserDropdownProps = {

  user:Session['user'] | undefined
}

function UserDropdown({user}:UserDropdownProps) {
  const [isOppen, setIsOppen] = useState(false);
  
  if(!user) return

  const handdleToggle = () => {
    setIsOppen((state) => !state);
  };

  return (
    <>
      <div className="relative z-20    w-full h-full">
        <div className="flex justify-between">
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex  text-sm   rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
            type="button"
            onClick={handdleToggle}
          >
            <span className="sr-only">Abrir menu de usuario</span>
            <Image
              className="w-8 h-8 rounded-full"
              src={`${user?.image ? `${user.image}` : `/usuarioPadrao.jpg`}`}
              alt="user photo"
              width={50}
              height={50}
            />
          </button>
          <div className="text-xs text-gray-900">
            <div>{user?.name}</div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>
        </div>

        <div
          id="dropdownAvatar"
          className={`z-10   absolute bottom-8 right-0 ${
            isOppen ? "" : "hidden"
          }`}
        >
          <div className="mt-5  divide-y divide-gray-100 rounded-lg shadow w-44   bg-gray-700">
            <div className="px-4 py-3 text-sm text-gray-900 ">
              <div>{user?.name}</div>
              <div className="font-medium truncate">{user?.email}</div>
            </div>
            
            <ul
              className="py-2 text-sm text-gray-700 "
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <Link
                  href="/user"
                  className="block px-4 py-2 hover:bg-gray-100 "
                >
                  Perfil
                </Link>
              </li>

              <li>
                <Link
                  href="/my-courses/all"
                  className="block px-4 py-2 hover:bg-gray-100 "
                >
                  Meus cursos
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <a
                onClick={() => signOut()}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 z-10  ${
          !isOppen && "hidden"
        }`}
        onClick={() => setIsOppen(false)}
      ></div>
    </>
  );
}

export default UserDropdown;
