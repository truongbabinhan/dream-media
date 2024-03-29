"use client";
import { Key, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Footer, Header } from "../../components";
import { ModalListBts } from "../../components/work";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

interface contentItemProps {
  item: any;
  isBanner: boolean;
  isControl: boolean;
}

const WorkDetail = () => {
  const { ref, inView } = useInView();
  const [openListBts, setOpenListBts] = useState(false);
  const [isChill, setIsChill] = useState(true);
  const [initPic, setInitPic] = useState<any | null>(0);
  const [dataDetail, setDataDetail] = useState();
  const [listImg, setListImg] = useState([]);
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand") || "";

  useEffect(() => {
    fetch("/data/data-work.json")
      .then((res) => res.json())
      .then((data) => {
        setDataDetail(data?.[brand]);
        setListImg(data?.[brand]?.["list"]);
      });
  }, []);

  const contentItem = ({ item, isBanner, isControl }: contentItemProps) => {
    if (item && item.includes("vimeo")) {
      return (
        <div className="flex-1 w-full h-full">
          <ReactPlayer
            url={item}
            playing={true}
            controls={true}
            className="!w-full !h-full"
          />
        </div>
      );
    }
    if (Array.isArray(item)) {
      return (
        <div className="flex gap-5 max-sm:gap-2">
          {item.map((video: string, index: Key) => {
            return (
              <div key={index} className="flex-1">
                <video
                  typeof="video/mp4"
                  className="h-auto max-w-full max-h-full mx-auto"
                  preload="auto"
                  muted={isChill}
                  autoPlay
                  color=""
                  src={video}
                  loop
                  controls={isControl}
                />
              </div>
            );
          })}
        </div>
      );
    }
    if (item && item.includes("mp4")) {
      return (
        <video
          typeof="video/mp4"
          className="h-auto max-w-full max-h-full mx-auto"
          preload="auto"
          muted={isChill}
          autoPlay
          color=""
          src={item}
          loop
          controls={isControl}
        />
      );
    } else {
      return (
        item && (
          <Image
            src={item || ""}
            alt="item"
            layout="fill"
            objectFit="contain"
            className={`!relative ${!isBanner && "!h-auto"} `}
          />
        )
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black">
      <Header setIsChill={setIsChill} isChill={isChill} />
      <div className="h-screen max-sm:h-auto max-sm:min-h-max w-full text-white flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute max-sm:relative w-full h-full overflow-hidden top-0 left-0 pt-[70px] max-sm:pt-10 pb-[20px]">
            {contentItem({
              item: dataDetail?.["video"],
              isBanner: true,
              isControl: true,
            })}
          </div>
        </div>
        <div ref={ref} className="pb-[50px] max-sm:pb-[10px] pl-5">
          <p
            style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
            className="uppercase text-[80px] whitespace-pre-line max-sm:text-[30px]"
          >
            {dataDetail?.["title"]}
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-[50px] max-sm:gap-0 w-full pl-5 max-sm:pl-0">
        <div className="w-[30%] max-sm:w-full relative max-sm:px-5 max-sm:pb-5">
          <div className="sticky top-[100px]">
            {!inView && (
              <div className="pb-[20px] intro-new-y">
                <p
                  style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
                  className="uppercase text-[80px] whitespace-pre-line max-sm:text-[30px]"
                >
                  {dataDetail?.["title"]}
                </p>
              </div>
            )}
            <p
              style={{ lineHeight: 1, fontFamily: "BebasNeue" }}
              className="text-[30px] max-sm:text-[20px] pb-5 max-sm:pb-[10px] flex gap-2 items-center"
            >
              <Image
                src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond-red.svg"
                width={24}
                height={23}
                alt="diamond"
                className="max-sm:hidden"
              />
              <Image
                src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond-red.svg"
                width={19}
                height={18}
                alt="diamond"
                className="hidden max-sm:block"
              />
              {dataDetail?.["type"]}
            </p>
            {dataDetail?.["desc"] && (
              <p className="text-[13px] max-sm:text-[11px] pb-5 max-sm:pb-[10px] whitespace-pre-line">
                {dataDetail?.["desc"]}
              </p>
            )}
            {dataDetail?.["client"] && (
              <p className="text-[13px] max-sm:text-[11px]">
                Client: {dataDetail?.["client"]}
              </p>
            )}
            {dataDetail?.["brand"] && (
              <p className="text-[13px] max-sm:text-[11px]">
                Brand: {dataDetail?.["brand"]}
              </p>
            )}
            {dataDetail?.["agency"] && (
              <p className="text-[13px] max-sm:text-[11px]">
                Agency: {dataDetail?.["agency"]}
              </p>
            )}
            {dataDetail?.["productionHouse"] && (
              <p className="text-[13px] max-sm:text-[11px]">
                Production House: {dataDetail?.["productionHouse"]}
              </p>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 max-sm:gap-2 max-sm:px-[10px]">
          <div>
            {contentItem({
              item: dataDetail?.["img1"],
              isBanner: false,
              isControl: false,
            })}
          </div>
          <div>
            {dataDetail?.["img2"] && (
              <Image
                src={dataDetail?.["img2"] || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
          <div>
            {dataDetail?.["img3"] && (
              <Image
                src={dataDetail?.["img3"] || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
          <div className="-ml-[calc(43%+70px)] max-sm:ml-0">
            {contentItem({
              item: dataDetail?.["img4"],
              isBanner: false,
              isControl: false,
            })}
          </div>
          <div>
            {dataDetail?.["img5"] && (
              <Image
                src={dataDetail?.["img5"] || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
          <div>
            {contentItem({
              item: dataDetail?.["img6"],
              isBanner: false,
              isControl: false,
            })}
          </div>
        </div>
      </div>
      {/* <div className="w-full py-5 pl-5 max-sm:py-1 max-sm:px-[10px]">
        {contentItem({
          item: dataDetail?.["img4"],
          isBanner: false,
          isControl: false,
        })}
      </div>
      <div className="flex max-sm:flex-col gap-[50px] w-full pl-5 max-sm:pl-0 max-sm:gap-0">
        <div className="w-[30%] max-sm:w-full"></div>
        <div className="flex-1 flex flex-col gap-5 max-sm:gap-1 max-sm:px-[10px]">
          <div>
            {dataDetail?.["img5"] && (
              <Image
                src={dataDetail?.["img5"] || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
          <div>
            {contentItem({
              item: dataDetail?.["img6"],
              isBanner: false,
              isControl: false,
            })}
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap pt-5 max-sm:pt-1 max-sm:px-[10px]">
        {listImg &&
          listImg.map((item: string, index: Key | null | undefined) => {
            return (
              <div
                onClick={() => {
                  setInitPic(index);
                  setOpenListBts(true);
                }}
                key={index}
                className="w-1/3 overflow-hidden"
              >
                {item && (
                  <Image
                    src={item || ""}
                    alt="item"
                    layout="fill"
                    objectFit="cover"
                    className="!relative cursor-pointer hover:scale-[120%] transition-all ease-in duration-300"
                  />
                )}
              </div>
            );
          })}
      </div>
      <div className="py-[80px] max-sm:py-10">
        <Link href="/work">
          <p className="text-[20px] max-sm:text-[12px]">[BACK TO WORK]</p>
        </Link>
      </div>

      <Footer />
      <ModalListBts
        setOpen={setOpenListBts}
        open={openListBts}
        data={listImg}
        initSlide={initPic}
      />
    </main>
  );
};

export default WorkDetail;
