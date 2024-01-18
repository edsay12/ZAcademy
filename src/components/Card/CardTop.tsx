import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

type PropTypes = {
  courseImageUrl: string;
  userImageUrl: string;
  userName: string;
};

function CardTop({ courseImageUrl, userImageUrl, userName }: PropTypes) {
  return (
    <div className="relative">
      <Image
        src={courseImageUrl}
        alt="Course image"
        width={100}
        height={50}
        className="w-full  rounded-t-3xl"
      />

      <Link
        href={""}
        className="flex items-center gap-3 absolute bottom-5 left-4 "
      >
        <Image
          src={userImageUrl}
          alt="Course mentor"
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
        />

        <p>{userName}</p>
      </Link>

      <div className="absolute top-5 right-4 bg-orange-600 w-12 h-12 flex items-center justify-center rounded-full text-xl cursor-pointer hover:opacity-85">
        <AiOutlineHeart />
      </div>
    </div>
  );
}

export default CardTop;
