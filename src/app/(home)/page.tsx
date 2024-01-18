"use client";

import SectionContainer from "@/components/Section/SectionContainer";
import CardContainer from "@/components/Card/CardContainer";
import Card from "@/components/Card/Card";
import CardTop from "@/components/Card/CardTop";
import CardBotton from "@/components/Card/CardBotton";
import SectionHelperText from "@/components/Section/SectionHelperText";
import SectionTitle from "@/components/Section/SectionTitle";
import CertificationElementCard from "@/components/CertificationElementCard";
import { PiCertificateDuotone } from "react-icons/pi";
import { useState } from "react";
import CategoriesButtons from "@/components/CategoriesButtons";
import TestimonialCard from "@/components/TestimonialCard";

const list = [1, 2, 3, 4, 5, 6, 7];
const categories = [
  "BUSINESS",
  "DESIGNER",
  "DEVELOPMENT",
  "MANAGEMENT",
  "TECNOLOGY",
  "PHOTOGRAPHY",
];

function Home() {
  const [itens, setItens] = useState(list);
  const [filter, setFilter] = useState(list);
  console.log(filter);

  const filterItens = (cat: string = "") => {
    const items = itens.filter((item) => item === 1);

    setFilter(items);
  };

  return (
    <>
      <SectionContainer>
        <SectionTitle
          firstText="Our"
          secondText="Top Courses"
          firstTextColor={"text-black"}
        />

        <CardContainer>
          {list.map((item) => {
            return (
              <Card key={item}>
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
            );
          })}
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
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          firstText="Why We"
          textPosition="text-center"
          secondText="Are Better Than"
          thirthText="Others"
          firstTextColor={"text-black"}
        />
        <SectionHelperText
          text="see some of our certificates"
          textPosition="text-center"
        />

        <div className="w-full flex justify-between">
          <CertificationElementCard
            title="Certifiqued Plataform"
            description="Loren ipsun alhuma coisa aqui ola mundo do mundo azul na lua da mulher do "
            ico={<PiCertificateDuotone />}
          />
          <CertificationElementCard
            title="Certifiqued Plataform"
            description="Loren ipsun alhuma coisa aqui ola mundo do mundo azul na lua da mulher do "
            ico={<PiCertificateDuotone />}
          />
          <CertificationElementCard
            title="Certifiqued Plataform"
            description="Loren ipsun alhuma coisa aqui ola mundo do mundo azul na lua da mulher do "
            ico={<PiCertificateDuotone />}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-40 bg-blue-700">
        <SectionTitle
          firstText="Our"
          textPosition="text-left"
          secondText="Online Courses"
          firstTextColor={"text-white"}
        />

        <CategoriesButtons categories={categories} filterItens={filterItens} />

        <CardContainer>
          <Card>
            <CardTop
              courseImageUrl="/cardBg.webp"
              userName="Jhon lenon"
              userImageUrl="/cardUser.jpeg"
            />
            <CardBotton
              textColor="text-white"
              courseLevel="Advance"
              coursePrice="23.50"
              courseStarNumber={5}
              courseTitle="Project management concepts"
              courseTotalTime="13h 20m"
            />
          </Card>
        </CardContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          firstText="What people say"
          textPosition="text-left"
          secondText="About us"
          firstTextColor={"text-black"}
        />

        <TestimonialCard
          testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
              ratione dolor exercitationem minima quas itaque saepe quasi
              architecto vel! Accusantium, vero sint recusandae cum tempora nemo
              commodi soluta deleniti."
          userName="Kenzie Edgar."
          userImageUrl="/cardUser"
        />
      </SectionContainer>
    </>
  );
}

export default Home;

// buttons asdasda (Categoryes,OnClick())
