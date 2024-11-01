import Image from "next/image";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Description from "./Description";
import { PiStudentBold } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";
import { InstructorBasicDetails } from "@/app/@types";
import Link from "next/link";

function InstructorDetailsCard({
  id,
  assessmentsNumber = 0,
  classification = 0,
  courcesNumber = 0,
  description = "/cardUser.jpeg",
  image = "",
  name = "",
  role = "",
  roleType = "",
  studentsNumber = 0,
}: InstructorBasicDetails) {
  const instructorMoreDetails = [
    {
      icon: <FaStar />,
      text: classification + " " + "Classificação do instrutor",
    },
    {
      icon: <AiOutlineSafetyCertificate />,
      text: assessmentsNumber + " " + "Avaliações",
    },
    {
      icon: <PiStudentBold />,
      text: studentsNumber + " " + "Alunos",
    },
    {
      icon: <FaCirclePlay />,
      text: courcesNumber + " " + "Cursos",
    },
  ];

  return (
    <div className="w-full text-black">
      <div className="space-y-2 text-black">
        <Link
          href={`/instructor/${id}`}
          className="text-bold text-blue-500 underline block "
        >
          {name}
        </Link>
        <p className=" text-black ">{roleType}</p>
      </div>

      <div className=" flex gap-5 mt-2">
        <Link href={`/instructor/${id}`}>
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full"
          />
        </Link>
        <ul>
          {instructorMoreDetails.map((details) => (
            <li
              className="flex items-center gap-3 text-xs md:text-sm"
              key={details.text}
            >
              <span>{details.icon}</span>
              <span>{details.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Description>{description}</Description>
      </div>
    </div>
  );
}

export default InstructorDetailsCard;
