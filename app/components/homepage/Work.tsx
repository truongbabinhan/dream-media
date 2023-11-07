import Image from "next/image";
import { TextScramble } from "..";
import { useRouter } from "next/navigation";

export const Work = () => {
  const router = useRouter();

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
      link: "fanta",
    },
    {
      name: "surf",
      title: "BREAKING NEWS",
      client: "",
      brand: "surf",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/surf.png",
      video: "/video/surf.mp4",
      link: "surf",
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
      link: "lung-cancer",
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
      link: "lipovitan",
    },
    {
      name: "fanta",
      title: "Lunar new year",
      client: "",
      brand: "fanta",
      agency: "t&a ogivy",
      productionHouse: "dream media",
      background: "/work/fanta-newyear.png",
      video: "/video/fanta-newyear.mp4",
      link: "fanta-newyear",
    },
    {
      name: "BIA SAI GON CHILL",
      title: "VALENTINE",
      client: "sabeco",
      brand: "Bia Sai Gon Chill",
      agency: "T&A Ogilvy",
      productionHouse: "dream media",
      background: "/work/saigon-chill.png",
      video: "",
      link: "saigon-chill",
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

  const goToWorkDetail = (id: any) => {
    return router.push(`/work/detail?brand=${id}`, { scroll: true });
  };

  return (
    <div className="w-full flex flex-col relative">
      {dataWork.map((item, index) => {
        return (
          <div
            key={index}
            className="min-h-screen max-sm:min-h-max w-full text-white relative group cursor-pointer"
            onClick={() => goToWorkDetail(item.link)}
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
              } group-hover:!blur-0 blur-[30px] max-sm:hidden`}
            />
            <Image
              src={item.background}
              alt="work"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full h-auto !relative hidden max-sm:block"
            />
            <div className="z-[2] p-[25px] uppercase sticky top-[70px] max-sm:p-[10px] max-sm:top-[0px] max-sm:absolute">
              <p
                style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
                className="text-[100px] font-bold mb-1 ml-[-2px] max-sm:text-[30px]"
              >
                {item.name}
              </p>
              <p
                style={{ lineHeight: 0.8, fontFamily: "BebasNeue" }}
                className="text-[30px] font-bold mb-[6px] max-sm:text-[15px]"
              >
                {item.title}
              </p>
              {item.client && (
                <TextScramble
                  text={`CLIENT: ${item.client}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )}
              {item.brand && (
                <TextScramble
                  text={`BRAND: ${item.brand}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )}
              {item.agency && (
                <TextScramble
                  text={`AGENCY: ${item.agency}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )}
              <TextScramble
                text={`PRODUCTION HOUSE: ${item.productionHouse}`}
                className="text-[14px] max-sm:text-[10px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
