import React, { FC } from "react";
import { useCountdown } from "../../../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

interface Props {
  targetDate: number;
}

const Countdown: FC<Props> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return (
      <div className="flex justify-center items-center gap-4 leading-7 my-8">
        <DateTimeDisplay value={days} type="Days" />
        <p>:</p>
        <DateTimeDisplay value={hours} type="Hours" />
        <p>:</p>
        <DateTimeDisplay value={minutes} type="Mins" />
        <p>:</p>
        <DateTimeDisplay value={seconds} type="Seconds" />
      </div>
    );
  }
};

export default Countdown;
