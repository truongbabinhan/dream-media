"use client";
import { Header, Footer } from "../components";
import { Card } from "../components/careers";
import { useEffect, useState } from "react";

const Careers = () => {
  const [listCareer, setListCareer] = useState([]);

  useEffect(() => {
    fetch("/data/data-career.json")
      .then((res) => res.json())
      .then((data) => {
        setListCareer(data);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black bg-homepage-dashboard bg-top bg-contain bg-no-repeat">
      <div className="w-full h-full backdrop-brightness-[0.1] absolute left-0 top-0 z-[1]"></div>
      <Header />
      <div className="max-sm:min-h-max w-full text-white flex flex-col pt-[100px] px-5 max-sm:px-[10px] max-sm:pt-[50px] relative z-[2] pb-20">
        <p
          style={{ lineHeight: 1, fontFamily: "Aeros" }}
          className="text-[50px] relative left-[-2px] max-sm:text-[20px] max-sm:left-0"
        >
          FIND YOUR
        </p>
        <p
          style={{ lineHeight: 1, fontFamily: "Aeros" }}
          className="text-[80px] py-3 relative left-[-5px] max-sm:text-[30px] max-sm:left-[-2px] max-sm:py-2"
        >
          DREAM JOB
        </p>
        <p
          style={{ lineHeight: 1.5, fontFamily: "Verdana" }}
          className="text-[28px] max-sm:text-[10px]"
        >
          Embark on a journey within our ever-expanding Dream and <br /> unlock
          a brand-new dimension of your career development.
        </p>
        <div className="flex flex-wrap gap-6 max-sm:gap-4 mt-16 max-sm:mt-8">
          {listCareer?.map((item: any) => {
            return <Card key={item?.id} data={item} />;
          })}
        </div>
      </div>
      <div className="relative z-[2]">
        <Footer />
      </div>
    </main>
  );
};

export default Careers;
