import { TextScramble, TextScroller } from "..";
import Image from "next/image";

const data = [
  {
    title: "TV COMMERCIALS (TVC)",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
  {
    title: "VIRAL VIDEOS",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
  {
    title: "PHOTOGRAPHY",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
  {
    title: "DIGITAL CONTENTS",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
  {
    title: "POST-PRODUCTION",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
  {
    title: "LIVE STREAM",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
  {
    title: "CORPORATE VIDEOS",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: "./homepage/produce1.png",
  },
];

export const WeProduce = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
      <TextScroller />
      <div className="flex justify-center items-center gap-1 mt-[10px] mb-[44px]">
        <Image src="./diamond.svg" width={20} height={20} alt="diamond" />
        <Image src="./diamond.svg" width={20} height={20} alt="diamond" />
        <Image src="./diamond.svg" width={20} height={20} alt="diamond" />
      </div>
      <div className="flex justify-center items-center gap-[120px] w-full pl-[30px] pr-[100px]">
        <div className="flex flex-col gap-[50px]">
          {data.map((item, index) => {
            return (
              <p
                key={index}
                className="text-[25px] hover:font-bold hover:underline cursor-pointer"
                style={{ fontFamily: "Livemono" }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
        <div className="flex-1 relative max-w-[953px]">
          <Image
            src="/homepage/angle.svg"
            width={254}
            height={156}
            alt="angle"
            className="absolute top-[-24px] left-[-32px]"
          />
          <Image
            src="/homepage/angle.svg"
            width={254}
            height={156}
            alt="angle"
            className="rotate-180 absolute bottom-[-83px] right-[-64px]"
          />
          <TextScramble
            text={`TV Commercial Production: We develop your next big idea,
            <br /> take it into production and handle distribution.`}
            className="text-[16px] absolute bottom-[-75px] left-[63px] pr-[190px]"
            styles={{ fontFamily: "Livemono" }}
          />

          <div className="rounded-[70px] w-full h-full overflow-hidden relative">
            <Image
              src="/homepage/produce1.png"
              layout="fill"
              className="w-full h-auto !relative"
              alt="produce"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
