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
import { ChangeEvent, useEffect, useState } from "react";
import { CardData, Categories } from "@/app/@types";
import Image from "next/image";
import Button from "@/components/Button";
import DefaultListError from "@/components/DefaultListError";
import { categories } from "@/fakeData/categories";

type FilterCategories = {
  title: string;
  filter: Array<{ id: number; title: Categories }>;
};

const filterLevelAcordeonData = {
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

const filterPriceAcordeonData = {
  title: "Preço",
  filter: [
    {
      id: 1,
      title: "Pago",
    },
    {
      id: 2,
      title: "Gratuito",
    },
  ],
};
const filterCategoryAcordeonData: FilterCategories = {
  title: "Categorias",
  filter: [
    {
      id: 1,
      title: "ALL",
    },
    {
      id: 2,
      title: "BUSINESS",
    },
  ],
};

function Search() {
  const params = useSearchParams();
  const [itens, setItens] = useState<CardData[]>(coursesData); // set itens on component

  const filterSearchItem = itens.filter((item) =>
    item.courseTitle
      .toLowerCase()
      .includes(params.get("src")?.toLocaleLowerCase() ?? "")
  );

  const itensPerPage = 4;
  const numberOfPages = Math.ceil(itens.length / itensPerPage);
  const currentPages = Number(params.get("page") ?? "1"); // current page

  const start = (currentPages - 1) * itensPerPage;
  const final = start + itensPerPage;

  const itensData = filterSearchItem.slice(start, final);

  const handdleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <SectionContainer className="mb-20 relative min-h-[500px] text-black ">
        <h1 className="text-black text-4xl font-bold mb-8">
          10.000 resultados para “{params.get("src")}”
        </h1>
        <div className="grid  grid-cols-2 lg:grid-cols-4  mx-auto gap-5 relative ">
          {/* leftside */}
          <div className=" flex flex-col gap-5 w-full  lg:col-span-1 col-span-3 ">
            <div className="shadow-xl bg-white border pb-10 p-4 border-gray-100 rounded-md">
              <h3 className="text-black">Filtros</h3>

              <div className="mt-5 ">
                <AcordeonItem
                  key={filterLevelAcordeonData.title}
                  title={filterLevelAcordeonData.title}
                >
                  <form action="" className="flex flex-col gap-3">
                    {filterLevelAcordeonData.filter.map((item) => {
                      return (
                        <label
                          htmlFor={item.title}
                          key={item.title}
                          className="flex gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={"categorias"}
                            value={item.title}
                            id={item.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handdleCategoryChange(e)
                            }
                          />
                          {item.title}
                        </label>
                      );
                    })}
                  </form>
                </AcordeonItem>
                <AcordeonItem
                  key={filterPriceAcordeonData.title}
                  title={filterPriceAcordeonData.title}
                >
                  {filterPriceAcordeonData.filter.map((item) => {
                    return (
                      <AcordeonBasicItem
                        key={item.title}
                        itemId={item.id}
                        itemTitle={item.title}
                      />
                    );
                  })}
                </AcordeonItem>
                <AcordeonItem
                  key={filterCategoryAcordeonData.title}
                  title={filterCategoryAcordeonData.title}
                >
                  {filterCategoryAcordeonData.filter.map((item) => {
                    return (
                      <>
                        <AcordeonBasicItem
                          key={item.title}
                          itemId={item.id}
                          itemTitle={item.title}
                        />
                      </>
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
                <DefaultListError message="Nenhum resultado encontrado" />
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
