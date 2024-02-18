"use client";
import AcordeonItem from "@/components/Acordeon/AcordeonContainer";
import AcordeonBasicItem from "@/components/Acordeon/components/AcordeonBasicItem";
import SectionContainer from "@/components/Section/SectionContainer";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { acordeaoData } from "@/fakeData/acordeaoData";
import CartItem from "@/components/CartItem";
import CartItemDetails from "@/components/CardItemDetails";
import Pagination from "@/components/Pagination";
import { coursesData } from "@/fakeData/CourseCardData";
import { useEffect, useState } from "react";
import { CardData } from "@/app/@types";
import Image from "next/image";
import Button from "@/components/Button";
import DefaultListError from "@/components/DefaultListError";

const filterLevel = {
  title: "Nivel",
  filter: [
    {
      id: 1,
      title: "Todos os niveis",
    },
    {
      id: 2,
      title: "Intermediario",
    },
    {
      id: 3,
      title: "Básico",
    },
    {
      id: 4,
      title: "Avançado",
    },
  ],
};

const filterPrice = {
  title: "Preço",
  filter: [
    {
      id: 1,
      title: "Pago",
    },
    {
      id: 1,
      title: "Gratuito",
    },
  ],
};

function Search() {
  const params = useSearchParams();
  const [itens, setItens] = useState<CardData[]>([]);

  console.log(params.get("src"));

  const itensPerPage = 4;
  const numberOfPages = Math.ceil(coursesData.length / itensPerPage);
  const currentPages = Number(params.get("page") ?? "1"); // current page

  const start = (currentPages - 1) * itensPerPage;
  const final = start + itensPerPage;

  console.log(params.get("page"));
  const itensData = coursesData.slice(start, final);

  return (
    <>
      <SectionContainer className="mb-20 relative min-h-[500px] text-black ">
        <h1 className="text-black text-4xl font-bold mb-8">
          10.000 resultados para “{params.get("src")}”
        </h1>
        <div className="grid  grid-cols-2 lg:grid-cols-4  mx-auto gap-5 relative ">
          {/* leftside */}
          <div className=" flex flex-col gap-5 w-full lg:col-span-1 col-span-3 ">
            <div className="shadow-xl bg-white border p-4 border-gray-100 rounded-md">
              <h3 className="text-black">Filtros</h3>

              <div className="mt-5 ">
                <AcordeonItem key={filterLevel.title} title={filterLevel.title}>
                  {filterLevel.filter.map((item) => {
                    return (
                      <AcordeonBasicItem
                        key={item.title}
                        itemId={item.id}
                        itemTitle={item.title}
                      />
                    );
                  })}
                </AcordeonItem>
                <AcordeonItem key={filterPrice.title} title={filterPrice.title}>
                  {filterPrice.filter.map((item) => {
                    return (
                      <AcordeonBasicItem
                        key={item.title}
                        itemId={item.id}
                        itemTitle={item.title}
                      />
                    );
                  })}
                </AcordeonItem>
              </div>
            </div>
          </div>
          {/* righttside */}
          <div className="col-span-3  lg:max-w-[900px] w-full  lg:mt-0 ">
            <div className="flex w-full justify-between shadow-xl bg-white border p-4 border-gray-100 rounded-md  ">
              <p>{24} Resultados escontrados</p>

              <div className="flex gap-2">
                <div>Classificar Por:</div>
                <select title="Filtro" name="stars" id="">
                  <option value="">Mais relevantes</option>
                  <option value="">Estrelas</option>
                  <option value="">Mais novos</option>
                </select>
              </div>
            </div>
            <div className="shadow-xl bg-white border p-4 border-gray-100 rounded-md mt-5">
              {itensData.map((item) => {
                return (
                  <CartItemDetails
                    key={item.courseId}
                    courseId={item.courseId}
                    courseImageUrl={item.courseImageUrl}
                    courseLevel={item.courseLevel}
                    courseStarNumber={5}
                    courseTitle={item.courseTitle}
                    courseTotalTime={item.courseTotalTime}
                    instructorName={item.instructorName}
                    coursePrice={item.coursePrice}
                  />
                );
              })}
              {itensData.length === 0 && (
                <DefaultListError message="Nenhum resultado encontrado"></DefaultListError>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
      <div className="flex justify-center p-12 mx-auto w-full ">
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </>
  );
}

export default Search;
