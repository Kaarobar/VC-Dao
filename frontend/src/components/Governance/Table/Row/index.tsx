import React, { FC, ReactNode } from "react";

const TableRow: FC<{ children: ReactNode }> = ({ children }) => {
  return <tr className="border-[0.2px] border-solid border-gray-400">{children}</tr>;
};

export default TableRow;
