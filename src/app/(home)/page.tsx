"use client";
import cardBg from "../../../public/cardBg.webp";

import SessionTitle from "@/components/Section/SectionTitle";
import SectionContainer from "@/components/Section/SectionContainer";
import CardContainer from "@/components/Card/CardContainer";
import Card from "@/components/Card/Card";
import CardTop from "@/components/Card/CardTop";
import CardBotton from "@/components/Card/CardBotton";

function Home() {
  return (
    <SectionContainer>
      <SessionTitle
        firstText="Our"
        secondText="Top Courses"
        firstTextColor={"text-black"}
      />

      <div className="mt-10">
        <CardContainer>
          <Card>
            <CardTop
              courseImageUrl="/cardBg.webp"
              userName="Jhon lenon"
              userImageUrl="/cardUser.jpeg"
            />
            <CardBotton
              courseLevel="Advance"
              coursePrice="23.50"
              courseStarNumber={5}
              courseTitle="Project management concepts"
              courseTotalTime="13h 20m"
            />
          </Card>
        </CardContainer>
      </div>
    </SectionContainer>
  );
}

export default Home;
