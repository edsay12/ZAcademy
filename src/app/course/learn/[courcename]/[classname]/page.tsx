"use client";
import AcordeonItem from "@/components/Acordeon/AcordeonItem";
import Button from "@/components/Button";
import Description from "@/components/Description";
import InstructorDetailsCard from "@/components/InstructorDetailsCard";
import SectionContainer from "@/components/Section/SectionContainer";
import ActiveItem from "@/components/video/ActiveItem";
import { acordeaoData } from "@/fakeData/acordeaoData";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaRegClock, FaSignal } from "react-icons/fa";
import { FaArrowLeft, FaArrowsSpin, FaRegCircleUser } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Params = {
  params: {
    classname: string;
    cursonome: string;
  };
};

function Learn({ params }: Params) {
  const seach = useSearchParams();

  console.log("seache", seach);
  console.log(params.cursonome);

  return (
    <>
      <SectionContainer className="-mt-[5px] bg-blue-600 p-5">
        <div
          className="grid grid-cols-3 mx-auto gap-20
         "
        >
          <div className="col-start-1 xl:col-end-3 col-end-4  w-full xl:mt-0   ">
            <video
              src="/videoDeExemplo.mp4 "
              controls
              className="w-full h-full"
              width={100}
            />
          </div>
          <div className=" col-start-3 col-end-4  w-full h-[520px]   overflow-y-auto hidden xl:block  scrollbar-thin scrollbar-thumb-gray-600  scrollbar-track-blue-700">
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="-mt-[5px] p-2 bg-gray-200  w-full">
        <div className="bg-gray-200 flex justify-end items-center w-full h-[50px] ">
          <button
            title="Seta para esquerda"
            className="text-black border border-gray-400 p-2 hover:bg-white hover:border-white"
          >
            <IoIosArrowBack />
          </button>
          <button
            title="Seta para direita"
            className="text-black border  border-gray-400 p-2 hover:bg-white hover:border-white "
          >
            <IoIosArrowForward />
          </button>
        </div>
      </SectionContainer>

      <SectionContainer className="mb-20 mt-0 relative">
        <div className="grid grid-cols-3 text-black grid-rows-3 gap-20">
          <div className=" w-full col-start-1 xl:col-end-3  col-end-4  ">
            <Description title="Visão geral do curso">
              Seja bem vindo(a) ao curso API Rest em NodeJS aplicando testes
              (TDD) desde o início. Nesse curso vamos, inicialmente, aprender a
              montar o nosso ambiente de desenvolvimento, configurar o VSCode, e
              trabalhar com o lint para garantir a padronização dos nossos
              códigos. Em seguida, apresentarei o básico do Jest para criarmos
              os nossos testes... a partir daí vamos criar um teste e
              desenvolver a nossa aplicação até o teste passar. E assim será ao
              longo do curso, um teste de cada vez, uma funcionalidade de cada
              vez, evoluindo sempre com segurança, pois configuraremos nossos
              testes de tal forma que toda a API será testada sempre que você
              salvar algum arquivo. Caso algo deixe de funcionar, com um simples
              Ctrl+Z será possível retornar à normalidade de antes. Durante o
              curso, iremos criar a API de um gerenciador financeiro onde, no
              lado dos testes, apresentarei diversos recursos do Jest para fazer
              assertivas e estruturar nossos testes. Já no lado do
              desenvolvimento, trabalharemos com várias bibliotecas famosas como
              o Express para criar o nosso servidor, o Passport e JWT para
              autenticação, Knex e Postgres para migração e consultas ao banco
              de dados, além de outras. Importante ressaltar que os testes não
              serão a nível unitário, faremos todas as verificações diretamente
              nos serviços. O que fará o teste mais real, pois o fluxo passará
              desde a chamada da URL, passando pelo roteamento, regras de
              negócio e banco de dados. Porém trará dificuldades extras como a
              necessidade de possuir o ambiente sempre atualizado e a
              necessidade de gerenciar a massa de dados necessários para os
              testes, isso também será abordado no curso. Abraços e nos vemos na
              próxima aula, até lá!
            </Description>
          </div>
          <div className=" w-full xl:col-start-3 xl:col-end-4 col-start-1 col-end-4  ">
            <div className="w-full border border-gray-300 rounded-md p-4 pb-5 shadow-xl  bg-white  ">
              <h3 className="font-bold text-3xl text-black">
                {(23.5).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <div className="">
                <Button text="Comprar agora" className="bg-blue-700"></Button>
                <Button
                  text="Adicionar ao carrinho"
                  className="bg-yellow-700 mb-0"
                ></Button>
              </div>
            </div>
          </div>
          <div className="bg-red-200 w-full col-start-1 xl:col-end-3  col-end-4">
            numero 3
          </div>
        </div>
      </SectionContainer>
      {/* asda
asdasd */}
    </>
  );
}

export default Learn;
