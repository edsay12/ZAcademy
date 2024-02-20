"use client";
import AcordeonItem from "@/components/Acordeon/AcordeonContainer";

import SectionContainer from "@/components/Section/SectionContainer";
import { useSearchParams } from "next/navigation";
import CartItemDetails from "@/components/CardItemDetails";
import Pagination from "@/components/Pagination";
import { coursesData } from "@/fakeData/CourseCardData";
import { ChangeEvent, useEffect, useState } from "react";
import { CardData, Categories } from "@/app/@types";
import DefaultListError from "@/components/DefaultListError";
import { categories } from "@/fakeData/categories";

type FilterCategories = {
  title: string;
  filter: Array<{ id: number; value: Categories; label: string }>;
};

const filterLevelAcordeonData = {
  title: "Nivel",
  filter: [
    {
      id: 1,
      label: "Todos os niveis",
      value: "All",
    },
    {
      id: 2,
      label: "Intermediario",
      value: "Intermediate",
    },
    {
      id: 3,
      label: "Básico",
      value: "Beginner",
    },
    {
      id: 4,
      label: "Avançado",
      value: "Advance",
    },
  ],
};

const filterPriceAcordeonData = {
  title: "Preço",
  filter: [
    {
      id: 1,
      label: "Pago",
      value: "pago",
    },
    {
      id: 2,
      label: "Gratuito",
      value: "gratuito",
    },
  ],
};
const filterCategoryAcordeonData: FilterCategories = {
  title: "Categorias",
  filter: [
    {
      id: 1,
      value: "ALL",
      label: "Tudo",
    },
    {
      id: 2,
      value: "BUSINESS",
      label: "Negocios",
    },
    {
      id: 3,
      value: "DESIGNER",
      label: "Design",
    },
    {
      id: 4,
      value: "DEVELOPMENT",
      label: "Desenvolvimento",
    },
    {
      id: 5,
      value: "MANAGEMENT",
      label: "Gerenciamento",
    },
    {
      id: 6,
      value: "PHOTOGRAPHY",
      label: "Fotografia",
    },
    {
      id: 6,
      value: "TECNOLOGY",
      label: "Tecnologia",
    },
  ],
};

function Search() {
  const params = useSearchParams();
  const [itens, setItens] = useState<CardData[]>(coursesData); // set itens on component
  const [category, setCategory] = useState<Categories>("ALL");
  const [level, setLevel] = useState("All");
  
  // search
  const filterSearchItem = itens.filter((item) =>
  item.courseTitle
  .toLowerCase()
  .includes(params.get("src")?.toLocaleLowerCase() ?? "")
  );
  
  let itensData = filterSearchItem;

  const itensPerPage = 4;
  const currentPages = Number(params.get("page") ?? "1"); // current page
  const start = (currentPages - 1) * itensPerPage;
  const final = start + itensPerPage;
  let paginationItens = []



  const [sort, setSort] = useState("mais relevantes");

  const handdleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
  };

  

  const handdleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: Categories = e.target.value as Categories;
    setCategory(value);
  };
  const handdleLevelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLevel(value);
  };

  function applyFilter() {
    let categoryFilter = [];
    let levelFilter = [];
    let sortItens = [];
    

    if (category === "ALL") {
      categoryFilter = filterSearchItem;
    } else {
      categoryFilter = filterSearchItem.filter(
        (item) => item.category === category
      );
    }

    if (level === "All") {
      levelFilter = categoryFilter;
    } else {
      levelFilter = categoryFilter.filter((item) => item.courseLevel === level);
    }

    if (sort === "estrelas") {
      sortItens = levelFilter.sort((a, b) => {
        if (a.courseStarNumber > b.courseStarNumber) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      sortItens = levelFilter;
    }
    
    return sortItens
  }
  
  itensData = applyFilter();
  const numberOfPages = Math.ceil(itensData.length / itensPerPage);
  
  
  
  paginationItens = itensData.slice(start,final)
  
  return (
    <>
      <SectionContainer className="mb-20 relative min-h-[500px] text-black ">
        <h1 className="text-black text-4xl font-bold mb-8">
          {itensData.length} resultados para “{params.get("src")}”
        </h1>
        <div className="grid  grid-cols-2 lg:grid-cols-4  mx-auto gap-5 relative ">
          {/* leftside */}
          <div className=" flex flex-col gap-5 w-full  lg:col-span-1 col-span-3 ">
            <div className="shadow-xl bg-white border pb-10 p-4 border-gray-100 rounded-md">
              <h3 className="text-black">Filtros</h3>

              <div className="mt-5 ">
                <AcordeonItem
                  key={filterCategoryAcordeonData.title}
                  title={filterCategoryAcordeonData.title}
                >
                  <form action="" className="flex flex-col gap-3">
                    {filterCategoryAcordeonData.filter.map((item) => {
                      return (
                        <label
                          htmlFor={item.value}
                          key={item.value}
                          className="flex gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={"categorias"}
                            value={item.value}
                            id={item.value}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handdleCategoryChange(e)
                            }
                            checked={category === item.value}
                          />
                          {item.label}
                        </label>
                      );
                    })}
                  </form>
                </AcordeonItem>
                <AcordeonItem
                  key={filterLevelAcordeonData.title}
                  title={filterLevelAcordeonData.title}
                >
                  <form action="" className="flex flex-col gap-3">
                    {filterLevelAcordeonData.filter.map((item) => {
                      return (
                        <label
                          htmlFor={item.value}
                          key={item.value}
                          className="flex gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={"categorias"}
                            value={item.value}
                            id={item.value}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              handdleLevelChange(e)
                            }
                            checked={level === item.value}
                          />
                          {item.label}
                        </label>
                      );
                    })}
                  </form>
                </AcordeonItem>
              </div>
            </div>
          </div>
          {/* righttside */}
          <div className="col-span-3  lg:max-w-[900px] w-full  lg:mt-0 ">
            <div className="flex w-full justify-between shadow-xl bg-white border p-4 border-gray-100 rounded-md  ">
              <p>{itensData.length} Resultados escontrados</p>

              <div className="flex gap-2">
                <div>Classificar Por:</div>
                <select
                  title="Filtro"
                  name="sort"
                  id=""
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handdleSortChange(e)
                  }
                >
                  <option value="mais relevantes">Mais relevantes</option>
                  <option value="estrelas">Estrelas</option>
                </select>
              </div>
            </div>
            <div className="shadow-xl bg-white border p-4 border-gray-100 rounded-md mt-5">
              {paginationItens.map((item) => {
                return (
                  <CartItemDetails
                    key={item.courseId}
                    courseId={item.courseId}
                    courseImageUrl={item.courseImageUrl}
                    courseLevel={item.courseLevel}
                    courseStarNumber={item.courseStarNumber}
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
