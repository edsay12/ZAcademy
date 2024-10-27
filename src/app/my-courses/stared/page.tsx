"use client";
import Card from "@/components/Card/Card";
import CardBotton from "@/components/Card/CardBotton";
import CardContainer from "@/components/Card/CardContainer";
import CardTop from "@/components/Card/CardTop";
import SectionContainer from "@/components/Section/SectionContainer";
import { useQuery } from "react-query";

import { courseService } from "@/services/courses";
import { Suspense } from "react";
import { Course, User } from "@/app/api/courses/all/route";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";
const array = [1, 2, 3];

type staredCourses = {
  course:Course,
  user:User
}

function Stared() {
  const session = useSession();
  const userId = session.data?.user.id;
  const { data: couseApiData = [], isLoading } = useQuery<staredCourses[]>({
    queryKey: ["userStared"],
    queryFn: () =>
      courseService.getStaredCourses({
        userId: userId!,
      }),
    enabled: !!userId,
  });


  return (
    <SectionContainer className="min-h-[500px] pb-5">
      {isLoading ? (
        <>
          <Loading isLoading />
        </>
      ) : (
        <>
          <CardContainer>
            {couseApiData.length > 0 &&
              couseApiData.slice(0, 4).map((item: staredCourses) => {
                return (
                  <Suspense key={item.course.id} fallback={<Loading isLoading />}>
                    <Card key={item.course.id}>
                      <CardTop
                        url={`/course/${item.course.id}`}
                        courseId={item.course.id}
                        courseImageUrl={item.course.image}
                        instructorName={item.user.name!}
                        userImageUrl={item.user.image!}
                        stareds={item.course.Stared}
                      />
                      <CardBotton
                        courseId={item.course.id}
                        courseLevel={item.course.level}
                        coursePrice={item.course.price}
                        textColor="text-black"
                        courseStarNumber={item.course.starNumber}
                        courseTitle={item.course.title}
                        courseTotalTime={10}
                      />
                    </Card>
                  </Suspense>
                );
              })}
          </CardContainer>
        </>
      )}
    </SectionContainer>
  );
}
/// mostrar apenas cursos stared pelo usuario
export default Stared;
