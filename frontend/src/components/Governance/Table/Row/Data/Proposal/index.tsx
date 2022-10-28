import React, { FC } from "react";
import VotingStatusTag from "../../../../../common/VotingStatusTag";

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
          <VotingStatusTag status={status} />
          <span className="text-gray-500">ID {id}</span>
        </div>
      </div>
    </div>
  );
};

export default TableDataProposal;
