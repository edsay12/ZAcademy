"use client";
import Card from "@/components/Card/Card";
import CardBotton from "@/components/Card/CardBotton";
import CardContainer from "@/components/Card/CardContainer";
import CardTop from "@/components/Card/CardTop";
import SectionContainer from "@/components/Section/SectionContainer";
import { useQuery, useQueryClient } from "react-query";

import { courseService } from "@/services/courses";
import { Suspense, useEffect, useState } from "react";
import { Course, User } from "@/app/api/courses/all/route";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
import { staredCourse } from "@/services/stared";
const array = [1, 2, 3];

type staredCourses = {
  course: Course;
  user: User;
};

function Stared() {
  const session = useSession();
  const userId = session.data?.user.id;
  const queryClient = useQueryClient();

  const { data: couseApiData = [] as Course[], isLoading } = useQuery<Course[]>(
    {
      queryKey: ["staredCourses"],
      queryFn: () =>
        courseService.getStaredCourses({
          userId: userId!,
        }),
      enabled: !!userId,
      cacheTime: 0, // Desativa o cache
      staleTime: 0,
    }
  );

  const [stared, setStared] = useState<Course[]>([]);

  useEffect(() => {
    if (!isLoading) {
      setStared(couseApiData);
    }
  }, [isLoading]);

  function removeStared(courseId: string) {

    staredCourse
      .stared(userId!, courseId)
      .then(() => {
        setStared((prev) => prev.filter((item) => item.id !== courseId));
        queryClient.invalidateQueries(['stared']);
      })
      .catch((err) => {
        if (!userId) {
          return alert("faça login para continuar");
        }
        alert("Erro ao favoritar curso");
      });

    
  }

  return (
    <SectionContainer className="min-h-[500px] pb-5">
      {isLoading ? (
        <>
          <Loading isLoading />
        </>
      ) : (
        <>
          <CardContainer>
            {stared.length > 0 ? (
              stared.slice(0, 4).map((item) => {
                return (
                  <Suspense key={item.id} fallback={<Loading isLoading />}>
                    <Card key={item.id}>
                      <CardTop
                        url={`/course/${item.id}`}
                        courseId={item.id}
                        courseImageUrl={item.image}
                        instructorName={item.user.name!}
                        userImageUrl={item.user.image!}
                        staredItens={[item.id]}
                        toogleStared={() => removeStared(item.id)}
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
              })
            ) : (
              <p>
                Nada aqui ainda adicione itens aos seus favoritos para continuar
              </p>
            )}
          </CardContainer>
        </>
      )}
    </SectionContainer>
  );
}
/// mostrar apenas cursos stared pelo usuario
export default Stared;
