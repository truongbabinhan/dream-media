"use client";
import { useState } from "react";
import { Footer, Header } from "../../components";
import Image from "next/image";
import Link from "next/link";

const WorkDetail = () => {
  const [isChill, setIsChill] = useState(true);
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
              src="/video/fanta.mp4"
            />
          </div>
        </div>
        <div className="pb-[50px] pl-5">
          <p
            style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
            className="uppercase text-[80px]"
          >
            Fanta <br /> colorful
          </p>
        </div>
      </div>
      <div className="flex gap-[50px] w-full px-5">
        <div className="w-[400px] relative">
          <div className="sticky top-[90px]">
            <p className="text-[25px] pb-8 flex gap-2 items-center">
              <Image
                src="../diamond-red.svg"
                width={24}
                height={23}
                alt="diamond"
              />
              TV COMMERCIALS
            </p>
            <p className="text-[13px] pb-5">
              After only 4 weeks, the FANTA LEN contest has attracted nearly 500
              war gods from all over the country to participate and more than 30
              million followers from other potential playing gods. Colorful
              moments, bold ideas, unique ways to drink Fanta, better than
              distilled water, spread widely throughout TikTok and Facebook this
              past summer.
              <br />
              The contest "FANTA LEN" has ended but the spirit of play is still
              there, let's make a can of FANTA right away and spread the spirit
              of "BUNG, BURN, BURN UP"!
            </p>
            <p className="text-[13px]">Client: Coca-Cola Vietnam</p>
            <p className="text-[13px]">Brand: Fanta </p>
            <p className="text-[13px]">Agency: Ogilvy </p>
            <p className="text-[13px]">Production House: Dream Media</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <Image
              src="/work/fanta.png"
              alt="work"
              layout="fill"
              objectFit="contain"
              className="!relative !h-auto"
            />
          </div>
          <div>
            <Image
              src="/work/fanta.png"
              alt="work"
              layout="fill"
              objectFit="contain"
              className="!relative !h-auto"
            />
          </div>
          <div>
            <Image
              src="/work/fanta.png"
              alt="work"
              layout="fill"
              objectFit="contain"
              className="!relative !h-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full p-5">
        <Image
          src="/work/fanta.png"
          alt="work"
          layout="fill"
          objectFit="contain"
          className="!relative !h-auto"
        />
      </div>
      <div className="flex gap-[50px] w-full px-5">
        <div className="w-[400px]"></div>
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <Image
              src="/work/fanta.png"
              alt="work"
              layout="fill"
              objectFit="contain"
              className="!relative !h-auto"
            />
          </div>
          <div>
            <Image
              src="/work/fanta.png"
              alt="work"
              layout="fill"
              objectFit="contain"
              className="!relative !h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap pt-5">
        <div className="w-1/3">
          <Image
            src="/work/fanta.png"
            alt="work"
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/work/fanta.png"
            alt="work"
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/work/fanta.png"
            alt="work"
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/work/fanta.png"
            alt="work"
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/work/fanta.png"
            alt="work"
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/work/fanta.png"
            alt="work"
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto"
          />
        </div>
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
