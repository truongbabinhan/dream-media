import Image from "next/image";
import React from "react";
import { useSpring, animated } from "react-spring";

export const TextScroller = () => {
  const scrolling = useSpring({
    from: { transform: "translate(30%,0)" },
    to: { transform: "translate(-30%,0)" },
    config: { duration: 8000 },
    loop: { reverse: true },
  });

  return (
    <div className="h-[70px] max-sm:h-[25px]">
      <animated.div
        style={scrolling}
        className="w-full flex justify-center items-center gap-[18px]"
      >
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={50}
          height={50}
          alt="diamond"
          className="max-sm:hidden"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={25}
          height={25}
          alt="diamond"
          className="hidden max-sm:block"
        />
        <p
          className="text-[70px] whitespace-nowrap text-black max-sm:text-[25px]"
          style={{
            fontFamily: "Aeros",
            lineHeight: 1,
            textShadow:
              "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
          }}
        >
          WE PRODUCE
        </p>
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={50}
          height={50}
          alt="diamond"
          className="max-sm:hidden"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={25}
          height={25}
          alt="diamond"
          className="hidden max-sm:block"
        />
        <p
          className="text-[70px] whitespace-nowrap text-black max-sm:text-[25px]"
          style={{
            fontFamily: "Aeros",
            lineHeight: 1,
            textShadow:
              "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
          }}
        >
          WE PRODUCE
        </p>
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={50}
          height={50}
          alt="diamond"
          className="max-sm:hidden"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={25}
          height={25}
          alt="diamond"
          className="hidden max-sm:block"
        />
        <p
          className="text-[70px] whitespace-nowrap text-black max-sm:text-[25px]"
          style={{
            fontFamily: "Aeros",
            lineHeight: 1,
            textShadow:
              "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
          }}
        >
          WE PRODUCE
        </p>
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={50}
          height={50}
          alt="diamond"
          className="max-sm:hidden"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={25}
          height={25}
          alt="diamond"
          className="hidden max-sm:block"
        />
        <p
          className="text-[70px] whitespace-nowrap text-black max-sm:text-[25px]"
          style={{
            fontFamily: "Aeros",
            lineHeight: 1,
            textShadow:
              "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
          }}
        >
          WE PRODUCE
        </p>
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={50}
          height={50}
          alt="diamond"
          className="max-sm:hidden"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={25}
          height={25}
          alt="diamond"
          className="hidden max-sm:block"
        />
      </animated.div>
      ;
    </div>
  );
};
