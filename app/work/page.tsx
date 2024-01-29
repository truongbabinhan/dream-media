"use client";
import { Header, Footer } from "../components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const categoryWork = [
  {
    name: "ALL",
    color: "#ffffff",
  },
  {
    name: "TV COMMERCIALS (TVC)",
    color: "#FF0078",
  },
  {
    name: "DIGITAL CONTENTS",
    color: "#9D00FF",
  },
  {
    name: "VIRAL VIDEOS",
    color: "#03FF60",
  },
  {
    name: "CORPORATE VIDEOS",
    color: "#00C6FE",
  },
  {
    name: "post production",
    color: "#F00",
  },
  {
    name: "live stream",
    color: "#FEE404",
  },
  {
    name: "PHOTOGRAPHY",
    color: "#2800FF",
  },
];

const Work = () => {
  const router = useRouter();
  const [dataWork, setDataWork] = useState([]);

  useEffect(() => {
    fetch("/data/data-work-menu.json")
      .then((res) => res.json())
      .then((data) => {
        setDataWork(data?.listWork);
      });
  }, []);

  const goToWorkDetail = (id: any) => {
    if (id !== "") {
      return router.push(`/work/detail?brand=${id}`, { scroll: true });
    }
    return;
  };

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black">
      <Header />
      <div className="h-screen max-sm:h-auto max-sm:min-h-max w-full text-white flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute max-sm:relative w-full h-full overflow-hidden top-0 left-0 pt-[70px] max-sm:pt-10 pb-[20px]">
            <Image
              src="/work/detail/banner.png"
              alt="item"
              layout="fill"
              objectFit="contain"
              className="!relative"
            />
          </div>
        </div>
        <div className="pb-[50px] max-sm:pb-[10px] pl-5">
          <p
            style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
            className="uppercase text-[180px] inline-block relative whitespace-pre-line max-sm:text-[30px]"
          >
            WORK{" "}
            <span className="text-[30px] max-sm:text-[10px] absolute top-0 right-[-60px] max-sm:right-[-20px]">
              ({dataWork?.length})
            </span>
          </p>
        </div>
      </div>
      <div className="bg-homepage-dashboard bg-top bg-contain bg-no-repeat relative py-[100px] max-sm:py-[40px] w-full">
        <div className="w-full h-full backdrop-brightness-[0.1] absolute left-0 top-0 z-[1]"></div>
        <div className="relative z-[2]">
          <p
            className="text-[90px] text-center whitespace-nowrap text-black max-sm:text-[25px]"
            style={{
              fontFamily: "Aeros",
              lineHeight: 1,
              textShadow:
                "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
            }}
          >
            WE PRODUCE
          </p>
          <div className="flex gap-[55px] max-sm:gap-[30px] justify-center items-center flex-wrap max-w-[1000px] mx-auto mt-[80px] max-sm:mt-[40px]">
            {categoryWork.map((item) => {
              return (
                <div
                  key={item.name}
                  className="cursor-pointer flex flex-col justify-center items-center"
                >
                  <p className="uppercase mb-2 text-[22px] max-sm:text-[14px]">
                    {item.name}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.4261 17.8993C7.2223 14.0661 4.37033 11.0775 0.902588 8.96592C4.37033 6.8219 7.2223 3.83325 9.4261 0C11.6623 3.83325 14.5143 6.8219 17.9496 8.96592C14.5143 11.0775 11.6623 14.0661 9.4261 17.8993Z"
                      fill="#2402F5"
                      style={{
                        fill: item.color,
                        fillOpacity: 1,
                      }}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          <div className="mt-[100px] max-sm:mt-[40px] gap-[32px] grid grid-cols-2 max-sm:grid-cols-1 max-w-[1180px] mx-[auto] max-sm:px-[30px]">
            {dataWork?.map((item: any, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    item?.type === "vertical" && "row-span-3"
                  } border border-white/50 rounded-[70px] overflow-hidden cursor-pointer relative group`}
                >
                  <Image
                    src={item?.img}
                    alt="work"
                    layout="fill"
                    objectFit="cover"
                    className="!relative"
                  />
                  <div
                    onClick={() => goToWorkDetail(item?.path)}
                    className="group-hover:top-0 transition-all duration-300 w-full h-full absolute top-[100%] left-0 z-2 bg-gradient-to-t from-black flex justify-center items-center"
                  >
                    <p className="uppercase text-[30px] text-center mx-[50px]">
                      {item?.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Work;
