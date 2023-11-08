import { useState } from "react";
import { TextScroller } from "..";
import Image from "next/image";
import { ProduceActive } from ".";

const data = [
  {
    id: 1,
    title: "TV COMMERCIALS (TVC)",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/tvCommercials1.png",
  },
  {
    id: 2,
    title: "VIRAL VIDEOS",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/viralVideos1.png",
  },
  {
    id: 3,
    title: "PHOTOGRAPHY",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/photography1.png",
  },
  {
    id: 4,
    title: "DIGITAL CONTENTS",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/digitalContents1.png",
  },
  {
    id: 5,
    title: "POST-PRODUCTION",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/postProduction1.png",
  },
  {
    id: 6,
    title: "LIVE STREAM",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/liveStream1.png",
  },
  {
    id: 7,
    title: "SHORT FILMS",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "/we-produce/shortFilms1.png",
  },
];

export const WeProduce = () => {
  const [activeProduce, setActiveProduce] = useState(1);

  const renderProduce = () => {
    switch (activeProduce) {
      case 1:
        return <ProduceActive data={data[0]} />;
      case 2:
        return <ProduceActive data={data[1]} />;
      case 3:
        return <ProduceActive data={data[2]} />;
      case 4:
        return <ProduceActive data={data[3]} />;
      case 5:
        return <ProduceActive data={data[4]} />;
      case 6:
        return <ProduceActive data={data[5]} />;
      case 7:
        return <ProduceActive data={data[6]} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen max-sm:min-h-max max-sm:pt-[50px] relative flex flex-col justify-center items-center overflow-hidden">
      <TextScroller />
      <div className="flex justify-center items-center gap-1 mt-[10px] mb-[44px] max-sm:mt-[20px] max-sm:mb-[10px]">
        <Image src="./diamond.svg" width={15} height={15} alt="diamond" />
        <Image src="./diamond.svg" width={15} height={15} alt="diamond" />
        <Image src="./diamond.svg" width={15} height={15} alt="diamond" />
      </div>
      <div className="flex max-sm:flex-col-reverse justify-center items-center max-sm:items-start gap-[120px] w-full pl-[20px] pr-[80px] max-sm:pl-[10px] max-sm:pr-[10px] max-sm:gap-[100px]">
        <div className="flex flex-col gap-2 max-sm:pl-[20px]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                onMouseOver={() => setActiveProduce(item.id)}
                className="h-[80px] max-sm:h-[40px] rounded-[30px] flex px-4 max-sm:px-[10px] items-center cursor-pointer bg-center bg-cover"
                style={{
                  backgroundImage:
                    item.id === activeProduce ? `url(${item.img})` : "",
                }}
              >
                <p
                  className="text-[25px] max-sm:text-[15px]"
                  style={{ fontFamily: "Livemono" }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        {renderProduce()}
      </div>
    </div>
  );
};
