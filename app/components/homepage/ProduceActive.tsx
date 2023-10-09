import Image from "next/image";
import { TextScramble } from "..";

interface ProduceActiveProps {
  data: any;
}

export const ProduceActive = ({ data }: ProduceActiveProps) => {
  return (
    <div className="flex-1 relative max-w-[856px]">
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
        text={`TV Commercial Production: We develop your next big idea,
            <br /> take it into production and handle distribution.`}
        className="text-[16px] absolute bottom-[-75px] left-[63px] pr-[190px]"
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
