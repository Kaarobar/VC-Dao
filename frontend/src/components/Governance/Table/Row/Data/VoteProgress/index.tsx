import React, { FC } from "react";

interface Props {
  votes: number;
  percentage: number;
  status: string;
}

const TableDataVoteProgress: FC<Props> = ({ votes, percentage, status }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-y-2">
      <div
        className={`font-medium ${
          status === "for" ? "text-green-500" : "text-red-500"
        }`}
      >
        {votes}k
      </div>
      <div className="bg-gray-50 rounded-full h-1 w-36">
        <div
          className={`${
            status === "for" ? "bg-green-500" : "bg-red-500"
          } h-1 rounded-sm`}
          style={{ width: percentage }}
        />
      </div>
    </div>
  );
};

export default TableDataVoteProgress;
