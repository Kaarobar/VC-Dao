import React, { FC } from "react";

interface Props {
  iconSrc: string;
  coinName: string;
}

const CoinTag: FC<Props> = ({ iconSrc, coinName }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-gray-100 text-sm text-gray-800 tracking-wider uppercase font-semibold max-h-6 py-2 px-2 min-w-[1.5rem] gap-x-2">
      <span className="h-4 w-4">
        <img src={iconSrc} className="w-full h-full" />
      </span>
      <span>{coinName}</span>
    </div>
  );
};

export default CoinTag;
