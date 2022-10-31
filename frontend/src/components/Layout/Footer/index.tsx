import React, { FC } from "react";

const Footer: FC<{bottom?: boolean}> = ({bottom}) => {
  return (
    <div className={`bg-gray-800 w-full ${bottom && "absolute bottom-0"}`}>
      <div className="py-3">
        <div className="flex items-center justify-center">
          <div>
            <p className="text-sm text-white">
              © {new Date().getFullYear()} VC Dao. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;