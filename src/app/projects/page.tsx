"use client";
import React, { useEffect, useRef, useState } from "react";
import useTheme from "@hooks/useTheme";
import { easeIn, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { light } from "@constant/values";
import { useLanguage } from "@hooks/useLanguage";

import { useRouter } from "next/navigation";
import Button from "@component/button";
import CaseStudyArticle from "./ariticle";
import { CaseStudy } from "@lan/translation.interface";
const projectTitles: string[] = ["", "", "trucklog", "compass", "camh", "", ""]; //key of getting the articles
const titles = projectTitles.filter((t) => t !== "");

const TitleCard = ({
  text,
  order,
  current,

  onClick,
}: {
  text: string;
  order: number;

  current: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="w-full h-[20%] border-1 border-primary flex justify-start items-center pl-2 cursor-pointer snap-start snap-mandatory"
      onClick={onClick}
    >
      {text && (
        <motion.h1
          animate={{
            scale: order === current ? 1 : 0.7,
            left: order === current ? "2rem" : "0rem",
          }}
          className="text-primary text-[2rem] relative w-[90%]"
        >
          {text}
        </motion.h1>
      )}
    </div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const [cardHeight, setCardheight] = useState(0);
  const [currentArticle, setCurrentArticle] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollY, "change", (v) => {
    const scrollPosition = v / cardHeight;
    const difference = Math.abs(scrollPosition - Math.round(scrollPosition));

    if (difference < 0.05) {
      const titleIndex = Math.round(v / cardHeight);

      setCurrentArticle(titleIndex);
      if (titles[titleIndex]) {
        setCurrentTitle(titles[titleIndex]);
      }
    }
  });

  useEffect(() => {
    if (ref && ref.current) {
      setCardheight(ref.current.clientHeight * 0.2);
    }
  }, [ref]);

  const cardOnClick = (index: number): void => {
    if (ref && ref.current) {
      ref.current.scrollTo(0, index * cardHeight);
    }
  };

  function getCurrentArticle(title: string): CaseStudy {
    const transValue = lang[title] as CaseStudy;

    return transValue;
  }

  return (
    <div className="h-screen w-full flex  md:flex-row justify-evenly items-center overflow-hidden box-border pt-[90px] relative px-2">
      <motion.div
        className="hidden md:block w-full md:w-[35%] bg-bkg h-[20%] absolute top-[90px] left-0 p-2 box-border z-20"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeIn, delay: 0.3 }}
      >
        <h1 className=" text-text text-[4rem] lg:text-[6rem] font-extrabold bg-bkg ">
          {lang.projects}
        </h1>
      </motion.div>
      <motion.div
        className="h-full w-[35%]  relative hidden md:block "
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeIn }}
      >
        <div className="absolute w-[97%] h-[20%] left-0 right-0 top-[40%] border-2 border-primary rounded-[50px] box-border p-2">
          <h2 className="absolute -top-6 left-10 text-primary font-bold text-lg">
            {lang.control.nowReading}
          </h2>
        </div>
        <motion.div
          className="h-full w-full relative overflow-y-auto snap-y z-10"
          ref={ref}
        >
          {projectTitles.map((p, i) => {
            const value = lang[p];
            let title = "";
            if (typeof value === "object" && "title" in value) {
              title = value.title as string;
              title = title.substring(title.indexOf(":") + 1);
            }
            return (
              <TitleCard
                text={title}
                key={i}
                order={i}
                current={currentArticle + 2}
                onClick={() => {
                  if (p) {
                    cardOnClick(i - 2);
                    setCurrentTitle(p);
                  }
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className="h-full w-[100%] md:w-[65%] bg-bkg"
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeIn }}
      >
        <CaseStudyArticle
          article={getCurrentArticle(currentTitle)}
          lang={lang}
        />
      </motion.div>
      <p className="absolute bottom-1 left-2 text-[8px]">{lang.cr.disclaim}</p>
    </div>
  );
};

export default Projects;
