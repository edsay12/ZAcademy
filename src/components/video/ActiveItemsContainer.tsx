import { ReactNode } from "react";

function ActiveItensContainer({ children }: { children: ReactNode }) {
  return (
    <div className=" col-start-3 col-end-4  w-full h-[520px]   overflow-y-auto hidden xl:block  scrollbar-thin scrollbar-thumb-gray-600  scrollbar-track-blue-700">
      {children}
    </div>
  );
}

export default ActiveItensContainer;
