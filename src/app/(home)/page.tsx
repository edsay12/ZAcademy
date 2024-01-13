"use client";

import SessionTitle from "@/components/Section/SectionTitle";
import SectionContainer from "@/components/Section/SectionContainer";
import CardContainer from "@/components/Card/CardContainer";
import Card from "@/components/Card/Card";
import CardTop from "@/components/Card/CardTop";

function Home() {
  return (
    <SectionContainer>
      <SessionTitle
        firstText="Our"
        secondText="Top Courses"
        firstTextColor={"text-black"}
      />

      <CardContainer>
        <Card>
          <CardTop bgImageUrl=""/>
        </Card>
      </CardContainer>
    </SectionContainer>
  );
}

export default Home;
