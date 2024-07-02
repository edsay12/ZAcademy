import Card from "@/components/Card/Card";
import CardBotton from "@/components/Card/CardBotton";
import CardContainer from "@/components/Card/CardContainer";
import CardTop from "@/components/Card/CardTop";
import SectionContainer from "@/components/Section/SectionContainer";
const array = [1, 2, 3];
function All() {
  return (
    <SectionContainer className="min-h-[500px] pb-5">
      <CardContainer>
        {array.map((item) => {
          return (
            <Card key={item}>
              <CardTop
                url={`/course/learn/${'sasdas'}`}
                courseId={"sf"}
                courseImageUrl="/cardBg.webp"
                instructorName="Jhon lenon"
                userImageUrl="/cardUser.jpeg"
              />
              <CardBotton
                courseId={"asda"}
                courseLevel="Avançado"
                coursePrice={23.5}
                courseStarNumber={5}
                courseTitle="Conceitos de desnvolvimento de software"
                courseTotalTime={0}
              />
            </Card>
          );
        })}
      </CardContainer>
    </SectionContainer>
  );
}

export default All;
