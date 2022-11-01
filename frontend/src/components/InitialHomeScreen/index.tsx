import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressBarWithLogo from "./CircularProgressBarWithLogo";
import Button from "../common/Button";
import Footer from "../Layout/Footer";
import { useAccount, useConnectModal, useContract, useProvider } from "@web3modal/react";
import Pledge from "../../web3functions/functions";
const project = require("../../../../backend/deployments/polygon/Project.json")


const InitialHomeScreen = () => {
  const { isOpen, open } = useConnectModal();
  const {account, isReady} = useAccount()
  const {provider } = useProvider()

  const [stateChange, setStateChange] = useState(false);
  const [matic, setMatic] = useState("");
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const handleStateChange = () => {
    if (account.isConnected) {
      setStateChange(true);
      
    } else {
      if (!isOpen) {
        open();
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <CircularProgressBarWithLogo percentage={80} />

      <div className="flex items-center gap-2 mt-4">
        <div className="w-6 h-6">
          <img src="/assets/images/eth.svg" className="w-full h-full" />
        </div>
        <div className="uppercase text-lg font-medium text-gray-500">
          100 eth
        </div>
      </div>

      <div>
        <Countdown targetDate={dateTimeAfterThreeDays} />
      </div>

      <div>
        {stateChange ? (
          <div className="flex flex-col gap-y-4">
            <div>
              <input
                placeholder="Matic"
                value={matic}
                onChange={(e) => setMatic(e.currentTarget.value)}
                className="pl-2 border-[1px] outline-none h-10 border-[#dcdfe6] w-full border-solid text-gray-600 text-base rounded-sm box-border"
              />
            </div>
            <div className="space-x-3">
              <Button size="md" text="Pledge" withBg onClick={() =>Pledge(matic, provider, account, isReady)}/>
              <Button size="md" text="Unpledge" withBg disable={matic !== ""} />
            </div>
          </div>
        ) : (
          <Button
            size="md"
            text="Invest Now"
            withBg
            onClick={handleStateChange}
          />
        )}
      </div>

      <Footer bottom />
    </div>
  );
};

export default InitialHomeScreen;
