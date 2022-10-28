import React, { FC } from "react";

interface Props {
  title: string;
  id: number;
  status: "active" | "executed";
}

const TableDataProposal: FC<Props> = ({ title, id, status }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="h-8 min-w-[2rem] rounded-full">
        <img src="/assets/images/compound.webp" className="h-full w-full" />
      </div>
      <div>
        <p className="mb-1 hover:underline font-medium text-gray-800 cursor-pointer">
          {title}
        </p>
        <div className="space-x-2 text-sm">
          <span
            className={`uppercase font-medium rounded-sm px-2 py-1 ${
              status === "active"
                ? "bg-purple-100 text-purple-500"
                : "bg-green-100 text-green-500"
            } tracking-wide`}
          >
            {status}
          </span>
          <span className="text-gray-500">ID {id}</span>
        </div>
      </div>
    </div>
  );
};

export default TableDataProposal;
