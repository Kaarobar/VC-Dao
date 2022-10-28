import React, { FC } from "react";

interface Props {
  addresses: number;
  votes: number;
}

const TableDateVotes: FC<Props> = ({ addresses, votes }) => {
  return (
    <div className="flex flex-col items-end justify-center gap-y-1 text-sm">
      <div className="text-gray-800 font-medium">{votes}k</div>
      <div className="capitalize text-gray-500">{addresses} addresses</div>
    </div>
  );
};

export default TableDateVotes;
