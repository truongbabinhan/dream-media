import Image from "next/image";

export const Work = () => {
  const dataWork = [
    {
      name: "fanta",
      title: "colorful",
      client: "",
      brand: "fanta",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/fanta.png",
    },
    {
      name: "surf",
      title: "BREAKING NEWS",
      client: "",
      brand: "surf",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/surf.png",
    },
    {
      name: "LUNG CANCER",
      title: "CSR PROJECT",
      client: "astrazeneca",
      brand: "",
      agency: "TBWA",
      productionHouse: "dream media",
      background: "/work/cancer.png",
    },
    {
      name: "LIPOVITAN",
      title: "",
      client: "",
      brand: "Lipovitan",
      agency: "Fortune Media",
      productionHouse: "dream media",
      background: "/work/lipovitan.png",
    },
    {
      name: "fanta",
      title: "Lunar new year",
      client: "",
      brand: "fanta",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/fanta-newyear.png",
    },
    {
      name: "VSMART",
      title: "STAR 3 ",
      client: "vsmart",
      brand: "Vsmart Star 3",
      agency: "",
      productionHouse: "dream media",
      background: "/work/vsmart.png",
    },
  ];
  return (
    <div className="w-full flex flex-col relative">
      {dataWork.map((item, index) => {
        return (
          <div key={index} className="min-h-screen w-full text-white relative">
            <Image
              src={item.background}
              alt="work"
              layout="fill"
              objectFit="cover"
              objectPosition="top left"
              priority
              className="absolute top-0 left-0 z-[1]"
            />
            <div className="relative z-[2] p-5 uppercase">
              <p
                style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
                className="text-[100px] font-bold mb-1 ml-[-2px]"
              >
                {item.name}
              </p>
              <p
                style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
                className="text-[30px] font-bold mb-[6px]"
              >
                {item.title}
              </p>
              {item.client && (
                <p className="text-[14px]">CLIENT: {item.client}</p>
              )}
              {item.brand && <p className="text-[14px]">BRAND: {item.brand}</p>}
              {item.agency && (
                <p className="text-[14px]">AGENCY: {item.agency}</p>
              )}

              <p className="text-[14px]">
                PRODUCTION HOUSE: {item.productionHouse}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
