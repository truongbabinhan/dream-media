"use client";
import { useState } from "react";
import { Header, Footer } from "./components";
import {
  LoadingScreen,
  Banner,
  Work,
  ShowReel,
  WeProduce,
  Brand,
} from "./components/homepage";

export default function Home() {
  const [isShowHome, setIsShowHome] = useState(false);
  const [isChill, setIsChill] = useState(true);

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black">
      <Header setIsChill={setIsChill} isChill={isChill} />
      {isShowHome ? (
        <>
          <ShowReel isChill={isChill} />
          <Banner />
          <Work />
          <WeProduce />
          <Brand />
          <Footer />
        </>
      ) : (
        <LoadingScreen setIsShowHome={setIsShowHome} />
      )}
    </main>
  );
}
