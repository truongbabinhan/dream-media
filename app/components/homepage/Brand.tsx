import Image from "next/image";
import { useState } from "react";
import { TextScramble } from "..";

export const Brand = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="w-full min-h-screen max-sm:min-h-max relative flex flex-col justify-center items-center max-sm:py-[80px]">
      <TextScramble
        text="[BRANDS WE WORK WITH]"
        className="text-[20px] mb-[80px] max-sm:text-[12px] max-sm:mb-[40px]"
      />

      <div className="w-[1200px] max-xl:w-[800px] max-lg:w-full max-lg:px-5 relative">
        <Image
          src="/brand/brand-white.png"
          alt="brand"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="!relative"
        />

        <div
          className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
          onMouseMove={(e) =>
            setHoverPosition({
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            })
          }
        >
          <div className="bg-cover bg-center w-full h-full absolute cursor-none">
            <div
              className="hovered w-full h-full bg-cover"
              style={{
                filter: "drop-shadow(10px 10px 20px rgba(255, 255, 255, 0.6))",
                backgroundImage: 'url("/brand/brand-color.png")',
                clipPath: `circle(60px at ${hoverPosition.x}px ${hoverPosition.y}px)`,
              }}
            ></div>
          </div>
        </div>
        {/* <div
          className="absolute w-[120px] h-[120px] border rounded-full border-white drop-shadow-[0_35px_35px_rgba(255,255,255,1)]"
          style={{
            left: `${hoverPosition.x - 60}px`,
            top: `${hoverPosition.y - 60}px`,
          }}
        ></div> */}
      </div>

      <TextScramble
        text="TO OUR CLIENTS COLLABORATORS PARTNERS AND FRIENDS: THANK YOU FOR BEING A
        PART OF DREAM"
        className="text-center text-[11px] mt-[100px] max-sm:text-[10px] max-sm:mt-[40px]"
      />
    </div>
  );
};
