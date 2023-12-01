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
    desc: "Our visual experts in photography can help your brand, vision, and message through visually attracting your audience. a beautifully taken photograph is worth a million words, and with our professional photographers and visual experts we will capture your message to the world through photography. we work with the best photographers in ho chi minh city and throughout a wide variety of industries such as advertising, beauty, fashion, corporate as well as product",
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
    desc: "In post-production the right mood, colors and emotions are set, music and sound effects are polished and the final video really starts to shine. you need a highly skilled editor for post post-production as this part really requires a deep understanding of all facets of this important process. post-production in dream media can make or break any video.",
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
    desc: "We provide different live streaming packages for a variety of needs. be it a corporate event, sport events or entertainment related. we also can live stream key notes or important speeches. we’ll make sure everything looks pristine, soy you can impress your viewers with a professional look.",
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
    desc: "We're passionate about storytelling and believe in the power of short films to convey impactful narratives.",
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

  const renderProduce = (active: number) => {
    switch (active) {
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
    <div className="flex max-xl:flex-col-reverse justify-center gap-[120px] items-start max-w-[1450px] max-xl:items-start w-full pl-[20px] pr-[80px] max-xl:pl-[10px] max-xl:pr-[10px] max-xl:gap-[30px]">
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
      <div className="flex-1 mt-5 relative max-w-[856px] max-sm:w-full max-sm:px-[20px]">
        {renderProduce(activeProduce)}
      </div>
    </div>
  );
};
