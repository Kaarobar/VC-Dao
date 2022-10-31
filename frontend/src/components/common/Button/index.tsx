import React, { FC } from "react";

interface Props {
  size: "sm" | "md";
  text: string;
  withBg?: boolean;
  onClick?: () => void;
  disable?: boolean;
}

const Button: FC<Props> = ({ size, withBg, text, onClick, disable }) => {
  return (
    <button
      className={`${
        size === "sm"
          ? "py-2 h-10 px-4 min-w-[2.5rem]"
          : "py-3 px-6 h-12 min-w-[3rem]"
      } text-[15px] font-medium  ${
        withBg
          ? disable
            ? "bg-gray-700 text-white"
            : "bg-gray-800 text-white"
          : "border-gray-800 border border-solid text-gray-800 bg-transparent"
      } rounded-sm cursor-pointer leading-5`}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
