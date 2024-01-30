import SectionContainer from "@/components/Section/SectionContainer";
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
        <div className="grid grid-cols-4">

          <div className="col-span-3  bg-red-400">
            opaaaaa
          </div>
          <div className="bg-blue-500 ">
            opaaaaa
          </div>

        </div>
      </SectionContainer>
    </>
  );
}

export default Course;
