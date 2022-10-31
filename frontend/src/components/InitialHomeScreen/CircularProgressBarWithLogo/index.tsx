import React, { FC } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const CircularProgressBarWithLogo: FC<{ percentage: number }> = ({
  percentage,
}) => {
  return (
    <div className="w-52 h-52">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={3}
        styles={{
          trail: {
            stroke: "rgb(243 244 246)",
          },
          path: {
            stroke: `rgb(31, 41, 55, ${percentage / 100})`,
          },
        }}
      >
        <div className="h-40 w-40 bg-gray-800 rounded-full flex items-center justify-center">
          <h1 className="text-white">VC Dao</h1>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgressBarWithLogo;
