import Image from "next/image";

const data = [
  {
    img: "/brand/fanta.png",
  },
  {
    img: "/brand/saigon-chill.png",
  },
  {
    img: "/brand/saigon-premium.png",
  },
  {
    img: "/brand/biacraft.png",
  },
  {
    img: "/brand/lacviet.png",
  },
  {
    img: "/brand/cocacola.png",
  },
  {
    img: "/brand/lipovitan.png",
  },
  {
    img: "/brand/herbalife.png",
  },
  {
    img: "/brand/tiki.png",
  },
  {
    img: "/brand/unilever.svg",
  },
  {
    img: "/brand/surf.svg",
  },
  {
    img: "/brand/comfort.png",
  },
  {
    img: "/brand/ps.png",
  },
  {
    img: "/brand/dove.png",
  },
  {
    img: "/brand/tiktok.png",
  },
  {
    img: "/brand/botanka.png",
  },
  {
    img: "/brand/masterise.png",
  },
  {
    img: "/brand/hdbank.png",
  },
  {
    img: "/brand/namabank.png",
  },
  {
    img: "/brand/vsmart.png",
  },
  {
    img: "/brand/converse.png",
  },
  {
    img: "/brand/astrazeneca.png",
  },
  {
    img: "/brand/ogilvy.png",
  },
  {
    img: "/brand/tbwa.png",
  },
  {
    img: "/brand/mullenlowe.png",
  },
];
export const Brand = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center px-[130px]">
      <p className="text-[20px] mb-[80px]">[BRANDS WE WORK WITH]</p>
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
      <p className="text-[11px] mt-[80px]">
        TO OUR CLIENTS COLLABORATORS PARTNERS AND FRIENDS: THANK YOU FOR BEING A
        PART OF DREAM
      </p>
    </div>
  );
};
