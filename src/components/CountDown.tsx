"use client";
import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountDown: React.FC = () => {
  const targetDate = new Date("2024-12-31T23:59:59");

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 mt-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gray-900 text-yellow-300 rounded-lg shadow-lg"
        >
          <span className="text-3xl md:text-4xl font-bold">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm uppercase text-gray-400">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountDown;
