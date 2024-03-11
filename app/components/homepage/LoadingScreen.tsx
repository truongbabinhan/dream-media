import React, { useState, useEffect } from "react";
interface LoadingScreenProps {
  setIsShowHome: any;
}
export const LoadingScreen = ({ setIsShowHome }: LoadingScreenProps) => {
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
    }, randomNumberInRange(100, 150));
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
    <div className="flex flex-1 w-full h-screen justify-center items-center px-[25px] py-[15px] z-[61] bg-black fixed top-0 left-0">
      <div className="m-auto w-[600px]">
        <div
          style={{ width: `${percentLoading > 100 ? 100 : percentLoading}%` }}
          className="h-3 rounded-sm bg-white block mb-2 transition-all"
        ></div>
        <div className="flex justify-between">
          <p>DREAMING...</p>
          <p>{percentLoading > 100 ? 100 : percentLoading}%</p>
        </div>
      </div>
    </div>
  );
};
