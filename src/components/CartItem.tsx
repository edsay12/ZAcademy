import Image from "next/image";
import Link from "next/link";
import { FaClock, FaStar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

type PropTypes = {
  courseId: number;
  courseTitle: string;
  courseImageUrl: string;
  instructorName: string;
  courseLevel: "Beginner" | "Intermediate" | "Advance";
  courseTotalTime: string;
  courseStarNumber: 1 | 2 | 3 | 4 | 5;
};

function CartItem({
  courseImageUrl,
  courseId,
  courseLevel,
  courseStarNumber,
  courseTitle,
  courseTotalTime,
  instructorName,
}: PropTypes) {
  return (
    <div className="border border-t-gray-400 flex items-center gap-2 mt-5 p-4 ">
      <div>
        <Link href={`/course/${courseId}`}>
          <Image
            alt="imagem do curso"
            src={courseImageUrl}
            width={100}
            height={100}
            className="max-w-[200pz]"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <h4 className="text-black font-medium">{courseTitle}</h4>
        <span className="text-black text-sm mb-2 mt-2">
          Por {instructorName}
        </span>
        <div className="flex gap-2 ">
          <span className="text-black text-sm flex items-center gap-2">
            <FaPerson />
            {courseLevel}
          </span>

          <span className="text-black text-sm flex items-center gap-2">
            <FaClock />
            {courseTotalTime}
          </span>
          <span className="text-black text-sm flex  items-center gap-2">
            <span className="text-yellow-400">
              <FaStar />
            </span>
            {courseStarNumber}
          </span>
        </div>
      </div>
      <div>
        <a href="" className="text-blue-500 underline">
          Remover
        </a>
      </div>
    </div>
  );
}

export default CartItem;
