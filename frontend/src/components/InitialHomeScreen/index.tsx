import React from "react";
import Countdown from "./Countdown";

import "react-circular-progressbar/dist/styles.css";
import CircularProgressBarWithLogo from "./CircularProgressBarWithLogo";

const InitialHomeScreen = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      
      <CircularProgressBarWithLogo percentage={40} />

      <div className="flex items-center gap-2 mt-4">
        <div className="w-6 h-6">
          <img src="/assets/images/eth.svg" className="w-full h-full" />
        </div>
        <div className="uppercase text-lg font-medium text-gray-600">
          100 eth
        </div>
      </div>

      <div>
        <Countdown targetDate={dateTimeAfterThreeDays} />
      </div>

      <div>
        <button className="text-lg font-medium tracking-wide capitalize bg-black text-white h-12 px-14 rounded-lg cursor-pointer border-0 transition-text hover:border-2 hover:border-solid hover:border-black hover:bg-white hover:text-black">
          invest now
        </button>
      </div>
    </div>
  );
};

export default InitialHomeScreen;
