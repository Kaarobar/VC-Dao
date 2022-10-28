import React, { FC, ReactNode } from "react";

export const TableData: FC<{ children: ReactNode }> = ({ children }) => {
  return <td className="px-6 py-3">{children}</td>;
};
