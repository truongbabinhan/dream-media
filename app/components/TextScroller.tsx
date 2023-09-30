import Image from "next/image";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const TextScroller = () => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(30%,0)" },
    to: { transform: "translate(-30%,0)" },
    config: { duration: 8000 },
    reset: true,
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key} className="h-[70px]">
      <animated.div
        style={scrolling}
        className="w-full flex justify-center items-center gap-[18px]"
      >
        <Image src="./diamond.svg" width={50} height={50} alt="diamond" />
        <p
          className="text-[70px] whitespace-nowrap"
          style={{ fontFamily: "Aeros", lineHeight: 1 }}
        >
          WE PRODUCE
        </p>
        <Image src="./diamond.svg" width={50} height={50} alt="diamond" />
        <p
          className="text-[70px] whitespace-nowrap"
          style={{ fontFamily: "Aeros", lineHeight: 1 }}
        >
          WE PRODUCE
        </p>
        <Image src="./diamond.svg" width={50} height={50} alt="diamond" />
        <p
          className="text-[70px] whitespace-nowrap"
          style={{ fontFamily: "Aeros", lineHeight: 1 }}
        >
          WE PRODUCE
        </p>
        <Image src="./diamond.svg" width={50} height={50} alt="diamond" />
        <p
          className="text-[70px] whitespace-nowrap"
          style={{ fontFamily: "Aeros", lineHeight: 1 }}
        >
          WE PRODUCE
        </p>
        <Image src="./diamond.svg" width={50} height={50} alt="diamond" />
      </animated.div>
      ;
    </div>
  );
};
