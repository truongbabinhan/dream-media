import Image from "next/image";

export const Dashboard = () => {
  return (
    <div className="w-full flex min-h-screen bg-homepage-dashboard bg-center bg-cover relative">
      <div className="w-full h-full backdrop-brightness-[0.1] absolute left-0 top-0 z-[1]"></div>
      <div className="flex flex-1 flex-col justify-center items-center relative z-[2] overflow-hidden">
        <Image
          src="/homepage/left.gif"
          alt="star"
          width={486}
          height={273}
          priority
          className="absolute left-1/2 top-1/2 -translate-x-[calc(50%+440px)] -translate-y-[calc(50%+275px)] z-[1]"
        />
        <Image
          src="/homepage/right.gif"
          alt="star"
          width={425}
          height={240}
          priority
          className="absolute right-1/2 top-1/2 translate-x-[calc(50%+500px)] -translate-y-[calc(50%+300px)]"
        />
        <Image
          src="/homepage/middle.gif"
          alt="star"
          width={195}
          height={110}
          priority
          className="absolute right-1/2 top-1/2 translate-x-[calc(50%)] -translate-y-[calc(50%)]"
        />
        <Image
          src="/logo-home.svg"
          alt="Logo"
          width={753}
          height={134}
          priority
          className="relative z-[2]"
        />
        <p className="w-[617px] text-[10px] mt-[230px] mb-[40px] text-center">
          DREAM MEDIA IS A PRODUCTION COMPANY WITH HQ IN HCMC AND OPERATIONS
          THROUGHOUT VIETNAM. WE REPRESENT A SPECIFIC ROSTER OF VIRAL FILM
          DIRECTORS AND STAFF A DEDICATED PRODUCTION SERVICES TEAM. WE PROVIDE
          FULL PRODUCTION SERVICES FOR FEATURES FILMS, COMMERCIALS, TV SERIES,
          DOCUMENTARIES, AND BRANDED CONTENT.
        </p>
        <p className="text-[16px] text-center">
          DREAM MEDIA IS A FULL SERVICES PRODUCTION HOUSE{" "}
        </p>
        <p className="text-[20px] text-center absolute bottom-10">
          [CHECK OUT OUR WORK]
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
