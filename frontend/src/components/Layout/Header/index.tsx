import React from "react";
import Button from "../../common/Button";
import { Web3Button, useAccount } from "@web3modal/react";

const Header = () => {
  const { account } = useAccount();
  return (
    <div className="w-full">
      <div className="py-4 px-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <h2 className="font-semibold tracking-wide text-gray-800">
              VC Dao
            </h2>
          </div>
<<<<<<< HEAD
          <div>
            {account.isConnected ? <h1>{account.address}</h1> : null}
            <Web3Button />
            {/* <Button text="Connect Wallet" size="sm" withBg /> */}
=======
          <div className="flex items-center gap-x-4">
            <div>
              <p className="text-gray-600 hover:underline  font-normal text-lg cursor-pointer">
                Daos
              </p>
            </div>
            <div>
              <Button text="Connect Wallet" size="sm" withBg />
            </div>
>>>>>>> dbfe4db804261805a563dbb3c7df40467a87d450
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
