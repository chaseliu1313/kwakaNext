/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import {
  easeIn,
  easeInOut,
  motion,
  MotionValue,
  useAnimate,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import aniL from "@public/animation/kwaka_home_3_lt.json";
import aniD from "@public/animation/kwaka_home_3_dk.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useLanguage } from "@hooks/useLanguage";
import { transLabel } from "@lan/translation.interface";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";
import Button from "@component/button";
import androidL from "@public/image/android_l.svg";
import androidD from "@public/image/android_d.svg";
import iosL from "@public/image/iphone_l.svg";
import iosD from "@public/image/iphone_d.svg";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

import { useWindowResize } from "@hooks/useWindowResize";
import { darkBg, lightBg, darkBd, lightBd } from "@component/glassCard";
const androidPhoneRatio = 0.465;
const iosRatio = 0.5;
export default function Mobile({
  scrollYProgress,
  isInView,
}: {
  scrollYProgress: MotionValue<number>;
  isInView: boolean;
}) {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const { windowSize } = useWindowResize();
  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);
  const [scopeImg1, animateImg1] = useAnimate();
  const [scopeImg2, animateImg2] = useAnimate();
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());
  const [shouldReveal, setShouldReveal] = useState<boolean>(false);

  useEffect(() => {
    if (lottiref1 && lottiref1.current) {
      lottiref1.current.setSpeed(0.2);
    }
  }, [theme, lottiref1.current]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.6) {
      setShouldReveal(true);
    } else {
      if (isInView) {
        setShouldReveal(false);
      }
    }
  });

  function getAnimationX(imgId: number): string[] | number[] {
    if (imgId === 1) {
      if (breakpoint === "sm") {
        return ["10%"];
      }

      if (breakpoint === "md") {
        return [
          -windowSize.width * 0.5 * 0.15,
          windowSize.width * 0.5 -
            windowSize.height * 0.7 * androidPhoneRatio * 0.5,
        ];
      }

      if (breakpoint === "lg") {
        return [
          -windowSize.width * 0.5 * 0.3,
          -windowSize.height * androidPhoneRatio * 0.5,
        ];
      }
    }

    if (imgId === 2) {
      if (breakpoint === "sm") {
        return ["5%"];
      }

      if (breakpoint === "md") {
        return [
          -windowSize.width * 0.5 * 0.1,
          windowSize.width * 0.5 - (windowSize.height * 0.7 * iosRatio) / 2,
        ];
      }

      if (breakpoint === "lg") {
        return [-windowSize.width * 0.5 * 0.2, -windowSize.height * iosRatio];
      }
    }

    if (imgId === 3) {
      if (breakpoint === "sm") {
        return [];
      }

      if (breakpoint === "md") {
        return [
          windowSize.width * 0.5 * 0.05,
          windowSize.width * 0.5 - windowSize.width * 0.5 * 0.9 * 0.5,
        ];
      }

      if (breakpoint === "lg") {
        return [-windowSize.width * 0.2, -windowSize.width * 0.3];
      }
    }
    return [0];
  }

  function getPhoneContainerX(): number {
    //to calculate full screen x:

    if (windowSize.width < 768) {
      return -50;
    } else if (windowSize.width >= 768 && windowSize.width < 1024) {
      return -windowSize.width * 0.25;
    } else {
      const containerPadding =
        (windowSize.width - (windowSize.width * 0.5 + 500)) / 3;
      const containerInnerWidth = windowSize.width - containerPadding * 2;
      const travelX = containerInnerWidth / 2 - 250; //250 is the half width of the phone container
      return -travelX;
    }
  }

  function getPhoneContainerY(): number {
    if (windowSize.width < 768) {
      return 150;
    } else {
      return 450;
    }
  }

  useEffect(() => {
    if (shouldReveal) {
      animateImg1(
        scopeImg1.current,
        {
          rotate: "25deg",
          y: -40,
        },
        { duration: 1.5, ease: easeInOut }
      );
      animateImg2(
        scopeImg2.current,
        {
          x: -50,
          y: -40,
          rotate: "-25deg",
        },
        { duration: 1.5, ease: easeInOut }
      );
    } else {
      animateImg1(scopeImg1.current, { rotate: 0, y: 0 });
      animateImg2(scopeImg2.current, { x: 0, y: 0, rotate: 0 });
    }
  }, [shouldReveal]);

  function getBreakpoint(): string {
    if (windowSize.width < 768) {
      return "sm";
    } else if (windowSize.width < 1024 && windowSize.width >= 768) {
      return "md";
    } else {
      return "lg";
    }
  }

  useEffect(() => {
    if (windowSize.width < 768) {
      setBreakpoint("sm");
      return;
    } else if (windowSize.width < 1024 && windowSize.width >= 768) {
      setBreakpoint("md");
      return;
    } else {
      setBreakpoint("lg");
      return;
    }
  }, [windowSize]);

  const textContainerX = useTransform(scrollYProgress, [0.547, 0.6], [0, -900]);
  const textContainerOpc = useTransform(scrollYProgress, [0.547, 0.6], [1, 0]);

  const phoneContainerX = useTransform(
    scrollYProgress,
    [0.547, 0.6],
    [0, getPhoneContainerX()]
  );

  const phoneContainerY = useTransform(
    scrollYProgress,
    [0.547, 0.6],
    [0, getPhoneContainerY()]
  );

  return (
    <motion.section
      id="mobileDevelopment"
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="h-[150vh] w-full box-border pt-[80px] flex flex-col md:flex-row justify-evenly items-start  bg-bkg relative snap-start "
    >
      <motion.div
        className={`h-[35%] w-full  md:w-[50%] lg:h-[50%] lg:w-[50%] flex flex-col justify-start items-center text-center md:text-left pt-5 md:pt-[25%] lg:pt-5 z-1 [z-index:1] mt-[5%] md:ml-5`}
        style={{ x: textContainerX, opacity: textContainerOpc }}
      >
        <motion.h1
          className={`text-text text-xl md:text-3xl lg:w-full mt-[3rem] md:mt-0 ${
            lang.trans_label === transLabel.fr ? "lg:text-4xl" : "lg:text-6xl"
          } font-extrabold leading-loose selection:bg-accent `}
          animate={isRevealed ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
        >
          {lang.mobile.map((l, i) => {
            if (i > 0) {
              return (
                <span
                  className={`${i === 1 ? "text-primary" : "text-success"}`}
                  key={l}
                >
                  {l}
                </span>
              );
            } else {
              return l;
            }
          })}
        </motion.h1>
        <div className="w-full flex justify-center items-center md:inline-block z-1">
          <motion.p
            className={`text:xl md:text:2xl w-[95%] md:w-[95%]  ${
              lang.trans_label === transLabel.fr ? "lg:text-3xl" : "lg:text-4xl"
            } text-text leading-normal selection:bg-accent font-light mt-4`}
            animate={isRevealed ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
          >
            {lang.mobileDetails}
          </motion.p>
        </div>
        <motion.div
          className="h-full w-[90%] pb-2 md:pb-0 md:h-[60%] md:w-full flex md:flex-row justify-evenly items-end lg:items-start md:pt-[20%]"
          animate={
            isRevealed && breakpoint !== "sm"
              ? { y: breakpoint === "lg" ? "5%" : "50%" }
              : { y: 0 }
          }
        >
          <Button
            label={lang.control.back}
            styles="w-[50px]"
            size="sm"
            useLink
            link="#dataVisualization"
            onClick={() => {}}
            icon={
              <HiOutlineChevronDown className="h-5 w-5 text-accent rotate-180" />
            }
          />

          <Button
            label={lang.control.continue}
            styles="w-[50px]"
            useLink
            link="#howToHelp"
            size="sm"
            onClick={() => {}}
            icon={<HiOutlineChevronDown className="h-5 w-5 text-accent" />}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={`flex flex-row md:flex-col justify-end h-full w-full lg:w-[500px] md:h-[70%] md:w-[50%] relative pt-[4.5rem] md:pt-0`}
        style={{
          x: phoneContainerX,
          y: phoneContainerY,
        }}
      >
        <div
          className="h-full w-full relative"
          style={{ perspective: 3000, perspectiveOrigin: "top" }}
        >
          <Image
            ref={scopeImg1}
            src={theme === light ? androidL : androidD}
            alt="android phone"
            className="h-[80%] w-[auto] absolute left-[15%] md:left-[15%] lg:left-[30%] md:bottom-[15%]"
          />
          <Image
            ref={scopeImg2}
            className="h-[80%] w-[auto] absolute md:left-[10%] left-[20%] md:bottom-[10%] lg:left-[20%]"
            src={theme === light ? iosL : iosD}
            alt="iPhone"
          />
          <motion.div
            className={`h-[80%] min-w-[250px] w-auto aspect-[9/19] absolute bg-bkg rounded-[50px] left-[25%] md:left-[5%] lg:left-[10%] md:bottom-[5%] lg:bottom-[7%] flex flex-col justify-start rotate-3 md:rotate-0 items-center p-2 z-0 [perspective: 400px]  ${
              theme === light ? "shadow-light" : "shadow-dark"
            }`}
            animate={{ rotateX: shouldReveal ? "45deg" : "0deg" }}
            transition={{ duration: 1, ease: easeIn }}
          >
            <div className="h-[60%] w-[95%] bg-white rounded-[50px]">
              <Lottie
                animationData={theme === light ? aniL : aniD}
                className="h-full w-full"
                lottieRef={lottiref1}
              />
            </div>

            <motion.h5
              className="text-text text-sm pt-10 text-center"
              animate={shouldReveal ? { rotateX: 90 } : { rotateX: 0 }}
              transition={{ duration: 1 }}
            >
              {lang.mobileExtra}
            </motion.h5>
            <motion.h5
              className="text-text text-sm lg:text-base pt-10  text-center"
              animate={shouldReveal ? { rotateX: 0 } : { rotateX: 90 }}
              transition={{ duration: 1 }}
            >
              {lang.crossPDetails}
            </motion.h5>
            <div className="h-[15%] w-full flex justify-evenly items-center px-5">
              <IoPlaySkipBack className="fill-primary" />
              <IoPlay className="fill-primary" />
              <IoPlaySkipForward className="fill-primary" />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="h-[15%] w-[50%] rounded-2xl absolute top-[10%] left-[25%] bg-bkg flex justify-center items-center"
          animate={{
            opacity: shouldReveal ? [0.5, 1] : 0,
            y: shouldReveal ? 0 : 100,
            x: shouldReveal && windowSize.width < 768 ? 50 : 20,
          }}
          transition={{ duration: 1, ease: easeInOut }}
          style={{
            //background: theme === "dark" ? darkBg : lightBg,
            boxShadow: "0 4px 22px 0 rgba( 31, 38, 135, 0.37 )",
            border:
              theme === "dark" ? `1px solid ${darkBd}` : `1px solid ${lightBd}`,
          }}
        >
          <h5 className="text-primary text-md lg:text-base text-center font-bold">
            {lang.crossP.map((l, i) => {
              if (i > 0) {
                return (
                  <span className="text-primary" key={l}>
                    {l}
                  </span>
                );
              } else {
                return l;
              }
            })}
          </h5>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
