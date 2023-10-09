import Image from "next/image";
import Lottie, { useLottie } from "lottie-react";
// import Lottie from "react-lottie";
import { useInView } from "react-intersection-observer";
import lottie from "lottie-web";
import { TextScramble } from "..";
import LogoAnimate from "../../assets/json/logo-white.json";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const options = {
    animationData: LogoAnimate,
    loop: true,
    autoplay: true,
  };
  const { View, play, goToAndStop, pause } = useLottie(options);
  // useEffect(() => {
  //   play();
  // }, [inView]);
  return (
    <div className="w-full flex min-h-screen bg-homepage-dashboard bg-center bg-cover relative">
      <div className="w-full h-full backdrop-brightness-[0.1] absolute left-0 top-0 z-[1]"></div>
      <div className="flex flex-1 flex-col justify-center items-center relative z-[2] overflow-hidden">
        <Image
          src="/homepage/left.gif"
          alt="star"
          width={480}
          height={273}
          priority
          className="absolute left-1/2 top-1/2 -translate-x-[calc(50%+440px)] -translate-y-[calc(50%+275px)] z-[1]"
        />
        <Image
          src="/homepage/right.gif"
          alt="star"
          width={425}
          height={240}
          priority
          className="absolute right-1/2 top-1/2 translate-x-[calc(50%+500px)] -translate-y-[calc(50%+300px)]"
        />
        <Image
          src="/homepage/middle.gif"
          alt="star"
          width={195}
          height={110}
          priority
          className="absolute right-1/2 top-1/2 translate-x-[calc(50%)] -translate-y-[calc(50%)]"
        />
        <Image
          ref={ref}
          src="/logo-home.svg"
          alt="Logo"
          width={753}
          height={134}
          priority
          className="relative z-[2] opacity-0"
        />
        <div className="w-[1280px] absolute top-[-65px] left-1/2 -translate-x-1/2">
          {View}
        </div>
        <TextScramble
          text="DREAM MEDIA IS A PRODUCTION COMPANY WITH HQ IN HCMC AND OPERATIONS
          THROUGHOUT VIETNAM. WE REPRESENT A SPECIFIC ROSTER OF VIRAL FILM
          DIRECTORS AND STAFF A DEDICATED PRODUCTION SERVICES TEAM. WE PROVIDE
          FULL PRODUCTION SERVICES FOR FEATURES FILMS, COMMERCIALS, TV SERIES,
          DOCUMENTARIES, AND BRANDED CONTENT."
          className="w-[617px] text-[10px] mt-[230px] mb-[40px] text-center"
        />
        <TextScramble
          text="DREAM MEDIA IS A FULL SERVICES PRODUCTION HOUSE"
          className="text-[16px] text-center"
        />
        <TextScramble
          text="[CHECK OUT OUR WORK]"
          className="text-[20px] text-center absolute bottom-10"
        />
      </div>
    </div>
  );
};

export default Dashboard;
