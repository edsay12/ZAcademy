import Card from "@/components/Card/Card";
import CardBotton from "@/components/Card/CardBotton";
import CardContainer from "@/components/Card/CardContainer";
import CardTop from "@/components/Card/CardTop";
import SectionContainer from "@/components/Section/SectionContainer";
const array = [1,2,3]
function All() {
  return (
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
                courseLevel="Avançado"
                coursePrice={23.50}
                courseStarNumber={5}
                courseTitle="Conceitos de desnvolvimento de software"
                courseTotalTime="13h 20m"
              />
            </Card>
          );
        })}
      </CardContainer>
    </SectionContainer>
  );
}

export default All;
