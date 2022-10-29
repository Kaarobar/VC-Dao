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
          <div>
            {account.isConnected ? <h1>{account.address}</h1> : null}
            <Web3Button />
            {/* <Button text="Connect Wallet" size="sm" withBg /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
