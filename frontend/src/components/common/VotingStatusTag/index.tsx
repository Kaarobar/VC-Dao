import React, { FC } from "react";

const VotingStatusTag: FC<{ status: string }> = ({ status }) => {
  return (
    <span
      className={`uppercase font-medium rounded-sm px-2 py-1 ${
        status === "active"
          ? "bg-purple-100 text-purple-500"
          : "bg-green-100 text-green-500"
      } tracking-wide`}
    >
      {status}
    </span>
  );
};

export default VotingStatusTag;
