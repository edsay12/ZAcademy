import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/Dashboard/DashboardPage";
import DashboardCourseDetailsCard from "@/components/DaskboardElements/DashboardCourseDetailsCard";
import { GoEye } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
function Dashboard() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Inicio</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div className="grid  lg:grid-cols-2  xl:grid-cols-4 gap-6">
          <DashboardCourseDetailsCard description="Total de Visualizações" ico={<GoEye />} percentage={10} value="3.456K" />
          <DashboardCourseDetailsCard description="Total de Vendas" ico={<IoCartOutline />} percentage={0.1} value="45,2K" />
          <DashboardCourseDetailsCard description="Numero de Cursos" ico={<CiBag1 />} percentage={2.59} value="2.450" />
          <DashboardCourseDetailsCard description="Total de Alunos" ico={<FiUsers />} percentage={0.95} value="3.456" />
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}

export default Dashboard;
