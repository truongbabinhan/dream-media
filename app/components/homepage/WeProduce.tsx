import { TextScroller, SliderWeProduce } from "..";
import Image from "next/image";

export const WeProduce = () => {
  return (
    <div className="w-full min-h-screen max-sm:min-h-max max-sm:pt-[50px] relative flex flex-col justify-center items-center overflow-hidden">
      <TextScroller />
      <div className="flex justify-center items-center gap-1 mt-[10px] mb-[44px] max-sm:mt-[20px] max-sm:mb-[10px]">
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={15}
          height={15}
          alt="diamond"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={15}
          height={15}
          alt="diamond"
        />
        <Image
          src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/diamond.svg"
          width={15}
          height={15}
          alt="diamond"
        />
      </div>
      <SliderWeProduce />
    </div>
  );
};
