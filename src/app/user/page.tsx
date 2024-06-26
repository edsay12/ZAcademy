"use client";
import SectionContainer from "@/components/Section/SectionContainer";
import Input from "../dashboard/newcourse/components/input";
import TextArea from "../dashboard/newcourse/components/InputFile";
import Image from "next/image";
import { Option, Select } from "../dashboard/newcourse/components/select";
import Button from "@/components/Button";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { MdModeEditOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { useForm } from "react-hook-form";

type FormValues = {
  nome: string;
  bio: string;
  image: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
};

function User() {
  const [userImage, setUserImage] = useState("/cardUser.jpeg");
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      bio: "Não sou vagabundo,não sou delinquente",
      image: "/cardUser.jpeg",
      nome: "Edvan",
      password: "sou uma senha de exemplo",
      confirmPassword: "senha nova",
      newPassword: "senha",
    },
  });

  const handdleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0].type);

      if (!e.target.files[0].type.startsWith("image")) {
        alert("Escolha uma imagem para continuar");
        return;
      }

      setUserImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFormSubmit = (data:FormValues)=>{
    console.log(data)



  }

  return (
    <div>
      <SectionContainer className="mt-5 mb-5">
        <p className="text-sm text-gray-500">Z academy</p>
        <h1 className="text-black text-2xl font-semibold">Minha conta</h1>
        {/* divider */}
        <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>
        <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex gap-20 mt-10 mb-10">
            <div className="min-w-[340px]">
              <h2 className="text-black text-xl font-medium">Meu perfil</h2>
              <p className="text-sm text-gray-400 mt-2 max-w-[500px]">
                Conte um pouco sobre voce para os seus colegas de turma. De onde
                voce é? Qual seu objetivo.
              </p>
            </div>
            <div className="w-full bg-red-white shadow-lg border rounded-lg border-gray-200 p-5">
              <Input labelTitle="Nome" {...register("nome")} />
              <div className="flex items-center gap-5 mt-5">
                <TextArea labelTitle="Biografia" className="min-w-[300px]" {...register("bio")} />
                <div className="">
                  <p className="text-black font-bold">Avatar</p>

                  <label
                    htmlFor="userimage"
                    className="cursor-pointer relative"
                  >
                    <span className="absolute -right-2 -bottom-2 text-white text-xl p-1 rounded-full border-2 border-white bg-yellow-500">
                      <MdOutlineModeEditOutline />
                    </span>
                    <input
                      type="file"
                      className="sr-only"
                      id="userimage"
                      {...register("image")} 
                      onChange={(e) => handdleChange(e)}
                    />
                    <Image
                      src={userImage}
                      alt=""
                      className="rounded-full w-16 h-16"
                      width={50}
                      height={50}
                    />
                  </label>
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
                <Input labelTitle="Senha atual" type="password" {...register("password")}  />
                <Input labelTitle="Nova Senha"  type="password" {...register("newPassword")} />
                <Input labelTitle="Confirme sua nova senha" type="password" {...register("confirmPassword")} />
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="w-full h-[1px] mt-2 mb-2 bg-gray-400"></div>

          <div className="flex justify-end">
            <Button
              text="Cancelar"
              buttonSize="medium"
              className="bg-transparent text-black"
            />
            <Button text="Atualizar" buttonSize="medium" type="submit" />
          </div>
        </form>
      </SectionContainer>
    </div>
  );
}

export default User;
