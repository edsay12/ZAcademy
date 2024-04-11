import { ReactNode } from "react";
import { GoEye } from "react-icons/go";
import { IoMdArrowUp } from "react-icons/io";

type DashboardCourseDetailsCardType = {
  ico: ReactNode;
  description: string;
  value: string;
  percentage: number;
};

function DashboardCourseDetailsCard({
  description = "Total de visualizaçoes",
  ico = <GoEye />,
  percentage=0,
  value='200',
}: DashboardCourseDetailsCardType) {
  return (
    <div className="border p-4 shadow-lg">
      <div className="p-3 bg-gray-100 text-yellow-500 rounded-full inline-block text-xl">
        {ico}
      </div>

      <div className="mt-4 flex justify-between">
        <div className="space-y-2">
          <strong className="font-bold text-xl">{value}</strong>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="flex self-end gap-1 text-green-500  items-center text-xs">
          <p>{percentage}%</p>
          <IoMdArrowUp />
        </div>
      </div>
    </div>
  );
}

export default DashboardCourseDetailsCard;
