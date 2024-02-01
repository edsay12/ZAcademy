import SectionContainer from "@/components/Section/SectionContainer";
import Description from "@/components/Description";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import Button from "@/components/Button";
import { IoCellularOutline } from "react-icons/io5";
import { FaClock, FaRegClock, FaSignal } from "react-icons/fa";
import { FaArrowsSpin, FaRegCircleUser } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";

import AcordeonItem from "@/components/Acordeon/AcordeonItem";
import { acordeaoData } from "@/fakeData/acordeaoData";
import InstructorDetailsCard from "@/components/InstructorDetailsCard";
import { fakeInstructors } from "@/fakeData/FakeInstructors";

function Course() {
  const instructor = fakeInstructors[0];
  return (
    <>
      <SectionContainer className="bg-blue-700 mt-0 pt-14 pb-14 ">
        <div className="flex items-center xl:justify-between justify-center  xl:flex-nowrap flex-wrap-reverse ">
          <div className="flex flex-col gap-5">
            <h1 className="xl:text-[42px] xl:mt-0 text-3xl mt-5 font-bold max-w-[900px] leading-snug">
              API REST em Node.JS aplicando testes (TDD) desde o princípio
            </h1>
            <p className="xl:text-xl text-base max-w-[800px] leading-5">
              Utilize o TDD para desenvolver um gerenciador financeiro com a
              segurança dos testes automatizados sempre a seu lado
            </p>
            <div className="flex gap-2 xl:text-base text-sm ">
              <div className="flex items-center gap-2 text-yellow-400">
                <span>5.0</span>
                <span className="flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
              </div>
              <a href="#" className="text-blue-800 underline">
                (1.702 classificações)
              </a>
              <span>2.000 alunos</span>
            </div>
            <div>
              <span>Criado por:</span>
              <Link href={"/user/1231"} className="text-blue-800 underline">
                {" "}
                Tomas Andre{" "}
              </Link>
            </div>
          </div>

          <div className="xl:max-w-[500px] max-w-[900px] rounded-lg overflow-hidden">
            <video src="/videoDeExemplo.mp4" controls></video>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="mb-20">
        <div className="grid grid-cols-4 gap-5 relative">
          {/* leftside */}
          <div className="col-span-3 max-w-[900px] ">
            <div className="p-5">
              <Description title="Visão geral do curso">
                Seja bem vindo(a) ao curso API Rest em NodeJS aplicando testes
                (TDD) desde o início. Nesse curso vamos, inicialmente, aprender
                a montar o nosso ambiente de desenvolvimento, configurar o
                VSCode, e trabalhar com o lint para garantir a padronização dos
                nossos códigos. Em seguida, apresentarei o básico do Jest para
                criarmos os nossos testes... a partir daí vamos criar um teste e
                desenvolver a nossa aplicação até o teste passar. E assim será
                ao longo do curso, um teste de cada vez, uma funcionalidade de
                cada vez, evoluindo sempre com segurança, pois configuraremos
                nossos testes de tal forma que toda a API será testada sempre
                que você salvar algum arquivo. Caso algo deixe de funcionar, com
                um simples Ctrl+Z será possível retornar à normalidade de antes.
                Durante o curso, iremos criar a API de um gerenciador financeiro
                onde, no lado dos testes, apresentarei diversos recursos do Jest
                para fazer assertivas e estruturar nossos testes. Já no lado do
                desenvolvimento, trabalharemos com várias bibliotecas famosas
                como o Express para criar o nosso servidor, o Passport e JWT
                para autenticação, Knex e Postgres para migração e consultas ao
                banco de dados, além de outras. Importante ressaltar que os
                testes não serão a nível unitário, faremos todas as verificações
                diretamente nos serviços. O que fará o teste mais real, pois o
                fluxo passará desde a chamada da URL, passando pelo roteamento,
                regras de negócio e banco de dados. Porém trará dificuldades
                extras como a necessidade de possuir o ambiente sempre
                atualizado e a necessidade de gerenciar a massa de dados
                necessários para os testes, isso também será abordado no curso.
                Abraços e nos vemos na próxima aula, até lá!
              </Description>
            </div>
            <div className="p-5">
              <div>
                <h3 className="font-bold text-black text-lg mb-5">Conteudo</h3>
              </div>
              {acordeaoData.map((item) => {
                return <AcordeonItem key={item.id} data={item} />;
              })}
            </div>

            <div  className="p-5">
              <div>
                <h3 className="font-bold text-black text-lg mb-5">Instrutor</h3>
              </div>
              <InstructorDetailsCard {...instructor} />
            </div>
          </div>
          {/* righttside */}
          <div className=" flex flex-col gap-5 sticky right-0 top-0 ">
            <div className="w-full border border-gray-300 rounded-md p-4 pb-5 shadow-xl">
              <h3 className="font-bold text-3xl text-black">
                {(23.5).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <div>
                <Button text="Comprar agora" className="bg-blue-700"></Button>
                <Button
                  text="Adicionar ao carrinho"
                  className="bg-yellow-700 mb-0"
                ></Button>
              </div>
            </div>
            <div className="w-full border border-gray-300 rounded-md p-4 pb-5 shadow-xl">
              <h5 className="text-black font-bold">Detalhes do curso</h5>
              <ul className="mt-5 font-medium space-y-2">
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaSignal />
                  </span>
                  Iniciante
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaRegClock />
                  </span>
                  5 horas de duração
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaRegCircleUser />
                  </span>
                  Comunidade privada
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <FaArrowsSpin />
                  </span>
                  Acesso vitalicio
                </li>
                <li className="text-black flex gap-2 items-center">
                  <span>
                    <PiCertificateBold />
                  </span>
                  Certificado de conclusão
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Course;
