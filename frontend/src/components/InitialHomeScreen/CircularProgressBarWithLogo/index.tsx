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
            stroke: "rgb(209 213 219)",
          },
          path: {
            stroke: `rgb(23, 23, 23, ${percentage / 100})`,
          },
        }}
      >
        <div className="h-40 w-40 bg-black rounded-full flex items-center justify-center">
          <h1 className="text-white">VC Dao</h1>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgressBarWithLogo;
