"use client";
import { useEffect, useRef, UIEvent, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import HomePage from "@component/homePage";
import Purpose from "@component/mainContents/purpose";
import DataV from "@component/mainContents/data";
import HowToHelp from "@component/mainContents/help";
import Mobile from "@component/mainContents/mobile";
import Footer from "@component/footer";
const innerH = window.innerHeight;

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({ container: ref });
  const [scrolledY, setScrollY] = useState(0);
  const [scrollLocation, setScrollLocation] = useState(0);
  const elHeight = ref.current?.scrollHeight ?? 0;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest);
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollLocation(latest / innerH);
  });

  useEffect(() => {
    if (scrollLocation === 0) {
      window.history.replaceState(null, "", "/");
    } else if (scrollLocation === 1) {
      window.history.replaceState(null, "", "#purpose");
    } else if (scrollLocation === 2) {
      window.history.replaceState(null, "", "#dataVisualization");
    } else if (scrollLocation === 3) {
      window.history.replaceState(null, "", "#mobileDevelopment");
    } else if (scrollLocation === 4.5 || scrollLocation.toFixed(1) === "4.5") {
      window.history.replaceState(null, "", "#howToHelp");
    } else if (scrollLocation === 5.5) {
      window.history.replaceState(null, "", "#footer");
    }
  }, [scrollLocation]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full snap-proximity snap-y overflow-y-auto scroll-smooth"
    >
      <HomePage scrollYProgress={scrollYProgress} />
      <Purpose isInView={Math.abs(scrollLocation - 1) < 0.1} />
      <DataV isInView={Math.abs(scrollLocation - 2) < 0.1} />
      <Mobile isInView={true} scrollYProgress={scrollYProgress} />
      <HowToHelp
        isInView={scrollLocation === 4.5 || scrollLocation.toFixed(1) === "4.5"}
      />
      <Footer />
    </div>
  );
}
