"use client";
import { useState } from "react";
import Header from "./components/Header";
import { LoadingScreen, Dashboard } from "./components/homepage";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [isShowHome, setIsShowHome] = useState(false);

  //Lenis
  // const lenis = new Lenis({
  //   duration: 1.2,
  //   easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  //   direction: "vertical",
  //   smooth: true,
  //   smoothTouch: false,
  //   touchMultiplier: 2,
  // });

  // //get scroll value
  // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  //   console.log({ scroll, limit, velocity, direction, progress });
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  //End Lenis

  return (
    <main className="flex min-h-screen flex-col relative items-center justify-between">
      <Header />
      {isShowHome ? (
        <>
          <Dashboard />
          <Dashboard />
        </>
      ) : (
        <LoadingScreen setIsShowHome={setIsShowHome} />
      )}
    </main>
  );
}
