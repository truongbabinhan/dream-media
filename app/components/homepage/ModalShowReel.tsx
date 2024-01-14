import React from "react";
import Popup from "reactjs-popup";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";

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
      {/* <video
          typeof="video/mp4"
          className="w-full h-full max-w-full max-h-full"
          preload="auto"
          autoPlay
          src="/showreel-new.mp4"
          controls
        /> */}
      <div className="w-[80vw] h-[100vh] flex justify-center items-center">
        <div className="relative pt-[56.25%] flex-1">
          <ReactPlayer
            url="https://vimeo.com/900726752"
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </Popup>
  );
};
