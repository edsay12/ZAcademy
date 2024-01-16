"use client";
import cardBg from "../../../public/cardBg.webp";

import SessionTitle from "@/components/Section/SectionTitle";
import SectionContainer from "@/components/Section/SectionContainer";
import CardContainer from "@/components/Card/CardContainer";
import Card from "@/components/Card/Card";
import CardTop from "@/components/Card/CardTop";
import CardBotton from "@/components/Card/CardBotton";
import SectionHelperText from "@/components/Section/SectionHelperText";
import SectionTitle from "@/components/Section/SectionTitle";
import CertificationElementCard from "@/components/CertificationElementCard";
import { PiCertificateDuotone } from "react-icons/pi";
const list = [1, 2, 3, 4, 5, 6, 7];
function Home() {
  return (
    <>
      <SectionContainer>
        <SectionTitle
          firstText="Our"
          secondText="Top Courses"
          firstTextColor={"text-black"}
        />

        <div className="mt-10">
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
        </div>
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

      <section className="bg-blue-700 pt-40">
        <SectionContainer>
          <SectionTitle
            firstText="Why We"
            textPosition="text-left"
            secondText="Are Better Than"
            thirthText="Others"
            firstTextColor={"text-black"}
          />
        </SectionContainer>
      </section>
    </>
  );
}

export default Home;
