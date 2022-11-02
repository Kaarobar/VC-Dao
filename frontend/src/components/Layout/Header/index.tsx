import React from "react";
import Button from "../../common/Button";
import { Web3Button, useAccount } from "@web3modal/react";
import Link from "next/link";

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

          <div className="flex items-center gap-x-4">
            <div>
              <Link
                href="/daos"
                className="text-gray-600 no-underline hover:underline  font-normal text-lg cursor-pointer"
              >
                Daos
              </Link>
            </div>
            <Web3Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
