"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { useEffect, useState } from "react";

function Pagination({ numberOfPages }: { numberOfPages: number }) {
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [maxPagelimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);
 
  
  // se o numero de paginas mudar redireciona para a pagina 01
  useEffect(()=> {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("page", '1');
    router.push(`${pathName}?${current}`);
    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[numberOfPages] )

  const pages = [...Array(numberOfPages)].map(function () {
    return 0;
  });

  const currentPage = Number(params.get("page") ?? '1');

  // Atualizar o parâmetro page
  const updatePage = (page: number) => {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set("page", page.toString());
    router.push(`${pathName}?${current}`);
    // next
    if (page + 1 > maxPagelimit) {
      setMaxPageLimit(maxPagelimit + 1);
      setMinPageLimit(minPageLimit + 1);
    }
    //pre

    if (page < currentPage) {
      if (currentPage +2 <= 6) {
        return;
      }
      setMaxPageLimit(maxPagelimit - 1);
      setMinPageLimit(minPageLimit - 1);
    }
  };

  return (
    <>
      <nav>
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            {/* preview Button */}

            <button
              title="voltar"
              disabled={currentPage === 1}
              onClick={() => updatePage(currentPage - 1)}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight  text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <IoIosArrowBack />
            </button>
          </li>

          {pages.map((_, index) => {
            if (index + 1 <= maxPagelimit && index + 1 > minPageLimit) {
              return (
                <li key={index}>
                  <button
                    title={`pagina ${index + 1}`}
                    onClick={() => updatePage(index + 1)}
                    className={`${
                      currentPage == index + 1 &&
                      "bg-blue-600 hover:bg-blue-700 text-white hover:text-white"
                    } flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            } else {
              return null;
            }
          })}

          <li>
            <button
              disabled={currentPage >= numberOfPages}
              onClick={() => updatePage(currentPage + 1)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Proximo</span>
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
