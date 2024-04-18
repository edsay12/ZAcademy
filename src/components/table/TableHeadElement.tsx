import { ReactNode } from "react";

function TableHeadElement({ children }: { children: ReactNode }) {
  return (
   
      <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
        <div className="text-xs text-gray-500 uppercase font-semibold ">
          {children}
        </div>
      </td>
    
  );
}

export default TableHeadElement;
