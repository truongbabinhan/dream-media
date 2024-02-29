import { WorkCard } from "./WorkCard";

export const Work = () => {
  const dataWork = [
    {
      name: "LIPOVITAN",
      title: "",
      client: "",
      brand: "Lipovitan",
      agency: "Fortune Media",
      productionHouse: "dream media",
      background:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/lipovitan.png",
      video:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/video-intro/lipovitan.mp4",
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
      background:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/fanta.png",
      video:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/video-intro/fanta.mp4",
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
      background:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/surf.png",
      video:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/video-intro/surf.mp4",
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
      name: "THƯƠNG PHỔI",
      title: "CSR PROJECT",
      client: "astrazeneca",
      brand: "",
      agency: "TBWA",
      productionHouse: "dream media",
      background:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/cancer.png",
      video:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/video-intro/lung-cancer.mp4",
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
      background:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/fanta-newyear.png",
      video:
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/video-intro/fanta-newyear.mp4",
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
      background: [
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/saigon-chill/1.png",
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/saigon-chill/2.png",
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/saigon-chill/3.png",
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/saigon-chill/4.png",
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/saigon-chill/5.png",
        "https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/work/saigon-chill/6.png",
      ],
      video: "",
      link: "saigon-chill-valentine",
      desc: ["PRE-PRODUCTION", "ART - SET DESIGN", "SHOOTING", "DI", "RETOUCH"],
    },
  ];

  return (
    <div className="w-full flex flex-col relative">
      {dataWork.map((item, index) => {
        return <WorkCard key={index} item={item} />;
      })}
    </div>
  );
};

export default Work;
