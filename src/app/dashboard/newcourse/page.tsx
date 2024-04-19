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
import { useForm } from "react-hook-form"




function NewCourse() {
  const [modules, setModules] = useState([[]]);
  const {handleSubmit,register} = useForm();



  function handdleClickNewClass(index: number) {
    modules[index].push(1);
    setModules((modules) => [...modules]);
  }
  function handdleClickNewModule() {
    setModules((module) => [...module, []]);
  }

  function handdleSubmit(data:any) {
    console.log(data)
  }

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Novo Curso</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div className="grid grid-cols-2 gap-6">
          <DashboardCard title="Adicionar">
            <form action="" className="space-y-5" >
              <DragAndDrop />
              <Input type="text"  labelTitle="Titulo" name="title" />
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
              {modules.map((module, index) => (
                <div
                  className=" w-full flex-grow gap-5  border-dashed border-2 p-5  "
                  key={index}
                >
                  <div className="flex items-center">
                    <p className="w-full max-w-[150px] font-bold">
                      Nome do modulo:{" "}
                    </p>
                    <Input
                      title="Nome do modulo"
                      placeholder="Adicione o titulo do novo modulo"
                      defaultValue="test"
                      {...register(`modulo${index}`)}
                    />
                  </div>
                  {/* aulas */}
                  {module.map((aula, index) => (
                    <div className="mt-5" key={index}>
                      <AcordeonInput title="Aula1">
                        <TextArea labelTitle="Descrição" />
                        <Input type="file" labelTitle="Video da aula" />
                      </AcordeonInput>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="flex items-center gap-4 mt-10 text-xs font-bold"
                    onClick={() => handdleClickNewClass(index)}
                  >
                    <PiPlus />
                    Adicionar nova aula
                  </button>
                </div>
              ))}

              <button
                type="button"
                className="flex items-center gap-4 mt-5 text-xs font-bold ml-2"
                onClick={handdleClickNewModule}
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
