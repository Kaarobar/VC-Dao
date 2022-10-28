import React, { FC } from "react";

interface Props {
  dao: string;
  daoIconSrc: string;
  proposal: number;
  holders: number;
  voters: number;
}

const DaoListingBox: FC<Props> = ({
  dao,
  daoIconSrc,
  proposal,
  holders,
  voters,
}) => {
  return (
    <div className="rounded-md  bg-gray-50 cursor-pointer">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <div className="h-16 w-16">
              <img src={daoIconSrc} className="w-full h-full rounded-full" />
            </div>
            <div>
              <h2 className="font-medium text-gray-800">{dao}</h2>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-around gap-x-4">
              <div className="flex justify-center flex-1 flex-col gap-y-2 text-center">
                <span className="text-gray-700 font-medium">{proposal}</span>
                <span className="text-gray-600">Proposal</span>
              </div>
              <div className="flex justify-center flex-1 flex-col gap-y-2 text-center">
                <span className="text-gray-700 font-medium">{holders}</span>
                <span className="text-gray-600">Holders</span>
              </div>
              <div className="flex justify-center flex-1 flex-col gap-y-2 text-center">
                <span className="text-gray-700 font-medium">{voters}</span>
                <span className="text-gray-600">Voters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaoListingBox;
