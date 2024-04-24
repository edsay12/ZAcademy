import Divider from "@/components/Divider";
import SectionContainer from "@/components/Section/SectionContainer";
import Input from "../dashboard/newcourse/components/input";
import TextArea from "../dashboard/newcourse/components/InputFile";
import Image from "next/image";

function User() {
  return (
    <div>
      <SectionContainer className="mt-5 mb-5">
        <p className="text-sm text-gray-500">Z academy</p>
        <h1 className="text-black text-2xl font-semibold">Minha conta</h1>
        <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>

        <div className="flex gap-20">
          <div>
            <h2 className="text-black text-xl font-medium">Meu perfil</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-[500px]">
              Conte um pouco sobre voce para os seus colegas de turma. De onde
              voce é? Qual seu objetivo.
            </p>
          </div>
          <div className="w-full">
            <Input labelTitle="Nome"/>
            <div className="flex items-center gap-5">
                <TextArea labelTitle="Biografia"/>
                <div className="">
                    <p className="text-black font-bold">Avatar</p>
                    <Image src="/cardUser.jpeg" alt=""  className="rounded-full w-14 h-14" width={50} height={50}/>

                </div>

            </div>
            
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default User;
