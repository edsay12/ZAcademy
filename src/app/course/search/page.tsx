"use client";
import AcordeonItem from "@/components/Acordeon/AcordeonContainer";

import SectionContainer from "@/components/Section/SectionContainer";
import { usePathname, useSearchParams } from "next/navigation";
import CartItemDetails from "@/components/CardItemDetails";
import Pagination from "@/components/Pagination";
import { coursesData } from "@/fakeData/CourseCardData";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { CardData, Categories, CourseLevels } from "@/app/@types";
import DefaultListError from "@/components/DefaultListError";
import { useRouter} from "next/navigation";

type FilterCategories = {
  title: string;
  filter: Array<{ id: number; value: Categories; label: string }>;
};

type FilterCategoryData = {
  title:string
  filter: Array<{
    id:number,
    label:string,
    value:Levels
  }>
}
type Levels = CourseLevels | "TUDO";

const filterLevelAcordeonData:FilterCategoryData = {
  title: "Nivel",
  filter: [
    {
      id: 1,
      label: "Todos os niveis",
      value: "TUDO",
    },
    {
      id: 2,
      label: "Intermediario",
      value: "Intermediário",
    },
    {
      id: 3,
      label: "Básico",
      value: "Iniciante",
    },
    {
      id: 4,
      label: "Avançado",
      value: "Avançado",
    },
  ],
};

const filterCategoryAcordeonData: FilterCategories = {
  title: "Categorias",
  filter: [
    {
      id: 1,
      value: "TUDO",
      label: "Tudo",
    },
    {
      id: 2,
      value: "NEGÓCIOS",
      label: "Negocios",
    },
    {
      id: 3,
      value: "DESIGNER",
      label: "Design",
    },
    {
      id: 4,
      value: "DESENVOLVIMENTO",
      label: "Desenvolvimento",
    },
    {
      id: 5,
      value: "GERENCIAMENTO",
      label: "Gerenciamento",
    },
    {
      id: 6,
      value: "FOTOGRAFIA",
      label: "Fotografia",
    },
    {
      id: 6,
      value: "TECNOLOGIA",
      label: "Tecnologia",
    },
  ],
};

function categoryFilter(
  defaultData: CardData[],
  data: CardData[],
  type: Categories
) {
  if (type === "TUDO") {
    return defaultData;
  } else {
    return data.filter((item) => item.category === type);
  }
}

function levelFilter(defaultData: CardData[], data: CardData[], type: Levels) {
  if (type === "TUDO") {
    return defaultData;
  } else {
    return data.filter((item) => item.courseLevel === type);
  }
}

function sortItens(defaultData: CardData[], data: CardData[], type: string) {
  if (type === "estrelas") {
    return data.sort((a, b) => {
      if (a.courseStarNumber > b.courseStarNumber) {
        return -1;
      } else {
        return 1;
      }
    });
  } else {
    return defaultData;
  }
}

function Search() {
  const params = useSearchParams();
  const itens = coursesData; // set itens on component
  const [category, setCategory] = useState<Categories>("TUDO");
  const [level, setLevel] = useState<Levels>("TUDO");
  const [sort, setSort] = useState("mais relevantes");
  const router = useRouter();
  const pathName = usePathname();

  let itensData = [];
  // search
  const filterSearchItem: CardData[] = itens.filter((item) =>
    item.courseTitle
      .toLowerCase()
      .includes(params.get("src")?.toLocaleLowerCase() ?? "")
  );

  useEffect(() => {
      if(params.get('page') === '1') return;
      // redirect to page 1 
      const current = new URLSearchParams(Array.from(params.entries()));
      current.set("page", '1');
      router.push(`${pathName}?${current}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, level, sort]);

  //pagination
  const itensPerPage = 4;
  const currentPages = Number(params.get("page") ?? "1"); // current page
  const start = (currentPages - 1) * itensPerPage;
  const final = start + itensPerPage;
  let paginationItens = [];

  function applyFilter() {
    let categoryFilterData = categoryFilter(
      filterSearchItem,
      filterSearchItem,
      category
    );
    let levelFilterData = levelFilter(
      categoryFilterData,
      categoryFilterData,
      level
    );
    let sortItensData = sortItens(levelFilterData, levelFilterData, sort);
    return sortItensData;
  }

  itensData = applyFilter();

  const numberOfPages = Math.ceil(itensData.length / itensPerPage);

  paginationItens = itensData.slice(start, final);

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
                              setCategory(e.target.value as Categories)
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
                          htmlFor={item.label}
                          key={item.label}
                          className="flex gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={"categorias"}
                            value={item.value}
                            id={item.label}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setLevel(e.target.value as Levels)
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
                    setSort(e.target.value)
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
