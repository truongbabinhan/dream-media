import { Tag } from ".";
import { useRouter } from "next/navigation";

export const Card = ({ data }: any) => {
  const router = useRouter();

  const goToCareerDetail = (id: any) => {
    if (id !== "") {
      return router.push(`/careers/detail?job=${id}`, { scroll: true });
    }
    return null;
  };

  return (
    <div
      onClick={() => goToCareerDetail(data?.id)}
      style={{
        backgroundImage: `linear-gradient(150deg, rgba(255, 255, 255, 0.40) 0.06%, rgba(153, 153, 153, 0.05) 96.57%)`,
      }}
      className="relative w-[330px] h-[350px] max-sm:w-[calc(50%-8px)] max-sm:h-[218px] max-sm:max-w-[200px] rounded-[30px] max-sm:rounded-[25px] p-7 max-sm:p-4 overflow-hidden hover:border-white border-2 border-black backdrop-blur-sm cursor-pointer transition-all duration-500"
    >
      <img
        className="w-full h-full absolute left-0 top-0"
        src={`/background/${data?.color}.png`}
      />
      <div className="flex flex-col relative z-10 w-full h-full">
        <div>
          <div className="bg-white rounded-full py-[2px] px-[10px] max-sm:px-[6px] inline-block">
            <p
              style={{ fontFamily: "Verdana" }}
              className="text-black max-sm:text-[10px]"
            >
              OPEN APPLICATION
            </p>
          </div>
        </div>
        <div className="flex-1 pt-4 max-sm:pt-2">
          <p
            style={{ fontFamily: "Verdana", lineHeight: 1.3 }}
            className="text-[27px] max-sm:text-[15px]"
          >
            {data?.title}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 max-sm:gap-1">
          {data?.tag?.map((item: any, id: any) => {
            return <Tag key={id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
