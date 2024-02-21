"use client";
import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import DefaultListError from "@/components/DefaultListError";
import Description from "@/components/Description";
import InstructorDetailsCard from "@/components/InstructorDetailsCard";
import SectionContainer from "@/components/Section/SectionContainer";
import { acordeaoData } from "@/fakeData/acordeaoData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegClock, FaSignal } from "react-icons/fa";
import { FaArrowsSpin, FaRegCircleUser } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";

function Cart() {
  const isCart = true;
  const router = useRouter();
  return (
    <>
      <SectionContainer className="-mb-16">
        <h2 className="text-4xl text-black font-bold">Carrinho de compras</h2>
      </SectionContainer>
      {isCart ? (
        <SectionContainer className="mb-20 relative min-h-[500px] ">
          <div className="grid  grid-cols-2 lg:grid-cols-4  mx-auto gap-5 relative">
            {/* leftside */}
            <div className="col-span-3  lg:max-w-[900px] w-full  lg:mt-0 ">
              <div className="w-full mt-3">
                <CartItem
                  courseId={1}
                  courseImageUrl="/cardBg.webp"
                  courseLevel="Beginner"
                  courseStarNumber={5}
                  courseTitle="C# COMPLETO Programação Orientada a Objetos + Projetos
Curso mais didático e completo de "
                  courseTotalTime="13,20"
                  instructorName="Julio Davi"
                />
              </div>
            </div>
            {/* righttside */}
            <div className=" flex flex-col gap-5 w-full lg:col-span-1 col-span-3 ">
              <div className="w-full border border-gray-300 rounded-md  p-4 pb-5 shadow-xl   ">
                <p className="text-black text-md font-medium">Total:</p>
                <h3 className="font-bold text-3xl text-black">
                  {(23.5).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
                <div className="">
                  <Button
                    text="Finalizar compra"
                    className="bg-blue-700"
                    onClick={()=> router.push('/course/learn/curso-de-javascript-moderno-do-basico-ao-avancado')}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      ) : (
        <SectionContainer className="min-h-[600px] ">
          <DefaultListError
            message=" Seu carrinho está vazio. Continue comprando para encontrar um
              curso!"
          >
            <Button
              text="Continue comprando"
              buttonSize="medium"
              onClick={() => router.push("/")}
            />
          </DefaultListError>
        </SectionContainer>
      )}
    </>
  );
}

export default Cart;
