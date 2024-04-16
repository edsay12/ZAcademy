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

function NewCourse() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Novo Curso</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div className="grid grid-cols-2 gap-6">
          <DashboardCard title="Adicionar">
            <form action="">
              <DragAndDrop />
              <Input type="text" labelTitle="Titulo" />
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
              <Input type="file" labelTitle="Imagem de capa" />
              <TextArea labelTitle="Descrição" />
              <Button text="Enviar" rounded="rounded" />
            </form>
          </DashboardCard>
          <DashboardCard title="Grade curricular">
            <p>
              Comece a montar seu curso criando Modulos, aulas e atividades
              práticas (testes, exercícios de programação e tarefas).
            </p>
            <form className="w-full">
              <div className="flex w-full gap-5 items-center">
                <p className="mt-5">Nome do modulo: </p>
                <Input title="Nome do modulo" className="w-full"></Input>
              </div>
            </form>

            <Button text="Enviar" rounded="rounded" />
          </DashboardCard>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}

export default NewCourse;
