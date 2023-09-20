"use client";
import { useState, useEffect } from "react";
import { Header, Footer } from "./components";
import { LoadingScreen, Dashboard, Work } from "./components/homepage";
// import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [isShowHome, setIsShowHome] = useState(false);

  useEffect(() => {
    const options = { passive: true };
    const scroll = (event: any) => {
      const { pageYOffset, scrollY, innerHeight } = window;
      console.log("🚀 ~ file: page.tsx:14 ~ scroll ~ window:", window);
      // setPercentScroll((pageYOffset / innerHeight) * 100);
    };
    document.addEventListener("scroll", scroll, options);
    () => document.removeEventListener("scroll", scroll, true);
  }, []);

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
    <main className="flex min-h-screen flex-col relative items-center justify-between bg-black">
      <Header />
      {isShowHome ? (
        <>
          <Dashboard />
          <Work />
          <Footer />
        </>
      ) : (
        <LoadingScreen setIsShowHome={setIsShowHome} />
      )}
    </main>
  );
}
