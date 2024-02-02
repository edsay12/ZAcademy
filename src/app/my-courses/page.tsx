import Card from "@/components/Card/Card";
import CardBotton from "@/components/Card/CardBotton";
import CardContainer from "@/components/Card/CardContainer";
import CardTop from "@/components/Card/CardTop";
import SectionContainer from "@/components/Section/SectionContainer";
import { array } from "zod";

function MyCources() {
    const array = [1,2,3]
  return (
    <>
      <SectionContainer className="bg-blue-700 mt-0 pt-14 pb-14 ">
        <div className="flex items-center xl:justify-between justify-center  xl:flex-nowrap flex-wrap-reverse ">
          <h1 className="text-bold text-4xl">Meus cursos</h1>
        </div>
      </SectionContainer>
      <SectionContainer className="min-h-[500px] pb-5">

      <CardContainer>
          {array.map((item) => {
            return (
              <Card key={item}>
                <CardTop
                  courseId={1}
                  courseImageUrl="/cardBg.webp"
                  instructorName="Jhon lenon"
                  userImageUrl="/cardUser.jpeg"
                />
                <CardBotton
                  courseId={1}
                  courseLevel="Advance"
                  coursePrice="23.50"
                  courseStarNumber={5}
                  courseTitle="Project management concepts"
                  courseTotalTime="13h 20m"
                />
              </Card>
            );
          })}
        </CardContainer>

      </SectionContainer>
      
    </>
  );
}

export default MyCources;
