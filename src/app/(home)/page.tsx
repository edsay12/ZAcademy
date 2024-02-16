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
import DataFormater from "../../../utils/FormateDateDifference";
import FormateDateDifference from "../../../utils/FormateDateDifference";
import { coursesData } from "@/fakeData/CourseCardData";
import Link from "next/link";

const categories = [
  "ALL",
  "BUSINESS",
  "DESIGNER",
  "DEVELOPMENT",
  "MANAGEMENT",
  "TECNOLOGY",
  "PHOTOGRAPHY",
];

function Home() {
  const [itens, setItens] = useState(coursesData);
  const [filter, setFilterItens] = useState(coursesData);

  return (
    <>
      <SectionContainer>
        <SectionTitle
          firstText="Our"
          secondText="Top Courses"
          firstTextColor={"text-black"}
        />

        <CardContainer>
          {coursesData.map((item) => {
            return (
              <Card key={item.courseId}>
                <CardTop
                  courseId={item.courseId}
                  courseImageUrl={item.courseImageUrl}
                  instructorName={item.instructorName}
                  userImageUrl={item.userImageUrl}
                />
                <CardBotton
                  courseId={item.courseId}
                  courseLevel={item.courseLevel}
                  coursePrice={item.coursePrice}
                  courseStarNumber={item.courseStarNumber}
                  courseTitle={item.courseTitle}
                  courseTotalTime={item.courseTotalTime}
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

      <SectionContainer className="pt-40 bg-blue-700 pb-36">
        <SectionTitle
          firstText="Our"
          textPosition="text-left"
          secondText="Online Courses"
          firstTextColor={"text-white"}
        />

        <CategoriesButtons
          categories={categories}
          itens={itens}
          filter={filter}
          setFilterItens={setFilterItens}
          limit={4}
        />

        <CardContainer>
          {filter.map((item) => {
            return (
              <Card key={item.courseId}>
                <CardTop
                  courseId={item.courseId}
                  courseImageUrl={item.courseImageUrl}
                  instructorName={item.instructorName}
                  userImageUrl={item.userImageUrl}
                />
                <CardBotton
                  courseId={item.courseId}
                  courseLevel={item.courseLevel}
                  coursePrice={item.coursePrice}
                  textColor="text-white"
                  courseStarNumber={item.courseStarNumber}
                  courseTitle={item.courseTitle}
                  courseTotalTime={item.courseTotalTime}
                />
              </Card>
            );
          })}

          {filter.length === 0 && <h1 className="text-white">Nada encontrado</h1>}
        </CardContainer>

        
        <Link href={'/course/search'} className="mt-11 underline hover:opacity-50 text-blue-500 text-end block mx-auto" >Ver Tudo</Link>
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
