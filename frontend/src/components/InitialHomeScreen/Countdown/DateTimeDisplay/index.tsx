import React, { FC } from "react";

interface Props {
  value: number;
  type: "Days" | "Hours" | "Mins" | "Seconds";
}

const DateTimeDisplay: FC<Props> = ({ value, type }) => {
  return (
    <div className="flex items-center flex-col">
      <p className="text-xl text-gray-800 font-medium">{value}</p>
      <span className="text-gray-600">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
