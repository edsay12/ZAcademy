import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/Dashboard/DashboardPage";
import DashboardCard from "@/components/DaskboardElements/DashboardCard";

function NewCourse() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Novo Curso</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>

        <DashboardCard title="Curso">

          <div className="mt-2">

            qweqwsw
          </div>

        </DashboardCard>
      </DashboardPageMain>
    </DashboardPage>
  );
}

export default NewCourse;
