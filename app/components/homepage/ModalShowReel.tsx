import React from "react";
import Popup from "reactjs-popup";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  setOpen: any;
}

export const ModalShowReel = ({ open, setOpen }: ModalProps) => {
  const closeModal = () => setOpen(false);

  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div onClick={closeModal} className="cursor-pointer fixed right-5 top-5">
        <IoClose color="#ffffff" size={20} />
      </div>
      <div className="max-w-[85%] m-auto">
        <video
          typeof="video/mp4"
          className="w-full h-full max-w-full max-h-full"
          preload="auto"
          autoPlay
          src="/showreel-new.mp4"
          controls
        />
      </div>
    </Popup>
  );
};
