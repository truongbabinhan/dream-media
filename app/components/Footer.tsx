import Image from "next/image";
import { TextScramble } from "./TextScramble";

export const Footer = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full flex flex-col relative justify-center items-center pt-[100px] pb-[10px] max-sm:py-[50px] max-sm:px-5">
      <Image
        src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/logo-home.svg"
        alt="Logo"
        width={745}
        height={134}
        priority
        className="max-sm:hidden"
      />
      <Image
        src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/logo-home.svg"
        alt="Logo"
        width={245}
        height={134}
        priority
        className="hidden max-sm:block"
      />
      <TextScramble
        text="WANT TO WORK TOGETHER, WORK WITH US, OR FOR US?"
        className="text-[18px] text-center mt-[100px] mb-[15px] max-sm:text-[12px] max-sm:mt-[50px]"
      />
      <TextScramble
        text="202/16 Ngo Tat To Street, 22 Ward, Binh Thanh District, HCMC -
        hello@dreammedia.vn - Phone: (84) 090 769 0212"
        className="text-[11px] text-center mb-[30px]"
      />
      <div className="text-center mb-[70px] max-sm:mb-[20px]">
        <TextScramble
          text="FOLLOW US:"
          className="text-[15px] mb-[30px] max-sm:text-[10px] max-sm:mb-[10px]"
        />
        <div className="flex gap-[17px] h-[32px] max-sm:hidden">
          <div className="relative group transition-all">
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/vimeo.png"
              alt="vimeo"
              width={32}
              height={32}
              priority
              className="cursor-pointer absolute top-0 z-10 left-0 group-hover:opacity-0"
              onClick={() => openInNewTab("https://vimeo.com/user71449489")}
            />
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/vimeo-color.png"
              alt="vimeo"
              width={32}
              height={33}
              priority
              className="cursor-pointer relative bottom-[3px]"
              onClick={() => openInNewTab("https://vimeo.com/user71449489")}
            />
          </div>
          <div className="relative group transition-all">
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/facebook.png"
              alt="facebook"
              width={32}
              height={32}
              priority
              className="cursor-pointer absolute top-0 z-10 left-0 group-hover:opacity-0"
              onClick={() =>
                openInNewTab("https://www.facebook.com/dreammedia.vn")
              }
            />
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/facebook-color.png"
              alt="facebook"
              width={32}
              height={32}
              priority
              className="cursor-pointer relative"
              onClick={() =>
                openInNewTab("https://www.facebook.com/dreammedia.vn")
              }
            />
          </div>
          <div className="relative group transition-all">
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/youtube.png"
              alt="youtube"
              width={50}
              height={32}
              priority
              className="cursor-pointer absolute top-0 z-10 left-0 group-hover:opacity-0"
            />
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/youtube-color.png"
              alt="youtube"
              width={50}
              height={32}
              priority
              className="cursor-pointer relative"
            />
          </div>
          <div className="relative group transition-all">
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/tiktok.png"
              alt="tiktok"
              width={29}
              height={32}
              priority
              className="cursor-pointer absolute top-0 z-10 left-0 group-hover:opacity-0"
            />
            <Image
              src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/tiktok-color.png"
              alt="tiktok"
              width={29}
              height={32}
              priority
              className="cursor-pointer relative"
            />
          </div>
        </div>
        <div className="gap-[5px] h-[15px] hidden max-sm:flex">
          <Image
            src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/vimeo.png"
            alt="vimeo"
            width={15}
            height={15}
            priority
            className="cursor-pointer"
            onClick={() => openInNewTab("https://vimeo.com/user71449489")}
          />
          <Image
            src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/facebook.png"
            alt="facebook"
            width={15}
            height={15}
            priority
            className="cursor-pointer"
            onClick={() =>
              openInNewTab("https://www.facebook.com/dreammedia.vn")
            }
          />
          <Image
            src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/youtube.png"
            alt="youtube"
            width={22}
            height={15}
            priority
            className="cursor-pointer"
          />
          <Image
            src="https://dreammedia.s3.ap-southeast-2.amazonaws.com/public/icon-logo/tiktok.png"
            alt="tiktok"
            width={14}
            height={15}
            priority
            className="cursor-pointer"
          />
        </div>
      </div>
      <TextScramble
        text="DREAM MEDIA IS A PRODUCTION COMPANY WITH HQ IN HCMC AND OPERATIONS
        THROUGHOUT VIETNAM. WE REPRESENT A SPECIFIC ROSTER OF VIRAL FILM
        DIRECTORS AND STAFF A DEDICATED PRODUCTION SERVICES TEAM. WE PROVIDE
        FULL PRODUCTION SERVICES FOR FEATURES FILMS, COMMERCIALS, TV SERIES,
        DOCUMENTARIES, AND BRANDED CONTENT."
        className="text-[11px] max-w-[920px] text-center mb-[130px] max-sm:mb-[60px] max-sm:text-[8px] max-sm:px-10"
      />
      <TextScramble
        text="2023 Dream Media Productions - All Rights Reserved"
        className="text-[11px] pb-[10px] text-center max-sm:text-[8px]"
      />
    </div>
  );
};

export default Footer;
