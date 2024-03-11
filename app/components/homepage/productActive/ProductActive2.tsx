import Image from "next/image";
import { TextScramble } from "../../";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

interface ProduceActiveProps {
  data: any;
}
export const ProduceActive2 = ({ data }: ProduceActiveProps) => {
  return (
    <div className="relative ">
      <div className="rounded-[70px] max-sm:rounded-[40px] overflow-hidden relative intro-new-fade-in">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          {data?.img.map(
            (item: string | StaticImport, index: Key | null | undefined) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-[856px] h-[480px] max-sm:w-full max-sm:h-full">
                    <Image
                      src={item}
                      layout="fill"
                      className="w-full h-auto !relative z-10"
                      alt="produce"
                    />
                    <div className="animate-pulse bg-gray-800 w-full h-full absolute"></div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <TextScramble
        text={data?.desc}
        className="max-sm:hidden text-[14px] pt-[20px] pl-[20px] pr-[80px] max-sm:text-[10px] max-sm:bottom-[-70px] max-sm:left-0 max-sm:pr-[20px] max-sm:ml-[20px] max-sm:max-w-full absolute bottom-0 translate-y-[100%]"
        styles={{ fontFamily: "Livemono" }}
      />
    </div>
  );
};
