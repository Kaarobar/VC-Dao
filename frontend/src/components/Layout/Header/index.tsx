import React from "react";
import Button from "../../common/Button";
import { Web3Button, useAccount, useSigner } from "@web3modal/react";
import Link from "next/link";
import { getTokens } from "../../../web3functions/functions";

const Header = () => {
  const { account, isReady} = useAccount();
  const {data} = useSigner();
  return (
    <div className="w-full">
      <div className="py-4 px-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <Link href="/" className="no-underline">
              <h2 className="font-semibold tracking-wide text-gray-800">
                VC Dao
              </h2>
            </Link>
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
            <div>
              <Button size="sm" text="Claim VC Dao" onClick={()=> getTokens(account, isReady, data)}/>
            </div>
            <Web3Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
