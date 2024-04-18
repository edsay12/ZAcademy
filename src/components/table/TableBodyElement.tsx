import { ReactNode } from "react";

type PropType = {
  datalength: number;
  index: number;
  children: ReactNode;
};

function TableBodyElement({ datalength, index, children }: PropType) {
  const isLast = index === datalength - 1;
  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  return <td className={classes}>{children}</td>;
}

export default TableBodyElement;
