import Image from "next/image";
import { TextScramble } from "..";
import { Key, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/effect-fade";

interface WorkCardProps {
  item: any;
}
export const WorkCard = ({ item }: WorkCardProps) => {
  const router = useRouter();
  const { ref, inView } = useInView();

  const onPlayVideoHover = (video: any) => {
    // Show loading animation.
    var playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };

  const onPauseVideoHover = (video: any) => {
    // Show loading animation.
    var pausePromise = video.pause();

    if (pausePromise !== undefined) {
      pausePromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };
  const goToWorkDetail = (id: any) => {
    return router.push(`/work/detail?brand=${id}`, { scroll: true });
  };

  const renderImage = (data: any) => {
    if (Array.isArray(data.background)) {
      return (
        <div className="w-full h-full">
          <Swiper
            spaceBetween={20}
            effect={"fade"}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, EffectFade]}
            className="h-full"
          >
            {data.background.map(
              (item: string, index: Key | null | undefined) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full">
                      <Image
                        src={item}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-auto !relative"
                        alt="produce"
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      );
    }
    return (
      <>
        <Image
          src={data.background}
          alt="work"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          priority
          className={`transition-all duration-700 absolute top-0 left-0 z-[1] ${
            data.video && inView && "hidden"
          } ${inView && "!blur-0"} blur-[30px] max-sm:hidden`}
        />
        <Image
          src={data.background}
          alt="work"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-auto !relative hidden max-sm:block"
        />
      </>
    );
  };

  return (
    <div
      className="min-h-screen max-sm:min-h-[200px] w-full text-white relative group cursor-pointer"
      onClick={() => goToWorkDetail(item.link)}
    >
      <div
        ref={ref}
        className="bg-transparent w-full h-1/5 absolute top-1/2 -translate-y-1/2 z-30"
      ></div>
      <div className="w-full h-full overflow-hidden absolute left-0 top-0">
        <div
          className={`w-full h-full overflow-hidden absolute left-0 top-0 transition-all duration-700 scale-110 ${
            inView && "!blur-0 !scale-100"
          } blur-[30px]`}
        >
          {item.video && (
            <video
              typeof="video/mp4"
              className={`w-full h-full max-w-full max-h-full duration-700 object-cover absolute top-0 left-0 scale-110 ${
                inView && "!scale-100"
              }`}
              preload="auto"
              muted
              loop
              autoPlay
              // onMouseEnter={(event) => onPlayVideoHover(event.target)}
              // onMouseOut={(event) => onPauseVideoHover(event.target)}
              src={item.video}
            />
          )}
          {renderImage(item)}
        </div>
      </div>
      <div className="z-[2] p-5 flex flex-col items-end uppercase max-sm:p-[10px] absolute right-0 text-right">
        <p
          style={{ lineHeight: 1.1, fontFamily: "Bebas" }}
          className="text-[100px] font-bold mb-1 ml-[-2px] max-sm:text-[30px]"
        >
          {item.name}
        </p>
        <p
          style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
          className="text-[30px] font-bold mb-[6px] max-sm:text-[15px]"
        >
          {item.title}
        </p>
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/decor-work.svg"
          alt="decor"
          width={57}
          height={75}
          priority
          className="max-sm:hidden ml-auto"
        />
        <div className="max-w-[410px] mt-2 max-sm:hidden">
          <ul className={item.desc.length > 8 ? "columns-2" : "columns-1"}>
            {item.desc.map((note: any, index: Key | null | undefined) => {
              return (
                <li key={index} className="text-[12px] text-white pb-1 block">
                  <TextScramble text={note} className="inline-block" />
                </li>
              );
            })}
          </ul>
        </div>
        {/* {item.client && (
                <TextScramble
                  text={`CLIENT: ${item.client}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )}
              {item.brand && (
                <TextScramble
                  text={`BRAND: ${item.brand}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )}
              {item.agency && (
                <TextScramble
                  text={`AGENCY: ${item.agency}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )}
              {item.productionHouse && (
                <TextScramble
                  text={`PRODUCTION HOUSE: ${item.productionHouse}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )} */}
      </div>
    </div>
  );
};
