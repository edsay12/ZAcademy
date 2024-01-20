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
import Image from "next/image";
import Button from "@/components/Button";

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
                  courseId={1}
                  courseImageUrl="/cardBg.webp"
                  userName="Jhon lenon"
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

        <div className="w-full flex justify-between flex-col lg:flex-row gap-5">
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

      <SectionContainer className="pt-40 bg-blue-700 pb-32">
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
              courseId={1}
              courseImageUrl="/cardBg.webp"
              userName="Jhon lenon"
              userImageUrl="/cardUser.jpeg"
            />
            <CardBotton
              courseId={1}
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

        <div className="flex gap-5 w-full flex-col lg:flex-row">
          <TestimonialCard
            testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
              ratione dolor exercitationem minima quas itaque saepe quasi
              architecto vel! Accusantium, vero sint recusandae cum tempora nemo
              commodi soluta deleniti."
            userName="Kenzie Edgar."
            userImageUrl="/cardUser.jpeg"
          />
          <TestimonialCard
            testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
              ratione dolor exercitationem minima quas itaque saepe quasi
              architecto vel! Accusantium, vero sint recusandae cum tempora nemo
              commodi soluta deleniti."
            userName="Kenzie Edgar."
            userImageUrl="/cardUser.jpeg"
          />
          <TestimonialCard
            testimonialText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
              ratione dolor exercitationem minima quas itaque saepe quasi
              architecto vel! Accusantium, vero sint recusandae cum tempora nemo
              commodi soluta deleniti."
            userName="Kenzie Edgar."
            userImageUrl="/cardUser.jpeg"
          />
        </div>
      </SectionContainer>

      <SectionContainer className=" mt-0 mb-20 lg:mb-0 lg:mt-40">
        <div className="flex justify-between gap-40  ">
          <Image
            alt="mulher apontando"
            src={"/Woman.svg"}
            width={100}
            height={100}
            className=" max-w-[600px]  w-full hidden lg:block"
          />
          <div className="mt-20 ml-">
            <SectionTitle
              firstText="Work "
              textPosition="text-left"
              secondText="with us"
              firstTextColor={"text-black"}
            />

            <div>
              <p className="text-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum perferendis eos molestiae dolore et harum, laboriosam
                necessitatibus, explicabo fugit cupiditate aperiam, optio iste
                tenetur neque. Itaque minus aliquid sapiente quae.
              </p>
            </div>
            <div className="mt-10">
              <Button text="Start Teach Now =>" buttonSize="medium"></Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Home;

// buttons asdasda (Categoryes,OnClick())
