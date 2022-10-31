import React from "react";
import Button from "../../common/Button";
const Header = () => {
  return (
    <div className="w-full">
      <div className="py-4 px-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <h2 className="font-semibold tracking-wide text-gray-800">
              VC Dao
            </h2>
          </div>
          <div className="flex items-center gap-x-4">
            <div>
              <p className="text-gray-600 hover:underline  font-normal text-lg cursor-pointer">
                Daos
              </p>
            </div>
            <div>
              <Button text="Connect Wallet" size="sm" withBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
