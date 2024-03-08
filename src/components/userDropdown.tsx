import { Role } from "@prisma/client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function UserDropdown() {
  const [isOppen, setIsOppen] = useState(false);
  const session = useSession();
  const user = session.data?.user;
  

  const handdleToggle = () => {
    setIsOppen((state) => !state);
  };

  return (
    <>
      <div className="relative z-20    w-full h-full">
        <button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 "
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

        <div
          id="dropdownAvatar"
          className={`z-10   absolute top-8 right-0 ${
            isOppen ? "" : "hidden"
          }`}
        >
          <div className="mt-5  divide-y divide-gray-100 rounded-lg shadow w-44  dark:divide-gray-600 bg-gray-700">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user?.name}</div>
              <div className="font-medium truncate">{user?.email}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <Link
                  href="/user"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Perfil
                </Link>
              </li>

              <li>
                <Link
                  href="/my-courses"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Meus cursos
                </Link>
              </li>
              {user?.role === Role.INSTRUCTOR && (
                <li>
                  <Link
                    href="/deskboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Daskboard
                  </Link>
                </li>
              )}
            </ul>
            <div className="py-2">
              <a
                onClick={() => signOut()}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
        onMouseEnter={() => setIsOppen(false)}
      ></div>
    </>
  );
}

export default UserDropdown;
