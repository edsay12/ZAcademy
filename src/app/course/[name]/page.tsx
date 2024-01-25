import SectionContainer from "@/components/Section/SectionContainer";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function Course() {
  return (
    <SectionContainer>
      <div className="w-full  grid grid-cols-3">
        <div className="col-span-2 ">
          <div
            className="w-full
                    "
          >
            <div className="flex flex-col gap-5 bg-gray-800 p-5 rounded-lg">
              <h1 className="font-bold text-4xl">
                Curso de Python 3 do básico ao avançado - com projetos reais{" "}
              </h1>
              <p>
                Python 3 completo: PySide6, Django, Selenium, Regexp, Testes,
                TDD, POO, Design Patterns GoF, algoritmos e programação
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex gap-1">
                  <div className="text-yellow-400">
                    4,8
                    {/* Componente de Star */}
                  </div>
                  <a href="#" className="text-blue-500">(39.118) classificações</a>
                  <p >137.185 alunos</p>
                </div>

                <div className="flex gap-1">
                  <p>Criado por:</p>
                  <span className="text-blue-500">
                    <Link href={"#"}>Luiz otavio miranda</Link>
                  </span>
                </div>
              </div>
            </div>
            {/* parte de baixo */}
            <div>asda</div>
            <div>asda</div>
            <div>asda</div>
          </div>
        </div>
        {/* outrolado */}
        <div className="col-span-1 bg-green-400">asdasda</div>
      </div>
    </SectionContainer>
  );
}

export default Course;
