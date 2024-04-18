import { ReactNode } from "react";

function Table({ children }: { children: ReactNode }) {
  return (
    <table className="w-full min-w-max table-auto text-left">{children}</table>
  );
}

export default Table;
