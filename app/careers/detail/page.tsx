"use client";
import { Header, Footer } from "../../components";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const CareerDetail = () => {
  const [dataDetail, setDataDetail] = useState<any>();
  const searchParams = useSearchParams();
  const job = searchParams.get("job") || "";

  useEffect(() => {
    fetch("/data/data-career.json")
      .then((res) => res.json())
      .then((data) => {
        setDataDetail(data?.filter((item: any) => item.id === job)[0]);
      });
  }, [job]);

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black bg-homepage-dashboard bg-top bg-contain bg-no-repeat">
      <div className="w-full h-full backdrop-brightness-[0.1] absolute left-0 top-0 z-[1]"></div>
      <Header />
      <div className="max-sm:min-h-max w-full text-white flex flex-col pt-[120px] px-5 max-sm:px-[10px] max-sm:pt-[60px] relative z-[2] pb-20">
        <div className="max-lg:flex max-lg:justify-between max-lg:items-end max-lg:gap-2">
          <p
            className="text-center text-[30px] max-lg:text-[20px] max-lg:text-left max-lg:flex-1 uppercase"
            style={{ fontFamily: "Aeros" }}
          >
            {dataDetail?.title}
          </p>
          <div className="hidden max-lg:flex w-[100px] h-[30px] rounded-full bg-white border border-white transition-all justify-center items-center cursor-pointer hover:bg-black group">
            <p
              className="text-black text-[13px] font-bold group-hover:text-white transition-all"
              style={{ fontFamily: "Verdana" }}
            >
              APPLY NOW
            </p>
          </div>
        </div>

        <div className="w-[1024px] max-lg:w-full mt-[40px] max-lg:mt-[20px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 w-[240px] max-lg:w-[150px]">
            <img
              className="max-lg:w-[12px] max-lg:h-[24px]"
              src="/icon/money.svg"
            />
            <p
              className="font-bold max-lg:text-[10px]"
              style={{ fontFamily: "Verdana" }}
            >
              <span className="block font-normal">Salary:</span>
              {dataDetail?.salary}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="max-lg:w-[12px] max-lg:h-[24px]"
              src="/icon/clock.svg"
            />
            <p
              className="font-bold max-lg:text-[10px]"
              style={{ fontFamily: "Verdana" }}
            >
              <span className="block font-normal">Experience:</span>
              {dataDetail?.experience}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="max-lg:w-[16px] max-lg:h-[24px]"
              src="/icon/location.svg"
            />
            <p
              className="font-bold max-lg:text-[10px]"
              style={{ fontFamily: "Verdana" }}
            >
              <span className="block font-normal">Location:</span>
              {dataDetail?.location}
            </p>
          </div>
          <div className="max-lg:hidden w-[165px] h-[50px] rounded-full bg-white border border-white transition-all flex justify-center items-center cursor-pointer hover:bg-black group">
            <p
              className="text-black text-[20px] font-bold group-hover:text-white transition-all"
              style={{ fontFamily: "Verdana" }}
            >
              APPLY NOW
            </p>
          </div>
        </div>
        <div
          style={{ fontFamily: "Verdana" }}
          className="w-[1024px] max-lg:w-full mt-[40px] max-lg:mt-[20px] rounded-[40px] max-lg:rounded-[30px] mx-auto p-[40px] max-lg:p-[20px] bg-[linear-gradient(105deg,_color(display-p3_0.851_0.851_0.851_/_0.30)_15.93%,_color(display-p3_0.851_0.851_0.851_/_0.10)_94.84%)] backdrop-blur-sm"
        >
          <div className="flex flex-col gap-3 absolute left-[-80px] max-lg:left-auto max-lg:right-0 max-lg:bottom-[-60px] max-lg:flex-row">
            <img
              className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] cursor-pointer hover:opacity-50 transition-all"
              src="/icon/linkedin.svg"
            />
            <img
              className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] cursor-pointer hover:opacity-50 transition-all"
              src="/icon/facebook.svg"
            />
            <img
              className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] cursor-pointer hover:opacity-50 transition-all"
              src="/icon/link.svg"
            />
          </div>
          {dataDetail?.keyResponsibilities?.length !== 0 && (
            <>
              <p className="text-[25px] max-lg:text-[15px] mb-5 max-lg:mb-2">
                Key Responsibilities
              </p>
              <ul className="pl-5 mb-6 text-[14px] max-lg:text-[12px] max-lg:pl-3 max-lg:mb-3">
                {dataDetail?.keyResponsibilities?.map((item: any, id: any) => {
                  return (
                    <li className="list-disc mb-2" key={id}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {dataDetail?.jobRequirements?.length !== 0 && (
            <>
              <p className="text-[25px] max-lg:text-[15px] mb-5 max-lg:mb-2">
                Job Requirements
              </p>
              <ul className="pl-5 mb-6 text-[14px] max-lg:text-[12px] max-lg:pl-3 max-lg:mb-3">
                {dataDetail?.jobRequirements?.map((item: any, id: any) => {
                  return (
                    <li className="list-disc mb-2" key={id}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {dataDetail?.benefits?.length !== 0 && (
            <>
              <p className="text-[25px] max-lg:text-[15px] mb-5 max-lg:mb-2">
                Benefits
              </p>
              <ul className="pl-5 mb-6 text-[14px] max-lg:text-[12px] max-lg:pl-3 max-lg:mb-3">
                {dataDetail?.benefits?.map((item: any, id: any) => {
                  return (
                    <li className="list-disc mb-2" key={id}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {dataDetail?.additionalBenefits?.length !== 0 && (
            <>
              <p className="text-[25px] max-lg:text-[15px] mb-5 max-lg:mb-2">
                Additional Benefits
              </p>
              <ul className="pl-5 mb-6 text-[14px] max-lg:text-[12px] max-lg:pl-3 max-lg:mb-3">
                {dataDetail?.additionalBenefits?.map((item: any, id: any) => {
                  return (
                    <li className="list-disc mb-2" key={id}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="relative z-[2]">
        <Footer />
      </div>
    </main>
  );
};

export default CareerDetail;
