"use client";
import { Header, Footer } from "../components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ModalUpdateWork } from "../components/work";
import ReactPlayer from "react-player";

const categoryWork = [
  {
    name: "ALL",
    color: "#ffffff",
    id: "all",
  },
  {
    name: "TV COMMERCIALS (TVC)",
    color: "#FF0078",
    id: "tvc",
  },
  {
    name: "VIRAL VIDEOS",
    color: "#03FF60",
    id: "viral-videos",
  },
  {
    name: "PHOTOGRAPHY",
    color: "#2800FF",
    id: "photography",
  },
  {
    name: "DIGITAL CONTENTS",
    color: "#9D00FF",
    id: "digital-content",
  },
  {
    name: "SHORT FILM",
    color: "#00C6FE",
    id: "short-film",
  },
  {
    name: "post production",
    color: "#F00",
    id: "post-production",
  },
  {
    name: "live stream",
    color: "#FEE404",
    id: "live-stream",
  },
];

const Work = () => {
  const router = useRouter();
  const [dataWork, setDataWork] = useState([]);
  const [updateWorkModal, setUpdateWorkModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    fetch("/data/data-work-menu.json")
      .then((res) => res.json())
      .then((data) => {
        setDataWork(data?.listWork);
      });
  }, []);

  useEffect(() => {
    setDataShow(
      dataWork.filter((item: any) => item?.group.includes(activeTab))
    );
  }, [activeTab, dataWork]);

  const goToWorkDetail = (id: any) => {
    if (id !== "") {
      return router.push(`/work/detail?brand=${id}`, { scroll: true });
    }
    return setUpdateWorkModal(true);
  };

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black">
      <Header />
      <div className="h-screen max-sm:h-auto max-sm:min-h-max w-full text-white flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute max-sm:relative w-full h-full overflow-hidden top-0 left-0 pt-[70px] max-sm:pt-10 pb-[20px]">
            {/* <Image
              src="/work/detail/banner.png"
              alt="item"
              layout="fill"
              objectFit="contain"
              className="!relative"
            /> */}
            <div className="flex-1 w-full h-full bg-contain bg-no-repeat bg-center">
              <ReactPlayer
                url="https://vimeo.com/900726752"
                playing={true}
                controls={true}
                className="!w-full !h-full"
              />
            </div>
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
        <Image
          src="/homepage/left.gif"
          alt="star"
          width={480}
          height={273}
          priority
          className="absolute left-0 top-0 z-[2] max-sm:hidden"
        />
        <Image
          src="/homepage/left.gif"
          alt="star"
          width={120}
          height={68}
          priority
          className="absolute left-0 top-[0px] z-[2] hidden max-sm:block"
        />
        <Image
          src="/homepage/right.gif"
          alt="star"
          width={425}
          height={240}
          priority
          className="absolute right-0 top-0 z-[2] max-sm:hidden"
        />
        <Image
          src="/homepage/right.gif"
          alt="star"
          width={120}
          height={68}
          priority
          className="absolute right-0 top-[0px] z-[2] hidden max-sm:block"
        />
        <Image
          src="/homepage/middle.gif"
          alt="star"
          width={195}
          height={110}
          priority
          className="absolute right-1/2 translate-x-[calc(50%)] top-[180px] z-[2] max-sm:hidden"
        />
        <Image
          src="/homepage/middle.gif"
          alt="star"
          width={60}
          height={35}
          priority
          className="absolute right-1/2 top-[80px] translate-x-[calc(50%)] z-[2] hidden max-sm:block"
        />
        <div className="relative z-[2]">
          <p
            className="text-[90px] text-center whitespace-nowrap text-black max-md:text-[25px]"
            style={{
              fontFamily: "Aeros",
              lineHeight: 1,
              textShadow:
                "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
            }}
          >
            WE PRODUCE
          </p>
          <div className="flex gap-[55px] max-sm:gap-[12px] max-sm:max-w-[390px] justify-center items-center flex-wrap max-w-[1000px] mx-auto mt-[100px] max-sm:mt-[60px]">
            {categoryWork.map((item) => {
              return (
                <div
                  key={item.name}
                  className="cursor-pointer group flex flex-col justify-center items-center"
                  onClick={() => setActiveTab(item.id)}
                >
                  <p className="uppercase mb-2 text-[22px] max-sm:text-[10px]">
                    {item.name}
                  </p>
                  <div
                    className={`${
                      item.id === activeTab && "!w-full"
                    } w-[0px] h-[2px] max-md:h-[1px] relative top-[-7px] opacity-70 group-hover:w-full transition-all duration-500`}
                    style={{ background: item.color }}
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="max-md:scale-50 max-md:top-[-5px] relative"
                  >
                    <path
                      d="M9.4261 17.8993C7.2223 14.0661 4.37033 11.0775 0.902588 8.96592C4.37033 6.8219 7.2223 3.83325 9.4261 0C11.6623 3.83325 14.5143 6.8219 17.9496 8.96592C14.5143 11.0775 11.6623 14.0661 9.4261 17.8993Z"
                      fill="#2402F5"
                      style={{
                        fill: item.color,
                        fillOpacity: 0.8,
                      }}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
          <div className="min-h-[600px] max-sm:min-h-[500px]">
            <div className="mt-[100px] max-sm:mt-[40px] gap-[32px] grid grid-cols-2 max-sm:grid-cols-1 max-w-[1180px] mx-[auto] max-sm:px-[30px]">
              {dataShow?.map((item: any, index) => {
                return (
                  <div
                    key={`${item?.img}-${index}`}
                    className={`${
                      item?.type === "vertical" && "row-span-3"
                    } rounded-[70px] max-sm:rounded-[30px] overflow-hidden cursor-pointer relative group intro-new-fade-in`}
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
                      className="group-hover:top-0 max-sm:top-0 transition-all duration-300 w-full h-full absolute top-[100%] left-0 z-2 bg-gradient-to-t from-black flex justify-center items-center"
                    >
                      <p
                        style={{ fontFamily: "Verdana" }}
                        className="uppercase text-[30px] max-md:text-[20px] text-center mx-[50px]"
                      >
                        {item?.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ModalUpdateWork open={updateWorkModal} setOpen={setUpdateWorkModal} />
    </main>
  );
};

export default Work;
