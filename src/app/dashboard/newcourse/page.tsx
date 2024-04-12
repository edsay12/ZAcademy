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
            </form>
          </DashboardCard>
          <DashboardCard title="Grade curricular">
            <div className="mt-2">qweqwsw</div>
          </DashboardCard>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}

export default NewCourse;
