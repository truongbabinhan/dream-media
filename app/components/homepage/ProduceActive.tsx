import Image from "next/image";
import { TextScramble } from "..";

interface ProduceActiveProps {
  data: any;
}

export const ProduceActive = ({ data }: ProduceActiveProps) => {
  return (
    <div className="flex-1 relative max-w-[856px] max-sm:w-full max-sm:px-[20px]">
      {/* <Image
        src="/homepage/angle.svg"
        width={254}
        height={156}
        alt="angle"
        className="absolute top-[-24px] left-[-32px]"
      />
      <Image
        src="/homepage/angle.svg"
        width={254}
        height={156}
        alt="angle"
        className="rotate-180 absolute bottom-[-83px] right-[-64px]"
      /> */}
      <TextScramble
        text={`TV Commercial Production: We develop your next big idea, take it into production and handle distribution.`}
        className="text-[16px] absolute bottom-[-75px] left-[63px] pr-[190px] max-sm:text-[10px] max-sm:bottom-[-70px] max-sm:left-0 max-sm:pr-[0] max-sm:ml-[20px] max-sm:max-w-[250px]"
        styles={{ fontFamily: "Livemono" }}
      />

      <div className="rounded-[70px] w-full h-full overflow-hidden relative">
        <Image
          src={data.img}
          layout="fill"
          className="w-full h-auto !relative"
          alt="produce"
        />
      </div>
    </div>
  );
};
