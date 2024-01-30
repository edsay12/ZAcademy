import SectionContainer from "@/components/Section/SectionContainer";
import Description from "@/components/Description";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Course() {
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
              <div className="flex items-center gap-2 ">
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
      <SectionContainer>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 max-w-[900px]">
            <div >
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
          </div>
          <div className="bg-blue-500 "></div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Course;
