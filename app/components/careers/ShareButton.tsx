import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import "tippy.js/animations/scale.css";

export const ShareButton = ({ titleJob }: any) => {
  console.log("🚀 ~ ShareButton ~ titleJob:", titleJob);
  const [textIsCopy, setTextIsCopy] = useState("Copy Link");

  const onCopyLink = () => {
    setTextIsCopy("Copied!");
    return navigator.clipboard.writeText(window.location.href);
  };

  const onShareLinkedin = () => {
    return window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}&title=${encodeURIComponent(titleJob)}&summary=${encodeURIComponent(
        titleJob
      )}`,
      "_blank",
      "noreferrer"
    );
  };

  const onShareFacebook = () => {
    return window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(titleJob)}`,
      "_blank",
      "noreferrer"
    );
  };

  useEffect(() => {
    if (textIsCopy === "Copied!") {
      setTimeout(() => {
        setTextIsCopy("Copy Link");
      }, 2000);
    }
  }, [textIsCopy]);

  return (
    <div className="sticky max-lg:absolute top-[120px] max-lg:top-auto max-lg:bottom-[-60px] max-lg:right-0">
      <div className="absolute max-lg:relative flex flex-col gap-3 left-[-120px] max-lg:left-auto max-lg:flex-row">
        <Tippy
          content={<p style={{ fontFamily: "Verdana" }}>Share to Linkedin</p>}
          className="text-[12px] max-lg:text-[10px] bg-[#B9B9B9] text-black rounded-full py-1 px-2"
          animation="scale"
          placement="right"
        >
          <img
            onClick={onShareLinkedin}
            className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] cursor-pointer hover:opacity-50 transition-all"
            src="/icon/linkedin.svg"
          />
        </Tippy>
        <Tippy
          content={<p style={{ fontFamily: "Verdana" }}>Share to Facebook</p>}
          className="text-[12px] max-lg:text-[10px] bg-[#B9B9B9] text-black rounded-full py-1 px-2"
          animation="scale"
          placement="right"
        >
          <img
            onClick={onShareFacebook}
            className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] cursor-pointer hover:opacity-50 transition-all"
            src="/icon/facebook.svg"
          />
        </Tippy>
        <Tippy
          content={<p style={{ fontFamily: "Verdana" }}>{textIsCopy}</p>}
          className="text-[12px] max-lg:text-[10px] bg-[#B9B9B9] text-black rounded-full py-1 px-2"
          animation="scale"
          placement="right"
          hideOnClick={false}
        >
          <img
            onClick={onCopyLink}
            className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] cursor-pointer hover:opacity-50 transition-all"
            src="/icon/link.svg"
          />
        </Tippy>
      </div>
    </div>
  );
};
