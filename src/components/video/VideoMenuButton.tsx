import React, {
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { IoIosArrowBack } from "react-icons/io";
type PropTypes = {
  icon: ReactNode;
  message: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function VideoMenuButton({ icon, message, ...rest }: PropTypes) {
  return (
    // <!-- Botão com Ícone e Tooltip -->
    <div className="group relative inline-block">
      <div
        data-tooltip="home-tooltip"
        className="invisible group-hover:visible  absolute -top-10 -left-3 z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
        {message}
      </div>
      <button
        className="text-black border border-gray-400 p-2 hover:bg-white hover:border-white"
        {...rest}
      >
        {icon}
      </button>
      {/* <!-- Tooltip --> */}
    </div>
  );
}

export default VideoMenuButton;
