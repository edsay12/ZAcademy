'use client'
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/Dashboard/DashboardPage";
import DashboardCard from "@/components/DaskboardElements/DashboardCard";
import DragInDrop from "./components/dragInDrop";

function NewCourse() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Novo Curso</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div className="grid grid-cols-2 gap-6">
          <DashboardCard title="Adicionar">
            <DragInDrop />
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
