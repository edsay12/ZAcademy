import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/Dashboard/DashboardPage";

function NewCourse() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Novo Curso</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>Novo Curso</DashboardPageMain>
    </DashboardPage>
  );
}

export default NewCourse;
