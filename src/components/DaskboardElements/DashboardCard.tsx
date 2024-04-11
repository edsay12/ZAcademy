import { ReactNode } from "react";
import Divider from "../Divider";

type DashboardCardType = {
  title: string;
  children:ReactNode
};

function DashboardCard({ title='Curso',children }: DashboardCardType) {
  return (
    <div className=" border shadow-lg">
      <h5 className="p-4 font-semibold">{title}</h5>
      <div className="w-full h-[1px] bg-gray-400 "></div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default DashboardCard;
