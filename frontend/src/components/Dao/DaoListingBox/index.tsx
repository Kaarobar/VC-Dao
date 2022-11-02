import React, { FC } from "react";
import Link from "next/link";

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

            <Link href={`/governance/${dao}`} className="no-underline">
              <div>
                <h2 className="font-medium text-gray-800 capitalize">{dao}</h2>
              </div>
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-around gap-x-4">
              <div className="flex justify-center flex-1 flex-col gap-y-2 text-center">
                <span className="text-gray-700 font-medium">{proposal}</span>
                <span className="text-gray-600">Proposal</span>
              </div>
              <div className="flex justify-center flex-1 flex-col gap-y-2 text-center">
                <span className="text-gray-700 font-medium">{holders}k</span>
                <span className="text-gray-600">Holders</span>
              </div>
              <div className="flex justify-center flex-1 flex-col gap-y-2 text-center">
                <span className="text-gray-700 font-medium">{voters}k</span>
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
