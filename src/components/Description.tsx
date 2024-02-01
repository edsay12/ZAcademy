"use client";
import { AiFillPlaySquare, AiFillPlusSquare } from "react-icons/ai";
import Button from "./Button";
import { FaLess, FaMinus, FaPlus } from "react-icons/fa";
import { LegacyRef, useEffect, useRef, useState } from "react";

type proptypes = {
  title?: string;
  children: string;
};

function Description({ children, title  }: proptypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setShowReadMoreButton(
      descriptionRef.current?.scrollHeight !=
        descriptionRef.current?.clientHeight
    );
  }, [children]);

  const toogleDescription = () => {
    setIsOpen((state) => !state);
  };
  console.log(title);
  return (
    <>
      <div className="w-full pt-0">
        {title && (
          <div>
            <h3 className="text-3xl text-gray-800 font-bold">{title}</h3>
          </div>
        )}

        <div
          className={`  w-full mt-5 text-gray-600 ${
            isOpen ? " " : "line-clamp-6"
          } transition-all ease-in-out duration-500`}
        >
          <p className="text-justify" ref={descriptionRef} >
            {children}
          </p>
        </div>
        {showReadMoreButton && (
          <div
            className={` ${!isOpen && "bg-gradient-to-b to-white from-transparent"}  z-50 h-32 flex items-end -mt-20 relative`}
          >
            <button
              className="text-black mt-5 flex items-center gap-2 "
              onClick={toogleDescription}
            >
              <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
              {isOpen ? "Mostrar menos" : "Mostrar mais"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Description;
