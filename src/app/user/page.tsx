import Divider from "@/components/Divider";
import SectionContainer from "@/components/Section/SectionContainer";
import Input from "../dashboard/newcourse/components/input";
import TextArea from "../dashboard/newcourse/components/InputFile";
import Image from "next/image";
import { Option, Select } from "../dashboard/newcourse/components/select";
import Button from "@/components/Button";

function User() {
  return (
    <div>
      <SectionContainer className="mt-5 mb-5">
        <p className="text-sm text-gray-500">Z academy</p>
        <h1 className="text-black text-2xl font-semibold">Minha conta</h1>
        {/* divider */}
        <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>

        <div className="flex gap-20 mt-10 mb-10">
          <div className="min-w-[340px]">
            <h2 className="text-black text-xl font-medium">Meu perfil</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-[500px]">
              Conte um pouco sobre voce para os seus colegas de turma. De onde
              voce é? Qual seu objetivo.
            </p>
          </div>
          <div className="w-full bg-red-white shadow-lg border rounded-lg border-gray-200 p-5">
            <Input labelTitle="Nome" />
            <div className="flex items-center gap-5">
              <TextArea labelTitle="Biografia" />
              <div className="">
                <p className="text-black font-bold">Avatar</p>
                <Image
                  src="/cardUser.jpeg"
                  alt=""
                  className="rounded-full w-14 h-14"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>

        <div className="flex gap-20 mt-10 mb-10">
          <div className="min-w-[340px]">
            <h2 className="text-black text-xl font-medium">Fuso Horário</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-[500px]">
              Ajuste a data e hora na plataforma conforme sua região
            </p>
          </div>
          <div className="w-full bg-red-white shadow-lg border rounded-lg border-gray-200 p-5">
            <div className="flex items-center gap-5 w-full">
              <Select className="w-full">
                <Option>GMT-03:00 Brasilia</Option>
              </Select>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>

        <div className="flex gap-20 mt-10 mb-10">
          <div className="min-w-[340px]">
            <h2 className="text-black text-xl font-medium">Alterar senha</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-[500px]">
              Deixe em branco caso não queira alterá-la
            </p>
          </div>
          <div className="w-full bg-red-white shadow-lg border rounded-lg border-gray-200 p-5">
            <div className="flex items-center gap-5 w-full">

            <Input labelTitle="Senha atual" />
            <Input labelTitle="Nova Senha" />
            <Input labelTitle="Confirme sua nova senha" />
              
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>

        <div className="flex justify-end">
          <Button text="Cancelar"  buttonSize="medium" className="bg-transparent text-black"  />
          <Button text="Atualizar" buttonSize="medium" />
        </div>
      </SectionContainer>
    </div>
  );
}

export default User;
