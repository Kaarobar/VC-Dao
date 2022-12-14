import React, { FC, useEffect, useState } from "react";
import Countdown from "./Countdown";
import "react-circular-progressbar/dist/styles.css";
import CircularProgressBarWithLogo from "./CircularProgressBarWithLogo";
import Button from "../common/Button";
import Footer from "../Layout/Footer";
import {
  useAccount,
  useConnectModal,
  useContract,
  useProvider,
  useSigner,
} from "@web3modal/react";
import {
  Pledge,
  Details,
  contributedAmnt,
} from "../../web3functions/functions";
import { BigNumber, ethers } from "ethers";
import moment from "moment";
import { Props } from "next/script";
const project = require("../../web3functions/Project.json");

const InitialHomeScreen: FC<{ setPageChange: any }> = ({setPageChange}) => {
  const [details, setDetails] = useState<any>();

  const [date, setDate] = useState<any>(0);

  const { isOpen, open } = useConnectModal();
  const { account, isReady } = useAccount();
  const { provider } = useProvider();
  const { data } = useSigner();

  const [stateChange, setStateChange] = useState(false);
  const [matic, setMatic] = useState("");
  const [goalPercent, setGoalPercent] = useState(0);
  const [contributed, setContributed] = useState("0");
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    (async () => {
      setDetails(await Details());
      if (details) {
        setDate(
          moment.unix(ethers.BigNumber.from(details.deadline._hex).toNumber())
        );
        setGoalPercent(
          Number(
            ethers.utils.formatEther(
              BigNumber.from(details.amountRaised).toString()
            )
          ) / Number(ethers.utils.formatEther(
            BigNumber.from(details.amountToRaise).toString()
          )) * 100
        );
        if (account.address != "")
          contributedAmnt(account.address, setContributed);
      }
    })(),
      [account];
  }, [details]);

  const handleStateChange = async () => {
    if (account.isConnected) {
      {
        console.log("Signer: ", data);
      }
      setStateChange(true);
      //setContributed(await contributedAmnt(account.address, setContributed))
    } else {
      if (!isOpen) {
        open();
      }
    }
  };
  //Number(details?.amountToRaise._hex)
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <CircularProgressBarWithLogo percentage={goalPercent} />

      <div className="flex items-center gap-2 mt-4">
        <div className="w-6 h-6">
          <img src="/assets/images/matic.png" className="w-full h-full" />
        </div>
        <div className="uppercase text-lg font-medium text-gray-500">
          {details &&
            Number(
              ethers.utils.formatEther(details?.amountToRaise).toString()
            )}{" "}
          Matic
        </div>
      </div>

      <div>
        <Countdown targetDate={date} />
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
            <div>Contributed: {contributed}</div>
            <div className="space-x-3">
              <Button
                size="md"
                text="Pledge"
                withBg
                onClick={() =>
                  Pledge(matic, account, data, isReady)
                }
              />
              <Button size="md" text="Unpledge" withBg disable={matic !== ""} onClick={() =>setPageChange(true)} />
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
