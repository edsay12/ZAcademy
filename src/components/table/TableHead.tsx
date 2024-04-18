import { ReactNode } from "react";

function TableHead({ children}: { children: ReactNode}) {
  return (
    <thead className="bg-gray-200" >
        {children}
      
    </thead>
  );
}

export default TableHead;
