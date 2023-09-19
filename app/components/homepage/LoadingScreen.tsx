"use client";
import React, { useState, useEffect } from "react";

export const LoadingScreen = ({ setIsShowHome }) => {
  const [percentLoading, setPercentLoading] = useState(0);

  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentLoading((counter) => {
        if (counter < 100) {
          return counter + randomNumberInRange(1, 5);
        } else return 100;
      });
    }, randomNumberInRange(50, 100));
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (percentLoading === 100) {
      setIsShowHome(true);
    }
  }, [percentLoading]);

  return (
    <div className="flex flex-1 w-full h-full justify-center items-center relative px-[25px] py-[15px]">
      <div className="m-auto w-[600px]">
        <div
          style={{ width: `${percentLoading > 100 ? 100 : percentLoading}%` }}
          className="h-3 rounded-sm bg-white block mb-2"
        ></div>
        <div className="flex justify-between">
          <p>DREAMING...</p>
          <p>{percentLoading > 100 ? 100 : percentLoading}%</p>
        </div>
      </div>
    </div>
  );
};
