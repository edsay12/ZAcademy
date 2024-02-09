import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type PropTypes = {
  videoCoverImageUrl: string;
  videoTitle: string;
  VideoUrl: string;
};

function ActiveItem({ videoCoverImageUrl, videoTitle, VideoUrl }: PropTypes) {
  const path = usePathname();
  const isActive = VideoUrl === path;
  console.log(isActive);
  useEffect(() => {}, []);

  return (
    <>
      <Link
        href={VideoUrl}
        className={`p-5 hover:bg-blue-400 hover:bg-opacity-10    rounded-sm ${isActive && "bg-blue-400 bg-opacity-10"} flex gap-3 items-center w-full `}
      >
        <Image
          src={videoCoverImageUrl}
          alt=""
          width={100}
          height={100}
          className=""
        />
        <div className="line-clamp-2 w-full">{videoTitle}</div>
      </Link>
    </>
  );
}

export default ActiveItem;
