import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

type PropTypes = {
  bgImageUrl: string;
  userImageUrl: string;
  userName: string;
};

function CardTop({ bgImageUrl, userImageUrl, userName }: PropTypes) {
  return (
    <div>
      <Image
        src={bgImageUrl}
        alt="Course image"
        width={100}
        className="w-full"
      />
      <div className="flex gap-3">
        <Image src={userImageUrl} alt="Course mentor"  width={50} className="w-8"/>
        <p>{userName}</p>
      </div>
      <div>
        <AiOutlineHeart />
      </div>
    </div>
  );
}

export default CardTop;
