"use client";
import { Key, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Footer, Header } from "../../components";
import Image from "next/image";
import Link from "next/link";
import data from "./data.json";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const WorkDetail = () => {
  const [isChill, setIsChill] = useState(true);
  const [dataDetail, setDataDetail] = useState();
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  useEffect(() => {
    setDataDetail(data[brand]);
  }, [brand]);

  const contentItem = (item: string) => {
    if (item && item.includes("mp4")) {
      return (
        <video
          typeof="video/mp4"
          className="h-auto max-w-full max-h-full mx-auto"
          preload="auto"
          muted
          loop
          autoPlay
          src={item}
        />
      );
    } else {
      return (
        <Image
          src={item || ""}
          alt="work"
          layout="fill"
          objectFit="contain"
          className="!relative !h-auto"
        />
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black">
      <Header setIsChill={setIsChill} isChill={isChill} />
      <div className="h-screen max-sm:min-h-max w-full text-white flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute w-full h-full overflow-hidden top-0 left-0 pt-[70px] pb-[20px]">
            <video
              typeof="video/mp4"
              className="h-auto max-w-full max-h-full mx-auto"
              preload="auto"
              muted
              loop
              autoPlay
              // onMouseOver={(event) => onPlayVideoHover(event.target)}
              // onMouseOut={(event) => onPauseVideoHover(event.target)}
              src={dataDetail?.video}
            />
          </div>
        </div>
        <div className="pb-[50px] pl-5">
          <p
            style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
            className="uppercase text-[80px] whitespace-pre-line"
          >
            {dataDetail?.title}
          </p>
        </div>
      </div>
      <div className="flex gap-[50px] w-full pl-5">
        <div className="w-[400px] relative">
          <div className="sticky top-[100px]">
            <p className="text-[20px] pb-5 flex gap-2 items-center">
              <Image
                src="../diamond-red.svg"
                width={24}
                height={23}
                alt="diamond"
              />
              {dataDetail?.type}
            </p>
            {dataDetail?.desc && (
              <p className="text-[13px] pb-5 whitespace-pre-line">
                {dataDetail?.desc}
              </p>
            )}
            <p className="text-[13px]">Client: {dataDetail?.client}</p>
            <p className="text-[13px]">Brand: {dataDetail?.brand}</p>
            <p className="text-[13px]">Agency: {dataDetail?.agency}</p>
            <p className="text-[13px]">
              Production House: {dataDetail?.productionHouse}
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div>{contentItem(dataDetail?.img1)}</div>
          <div>
            {dataDetail?.img2 && (
              <Image
                src={dataDetail?.img2 || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
          <div>
            {dataDetail?.img3 && (
              <Image
                src={dataDetail?.img3 || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-5 pl-5">{contentItem(dataDetail?.img4)}</div>
      <div className="flex gap-[50px] w-full pl-5">
        <div className="w-[400px]"></div>
        <div className="flex-1 flex flex-col gap-5">
          <div>
            {dataDetail?.img5 && (
              <Image
                src={dataDetail?.img5 || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
          <div>
            {dataDetail?.img6 && (
              <Image
                src={dataDetail?.img6 || ""}
                alt="work"
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap pt-5">
        {dataDetail?.list &&
          dataDetail?.list?.map(
            (item: string | StaticImport, index: Key | null | undefined) => {
              return (
                <div key={index} className="w-1/3 overflow-hidden">
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
            }
          )}
      </div>
      <div className="py-[80px]">
        <Link href="/">
          <p className="text-[20px]">[BACK TO WORK]</p>
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default WorkDetail;
