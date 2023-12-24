"use client";
import { useEffect, useRef, useState } from "react";
import { firstTimerKey, light } from "@constant/values";
import { useLanguage } from "@hooks/useLanguage";
import useTheme from "@hooks/useTheme";
import { useWindowResize } from "@hooks/useWindowResize";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import home1lt from "@public/animation/kwaka_home_1_lt.json";
import home1dk from "@public/animation/kwaka_home_1_dk.json";
import key from "@public/image/iconwkey.png";
import keyBase from "@public/image/keywoface.png";
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
import MainContentContainer from "@component/mainContentContainer";

const ripples = [1, 2, 3];
const ripplesTWClass =
  "h-[283.2px] w-[291.6px] md:h-[377.6px] md:w-[388.8px] lg:h-[472px] lg:w-[486px] absolute top-50 left-50  rounded-[60px] shadow-inset bg-bkg";
const keyboarTWClass =
  "h-[283.2px] w-[291.6px] md:h-[377.6px] md:w-[388.8px] lg:h-[472px] lg:w-[486px] absolute top-50 left-50";
export default function Home() {
  const { windowSize } = useWindowResize();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const height = windowSize.height;
  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);
  const [firstTimer, setFirstTimer] = useState<boolean>(true);
  const [enterMain, setEnterMain] = useState<boolean>(false);
  const [enterContent, setEnterContent] = useState<boolean>(false);
  const [isLandScapeMobile, setLandscapeMobile] = useState<boolean>(false);

  useEffect(() => {
    if (lottiref1 && lottiref1.current) {
      lottiref1.current.setSpeed(0.5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, lottiref1.current]);

  useEffect(() => {
    const isfirstTimer = localStorage.getItem(firstTimerKey);

    if (!isfirstTimer) {
      setFirstTimer(true);
    }

    if (isfirstTimer) {
      if (isfirstTimer === "false") {
        setFirstTimer(false);
        setEnterMain(true);
      } else {
        setFirstTimer(true);
      }
    }
  }, []);

  useEffect(() => {
    if (
      screen.orientation.type.includes("landscape") &&
      /Android|iPhone/i.test(navigator.userAgent)
    ) {
      setLandscapeMobile(true);
    }
  }, [windowSize]);

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

  function returnToFirstpage() {
    setEnterMain(true);
    setEnterContent(false);
  }

  return (
    <main
      className={`w-full bg-bkg relative`}
      style={{ height: isLandScapeMobile ? height * 2 : height }}
    >
      <div className="h-full w-full relative flex items-center justify-center box-border pt-[80px]">
        {firstTimer === true && (
          <motion.div
            className={`h-full w-full relative flex justify-center items-center flex-col`}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: height, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            onAnimationComplete={() => {
              localStorage.setItem(firstTimerKey, "false");
              setEnterMain(true);
              setFirstTimer(false);
            }}
          >
            {ripples.map((r, i) => (
              <motion.div
                key={r}
                className={ripplesTWClass}
                initial={{ opacity: 0 }}
                animate={{
                  scale: [1, 1.8, 1.6],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.7 + i * 0.2,
                }}
              ></motion.div>
            ))}

            <motion.div
              className={keyboarTWClass}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Image
                src={keyBase}
                alt="key base"
                className="absolute top-0 left-0 h-[283.2px] w-[291.6px] md:h-[377.6px] md:w-[388.8px] lg:h-[472px] lg:w-[486px]"
              />
              <motion.img
                src={key.src}
                alt="key"
                initial={{ opacity: 0 }}
                animate={{ y: [0, 20, 0], opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute  top-[-6px] left-[6px] h-[270.8px]  w-[280px] md:h-[auto] md:w-[379.2px] lg:h-[448px] lg:w-[474px]"
              />
            </motion.div>
            <motion.h1
              className="font-bold text-[2rem] lg:text-[3rem] text-text selection:bg-accent absolute bottom-[25%] lg:bottom-[17%] text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {lang.landingName}
            </motion.h1>
            <motion.h1
              className="font-bold text-[2rem] lg:text-[3rem] text-text selection:bg-accent absolute bottom-[15%] lg:bottom-[10%] text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {lang.landing2}
            </motion.h1>
          </motion.div>
        )}

        <AnimatePresence>
          {enterMain && (
            <>
              <motion.h1
                key="heading"
                className="text-primary text-[5rem] pb-5 md:text-[8rem] lg:text-[9rem] font-extrabold self-start lg:-mt-5 relative"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: -height,
                  transition: { delay: 0, duration: 0.2, ease: "easeInOut" },
                }}
                transition={{
                  ease: "easeIn",
                  duration: 0.8,
                  delay: firstTimer ? 1.6 : 0,
                }}
              >
                {lang.better}
              </motion.h1>

              <motion.div
                className={`h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] absolute top-60   `}
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
              <motion.div
                className={`h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] rounded-[50px] absolute top-60 left-50 ${
                  theme === light ? "shadow-light" : ""
                }`}
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
                  delay: firstTimer ? 1.6 : 0,
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-[50%] min-w-[50%]"
                  animate={getPuzzleAnimation(lang.buildExperience[0])}
                  transition={{ ease: easeInOut, duration: 0.5, delay: 1 }}
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
                className="absolute bottom-1 left-50"
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
                  delay: firstTimer ? 2 : 0.6,
                }}
              >
                <Button
                  label="continue"
                  styles=" "
                  size="sm"
                  onClick={() => {
                    setEnterMain(false);
                    setEnterContent(true);
                  }}
                  icon={
                    <HiOutlineChevronDown className="h-5 w-5 text-accent" />
                  }
                />
              </motion.div>
              <p className="absolute bottom-0 left-2 text-[8px] font-light text-text">
                {lang.cr.disclaim}
              </p>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {enterContent && (
            <MainContentContainer
              height={height}
              returnToFirstPage={() => {
                returnToFirstpage();
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
