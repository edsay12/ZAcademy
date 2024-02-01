import Image from "next/image";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Description from "./Description";
import { PiStudentBold } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";

type InstructorDetails = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  classification: number;
  assessmentsNumber: number;
  studentsNumber: number;
  courcesNumber: number;
};

function InstructorDetailsCard({
  id,
  assessmentsNumber,
  classification,
  courcesNumber,
  description,
  image,
  name,
  role,
  studentsNumber,
}: InstructorDetails) {
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
        <p className=" text-black ">{role}</p>
      </div>

      <div className="mt-3 flex gap-5 mt-2">
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          className="max-w-36 max-h-36 rounded-full"
        />
        <ul>
          {instructorMoreDetails.map((details) => (
            <li className="flex items-center gap-3" key={details.text}>
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
