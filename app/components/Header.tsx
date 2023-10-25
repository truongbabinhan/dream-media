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
interface HeaderProps {
  setIsChill: any;
  isChill: boolean;
}
export const Header = ({ setIsChill, isChill }: HeaderProps) => {
  const [percentScroll, setPercentScroll] = useState(0);
  const [isShowMenu, setIsShowMenu] = useState(false);
  useEffect(() => {
    const options = { passive: true };
    const scroll = () => {
      const { innerHeight, scrollY } = window;
      const docHeight = document.body.offsetHeight;
      setPercentScroll((scrollY / (docHeight - innerHeight)) * 100);
    };
    document.addEventListener("scroll", scroll, options);
    () => document.removeEventListener("scroll", scroll, true);
  }, []);

  return (
    <>
      <Image
        className="fixed left-[25px] top-[15px] z-10 max-sm:hidden"
        src="/logo.svg"
        alt="Logo"
        width={201}
        height={50}
        priority
      />
      <Image
        className="fixed left-[10px] top-[10px] z-10 hidden max-sm:block"
        src="/logo-sp.svg"
        alt="Logo"
        width={120}
        height={30}
        priority
      />
      <p
        onClick={() => setIsShowMenu(!isShowMenu)}
        className="fixed text-[15px] z-10 left-1/2 -translate-x-1/2 top-5 select-none cursor-pointer max-sm:right-[10px] max-sm:left-auto max-sm:translate-x-0 max-sm:top-[15px] max-sm:text-[12px]"
      >
        [ {isShowMenu ? "CLOSE" : "MENU"} ]
      </p>
      <p className="fixed text-[15px] right-5 top-5 z-10 max-sm:hidden max-sm:text-[12px]">
        SCROLL ({percentScroll.toFixed()}%)
      </p>
      <p className="fixed text-[15px] left-5 bottom-5 z-10 max-sm:hidden">
        HCMC ({Moment().tz("Asia/Ho_Chi_Minh").format("h:mm A")}) NEW YORK (
        {Moment().tz("America/New_York").format("h:mm A")})
      </p>
      <p className="fixed text-[12px] left-[10px] bottom-[10px] z-10 hidden max-sm:block">
        HCMC ({Moment().tz("Asia/Ho_Chi_Minh").format("h:mm A")})
      </p>
      <p
        onClick={() => setIsChill(!isChill)}
        className="fixed text-[15px] z-10 cursor-pointer right-5 bottom-5 select-none max-sm:text-[12px] max-sm:right-[10px] max-sm:bottom-[10px]"
      >
        CHILL: {isChill ? "ON" : "OFF"}
      </p>
      <div
        className={`fixed z-20 top-[80px] left-[100px] bg-[linear-gradient(105deg,_color(display-p3_0.851_0.851_0.851_/_0.40)_15.93%,_color(display-p3_0.851_0.851_0.851_/_0.10)_94.84%)] backdrop-blur-lg min-w-screen transition-all overflow-hidden ${
          isShowMenu
            ? "h-[calc(100%-160px)] max-sm:h-[calc(100%-100px)]"
            : "h-0"
        }  w-[calc(100%-200px)] flex flex-col justify-center items-center duration-500 max-sm:top-[50px] max-sm:left-[20px] max-sm:w-[calc(100%-40px)]`}
      >
        <div className="flex flex-col justify-center items-start gap-[50px]">
          {listMenu.map((item, index) => {
            return (
              <div
                key={index}
                className={` ${
                  (index + 2) % 2 === 0 && "pl-[100px] max-sm:pl-0"
                } text-left h-[88px] max-sm:h-[60px] cursor-pointer`}
              >
                <div className="flex justify-center items-end">
                  <span className="text-[20px] max-sm:text-[12px] font-normal mr-4">
                    0{index + 1}
                  </span>{" "}
                  <p
                    style={{ lineHeight: 0.9, fontFamily: "Aeros" }}
                    className="text-[80px] max-sm:text-[30px] font-bold uppercase"
                  >
                    {item.name}
                  </p>
                </div>
                {item.isUpdate && (
                  <p className="pl-[60px] max-sm:pl-[40px] max-sm:text-[15px]">
                    we’re updating
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
