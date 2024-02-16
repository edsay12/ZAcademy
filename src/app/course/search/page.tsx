"use client";
import AcordeonItem from "@/components/Acordeon/AcordeonContainer";
import AcordeonBasicItem from "@/components/Acordeon/components/AcordeonBasicItem";
import SectionContainer from "@/components/Section/SectionContainer";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { acordeaoData } from "@/fakeData/acordeaoData";
import CartItem from "@/components/CartItem";
import CartItemDetails from "@/components/CardItemDetails";

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

  console.log(params.get("src"));
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
              <CartItemDetails 
                courseId={1}
                courseImageUrl="/cardBg.webp"
                courseLevel="Beginner"
                courseStarNumber={5}
                courseTitle="C# COMPLETO Programação Orientada a Objetos + Projetos
Curso mais didático e completo de "
                courseTotalTime="13,20"
                instructorName="Julio Davi"
                coursePrice={14.45}
              />
              <CartItemDetails 
                courseId={1}
                courseImageUrl="/cardBg.webp"
                courseLevel="Beginner"
                courseStarNumber={5}
                courseTitle="C# COMPLETO Programação Orientada a Objetos + Projetos
Curso mais didático e completo de "
                courseTotalTime="13,20"
                instructorName="Julio Davi"
                coursePrice={14.45}
              />
              
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Search;
