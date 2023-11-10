import Image from "next/image";
import { useLottie } from "lottie-react";
import { useInView } from "react-intersection-observer";
import { TextScramble } from "..";
import LogoAnimate from "../../assets/json/logo-white.json";
import { useEffect } from "react";

export const Banner = () => {
  const { ref, inView } = useInView();
  const options = {
    animationData: LogoAnimate,
    loop: false,
    autoplay: false,
  };
  const { View, playSegments } = useLottie({
    ...options,
  });

  useEffect(() => {
    if (inView) {
      playSegments([0, 125], true);
    }
  }, [inView]);

  return (
    <div className="w-full flex min-h-screen max-sm:min-h-max bg-homepage-dashboard bg-center bg-cover relative">
      <div className="w-full h-full backdrop-brightness-[0.1] absolute left-0 top-0 z-[1]"></div>
      <div className="flex flex-1 flex-col justify-center items-center relative z-[2] overflow-hidden max-sm:pb-[180px]">
        <Image
          src="/homepage/left.gif"
          alt="star"
          width={480}
          height={273}
          priority
          className="absolute left-1/2 top-1/2 -translate-x-[calc(50%+440px)] -translate-y-[calc(50%+275px)] z-[1] max-sm:hidden"
        />
        <Image
          src="/homepage/left.gif"
          alt="star"
          width={120}
          height={68}
          priority
          className="absolute left-1/2 -translate-x-[calc(50%+160px)] top-[40px] z-[1] hidden max-sm:block"
        />
        <Image
          src="/homepage/right.gif"
          alt="star"
          width={425}
          height={240}
          priority
          className="absolute right-1/2 top-1/2 translate-x-[calc(50%+500px)] -translate-y-[calc(50%+300px)] max-sm:hidden"
        />
        <Image
          src="/homepage/right.gif"
          alt="star"
          width={120}
          height={68}
          priority
          className="absolute left-1/2 -translate-x-[calc(50%-170px)] top-[35px] z-[1] hidden max-sm:block"
        />
        <Image
          src="/homepage/middle.gif"
          alt="star"
          width={195}
          height={110}
          priority
          className="absolute right-1/2 top-1/2 translate-x-[calc(50%)] -translate-y-[calc(50%)] max-sm:hidden"
        />
        <Image
          src="/homepage/middle.gif"
          alt="star"
          width={60}
          height={35}
          priority
          className="absolute right-1/2 top-[140px] translate-x-[calc(50%)] hidden max-sm:block"
        />
        <Image
          src="/logo-home.svg"
          alt="Logo"
          width={753}
          height={134}
          priority
          className="relative z-[2] opacity-0"
        />
        <div className="w-[1280px] max-sm:w-full max-sm:max-w-[425px] absolute top-[-65px] max-sm:top-[-20px] left-1/2 -translate-x-1/2">
          {View}
        </div>
        <div ref={ref}></div>
        <TextScramble
          text="DREAM MEDIA IS A PRODUCTION COMPANY WITH HQ IN HCMC AND OPERATIONS
          THROUGHOUT VIETNAM. WE REPRESENT A SPECIFIC ROSTER OF VIRAL FILM
          DIRECTORS AND STAFF A DEDICATED PRODUCTION SERVICES TEAM. WE PROVIDE
          FULL PRODUCTION SERVICES FOR FEATURES FILMS, COMMERCIALS, TV SERIES,
          DOCUMENTARIES, AND BRANDED CONTENT."
          className="w-[617px] text-[10px] mt-[230px] mb-[40px] text-center max-sm:text-[6px] max-sm:max-w-[312px] max-sm:mt-[130px] max-sm:mb-[20px]"
        />
        <TextScramble
          text="DREAM MEDIA IS A FULL SERVICES PRODUCTION HOUSE"
          className="text-[16px] text-center max-sm:text-[8px] max-sm:mt-[0px]"
        />
        <TextScramble
          text="[CHECK OUT OUR WORK]"
          className="text-[20px] text-center absolute bottom-10 max-sm:bottom-[50px] max-sm:text-[8px]"
        />
      </div>
    </div>
  );
};

export default Banner;
