"use client";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/Dashboard/DashboardPage";
import DashboardCard from "@/components/DaskboardElements/DashboardCard";
import DragAndDrop from "./components/dragAndDrop";
import Input from "./components/input";
import { Option, Select } from "./components/select";
import { categories } from "@/fakeData/categories";
import { level } from "@/fakeData/level";
import InputFile from "./components/InputFile";
import TextArea from "./components/InputFile";
import Button from "@/components/Button";
import { PiPlus } from "react-icons/pi";
import AcordeonInput from "@/components/Acordeon/AcordeonInput";
import { FormEvent, FormHTMLAttributes, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { error } from "console";

type FormValues = {
  modules: {
    id?: string;
    title: string;
    cource: {
      id?: string;
      title: string;
      description: string;
      video: File | null;
    }[];
  }[];
};

function NewCourse() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      modules: [
        {
          title: "asda",
          id: "",
          cource: [
            {
              id: "",
              title: "",
              description: "",
              video: null,
            },
          ],
        },
      ],
    },
  });

  const {
    fields: modules,
    append: moduleArray,
    replace,
  } = useFieldArray({
    name: "modules",
    control,
  });

  function handdleClickNewClass(index: number) {
    const array = modules.map((module, itemIndex) => {
      if (itemIndex == index) {
        return {
          ...module,
          cource: [
            ...module.cource,
            {
              id: "",
              title: "",
              description: "",
              video: null,
            },
          ],
        };
      }

      return module;
    });
    replace(array);
  }
  function handdleClickNewModule() {
    moduleArray({
      title: "",
      cource: [{ description: "", title: "", video: null }],
    });
  }

  function handdleSubmit(data: any) {
    console.log(data);
    console.log(errors);
  }

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Novo Curso</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div className="grid grid-cols-2 gap-6">
          <DashboardCard title="Adicionar">
            <form action="" className="space-y-5">
              <DragAndDrop />
              <Input type="text" labelTitle="Titulo" name="title" />
              <Select labelTitle="Categoria">
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
              <div className="grid grid-cols-2 gap-5">
                <Select labelTitle="Nivel">
                  {level.map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>

                <Input type="text" labelTitle="Titulo" />
              </div>
              <Input type="file" name="imagem" labelTitle="Imagem de capa" />
              <TextArea labelTitle="Descrição" />
              <Button text="Enviar" rounded="rounded" />
            </form>
          </DashboardCard>
          <DashboardCard title="Grade curricular">
            <p>
              Comece a montar seu curso criando Modulos, aulas e atividades
              práticas (testes, exercícios de programação e tarefas).
            </p>
            <form
              method="post"
              className="flex flex-col gap-4 w-full mt-5"
              onSubmit={handleSubmit(handdleSubmit)}
            >
              {modules.map((module, moduleIndex) => (
                <div
                  className=" w-full flex-grow gap-5  border-dashed border-2 p-5  "
                  key={moduleIndex}
                >
                  <div className="flex items-center">
                    <p className="w-full max-w-[150px] font-bold">
                      Nome do modulo:{" "}
                    </p>
                    <Input
                      title="Nome do modulo"
                      placeholder="Adicione o titulo do novo modulo"
                      defaultValue="test"
                      errorMessage={
                        errors.modules && errors.modules[moduleIndex]?.message
                      }
                      {...register(`modules.${moduleIndex}.title` as const, {
                        required: true,
                        minLength: 10,
                      })}
                    />
                  </div>
                  {/* aulas */}
                  {module.cource.map((aula, courceIndex) => (
                    <div className="mt-5" key={courceIndex}>
                      <AcordeonInput
                        title="Aula1"
                        {...register(
                          `modules.${moduleIndex}.cource.${courceIndex}.title`,
                          { required: true, minLength: 10 }
                        )}
                      >
                        <TextArea
                          labelTitle="Descrição"
                          {...register(
                            `modules.${moduleIndex}.cource.${courceIndex}.description`,
                            { required: true, minLength: 10 }
                          )}
                        />
                        <Input
                          type="file"
                          labelTitle="Video da aula"
                          accept="video/*"
                          {...register(
                            `modules.${moduleIndex}.cource.${courceIndex}.video`,

                            { required: true }
                          )}
                        />
                      </AcordeonInput>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="flex items-center gap-4 mt-10 text-xs font-bold"
                    onClick={() => handdleClickNewClass(moduleIndex)}
                  >
                    <PiPlus />
                    Adicionar nova aula
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="flex items-center gap-4 mt-5 text-xs font-bold ml-2"
                onClick={() => handdleClickNewModule()}
              >
                <PiPlus />
                Adicionar novo modulo
              </button>

              <Button text="Enviar" rounded="rounded" />
            </form>
          </DashboardCard>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}

export default NewCourse;
