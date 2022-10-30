import React from "react";
import Countdown from "./Countdown";

import "react-circular-progressbar/dist/styles.css";
import CircularProgressBarWithLogo from "./CircularProgressBarWithLogo";
import Button from "../common/Button";
import Footer from "../Layout/Footer";

const InitialHomeScreen = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

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
        <Button size="md" text="Invest Now" withBg />
      </div>
      
      <Footer bottom />
    </div>
  );
};

export default InitialHomeScreen;
