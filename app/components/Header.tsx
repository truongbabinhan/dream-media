import Image from "next/image";
import { useState, useEffect } from "react";
import Moment from "moment-timezone";
import { ModalContact } from "./ModalContact";
import { useRouter } from "next/navigation";
import { ModalSuccess } from ".";
import { GoUnmute, GoMute } from "react-icons/go";

interface HeaderProps {
  setIsChill?: any;
  isChill?: boolean;
}
export const Header = ({ setIsChill, isChill }: HeaderProps) => {
  const router = useRouter();

  const [percentScroll, setPercentScroll] = useState(0);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [dateNowVN, setDateNowVN] = useState("");
  const [dateNowNY, setDateNowNY] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const listMenu = [
    {
      name: "contact",
      isUpdate: false,
      action: () => {
        setIsShowMenu(false);
        setShowContact(true);
      },
    },
    {
      name: "work",
      isUpdate: false,
      action: () => {
        router.push("/work", { scroll: true });
        setIsShowMenu(false);
      },
    },
    {
      name: "about",
      isUpdate: true,
      action: () => {
        setIsShowMenu(false);
      },
    },
    {
      name: "studio life",
      isUpdate: true,
      action: () => {
        setIsShowMenu(false);
      },
    },
  ];
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

  useEffect(() => {
    setDateNowVN(Moment().tz("Asia/Ho_Chi_Minh").format("h:mm A"));
    setDateNowNY(Moment().tz("America/New_York").format("h:mm A"));
  }, []);

  return (
    <>
      <Image
        className="fixed left-5 top-[15px] z-10 max-sm:hidden cursor-pointer"
        src="/logo.svg"
        alt="Logo"
        width={201}
        height={50}
        priority
        onClick={() => router.push("/", { scroll: true })}
      />
      <Image
        className="fixed left-[10px] top-[10px] z-10 hidden max-sm:block cursor-pointer"
        src="/logo-sp.svg"
        alt="Logo"
        width={120}
        height={30}
        priority
        onClick={() => router.push("/", { scroll: true })}
      />
      <p
        onClick={() => setIsShowMenu(!isShowMenu)}
        className="fixed text-[15px] z-10 left-1/2 -translate-x-1/2 top-5 select-none cursor-pointer max-sm:right-[10px] max-sm:left-auto max-sm:translate-x-0 max-sm:top-[15px] max-sm:text-[12px]"
      >
        [ {isShowMenu ? "CLOSE" : "MENU"} ]
      </p>
      <p className="fixed text-[15px] right-5 top-5 z-10 max-sm:hidden max-sm:text-[12px]">
        SCROLL ({percentScroll.toFixed() || 0}%)
      </p>
      <p className="fixed text-[15px] left-5 bottom-5 z-10 max-sm:hidden">
        HCMC ({dateNowVN}) NEW YORK ({dateNowNY})
      </p>
      <p className="fixed text-[12px] left-[10px] bottom-[10px] z-10 hidden max-sm:block">
        HCMC ({dateNowVN})
      </p>
      {setIsChill && (
        <p
          onClick={() => setIsChill(!isChill)}
          className="max-sm:hidden fixed flex items-center text-[15px] z-10 cursor-pointer right-5 bottom-5 select-none max-sm:text-[12px] max-sm:right-[10px] max-sm:bottom-[10px]"
        >
          CHILL: {isChill ? "OFF" : "ON"}
          <span className="pl-2 pb-[2px]">
            {isChill ? <GoMute size={18} /> : <GoUnmute size={18} />}
          </span>
        </p>
      )}

      <div
        className={`fixed z-20 top-[80px] left-[100px] bg-[linear-gradient(105deg,_color(display-p3_0.851_0.851_0.851_/_0.40)_15.93%,_color(display-p3_0.851_0.851_0.851_/_0.10)_94.84%)] backdrop-blur-lg max-sm:bg-black/90 min-w-screen transition-all overflow-hidden ${
          isShowMenu
            ? "h-[calc(100%-160px)] max-sm:h-[calc(100%-100px)]"
            : "h-0"
        }  w-[calc(100%-200px)] flex flex-col justify-center items-center duration-500 max-sm:top-[50px] max-sm:left-[20px] max-sm:w-[calc(100%-40px)]`}
      >
        <div className="flex flex-col justify-center items-start gap-[50px] max-2xl:gap-[40px]">
          {listMenu.map((item, index) => {
            return (
              <div
                key={index}
                onClick={item.action}
                className={` ${
                  (index + 2) % 2 === 0 && "pl-[100px] max-sm:pl-0"
                } text-left h-[88px] max-2xl:h-[60px] cursor-pointer hover:text-black transition-all duration-500`}
              >
                <div className="flex justify-center items-end">
                  <span className="text-[20px] max-sm:text-[12px] font-normal mr-4">
                    0{index + 1}
                  </span>{" "}
                  <p
                    style={{ lineHeight: 0.9, fontFamily: "Aeros" }}
                    className="text-[80px] max-2xl:text-[60px] max-sm:text-[30px] font-bold uppercase"
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
      <ModalContact
        open={showContact}
        setOpen={setShowContact}
        setShowSuccess={setShowSuccess}
      />
      <ModalSuccess open={showSuccess} setOpen={setShowSuccess} />
    </>
  );
};

export default Header;
