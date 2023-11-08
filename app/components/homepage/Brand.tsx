import Image from "next/image";
import { TextScramble } from "..";

export const Brand = () => {
  return (
    <div className="w-full min-h-screen max-sm:min-h-max relative flex flex-col justify-center items-center px-[130px] max-sm:px-[20px] max-sm:py-[80px]">
      <TextScramble
        text="[BRANDS WE WORK WITH]"
        className="text-[20px] mb-[80px] max-sm:text-[12px] max-sm:mb-[40px]"
      />
      {/* <div className="flex justify-center items-center flex-wrap gap-10 max-w-[1180px]">
        {data.map((item, index) => {
          return (
            <div className="w-[200px] flex justify-center items-center">
              <Image
                src={item.img}
                alt="brand"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="w-auto max-w-full max-h-full h-full !relative m-auto"
              />
            </div>
          );
        })}
      </div> */}
      <Image
        src="/brand/brand.png"
        alt="brand"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        className="!relative"
      />
      <TextScramble
        text="TO OUR CLIENTS COLLABORATORS PARTNERS AND FRIENDS: THANK YOU FOR BEING A
        PART OF DREAM"
        className="text-center text-[11px] mt-[80px] max-sm:text-[10px] max-sm:mt-[40px]"
      />
    </div>
  );
};
