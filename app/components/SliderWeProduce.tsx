import { ProduceActive } from "./homepage";
import { useState } from "react";
const data = [
  {
    id: 1,
    title: "TV COMMERCIALS (TVC)",
    desc: "TV Commercial Production: We develop your next big idea, take it into production and handle distribution.",
    img: [
      "/we-produce/menu1/img1.png",
      "/we-produce/menu1/img2.png",
      "/we-produce/menu1/img3.png",
      "/we-produce/menu1/img4.png",
      "/we-produce/menu1/img5.png",
      "/we-produce/menu1/img6.png",
    ],
    menu: "/we-produce/menu1.png",
  },
  {
    id: 2,
    title: "VIRAL VIDEOS",
    desc: "Viral Video production: Break the Internet and let your brand or project become the talk of town.",
    img: [
      "/we-produce/menu2/img1.png",
      "/we-produce/menu2/img2.png",
      "/we-produce/menu2/img3.png",
      "/we-produce/menu2/img4.png",
      "/we-produce/menu2/img5.png",
      "/we-produce/menu2/img6.png",
    ],
    menu: "/we-produce/menu2.png",
  },
  {
    id: 3,
    title: "PHOTOGRAPHY",
    desc: "",
    img: [
      "/we-produce/menu3/img1.png",
      "/we-produce/menu3/img2.png",
      "/we-produce/menu3/img3.png",
      "/we-produce/menu3/img4.png",
      "/we-produce/menu3/img5.png",
      "/we-produce/menu3/img6.png",
      "/we-produce/menu3/img7.png",
      "/we-produce/menu3/img8.png",
    ],
    menu: "/we-produce/menu3.png",
  },
  {
    id: 4,
    title: "DIGITAL CONTENTS",
    desc: "Powering your next web campaign: Social Video, Web Commercials, Viral Content, Live Shows and more.",
    img: [
      "/we-produce/menu4/img1.png",
      "/we-produce/menu4/img2.png",
      "/we-produce/menu4/img3.png",
      "/we-produce/menu4/img4.png",
      "/we-produce/menu4/img5.png",
      "/we-produce/menu4/img6.png",
    ],
    menu: "/we-produce/menu4.png",
  },
  {
    id: 5,
    title: "POST-PRODUCTION",
    desc: "",
    img: [
      "/we-produce/menu5/img1.png",
      "/we-produce/menu5/img2.png",
      "/we-produce/menu5/img3.png",
      "/we-produce/menu5/img4.png",
      "/we-produce/menu5/img5.png",
      "/we-produce/menu5/img6.png",
      "/we-produce/menu5/img7.png",
      "/we-produce/menu5/img8.png",
      "/we-produce/menu5/img9.png",
    ],
    menu: "/we-produce/menu5.png",
  },
  {
    id: 6,
    title: "LIVE STREAM",
    desc: "",
    img: [
      "/we-produce/menu6/img1.png",
      "/we-produce/menu6/img2.png",
      "/we-produce/menu6/img3.png",
      "/we-produce/menu6/img4.png",
      "/we-produce/menu6/img5.png",
      "/we-produce/menu6/img6.png",
      "/we-produce/menu6/img7.png",
      "/we-produce/menu6/img8.png",
    ],
    menu: "/we-produce/menu6.png",
  },
  {
    id: 7,
    title: "SHORT FILMS",
    desc: "",
    img: [
      "/we-produce/menu7/img1.png",
      "/we-produce/menu7/img2.png",
      "/we-produce/menu7/img3.png",
      "/we-produce/menu7/img4.png",
      "/we-produce/menu7/img5.png",
      "/we-produce/menu7/img6.png",
      "/we-produce/menu7/img7.png",
      "/we-produce/menu7/img8.png",
      "/we-produce/menu7/img8.png",
    ],
    menu: "/we-produce/menu7.png",
  },
];
export const SliderWeProduce = () => {
  const [activeProduce, setActiveProduce] = useState(1);

  const renderProduce = () => {
    switch (activeProduce) {
      case 1:
        return <ProduceActive data={data[0]} />;
      case 2:
        return <ProduceActive data={data[1]} />;
      case 3:
        return <ProduceActive data={data[2]} />;
      case 4:
        return <ProduceActive data={data[3]} />;
      case 5:
        return <ProduceActive data={data[4]} />;
      case 6:
        return <ProduceActive data={data[5]} />;
      case 7:
        return <ProduceActive data={data[6]} />;
      default:
        return null;
    }
  };
  return (
    <div className="flex max-xl:flex-col-reverse justify-center gap-[120px] items-center max-w-[1450px] max-xl:items-start w-full pl-[20px] pr-[80px] max-xl:pl-[10px] max-xl:pr-[10px] max-xl:gap-[30px]">
      <div className="flex flex-col gap-2 max-sm:pl-[20px] min-w-[370px]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => setActiveProduce(item.id)}
              className="h-[80px] max-sm:h-[40px] rounded-[30px] flex px-4 max-sm:px-[10px] items-center cursor-pointer bg-center bg-cover"
              style={{
                backgroundImage:
                  item.id === activeProduce ? `url(${item.menu})` : "",
              }}
            >
              <p
                className="text-[25px] max-sm:text-[15px]"
                style={{ fontFamily: "Livemono" }}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex-1 overflow-hidden relative max-w-[856px] max-sm:w-full max-sm:px-[20px]">
        {renderProduce()}
      </div>
    </div>
  );
};
