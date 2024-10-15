"use client";
import SectionContainer from "@/components/Section/SectionContainer";
import Input from "../dashboard/newcourse/components/input";
import TextArea from "../dashboard/newcourse/components/InputFile";
import Image from "next/image";
import { Option, Select } from "../dashboard/newcourse/components/select";
import Button from "@/components/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { userServices } from "@/services/user";
import { User as userType } from "../api/users/[id]/route";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";

type FormValues = {
  nome: string;
  bio: string;
  image: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
};

function PulseLoadingUserInformations() {
  return (
    <div className="w-full gap-20 ">
      <div className=" w-full  rounded-lg overflow-hidden animate-pulse">
        <div className=" bg-slate-400 rounded col-span-2  p-24 block"></div>
      </div>
    </div>
  );
}

function User() {
  const session = useSession();
  const userId = session.data?.user.id;
  const [userImage, setUserImage] = useState("/usuarioPadrao.jpg");
  const [userImageSave, setUserImageSave] = useState<File>();
  const [isCancel, setIsCancel] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const { data: userApiData, isLoading } = useQuery<userType>({
    queryKey: ["user"],
    queryFn: () =>
      userServices.getCourseById({
        id: userId!,
      }),
    enabled: !!userId,
  });

  console.log(isLoading);
  useEffect(() => {
    if (!isLoading) {
      if (userApiData?.image) {
        setUserImage(userApiData?.image!);
      }
      reset({
        nome: userApiData?.name || "seu nome de usuario",
        bio: userApiData?.bio || "Coloque sua bio aqui",
        password: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [isLoading, isCancel, reset]);

  const handdleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (!e.target.files[0].type.startsWith("image")) {
        alert("Escolha uma imagem para continuar");
        return;
      }

      setUserImage(URL.createObjectURL(e.target.files[0]));
      setUserImageSave(e.target.files[0]);
    }
  };

  const handleFormSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("bio", data.bio);
    formData.append("image", userImageSave!);
    formData.append("password", data.password);
    formData.append("newPassword", data.newPassword);
    formData.append("confirmPassword", data.confirmPassword);

    userServices
      .updateUser({ id: userId, data: formData })
      .then((data) => {
        toast.success("a atualização ocorreu com sucesso");
      })
      .catch((error) => {
        toast.error(error.response.data.error || "Ocorreu um erro");
      });
  };

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
              {isLoading || !userId ? (
                <PulseLoadingUserInformations />
              ) : (
                <>
                  <Input labelTitle="Nome" {...register("nome")} />
                  <div className="flex items-center gap-5 mt-5">
                    <TextArea
                      labelTitle="Biografia"
                      className="min-w-[300px]"
                      {...register("bio")}
                      disabled={isLoading}
                    />
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
                </>
              )}
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
                <Input
                  labelTitle="Senha atual"
                  type="password"
                  {...register("password")}
                />
                <Input
                  labelTitle="Nova Senha"
                  type="password"
                  {...register("newPassword")}
                />
                <Input
                  labelTitle="Confirme sua nova senha"
                  type="password"
                  {...register("confirmPassword")}
                />
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
              onClick={() => setIsCancel((state) => !state)}
              type="button"
            />
            <Button
              text="Atualizar"
              buttonSize="medium"
              type="submit"
              disabled={isLoading}
            />
          </div>
        </form>
      </SectionContainer>

      <PulseLoadingUserInformations />
    </div>
  );
}

export default User;
