import Image from "next/image";
import { TextScramble } from "..";
import { useRouter } from "next/navigation";

export const Work = () => {
  const router = useRouter();

  const dataWork = [
    {
      name: "LIPOVITAN",
      title: "",
      client: "",
      brand: "Lipovitan",
      agency: "Fortune Media",
      productionHouse: "dream media",
      background: "/work/lipovitan.png",
      video: "/video/lipovitan.mp4",
      link: "lipovitan",
      desc: [
        "STORYBOARD DEVELOPMENT",
        "PRE-PRODUCTION",
        "REHEARSAL DAY",
        "TABLETOP",
        "SHOOTING",
        "ART - SET DESIGN",
        "CHOREOGRAPHY",
        "COLOR GRADING",
        "VIDEO EDITING",
        "MOTION GRAPHICS",
        "3D ANIMATION",
        "SOUND MIX & SOUND DESIGN",
        "MUSIC COMPOSE",
      ],
    },
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
      desc: [
        "STORYBOARD DEVELOPMENT",
        "PRE-PRODUCTION",
        "CASTING",
        "WARDROBE",
        "PRODUCTION",
        "SHOOTING",
        "ART - SET DESIGN",
        "COLOR GRADING",
        "VIDEO EDITING",
        "MOTION GRAPHICS",
        "3D ANIMATION",
        "SOUND MIX & SOUND DESIGN",
        "MUSIC COMPOSE",
      ],
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
      desc: [
        "STORYBOARD DEVELOPMENT",
        "PRE-PRODUCTION",
        "CASTING",
        "WARDROBE",
        "REHEARSAL DAY",
        "SHOOTING",
        "ART - SET DESIGN",
        "COLOR GRADING",
        "VIDEO EDITING",
        "MOTION GRAPHICS",
        "CGI",
        "3D MODELING",
        "3D ANIMATION",
        "SOUND MIX & SOUND DESIGN",
        "MUSIC COMPOSE",
      ],
    },
    {
      name: "LUNG CANCER",
      title: "CSR PROJECT",
      client: "astrazeneca",
      brand: "",
      agency: "TBWA",
      productionHouse: "dream media",
      background: "/work/cancer.png",
      video: "/video/lung-cancer.mp4",
      link: "lung-cancer",
      desc: [
        "STORYBOARD DEVELOPMENT",
        "PRE-PRODUCTION",
        "CASTING",
        "WARDROBE",
        "ART - SET DESIGN",
        "COLOR GRADING",
        "VIDEO EDITING",
        "VFX",
        "SOUND MIX & SOUND DESIGN",
        "MUSIC COMPOSE",
      ],
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
      desc: [
        "STORYBOARD DEVELOPMENT",
        "PRE-PRODUCTION",
        "CASTING",
        "WARDROBE",
        "PRODUCTION",
        "SHOOTING",
        "ART - SET DESIGN",
        "COLOR GRADING",
        "VIDEO EDITING",
        "MOTION GRAPHICS",
        "SOUND MIX & SOUND DESIGN",
        "MUSIC COMPOSE",
      ],
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
      desc: ["PRE-PRODUCTION", "ART - SET DESIGN", "SHOOTING", "DI", "RETOUCH"],
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
              className={`transition-all duration-500 absolute top-0 left-0 z-[1] ${
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
            <div className="z-[2] p-5 uppercase sticky top-[70px] max-sm:p-[10px] max-sm:top-[0px] max-sm:absolute">
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
              <Image
                src="./decor-work.svg"
                alt="decor"
                width={57}
                height={75}
                priority
                className="max-sm:hidden"
              />
              <div className="max-w-[410px] mt-2 max-sm:hidden">
                <ul
                  className={item.desc.length > 8 ? "columns-2" : "columns-1"}
                >
                  {item.desc.map((note, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[12px] text-white pb-1 block"
                      >
                        <TextScramble text={note} className="inline-block" />
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* {item.client && (
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
              {item.productionHouse && (
                <TextScramble
                  text={`PRODUCTION HOUSE: ${item.productionHouse}`}
                  className="text-[14px] max-sm:text-[10px]"
                />
              )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
