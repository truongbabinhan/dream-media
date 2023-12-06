import React from "react";
import Popup from "reactjs-popup";
import { BsCheckCircle } from "react-icons/bs";

interface ModalProps {
  open: boolean;
  setOpen: any;
}

export const ModalSuccess = ({ open, setOpen }: ModalProps) => {
  const closeModal = () => setOpen(false);

  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div
        style={{ fontFamily: "Livemono" }}
        className="intro-new-y w-[535px] max-sm:w-[320px] backdrop-blur-[30px] bg-[linear-gradient(142deg,rgba(180,180,180,0.60)_4.12%,rgba(217,217,217,0.10)_96.41%)] rounded-[20px] text-white overflow-hidden text-[15px] transition-all ease-in-out delay-150 flex flex-col justify-center items-center pt-[50px] pb-[30px]"
      >
        <BsCheckCircle color="#00FF90" size={66} />
        <p className="text-[30px] text-center max-sm:text-[16px] pt-[60px] pb-[10px] max-sm:pt-[30px]">
          Woo hoo, congratulation!
        </p>
        <p className="text-[25px] text-center max-sm:text-[12px] pb-[100px] max-sm:pb-[50px]">
          We"ll be in your dream.
        </p>
        <div
          onClick={closeModal}
          className="rounded-[30px] transition-all duration-300 px-[15px] w-[150px] h-[56px] max-sm:h-[40px] bg-white/20 cursor-pointer text-center flex justify-center items-center"
        >
          <p
            style={{ lineHeight: 1 }}
            className="text-white text-[25px] max-sm:text-[16px]"
          >
            Done
          </p>
        </div>
      </div>
    </Popup>
  );
};
