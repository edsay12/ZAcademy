import {
  AiFillStar,
  AiOutlineCar,
  AiOutlineClockCircle,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Divider from "../Divider";
import Button from "../Button";

type PropTypes = {
  courseId:number;
  courseTitle: string;
  courseLevel: "Beginner" | "Intermediate" | "Advance";
  courseTotalTime: string;
  courseStarNumber: 1 | 2 | 3 | 4 | 5;
  coursePrice: string;
  textColor?: string;
};

function CardBotton({
  courseTitle,
  courseLevel,
  coursePrice,
  courseStarNumber,
  courseTotalTime,
  textColor,
  courseId,
}: PropTypes) {
  return (
    <div className={`p-6 text-black shadow-2xl ${textColor}`}>
      <h3 className=" font-bold text-xl opacity-75">{courseTitle}</h3>
      <div className="flex mt-4 opacity-50 gap-4">
        <div className="flex gap-1 text-xs items-center">
          <span className="text-base">
            <AiOutlineUser />
          </span>
          <span>{courseLevel}</span>
        </div>
        <div className="flex gap-1 text-xs items-center">
          <span className="text-base">
            <AiOutlineClockCircle />
          </span>
          <span>{courseTotalTime}</span>
        </div>
        <div className="flex gap-1 text-xs items-center">
          <span className="text-yellow-500 text-base">
            <AiFillStar />
          </span>
          <span>{courseStarNumber}</span>
        </div>
      </div>

      <hr className="mt-6" />

      <div className="flex justify-between items-center mt-1">
        <div className="text-lg font-extrabold">
          <span>$</span> {coursePrice}
        </div>

        {/* Criar um button melhor */}
        <button
          title="button"
          className="text-yellow-700 flex gap-1 items-center text-lg hover:text-red-400"
        >
          <span className="">
            <AiOutlineShoppingCart />
          </span>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default CardBotton;
