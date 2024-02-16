"use client";
import AcordeonItem from "@/components/Acordeon/AcordeonContainer";
import Button from "@/components/Button";
import Description from "@/components/Description";
import InstructorDetailsCard from "@/components/InstructorDetailsCard";
import SectionContainer from "@/components/Section/SectionContainer";
import ActiveItem from "@/components/video/ActiveItem";
import { acordeaoData } from "@/fakeData/acordeaoData";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { FaRegClock, FaSignal } from "react-icons/fa";
import { FaArrowLeft, FaArrowsSpin, FaRegCircleUser } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import VideoContainer from "@/components/video/VideoContainer";
import VideoPlayer from "@/components/video/VideoPlayer";
import ActiveItensContainer from "@/components/video/ActiveItemsContainer";
import VideoMenuBotton from "@/components/video/VideoMenuBotton";
import BreadCrumb from "@/components/BreadCrumb";
import VideoMenuButton from "@/components/video/VideoMenuButton";
import CommentAdd from "@/components/Comment/CommentAdd";
import CommentContainer from "@/components/Comment/CommentsContainer";
import CommentNumber from "@/components/Comment/CommentNumber";
import CommentsContainer from "@/components/Comment/CommentsContainer";
import Comments from "@/components/Comment/Comments";
import Rating from "@/components/Rating";
import ProgressBar from "@/components/ProgressBar";

type Params = {
  params: {
    classname: string;
    cursonome: string;
  };
};

function Learn({ params }: Params) {
  const seach = useSearchParams();
  const path = usePathname();

  console.log("seache", seach);
  console.log(params.cursonome);

  return (
    <>
      <SectionContainer className="-mt-[5px] bg-blue-600 p-5">
        <VideoContainer>
          <VideoPlayer videoUrl="/videoDeExemplo.mp4" />
          <ActiveItensContainer>
            <ActiveItem
              videoCoverImageUrl="/cardBg.webp"
              videoTitle="Trabalhando com funçoes em javascript"
              VideoUrl="/course/learn/asdasda/asdasda2"
            />
            <ActiveItem
              videoCoverImageUrl="/cardBg.webp"
              videoTitle="Trabalhando com funçoes em javascript"
              VideoUrl="/course/learn/asdasda/asdasda3"
            />
            <ActiveItem
              videoCoverImageUrl="/cardBg.webp"
              videoTitle="Trabalhando com funçoes em javascript"
              VideoUrl="/course/learn/asdasda/asdasda4"
            />
            <ActiveItem
              videoCoverImageUrl="/cardBg.webp"
              videoTitle="Trabalhando com funçoes em javascript"
              VideoUrl="/course/learn/asdasda/asdasda5"
            />
            <ActiveItem
              videoCoverImageUrl="/cardBg.webp"
              videoTitle="Trabalhando com funçoes em javascript"
              VideoUrl="/course/learn/asdasda/asdasda6"
            />
          </ActiveItensContainer>
        </VideoContainer>
      </SectionContainer>
      <VideoMenuBotton>
        <div className="mr-auto">
          <BreadCrumb
            pathName={`/course/learn/javascript/avancado`}
            removedFirstQuantity={2}
          />
        </div>
        <div className=" ">
          <VideoMenuButton icon={<IoIosArrowBack />} message="Voltar" />
          <VideoMenuButton icon={<IoIosArrowForward />} message="Proximo" />
        </div>
      </VideoMenuBotton>

      <SectionContainer className="mb-5 mt-0 relative">
        <div className="grid grid-cols-3 text-black gap-20 ">
          <div className=" w-full col-start-1 xl:col-end-3  col-end-4 ">
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
            <div className="flex flex-col gap-3 w-full border border-gray-300 rounded-md p-4 pb-5 shadow-xl  bg-white  ">
              <div className="text-center">
                <h3>Como você avalia este conteúdo?</h3>
              </div>
              <div className="flex justify-center ">
                <Rating />
              </div>
              <div>
                <Button text="Concluido" buttonSize="full" bg="bg-blue-700 " />
              </div>
              <div>
                <ProgressBar percentage={60} />
              </div>
            </div>
          </div>
          <div className=" w-full col-start-1 xl:col-end-3  col-end-4">
            <CommentsContainer>
              <CommentNumber commentsNumber={25} />
              <CommentAdd />
              <Comments />
            </CommentsContainer>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Learn;
