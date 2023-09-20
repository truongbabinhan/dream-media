import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col relative justify-center items-center pt-[100px] pb-[10px]">
      <Image
        src="/logo-home.svg"
        alt="Logo"
        width={745}
        height={134}
        priority
      />
      <p className="text-[18px] mt-[100px] mb-[15px]">
        WANT TO WORK TOGETHER, WORK WITH US, OR FOR US?
      </p>
      <p className="text-[11px] mb-[30px]">
        202/16 Ngo Tat To Street, 22 Ward, Binh Thanh District, HCMC -
        hoang@dreammedia.vn - Phone: +84907680212
      </p>
      <div className="text-center mb-[70px]">
        <p className="text-[15px] mb-[30px]">FOLLOW US:</p>
        <div className="flex gap-[17px] h-[32px]">
          <Image
            src="/icon-logo/vimeo.png"
            alt="vimeo"
            width={32}
            height={32}
            priority
            className="cursor-pointer"
          />
          <Image
            src="/icon-logo/facebook.png"
            alt="facebook"
            width={32}
            height={32}
            priority
            className="cursor-pointer"
          />
          <Image
            src="/icon-logo/youtube.png"
            alt="youtube"
            width={50}
            height={32}
            priority
            className="cursor-pointer"
          />
          <Image
            src="/icon-logo/tiktok.png"
            alt="tiktok"
            width={29}
            height={32}
            priority
            className="cursor-pointer"
          />
        </div>
      </div>
      <p className="text-[11px] max-w-[920px] text-center mb-[130px]">
        DREAM MEDIA IS A PRODUCTION COMPANY WITH HQ IN HCMC AND OPERATIONS
        THROUGHOUT VIETNAM. WE REPRESENT A SPECIFIC ROSTER OF VIRAL FILM
        DIRECTORS AND STAFF A DEDICATED PRODUCTION SERVICES TEAM. WE PROVIDE
        FULL PRODUCTION SERVICES FOR FEATURES FILMS, COMMERCIALS, TV SERIES,
        DOCUMENTARIES, AND BRANDED CONTENT.
      </p>
      <p className="text-[11px] text-center">
        2023 Dream Media Productions - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
