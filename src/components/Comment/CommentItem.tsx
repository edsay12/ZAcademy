import Image from "next/image";
import { useState } from "react";
import FormateDateDifference from "../../../utils/FormateDateDifference";
import CommentReplyInput from "./CommentReplyInput";

// type Responses = {
//   idUsuario: string;
//   nome: string;
//   dataDeCriacao: string;
//   resposta: string;
// };

type PropTypes = {
  id: string;
  idUsuario: string;
  nome: string;
  dataDeCriacao: string;
  comentario: string;
};

function CommentItem({
  comentario,
  dataDeCriacao,
  id,
  idUsuario,
  nome,
}: PropTypes) {
  const [isOppen, setIsOppen] = useState<boolean>(false);
  const [isReplyOppen, setIsReplyOppen] = useState<boolean>(false);
  const handdleReplyOppen = () => {
    setIsReplyOppen((reply) => !reply);
  };
  const handdleOppen = () => {
    setIsOppen((state) => !state);
  };
  return (
    <article className="p-6 text-base  rounded-lg   relative ">
      <footer className="flex justify-between items-center mb-2 ">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
            <Image
              width={100}
              height={100}
              className="mr-2 w-6 h-6 rounded-full"
              src="/carduser.jpeg"
              alt="Michael Gough"
            />
            {nome}
          </p>
          <p className="text-sm text-gray-600 ">
            <time title="February 8th, 2022">
              {FormateDateDifference(dataDeCriacao)}
            </time>
          </p>
        </div>

        <button
          id="dropdownComment1Button"
          onClick={handdleOppen}
          data-dropdown-toggle="dropdownComment1"
          className={`${
            isOppen ? "z-20" : ""
          } absolute top-5 right-5  p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 `}
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          id="dropdownComment1"
          className={` ${
            !isOppen && "hidden"
          } absolute top-10 right-10  z-20 w-36 bg-white rounded divide-y divide-gray-100 shadow  `}
        >
          <ul
            className="py-1 text-sm text-gray-700 0"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 0 ">
                Edit
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100  ">
                Remove
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100  ">
                Report
              </a>
            </li>
          </ul>
        </div>
        {/* overlay */}
        <div
          className={`${
            !isOppen && "hidden"
          } fixed top-0 left-0 bottom-0 right-0  z-10 `}
          onClick={() => handdleOppen()}
        ></div>
      </footer>
      <p className="text-gray-500 ">{comentario}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          onClick={handdleReplyOppen}
          className="flex items-center text-sm text-gray-500 hover:underline  font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
      <CommentReplyInput
        isCommentReplyoppen={isReplyOppen}
        handdleReplyOppen={handdleReplyOppen}
      />
    </article>
  );
}

export default CommentItem;
