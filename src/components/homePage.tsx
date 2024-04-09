"use client";
import { useEffect, useRef, useState } from "react";
import { light } from "@constant/values";
import { useLanguage } from "@hooks/useLanguage";
import useTheme from "@hooks/useTheme";
import { useWindowResize } from "@hooks/useWindowResize";
import { easeInOut, motion, MotionValue, useTransform } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import home1lt from "@public/animation/kwaka_home_1_lt.json";
import home1dk from "@public/animation/kwaka_home_1_dk.json";
import avatarLt from "@public/animation/kwaka_avatar_lt.json";
import avatarDk from "@public/animation/kwaka_avatar_dk.json";
import Image from "next/image";
import puzzleBlD from "@public/image/puzzle-bl-d.png";
import puzzleBrD from "@public/image/puzzle-br-d.png";
import puzzleTlD from "@public/image/puzzle-tl-d.png";
import puzzleTrD from "@public/image/puzzle-tr-d.png";
import puzzleBlL from "@public/image/puzzle-bl-l.png";
import puzzleBrL from "@public/image/puzzle-br-l.png";
import puzzleTlL from "@public/image/puzzle-tl-l.png";
import puzzleTrL from "@public/image/puzzle-tr-l.png";

import { HiOutlineChevronDown } from "react-icons/hi";
import Button from "@component/button";
import { TypewriterEffect } from "./typewriterHeader";
import { GlassCard } from "./glassCard";
const ripples = [1, 2, 3];
const ripplesTWClass =
  "h-[283.2px] w-[291.6px] md:h-[377.6px] md:w-[388.8px] lg:h-[472px] lg:w-[486px] absolute top-50 left-50  rounded-[60px] shadow-inset bg-bkg";
const keyboarTWClass =
  "h-[283.2px] w-[291.6px] md:h-[377.6px] md:w-[388.8px] lg:h-[472px] lg:w-[486px] absolute top-50 left-50";

export default function HomePage({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const [isLandScapeMobile, setLandscapeMobile] = useState<boolean>(false);
  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);
  const lottireAvr = useRef<LottieRefCurrentProps | null>(null);
  const { windowSize } = useWindowResize();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLElement | null>(null);
  const height = windowSize.height;

  useEffect(() => {
    if (
      screen.orientation.type.includes("landscape") &&
      /Android|iPhone/i.test(navigator.userAgent)
    ) {
      setLandscapeMobile(true);
    }
  }, [windowSize]);

  useEffect(() => {
    if (lottiref1 && lottiref1.current) {
      lottiref1.current.setSpeed(0.5);
    }
    if (lottireAvr && lottireAvr.current) {
      lottireAvr.current.setSpeed(0.5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, lottiref1.current, lottireAvr.current]);

  function getPuzzleAnimation(key: string) {
    if (windowSize.width > 1024) {
      switch (key) {
        case lang.buildExperience[0]:
          return { x: -400, y: -20 };
        case lang.buildExperience[1]:
          return { x: 400, y: -20 };
        case lang.buildExperience[2]:
          return { x: -400, y: 20 };
        case lang.buildExperience[3]:
          return { x: 400, y: 20 };
        default:
          return { x: 0, y: 0 };
      }
    } else if (windowSize.width > 768 && windowSize.width <= 1024) {
      switch (key) {
        case lang.buildExperience[0]:
          return { x: -250, y: -25 };
        case lang.buildExperience[1]:
          return { x: 250, y: -25 };
        case lang.buildExperience[2]:
          return { x: -250, y: 25 };
        case lang.buildExperience[3]:
          return { x: 250, y: 25 };
        default:
          return { x: 0, y: 0 };
      }
    } else if (isLandScapeMobile) {
      switch (key) {
        case lang.buildExperience[0]:
          return { x: -200, y: -25 };
        case lang.buildExperience[1]:
          return { x: 200, y: -25 };
        case lang.buildExperience[2]:
          return { x: -200, y: 25 };
        case lang.buildExperience[3]:
          return { x: 200, y: 25 };
        default:
          return { x: 0, y: 0 };
      }
    } else {
      switch (key) {
        case lang.buildExperience[0]:
          return { x: -50, y: -75 };
        case lang.buildExperience[1]:
          return { x: 50, y: -75 };
        case lang.buildExperience[2]:
          return { x: -50, y: 75 };
        case lang.buildExperience[3]:
          return { x: 50, y: 75 };

        default:
          return { x: 0, y: 0 };
      }
    }
  }

  const textY = useTransform(scrollYProgress, [0, 0.08], [0, 400]);
  const puzzle1X = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[0]).x, 0]
  );
  const puzzle1Y = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[0]).y, 0]
  );
  const puzzle2X = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[1]).x, 0]
  );
  const puzzle2Y = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[1]).y, 0]
  );
  const puzzle3X = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[2]).x, 0]
  );
  const puzzle3Y = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[3]).y, 0]
  );
  const puzzle4X = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[3]).x, 0]
  );
  const puzzle4Y = useTransform(
    scrollYProgress,
    [0, 0.08],
    [getPuzzleAnimation(lang.buildExperience[3]).y, 0]
  );

  return (
    <section
      id="landing"
      ref={containerRef}
      className={`p-2 h-screen w-full box-border pt-[80px] bg-bkg relative flex justify-center items-center snap-start`}
    >
      <motion.div
        className="lg:pb-5 font-extrabold self-start absolute z-10 md:top-[15%] "
        style={{ y: textY }}
      >
        <TypewriterEffect
          words={[
            {
              text: lang.better,
              className:
                "text-[5rem] md:text-[8rem] lg:text-[8rem] leading-[10rem]  ",
            },
          ]}
        />
      </motion.div>

      <motion.div
        className={`h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[650px] lg:w-[650px] absolute md:top-40 z-0 top-[60%]`}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        animate={{ opacity: 1, scale: 1.2 }}
        initial={{ opacity: 0, scale: 0.8 }}
        exit={{
          opacity: 0,
          y: -height,
          transition: { delay: 0, duration: 1, ease: "easeInOut" },
        }}
        key="animationContainer"
      >
        <Lottie
          animationData={theme === light ? home1lt : home1dk}
          lottieRef={lottiref1}
          className="h-full w-full"
        />
      </motion.div>
      <GlassCard className="absolute left-50 h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] top-[25%] md:top-[20%] lg:top-[30%] flex flex-col justify-center items-center backdrop-blur-md rounded-[50px] text-center">
        <div className="h-[30%] w-[70%]">
          <Lottie
            animationData={theme === light ? avatarLt : avatarDk}
            lottieRef={lottireAvr}
            className="h-full w-full"
          />
        </div>
        <p>{lang.landing2}</p>
      </GlassCard>
      <motion.div
        className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] rounded-[50px] absolute top-60 left-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          opacity: 0,
          y: -height,
          transition: { delay: 0, duration: 1, ease: "easeInOut" },
        }}
        key="puzzlesContainer"
        transition={{
          ease: "easeIn",
          duration: 0.7,
          delay: 0,
        }}
      >
        <motion.div
          className="absolute top-0 left-0 h-[50%] min-w-[50%]"
          initial={{ x: 0, y: 0 }}
          animate={getPuzzleAnimation(lang.buildExperience[0])}
          transition={{ ease: easeInOut, duration: 0.5, delay: 1 }}
          style={{ x: puzzle1X, y: puzzle1Y }}
        >
          <Image
            className="h-[125px] w-[auto] md:h-[175px] lg:h-[250px] "
            src={theme === light ? puzzleTlL : puzzleTlD}
            alt="Puzzle 1"
            priority
          />
          <h2
            className={`${
              theme === light ? "text-bkg" : "text-text"
            } text-[1rem] font-semibold lg:text-[1.5rem] absolute top-[43%] left-[18%] md:left-[20%]  lg:top-[43%] lg:left-[25%]`}
          >
            {lang.buildExperience[0]}
          </h2>
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 w-[50%] min-h-[50%]"
          animate={getPuzzleAnimation(lang.buildExperience[1])}
          transition={{ ease: easeInOut, duration: 0.5, delay: 1 }}
          initial={{ x: 0, y: 0 }}
          style={{ x: puzzle2X, y: puzzle2Y }}
        >
          <Image
            className="w-[125px] h-[auto] md:w-[175px] lg:w-[250px] "
            src={theme === light ? puzzleTrL : puzzleTrD}
            alt="Puzzle 1"
          />
          <h2
            className={`${
              theme === light ? "text-bkg" : "text-text"
            } text-[1rem] font-semibold lg:text-[1.5rem] absolute top-[38%] left-[20%] md:left-[25%]  lg:top-[38%] lg:left-[30%]`}
          >
            {lang.buildExperience[1]}
          </h2>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-[50%] min-h-[50%]"
          animate={getPuzzleAnimation(lang.buildExperience[2])}
          transition={{ ease: easeInOut, duration: 0.5, delay: 1 }}
          initial={{ x: 0, y: 0 }}
          style={{ x: puzzle3X, y: puzzle3Y }}
        >
          <Image
            className="w-[125px] h-[auto] md:w-[175px] lg:w-[250px] "
            src={theme === light ? puzzleBlL : puzzleBlD}
            alt="Puzzle 1"
          />
          <h2
            className={`${
              theme === light ? "text-text" : "text-bkg"
            }  text-[1rem] font-semibold lg:text-[1.5rem] absolute top-[50%] left-[18%] md:left-[20%]  lg:top-[50%] lg:left-[30%]`}
          >
            {lang.buildExperience[2]}
          </h2>
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 h-[50%] min-w-[50%]"
          animate={getPuzzleAnimation(lang.buildExperience[3])}
          transition={{ ease: easeInOut, duration: 0.5, delay: 1 }}
          initial={{ x: 0, y: 0 }}
          style={{ x: puzzle4X, y: puzzle4Y }}
        >
          <Image
            className="h-[125px] w-[auto] md:h-[175px] lg:h-[250px]"
            src={theme === light ? puzzleBrL : puzzleBrD}
            alt="Puzzle 1"
          />
          <h2
            className={`${
              theme === light ? "text-text" : "text-bkg"
            } text-[1rem] font-semibold lg:text-[1.5rem] absolute top-[42%] left-[30%]  md:left-[35%]  lg:top-[42%] lg:left-[40%]`}
          >
            {lang.buildExperience[3]}
          </h2>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-5 left-50"
        key="buttonContainer"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          opacity: 0,
          y: -height,
          transition: { delay: 0, duration: 1, ease: "easeInOut" },
        }}
        transition={{
          ease: "easeIn",
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <Button
          label="continue"
          onClick={() => {}}
          useLink
          link="#purpose"
          size="sm"
          icon={<HiOutlineChevronDown className="h-5 w-5 text-accent" />}
        />
      </motion.div>
    </section>
  );
}
