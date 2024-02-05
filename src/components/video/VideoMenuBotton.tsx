import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import VideoMenuButton from "./VideoMenuButton";
import BreadCrumb from "../BreadCrumb";
import { ReactNode } from "react";

function VideoMenuBotton({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 pt-2 pb-2 p-5">
      <div className="max-w-[1460px] mx-auto flex items-center w-full min-h-14 gap-5 p-5 flex-wrap  ">
        {children}
        
      </div>
    </div>
  );
}

export default VideoMenuBotton;
