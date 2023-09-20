import Image from "next/image";
import { useState, useEffect } from "react";
import Moment from "moment-timezone";
const listMenu = [
  {
    name: "contact",
    isUpdate: false,
  },
  {
    name: "work",
    isUpdate: true,
  },
  {
    name: "about",
    isUpdate: true,
  },
  {
    name: "studio life",
    isUpdate: true,
  },
];
export const Header = () => {
  const [isChill, setIsChill] = useState(true);
  const [percentScroll, setPercentScroll] = useState(0);
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    const options = { passive: true };
    const scroll = (event: any) => {
      const { pageYOffset, innerHeight } = window;
      setPercentScroll((pageYOffset / innerHeight) * 100);
    };
    document.addEventListener("scroll", scroll, options);
    () => document.removeEventListener("scroll", scroll, true);
  }, []);
  return (
    <>
      <Image
        className="fixed left-[25px] top-[15px] z-10"
        src="/logo.svg"
        alt="Logo"
        width={201}
        height={50}
        priority
      />
      <p
        onClick={() => setIsShowMenu(!isShowMenu)}
        className="fixed text-[15px] z-10 left-1/2 -translate-x-1/2 top-5 select-none cursor-pointer"
      >
        [ {isShowMenu ? "CLOSE" : "MENU"} ]
      </p>
      <p className="fixed text-[15px] right-5 top-5 z-10">
        SCROLL ({percentScroll.toFixed()}%)
      </p>
      <p className="fixed text-[15px] left-5 bottom-5 z-10">
        HCMC ({Moment().tz("Asia/Ho_Chi_Minh").format("h:mm A")}) NEW YORK (
        {Moment().tz("America/New_York").format("h:mm A")})
      </p>
      <p
        onClick={() => setIsChill(!isChill)}
        className="fixed text-[15px] z-10 cursor-pointer right-5 bottom-5 select-none"
      >
        CHILL: {isChill ? "ON" : "OFF"}
      </p>
      <div
        className={`fixed z-20 top-[80px] left-[100px] bg-[linear-gradient(105deg,_color(display-p3_0.851_0.851_0.851_/_0.40)_15.93%,_color(display-p3_0.851_0.851_0.851_/_0.10)_94.84%)] backdrop-blur-lg min-w-screen transition-all overflow-hidden ${
          isShowMenu ? "h-[calc(100%-160px)]" : "h-0"
        }  w-[calc(100%-200px)] flex flex-col justify-center items-center duration-500`}
      >
        <div className="flex flex-col justify-center items-start gap-[50px]">
          {listMenu.map((item, index) => {
            return (
              <div
                key={index}
                className={` ${
                  (index + 2) % 2 === 0 && "pl-[100px]"
                } text-left h-[88px] cursor-pointer`}
              >
                <div className="flex justify-center items-end">
                  <span className="text-[20px] font-normal mr-4">
                    0{index + 1}
                  </span>{" "}
                  <p
                    style={{ lineHeight: 0.9, fontFamily: "Aeros" }}
                    className="text-[80px] font-bold uppercase"
                  >
                    {item.name}
                  </p>
                </div>
                {item.isUpdate && <p className="pl-[60px]">we’re updating</p>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
