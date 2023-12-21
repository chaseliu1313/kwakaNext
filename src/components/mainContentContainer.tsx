"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";

import ContentContainer from "./contentContainer";

const content = [1, 2, 3, 4];
const scrollDownThreshold = 0.05;
const scrollUpThreshold = 0.8;

const MainContentContainer = ({
  height,
  returnToFirstPage,
}: {
  height: number;
  returnToFirstPage: () => void;
}) => {
  const [currentSection, setCurrentSection] = useState<number>(0);

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
        setCurrentSection(targetSection);
        return;
      } else {
        window.scrollTo(0, height * (targetSection - 1));
        setCurrentSection(targetSection - 1);
        return;
      }
    }

    if (direction === -1) {
      if (scrollY === 0) return;

      const targetSection = Math.floor(scrollY / height);
      const distance = (scrollY % height) / height;

      if (distance <= scrollUpThreshold) {
        window.scrollTo(0, height * targetSection);
        setCurrentSection(targetSection);
        return;
      } else {
        window.scrollTo(0, height * (targetSection + 1));
        setCurrentSection(targetSection + 1);
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
    if (currentSection < content.length - 1) {
      window.scrollTo(0, (currentSection + 1) * height);
      setCurrentSection(currentSection + 1);
      return;
    }
  };

  return (
    <motion.div
      className="h-full w-full  bg-bkg relative"
      initial={{ y: height, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 1.5 }}
      exit={{ opacity: 0 }}
      onWheel={(e) => {
        if (e.deltaY > 0) {
          snapToEl(1, window.scrollY);
        } else {
          snapToEl(-1, window.scrollY);
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
