import Image from "next/image";

export const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-col relative justify-center gap-[100px] items-center">
      <Image
        src="/logo-home.svg"
        alt="Logo"
        width={753}
        height={134}
        priority
      />
      <p className="w-[617px] text-[10px] text-center">
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
  );
};

export default Dashboard;
