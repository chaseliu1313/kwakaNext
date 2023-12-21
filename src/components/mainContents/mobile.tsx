/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import { light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import { easeInOut, motion, useAnimate, useInView } from "framer-motion";
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
import { GiEasterEgg } from "react-icons/gi";
import { MainContentProps } from "./purpose";

import { useWindowResize } from "@hooks/useWindowResize";
const androidPhoneRatio = 0.465;
const iosRatio = 0.5;
export default function Mobile(props: MainContentProps) {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const { windowSize } = useWindowResize();
  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);
  const isInView = props.currentSection === 2;
  const [scopeImg1, animateImg1] = useAnimate();
  const [scopeImg2, animateImg2] = useAnimate();
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [breakpoint, setBreakpoint] = useState("lg");
  useEffect(() => {
    if (lottiref1 && lottiref1.current) {
      lottiref1.current.setSpeed(0.2);
    }
  }, [theme, lottiref1.current]);

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
          windowSize.width * 0.5 -
            windowSize.height * 0.7 * androidPhoneRatio * 0.5,
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
        return [
          -windowSize.width * 0.5 * 0.2,
          windowSize.width * 0.5 - windowSize.height * 0.9 * iosRatio,
        ];
      }
    }

    if (imgId === 3) {
      if (breakpoint === "sm") {
        return [];
      }

      if (breakpoint === "md") {
        return [
          -windowSize.width * 0.5 * 0.05,
          windowSize.width * 0.5 - windowSize.width * 0.5 * 0.9 * 0.5,
        ];
      }

      if (breakpoint === "lg") {
        return [
          -windowSize.width * 0.5 * 0.1,
          windowSize.width * 0.5 - windowSize.width * 0.1,
        ];
      }
    }
    return [0];
  }

  useEffect(() => {
    if (isRevealed) {
      animateImg1(
        scopeImg1.current,
        {
          x: getAnimationX(1),
          y: breakpoint === "sm" ? ["2%"] : ["15%"],
          rotate: "25deg",
        },
        { duration: 1.5, ease: easeInOut }
      );
      animateImg2(
        scopeImg2.current,
        {
          x: getAnimationX(2),
          y: breakpoint === "sm" ? ["2%"] : ["10%"],
          rotate: "-25deg",
        },
        { duration: 1.5, ease: easeInOut }
      );
    } else {
      animateImg1(scopeImg1.current, { x: 0, y: 0, rotate: 0 });
      animateImg2(scopeImg2.current, { x: 0, y: 0, rotate: 0 });
    }
  }, [isRevealed]);

  useEffect(() => {
    if (windowSize.width < 768 && breakpoint !== "sm") {
      setBreakpoint("sm");
    } else if (
      windowSize.width < 1024 &&
      windowSize.width >= 768 &&
      breakpoint !== "md"
    ) {
      setBreakpoint("md");
    } else {
      if (breakpoint !== "lg") setBreakpoint("lg");
    }
  }, [windowSize]);

  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.9,
      }}
      transition={{ duration: 0.3 }}
      className="h-full w-full flex flex-col md:flex-row justify-evenly items-center overflow-hidden bg-bkg relative"
    >
      <motion.h1
        className={`text-text text-xl md:text-3xl absolute top-2 left-1/5 ${
          lang.trans_label === transLabel.fr ? "lg:text-4xl" : "lg:text-6xl"
        } font-extrabold leading-loose selection:bg-accent`}
        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      >
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
      </motion.h1>
      <div
        className={`flex flex-row md:flex-col justify-end h-[65%] w-full md:h-[70%] md:w-[50%] relative pt-[4.5rem] md:pt-0 `}
      >
        <Image
          ref={scopeImg1}
          src={theme === light ? androidL : androidD}
          alt="android phone"
          className="h-full w-[auto] absolute left-[15%] -rotate-6 md:rotate-0 md:left-[15%] lg:left-[30%] md:bottom-[15%]"
        />
        <Image
          ref={scopeImg2}
          className="h-full w-[auto]  absolute  md:left-[10%] left-[20%] md:bottom-[10%] lg:left-[20%]"
          src={theme === light ? iosL : iosD}
          alt="android phone"
        />
        <motion.div
          className={`h-full min-w-[250px] w-[60%] md:w-[90%] lg:w-[40%] absolute bg-bkg rounded-[50px] left-[25%] md:left-[5%] lg:left-[10%] md:bottom-[5%] flex flex-col justify-start rotate-3 md:rotate-0 items-center p-2 z-0 ${
            theme === light ? "shadow-light" : "shadow-dark"
          }`}
          animate={
            isRevealed
              ? {
                  x: getAnimationX(3),
                  y: breakpoint === "sm" ? ["2%"] : ["5%"],
                }
              : { x: [0], y: 0 }
          }
          transition={{
            duration: 1,
            ease: easeInOut,
          }}
        >
          <div className="h-[60%] w-[95%] bg-white rounded-[50px]">
            <Lottie
              animationData={theme === light ? aniL : aniD}
              className="h-full w-full"
              lottieRef={lottiref1}
            />
          </div>
          <motion.h5
            className="text-text text-sm pt-10 [perspective:200px] text-center"
            animate={isRevealed ? { rotateX: 90 } : { rotateX: 0 }}
            transition={{ duration: 1 }}
          >
            {lang.mobileExtra}
          </motion.h5>
          <motion.h5
            className="text-text text-sm lg:text-base pt-10 [perspective:400px] text-center"
            animate={isRevealed ? { rotateX: 0 } : { rotateX: 90 }}
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
      <div
        className={`h-[35%] w-full md:h-[70%] md:w-[50%] lg:h-[80%] lg:w-[50%] flex flex-col justify-start items-center text-center md:text-left pt-5 md:pt-0 z-1 [z-index:1]`}
      >
        <motion.h1
          className={`text-text text-xl md:text-3xl lg:w-full mt-10 md:mt-0 ${
            lang.trans_label === transLabel.fr ? "lg:text-4xl" : "lg:text-6xl"
          } font-extrabold leading-loose selection:bg-accent `}
          animate={isRevealed ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
        >
          {lang.mobile.map((l, i) => {
            if (i > 0) {
              return (
                <span
                  className={`${i === 1 ? "text-warning" : "text-success"}`}
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
            className={`text:xl md:text:2xl w-[70%] md:w-[95%]  ${
              lang.trans_label === transLabel.fr ? "lg:text-3xl" : "lg:text-4xl"
            } text-text leading-normal selection:bg-accent font-light mt-4`}
            animate={isRevealed ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
          >
            {lang.mobileDetails}
          </motion.p>
        </div>
        <motion.div
          className="h-full w-[90%] pb-2 md:pb-0 md:h-[60%] md:w-full flex md:flex-row justify-evenly items-end md:pt-[20%]"
          animate={
            isRevealed && breakpoint !== "sm"
              ? { y: breakpoint === "lg" ? "5%" : "50%" }
              : { y: 0 }
          }
        >
          <Button
            label={lang.control.back}
            styles="  w-[50px]"
            size="sm"
            onClick={props.goBack}
            icon={
              <HiOutlineChevronDown className="h-5 w-5 text-accent rotate-180" />
            }
          />
          <Button
            label={lang.control.magic}
            styles=" w-[50px]"
            size="sm"
            onClick={() => {
              setIsRevealed(!isRevealed);
            }}
            icon={
              <GiEasterEgg className="absolute -right-[20px]  text-accent  h-[auto] w-[50px] top-0" />
            }
          />
          <Button
            label={lang.control.continue}
            styles="  w-[50px]"
            size="sm"
            onClick={props.goForward}
            icon={<HiOutlineChevronDown className="h-5 w-5 text-accent" />}
          />
        </motion.div>
      </div>
      <p className="absolute bottom-0 left-2 text-[8px] font-light">
        {lang.cr.disclaim}
      </p>
    </motion.div>
  );
}
