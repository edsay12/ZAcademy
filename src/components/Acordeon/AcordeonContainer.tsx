"use client";
import { AcordeaoData } from "@/app/@types";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type PropTypes = {
  children: React.ReactNode;
  title: string;
};

function AcordeonItem({ children, title }: PropTypes) {
  const [open, setIsOppen] = useState(false);
  const toggle = () => {
    setIsOppen((open) => !open);
  };
  return (
    <div className="flex flex-col ">
      <div
        className="flex justify-between items-center border rounded-lg bg-gray-100 p-4 pb-5 shadow-xl text-black cursor-pointer"
        onClick={toggle}
      >
        <h6>{title}</h6>
        <span className="text-xl">
          {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </div>
      {/* colapse */}
      <div
        className={`transition-all duration-100  overflow-hidden  border-gray-300  flex flex-col gap-5  text-black ${
          open ? "max-h-full border border-t-0 p-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default AcordeonItem;
