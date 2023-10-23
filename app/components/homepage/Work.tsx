import Image from "next/image";
import { TextScramble } from "..";

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
      video: "/video/fanta.mp4",
    },
    {
      name: "surf",
      title: "BREAKING NEWS",
      client: "",
      brand: "surf",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/surf.png",
      video: "",
    },
    {
      name: "LUNG CANCER",
      title: "CSR PROJECT",
      client: "astrazeneca",
      brand: "",
      agency: "TBWA",
      productionHouse: "dream media",
      background: "/work/cancer.png",
      video: "",
    },
    {
      name: "LIPOVITAN",
      title: "",
      client: "",
      brand: "Lipovitan",
      agency: "Fortune Media",
      productionHouse: "dream media",
      background: "/work/lipovitan.png",
      video: "",
    },
    {
      name: "fanta",
      title: "Lunar new year",
      client: "",
      brand: "fanta",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/fanta-newyear.png",
      video: "",
    },
    {
      name: "VSMART",
      title: "STAR 3 ",
      client: "vsmart",
      brand: "Vsmart Star 3",
      agency: "",
      productionHouse: "dream media",
      background: "/work/vsmart.png",
      video: "",
    },
  ];

  const onPlayVideoHover = (video: any) => {
    // Show loading animation.
    var playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };

  const onPauseVideoHover = (video: any) => {
    // Show loading animation.
    var pausePromise = video.pause();

    if (pausePromise !== undefined) {
      pausePromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  };
  return (
    <div className="w-full flex flex-col relative">
      {dataWork.map((item, index) => {
        return (
          <div
            key={index}
            className="min-h-screen w-full text-white relative group"
          >
            {item.video && (
              <video
                typeof="video/mp4"
                className="w-full h-full max-w-full max-h-full object-cover absolute top-0 left-0"
                preload="auto"
                muted
                loop
                autoPlay
                onMouseOver={(event) => onPlayVideoHover(event.target)}
                onMouseOut={(event) => onPauseVideoHover(event.target)}
                src={item.video}
              />
            )}
            <Image
              src={item.background}
              alt="work"
              layout="fill"
              objectFit="cover"
              objectPosition="top left"
              priority
              className={`transition-[filter_2s_cubic-bezier(0.005,0.985,0.22,1),transform_2s_cubic-bezier(0.005,0.985,0.22,1)] absolute top-0 left-0 z-[1] ${
                item.video && "group-hover:hidden"
              } group-hover:!blur-0 blur-[30px]`}
            />
            <div className="z-[2] p-[25px] uppercase sticky top-[70px]">
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
                <TextScramble
                  text={`CLIENT: ${item.client}`}
                  className="text-[14px]"
                />
              )}
              {item.brand && (
                <TextScramble
                  text={`BRAND: ${item.brand}`}
                  className="text-[14px]"
                />
              )}
              {item.agency && (
                <TextScramble
                  text={`AGENCY: ${item.agency}`}
                  className="text-[14px]"
                />
              )}
              <TextScramble
                text={`PRODUCTION HOUSE: ${item.productionHouse}`}
                className="text-[14px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
