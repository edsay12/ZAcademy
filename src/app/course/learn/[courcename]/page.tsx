'use client'
import AcordeonItem from "@/components/Acordeon/AcordeonContainer";
import AcordeonLinkItem from "@/components/Acordeon/components/AcordeonLinkItem";
import Button from "@/components/Button";
import Description from "@/components/Description";
import ProgressBar from "@/components/ProgressBar";
import SectionContainer from "@/components/Section/SectionContainer";
import { acordeaoData } from "@/fakeData/acordeaoData";

import { useRouter } from "next/navigation";

function CourseDetails() {
  const router = useRouter()
  return (
    <SectionContainer className="min-h-[600px] mb-20">
      <div className="grid lg:grid-cols-2 gap-10 grid-cols-1">
        <div>
          <h3 className="text-black font-medium text-2xl">
            Curso de javascript do basico ao avançado
          </h3>
          <div className="flex gap-2 text-gray-400 mt-2">
            <span>18h 33m </span>
            <span>•</span>
            <span>148 conteúdos</span>
          </div>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea
            voluptatibus, totam ipsa, molestias possimus aut et quos atque
            dolorem sequi doloremque voluptates cumque culpa obcaecati?
            Inventore ipsa voluptatibus quod?
          </Description>

          <div className="mt-5">
            <ProgressBar percentage={80} />
          </div>
          <div className="mt-10">
            <Button
              text="Continuar onde parei"
              rounded="rounded"
              bg="bg-blue-700"
              onClick={()=> router.push('/course/learn/cursodejava/variaveis')}
            />
          </div>
        </div>
        <div className="space-y-4">
          {acordeaoData.map((item) => {
            return (
              <AcordeonItem key={item.id} title={item.title}>
                {item.lessons.map((item) => {
                  return (
                    <AcordeonLinkItem
                      key={item.id}
                      itemUrl="/course/learn/cursodejava/variaveis"
                      itemTitle={item.title}
                    />
                  );
                })}
              </AcordeonItem>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

export default CourseDetails;
