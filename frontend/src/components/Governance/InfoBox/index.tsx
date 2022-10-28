import React, { FC } from "react";

interface Props {
  desc: string;
  value: string;
}

const InfoBox: FC<Props> = ({ desc, value }) => {
  return (
    <div className="flex items-center gap-x-1">
      <p className="text-sm text-gray-600">{desc}:</p>
      <p className="px-1 text-sm rounded-sm text-gray-600 uppercase border-[0.5px] border-solid border-gray-600">{value}</p>
    </div>
  );
};

export default InfoBox;
