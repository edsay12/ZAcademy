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
import { useEffect, useState } from "react";
import CategoriesButtons from "@/components/CategoriesButtons";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import Button from "@/components/Button";
import DataFormater from "../../utils/FormateDateDifference";
import FormateDateDifference from "../../utils/FormateDateDifference";
import { coursesData } from "@/fakeData/CourseCardData";
import Link from "next/link";
import { categories } from "@/fakeData/categories";

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

import { courseService } from "@/services/courses";
import { Course } from "../api/courses/all/route";

function Home() {
  const { data: couseApiData, isLoading } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: courseService.getAllCourses,
  });
  const [itens, setItens] = useState<Course | any>([]);
  const [filter, setFilterItens] = useState<Course | any>([]);

  useEffect(() => {
    if (!isLoading) {
      setItens(couseApiData);
      setFilterItens(couseApiData);
    }
  }, [couseApiData]);

  return (
    <>
      <SectionContainer>
        <SectionTitle
          firstText="Nossos"
          secondText="Melhores Cursos"
          firstTextColor={"text-black"}
        />
        {isLoading ? (
          <>loading</>
        ) : (
          <>
            <CardContainer>
              {couseApiData?.slice(0, 4)?.map((item: Course) => {
                return (
                  <Card key={item.id}>
                    <CardTop
                      courseId={item.id}
                      courseImageUrl={item.image}
                      instructorName={item.user.name!}
                      userImageUrl={item.user.image!}
                    />
                    <CardBotton
                      courseId={item.id}
                      courseLevel={item.level}
                      coursePrice={item.price}
                      textColor="text-black"
                      courseStarNumber={item.starNumber}
                      courseTitle={item.title}
                      courseTotalTime={10}
                    />
                  </Card>
                );
              })}
            </CardContainer>
          </>
        )}
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          firstText="Porque"
          textPosition="text-center"
          secondText="Nos Somos Melhores Que Os "
          thirthText="Outros"
          firstTextColor={"text-black"}
        />
        <SectionHelperText
          text="Veja alguns dos nossos ceritificados"
          textPosition="text-center"
        />

        <div className="w-full flex justify-between flex-col lg:flex-row gap-5">
          <CertificationElementCard
            title="Plataforma Certificada"
            description="Descubra nossa plataforma certificada pelo padrão de qualidade ISO 9001."
            ico={<PiCertificateDuotone />}
          />
          <CertificationElementCard
            title="Cursos de Qualidade"
            description="Invista em seu crescimento profissional com nossa seleção de cursos de qualidade garantida. "
            ico={<PiCertificateDuotone />}
          />
          <CertificationElementCard
            title="Desenvolvimento Profissional"
            description="Explore nossas trilhas de aprendizagem personalizadas para impulsionar seu desenvolvimento "
            ico={<PiCertificateDuotone />}
          />
        </div>
      </SectionContainer>

      <SectionContainer className="pt-40 bg-blue-700 pb-36">
        <SectionTitle
          firstText="Mais Alguns"
          textPosition="text-left"
          secondText="De Nossos Cursos"
          firstTextColor={"text-white"}
        />

        {isLoading ? (
          <>loading</>
        ) : (
          <>
            <CategoriesButtons
              categories={categories}
              itens={itens}
              filter={filter}
              setFilterItens={setFilterItens}
              limit={4}
            />
            <CardContainer>
              {filter.map((item: Course) => {
                return (
                  <Card key={item.id}>
                    <CardTop
                      courseId={item.id}
                      courseImageUrl={item.image}
                      instructorName={item.user.name ?? ""}
                      userImageUrl={item.user.image ?? ""}
                    />
                    <CardBotton
                      courseId={item.id}
                      courseLevel={item.level}
                      coursePrice={item.price}
                      textColor="text-white"
                      courseStarNumber={item.starNumber}
                      courseTitle={item.title}
                      courseTotalTime={19}
                    />
                  </Card>
                );
              })}

              {filter.length === 0 && (
                <h1 className="text-white">Nada encontrado</h1>
              )}
            </CardContainer>
          </>
        )}

        <Link
          href={"/course/search"}
          className="mt-11 underline hover:opacity-50 text-blue-500 text-end block mx-auto"
        >
          Ver Tudo
        </Link>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle
          firstText="O Que as Pessoas Dizem"
          textPosition="text-left"
          secondText="Sobre Nos"
          firstTextColor={"text-black"}
        />

        <div className="flex gap-5 w-full flex-col lg:flex-row">
          <TestimonialCard
            testimonialText="Estou muito satisfeito com a variedade de cursos oferecidos. Aprendi tanto sobre design quanto sobre desenvolvimento web. Os instrutores são experientes e as aulas são bem estruturadas. Recomendo a todos que desejam expandir seus conhecimentos!."
            userName="Kenzie Edgar"
            userImageUrl="/cardUser.jpeg"
          />
          <TestimonialCard
            testimonialText="A plataforma me ajudou a dar um salto na minha carreira. Fiz o curso de marketing digital e agora estou aplicando as estratégias aprendidas no meu trabalho. Além disso, a comunidade de alunos é muito ativa e compartilha dicas valiosas."
            userName="Davi Lira"
            userImageUrl="/cardUser.jpeg"
          />
          <TestimonialCard
            testimonialText="Os preços dos cursos são acessíveis e o conteúdo é de alta qualidade. Já fiz vários cursos aqui e sempre saio com novas habilidades. É uma ótima maneira de investir no meu desenvolvimento profissional."
            userName="Eduardo Farias"
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
              firstText="Trabalhe "
              textPosition="text-left"
              secondText="Conosco"
              firstTextColor={"text-black"}
            />

            <div>
              <p className="text-black">
                Você é apaixonado por aprendizado, tecnologia e educação? Está
                em busca de um ambiente dinâmico, colaborativo e cheio de
                oportunidades? Então, você está no lugar certo! Na nossa equipe,
                valorizamos a criatividade, a inovação e o comprometimento.
                Aqui, cada membro desempenha um papel fundamental na construção
                de uma plataforma de ensino que transforma vidas.
              </p>
            </div>
            <div className="mt-10">
              <Button text="Comece a ensinar =>" buttonSize="medium"></Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Home;

// buttons asdasda (Categoryes,OnClick())
