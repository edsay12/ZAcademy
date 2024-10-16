"use client";
import Description from "@/components/Description";
import SectionContainer from "@/components/Section/SectionContainer";
import Image from "next/image";
import { useQuery } from "react-query";
import { Course } from "../../../../prisma/generated/client";
import { courseService } from "@/services/courses";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import CardContainer from "@/components/Card/CardContainer";
import Card from "@/components/Card/Card";
import CardTop from "@/components/Card/CardTop";
import CardBotton from "@/components/Card/CardBotton";
import { userServices } from "@/services/user";
import { User } from "@/app/api/users/[id]/route";
import { useParams, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

type PropType = {
  params: {
    id: string;
  };
};

function Instructor({ params }: PropType) {

    

  const { data: couseApiData = [], isLoading } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: courseService.getAllCourses,
  });

  const { data: userApiData, isLoading: isUserLoading } = useQuery<User>({
    queryKey: ["instructor"],
    queryFn: () => userServices.getUser({ id: params.id }),
  });
  const seachParams = useSearchParams();
  const [userCourses,setUserCourses] = useState<Course[]>([])
  
  const itensPerPage = 4;
  const currentPages = Number(seachParams.get("page") ?? "1"); // current page
  const start = (currentPages - 1) * itensPerPage;
  const final = start + itensPerPage;
  let paginationItens: Course[] = [];
  
  

  const numberOfPages = Math.ceil(couseApiData.length  / itensPerPage);

  paginationItens = couseApiData.slice(start, final);

  return (
    <div>
      <SectionContainer className="mt-5 mb-5 flex  ">
        <div className="flex flex-col-reverse gap-5 lg:flex-row  justify-between max-w-[1000px] mx-auto flex-wrap">
          <div className="flex-1 max-w-[800px]">
            <p className="text-gray-500 uppercase text-xs font-medium">
              Instrutor
            </p>
            <h3 className="text-3xl font-bold text-black ">
              {userApiData?.name}
            </h3>
            <p className="mt-3 text-black font-medium">Tech Teacher</p>
            <div className="flex mt-5 text-gray-500 font-bold gap-5">
              <div>
                <p>Total de alunos</p>
                <span className="text-black text-xl">142.373</span>
              </div>
              <div>
                <p>Avaliações</p>
                <span className="text-black text-xl">50.404</span>
              </div>
            </div>

            <div>
              <Description>{userApiData?.bio || ""}</Description>
            </div>

            <div>
              <p className="text-black text-lg font-medium mt-8">
                Meus cursos (52)
              </p>
            </div>

            <div className="mt-5 w-full ">
              {isLoading ? (
                <>
                  <Loading isLoading />
                </>
              ) : (
                <>
                  <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    {paginationItens.length > 0 &&
                      paginationItens.slice(0, 4).map((item: Course) => {
                        return (
                          <Suspense
                            key={item.id}
                            fallback={<Loading isLoading />}
                          >
                            <Card key={item.id}>
                              <CardTop
                                url={`/course/${item.id}`}
                                courseId={item.id}
                                courseImageUrl={item.image}
                                instructorName={item.user.name!}
                                userImageUrl={item.user.image!}
                              />
                              <CardBotton
                                courseId={item.id}
                                courseLevel={item.level}
                                coursePrice={item.price}
                                textColor="text-black"
                                courseStarNumber={item.starNumber}
                                courseTitle={item.title}
                                courseTotalTime={10}
                              />
                            </Card>
                          </Suspense>
                        );
                      })}

                    <div className="flex justify-center p-12 mx-auto w-full ">
                      <Pagination numberOfPages={numberOfPages} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <Image
              src={`${userApiData?.image || "/usuarioPadrao.jpg"}`}
              alt=""
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default Instructor;
