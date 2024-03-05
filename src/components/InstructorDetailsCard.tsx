import Image from "next/image";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Description from "./Description";
import { PiStudentBold } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";
import { InstructorBasicDetails } from "@/app/@types";



function InstructorDetailsCard({
  id,
  assessmentsNumber,
  classification,
  courcesNumber,
  description,
  image,
  name,
  role,
  roleType,
  studentsNumber,
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
        <a
          href={`/instructor/${id}`}
          className="text-bold text-blue-500 underline block "
        >
          {name}
        </a>
        <p className=" text-black ">{roleType}</p>
      </div>

      <div className=" flex gap-5 mt-2">
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        />
        <ul>
          {instructorMoreDetails.map((details) => (
            <li className="flex items-center gap-3 text-xs md:text-sm" key={details.text}>
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
