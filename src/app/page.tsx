"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useWindowResize } from "@hooks/useWindowResize";
import HomePage from "@component/homePage";
import Purpose from "@component/mainContents/purpose";
import DataV from "@component/mainContents/data";
import HowToHelp from "@component/mainContents/help";
import Mobile from "@component/mainContents/mobile";
import Footer from "@component/footer";

export default function Home() {
  const { windowSize } = useWindowResize();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({ container: ref });

  const [scrollLocation, setScrollLocation] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollLocation(latest / windowSize.height);
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

  const toggleFullScreen = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current
        .requestFullscreen()
        .then(() => {
          "fullscreen";
        })
        .catch((e) => {
          console.log("error entering full screen mode", e);
        });
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (windowSize.width !== 0 && windowSize.width < 768 && ref && el) {
      el.addEventListener("scroll", () => {
        toggleFullScreen(ref);
      });
    }

    return () => {
      if (windowSize.width !== 0 && windowSize.width < 768) {
        if (ref && el && document) {
          document.exitFullscreen();
          el.removeEventListener("scroll", () => {
            toggleFullScreen(ref);
          });
        }
      }
    };
  }, [windowSize.width]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full md:snap-proximity md:snap-y overflow-y-auto scroll-smooth"
    >
      <HomePage scrollYProgress={scrollYProgress} />
      <Purpose
        isInView={
          windowSize.width < 768 ? true : Math.abs(scrollLocation - 1) < 0.1
        }
      />
      <DataV
        isInView={
          windowSize.width < 768 ? true : Math.abs(scrollLocation - 2) < 0.1
        }
      />
      <Mobile
        isInView={windowSize.width < 768 ? true : scrollLocation > 2.96}
        scrollYProgress={scrollYProgress}
      />
      <HowToHelp
        isInView={
          windowSize.width < 768
            ? true
            : scrollLocation === 4.5 || scrollLocation.toFixed(1) === "4.5"
        }
      />
      <Footer />
    </div>
  );
}
