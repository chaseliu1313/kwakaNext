"use client";
import React, { useEffect, useRef, useState } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import ContentContainer from "./contentContainer";

const content = [1, 2, 3, 4];
const scrollDownThreshold = 0.05;
const scrollUpThreshold = 0.8;
const firefoxAgent = "Firefox";

const MainContentContainer = ({
  height,
  returnToFirstPage,
}: {
  height: number;
  returnToFirstPage: () => void;
}) => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isFirefox, setFirefox] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.includes(firefoxAgent)) {
      setFirefox(true);
    }
    return () => {
      setFirefox(false);
    };
  }, []);
  function snapToEl(direction: 1 | -1, scrollY: number) {
    if (direction === 1) {
      //scroll down

      if (scrollY / height === content.length - 1) {
        return;
        //last container
      }
      const targetSection = Math.floor(scrollY / height) + 1;
      const distance = (scrollY % height) / height;

      if (distance > scrollDownThreshold) {
        window.scrollTo(0, height * targetSection);

        return;
      } else {
        window.scrollTo(0, height * (targetSection - 1));

        return;
      }
    }

    if (direction === -1) {
      if (scrollY === 0) return;

      const targetSection = Math.floor(scrollY / height);
      const distance = (scrollY % height) / height;

      if (distance <= scrollUpThreshold) {
        window.scrollTo(0, height * targetSection);

        return;
      } else {
        window.scrollTo(0, height * (targetSection + 1));

        return;
      }
    }

    //scroll up
  }

  const goBack = (): void => {
    if (currentSection === 0) {
      returnToFirstPage();
    } else {
      window.scrollTo(0, (currentSection - 1) * height);
      setCurrentSection(currentSection - 1);
    }
  };

  const goForward = (): void => {
    console.log({ currentSection });
    if (currentSection < content.length - 1) {
      console.log("scroll");
      window.scrollTo(0, (currentSection + 1) * height);
      setCurrentSection(currentSection + 1);
      return;
    }
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollY, "change", (v) => {
    // const scrollPosition = v / height;
    // const difference = Math.abs(scrollPosition - Math.round(scrollPosition));

    // // if (difference < 0.05) {
    // //   const titleIndex = Math.round(v / cardHeight);

    // //   setCurrentArticle(titleIndex);
    // //   if (titles[titleIndex]) {
    // //     setCurrentTitle(titles[titleIndex]);
    // //   }
    // // }
    window.scrollTo(0, Math.round(v / height) * height);
    setCurrentSection(Math.round(v / height));
  });

  return (
    <motion.div
      className="h-full w-full bg-bkg relative snap-y overflow-y-auto"
      initial={{ y: height, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 1.5 }}
      exit={{ opacity: 0 }}
      ref={ref}
      onWheel={(e) => {
        if (isFirefox) {
          if (e.deltaY > 0) {
            snapToEl(1, window.scrollY);
          } else {
            snapToEl(-1, window.scrollY);
          }
        }
      }}
    >
      {content.map((c, i) => (
        <ContentContainer
          id={c}
          goForward={goForward}
          currentSection={currentSection}
          returnToFirstPage={returnToFirstPage}
          goBack={goBack}
          key={i}
        />
      ))}
    </motion.div>
  );
};

export default MainContentContainer;
