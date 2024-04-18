import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/Dashboard/DashboardPage";
import Table from "@/components/table/Table";
import TableBody from "@/components/table/TableBody";
import TableBodyElement from "@/components/table/TableBodyElement";
import TableHead from "@/components/table/TableHead";
import TableHeadElement from "@/components/table/TableHeadElement";
import TableRow from "@/components/table/TableRow";
import { TABLE_HEAD, TABLE_ROWS } from "@/fakeData";
import { CiEdit, CiTrash } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

function Courses() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Cursos</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <Table>
          <TableHead >
            <TableRow>
              {TABLE_HEAD.map((data) => {
                return <TableHeadElement key={data}>{data}</TableHeadElement>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {TABLE_ROWS.map((data, index, list) => {
              return (
                <TableRow key={data.id}>
                  <TableHeadElement>{data.titulo}</TableHeadElement>
                  <TableHeadElement>{data.categoria}</TableHeadElement>
                  <TableHeadElement>{data.nivel}</TableHeadElement>
                  <TableHeadElement>
                    <div className="flex itens-center gap-5">
                      <button className="cursor-pointer text-lg">
                        <IoEyeOutline />
                      </button>
                      <button className="cursor-pointer text-lg">
                        <CiTrash />
                      </button>
                      <button className="cursor-pointer text-lg">
                        <CiEdit />
                      </button>
                    </div>
                  </TableHeadElement>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </DashboardPageMain>
    </DashboardPage>
  );
}

export default Courses;
