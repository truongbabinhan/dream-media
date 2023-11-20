import React, { Key } from "react";
import Image from "next/image";
import Popup from "reactjs-popup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  setOpen: any;
  data: any;
  initSlide: number;
}

export const ModalListBts = ({
  open,
  setOpen,
  data,
  initSlide,
}: ModalProps) => {
  const closeModal = () => setOpen(false);

  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div onClick={closeModal} className="cursor-pointer fixed right-5 top-5">
        <IoClose color="#ffffff" size={20} />
      </div>
      <div className="w-full">
        <div className="max-w-[1280px] max-xl:max-w-[1000px] max-lg:max-w-[375px] m-auto overflow-hidden">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            initialSlide={initSlide}
          >
            {data.map((item: string, index: Key | null | undefined) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mx-[100px] max-lg:mx-0">
                    <Image
                      src={item}
                      layout="fill"
                      objectFit="cover"
                      className="!relative w-full h-full"
                      alt="bts"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Popup>
  );
};
