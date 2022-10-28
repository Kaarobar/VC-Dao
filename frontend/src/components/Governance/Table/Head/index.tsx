import React, { FC } from "react";

const TableHead: FC<{ items: string[] }> = ({ items }) => {
  return (
    <thead className="border-[0.1px] border-solid border-gray-400 ">
      <tr>
        {items.map((v, i) => (
          <th key={i} className="px-6 py-3 min-w-[6rem]">
            <p className="text-sm font-normal capitalize text-gray-600">{v}</p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
