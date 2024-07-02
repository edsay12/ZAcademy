"use client";
import SectionContainer from "@/components/Section/SectionContainer";
import Description from "@/components/Description";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import Button from "@/components/Button";
import { IoCellularOutline } from "react-icons/io5";
import { FaClock, FaRegClock, FaSignal } from "react-icons/fa";
import { FaArrowsSpin, FaRegCircleUser } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";

import AcordeonItem from "@/components/Acordeon/AcordeonContainer";
import { acordeaoData } from "@/fakeData/acordeaoData";
import InstructorDetailsCard from "@/components/InstructorDetailsCard";
import { fakeInstructors } from "@/fakeData/FakeInstructors";
import AcordeonBasicItem from "@/components/Acordeon/components/AcordeonBasicItem";
import { useRouter, useSearchParams } from "next/navigation";
import { Course as CourseType } from "@/app/api/courses/all/route";
import { useQuery } from "react-query";
import { courseService } from "@/services/courses";
import { useEffect, useState } from "react";

type PropType = {
  params: {
    id: string;
  };
};

function PulseLoadingCourse() {
  return (
    <div className="flex items-center xl:justify-between justify-center  xl:flex-nowrap flex-wrap-reverse w-full gap-20 ">
      <div className="animate-pulse flex flex-grow  gap-8 flex-col">
        <div className="h-28 bg-slate-700 rounded "></div>
        <div className="h-12 bg-slate-700 rounded "></div>
        <div className="h-5 bg-slate-700 rounded "></div>
        <div className="h-5 bg-slate-700 rounded "></div>
      </div>

      <div className=" xl:w-[500px] w-[900px]  rounded-lg overflow-hidden animate-pulse">
        <div className=" bg-slate-700 rounded col-span-2  p-40 block"></div>
      </div>
    </div>
  );
}

function Course({ params }: PropType) {
  const [courseData, setCourseData] = useState<CourseType>();
  const router = useRouter();
  const {
    data: couseApiData = [],
    isLoading,
    error,
  } = useQuery<CourseType[]>({
    queryKey: ["courses"],
    queryFn: () => courseService.getCourseById({ id: params.id }),
  });

  useEffect(() => {
    if (!isLoading) {
      setCourseData(couseApiData[0]);
      if (typeof couseApiData[0] === "undefined") {
        router.push("/404");
      }
    }
    console.log(typeof couseApiData[0] === "undefined");
  }, [isLoading, couseApiData, router]);

  return (
    <>
      <SectionContainer className="bg-blue-700 mt-0 pt-14 pb-14 ">
        {isLoading ? (
          <PulseLoadingCourse />
        ) : (
          <div className="flex items-center xl:justify-between justify-center  xl:flex-nowrap flex-wrap-reverse ">
            <div className="flex flex-col gap-5">
              <h1 className="xl:text-[42px] xl:mt-0 text-3xl mt-5 font-bold max-w-[900px] leading-snug">
                {courseData && courseData.title}
              </h1>
              <p className="xl:text-xl text-base max-w-[800px] leading-5">
                {courseData && courseData.subtitle}
              </p>
              <div className="flex gap-2 xl:text-base text-sm ">
                <div className="flex items-center gap-2 text-yellow-400">
                  <span>{courseData && courseData.starNumber}</span>
                  <span className="flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <a href="#" className="text-blue-800 underline">
                  (1.702 classificações)
                </a>
                <span>{courseData && courseData.studentsNumber} alunos</span>
              </div>
              <div>
                <span>Criado por:</span>
                <Link href={"/user/1231"} className="text-blue-800 underline">
                  {" "}
                  {courseData && courseData.user.name}
                </Link>
              </div>
            </div>

            <div className="xl:max-w-[500px] max-w-[900px] rounded-lg overflow-hidden">
              <video
                src={courseData && courseData.presentationVideo}
                controls
              ></video>
            </div>
          </div>
        )}
      </SectionContainer>

      <SectionContainer className="mb-20 relative">
        <div className="grid  grid-cols-2 lg:grid-cols-4  mx-auto gap-5 relative">
          {/* leftside */}
          <div className="col-span-3 lg:max-w-[900px] w-full mt-28 lg:mt-0 ">
            <div className="p-5">
              {isLoading ? (
                <div className="w-full h-[200px] animate-pulse bg-slate-400 rounded text-black"></div>
              ) : (
                <Description title="Visão geral do curso">
                  {courseData ? courseData.description.toString() : ""}
                </Description>
              )}
            </div>
            <div className="p-5">
              <div>
                <h3 className="font-bold text-black text-lg mb-5">Conteudo</h3>
              </div>
              {courseData?.Module.map((item) => {
                return (
                  <AcordeonItem key={item.id} title={item.title}>
                    {item.Class.map((item) => {
                      return (
                        <AcordeonBasicItem
                          key={item.id}
                          itemId={item.id}
                          itemTitle={item.title}
                        />
                      );
                    })}
                  </AcordeonItem>
                );
              })}
            </div>

            <div className="p-5">
              <div>
                <h3 className="font-bold text-black text-lg mb-5">Instrutor</h3>
              </div>
              <InstructorDetailsCard
                image={courseData?.user.image || "/cardUser.jpeg"}
                classification={5}
                courcesNumber={courseData?.user._count.Course || 0}
                description={
                  courseData?.user.bio ||
                  "Apaixonado por desvendar os mistérios dos números e equações. Ela acredita que a matemática não é apenas uma disciplina acadêmica, mas também uma ferramenta poderosa para resolver problemas do mundo real. Com um sorriso caloroso, ela guia seus alunos através de conceitos complexos, tornando-os acessíveis e interessantes. Nos fins de semana, você pode encontrá-la explorando trilhas de montanha ou resolvendo quebra-cabeças matemáticos desafiadores. entusiasta da matemática, apaixonada por desvendar os mistérios dos números e equações. Ela acredita que a matemática não é apenas uma disciplina acadêmica, mas também uma ferramenta poderosa para resolver problemas do mundo real. Com um sorriso caloroso, ela guia seus alunos através de conceitos complexos, tornando-os acessíveis e interessantes. Nos fins de semana, você pode encontrá-la explorando trilhas de montanha ou resolvendo quebra-cabeças matemáticos desafiadores."
                }
                id={courseData?.user.id || ""}
                name={courseData?.user.name || ""}
                studentsNumber={10}
                role="Instructor"
                roleType="Tech Teacher"
                assessmentsNumber={0}
              />
            </div>
          </div>
          {/* righttside */}
          <div className=" flex flex-col gap-5 ">
            <div className="w-full border border-gray-300 rounded-md p-4 pb-5 shadow-xl lg:static absolute bg-white -top-[120px]  ">
              <h3 className="font-bold text-3xl text-black">
                {(courseData ? courseData?.price : 0).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <div className="">
                <Button
                  text="Comprar agora"
                  className="bg-blue-700"
                  onClick={() => router.push("/my-courses/all")}
                ></Button>
                <Button
                  text="Adicionar ao carrinho"
                  className="bg-yellow-700 mb-0"
                  onClick={() => router.push("/cart")}
                ></Button>
              </div>
            </div>
            <div className="w-full border border-gray-300 rounded-md p-4 pb-5 shadow-xl hidden lg:block ">
              <h5 className="text-black font-bold">Detalhes do curso</h5>
              <ul className="mt-5 font-medium space-y-2">
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaSignal />
                  </span>
                  {courseData ? courseData.level : ""}
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaRegClock />
                  </span>
                  5 horas de duração
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaRegCircleUser />
                  </span>
                  Comunidade privada
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaArrowsSpin />
                  </span>
                  Acesso vitalicio
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <PiCertificateBold />
                  </span>
                  Certificado de conclusão
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Course;
