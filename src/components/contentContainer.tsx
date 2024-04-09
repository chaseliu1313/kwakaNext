"use client";
import { motion, useInView } from "framer-motion";
import React, { ReactElement, useRef } from "react";
import Purpose from "./mainContents/purpose";
import DataV from "./mainContents/data";
import Mobile from "./mainContents/mobile";
import HowToHelp from "./mainContents/help";
import { useLanguage } from "@hooks/useLanguage";

type Props = {
  id: number;
  currentSection: number;
  goForward: () => void;
  goBack: () => void;
  returnToFirstPage: () => void;
  className?: string;
};

export default function ContentContainer(props: Props) {
  return (
    <section
      className={`content-container h-[calc(100vh-80px)] w-full snap-start snap-mandatory  `}
    >
      {props.id == 1 && <Purpose />}
      {props.id === 2 && <DataV />}
      {props.id === 3 && <Mobile />}
      {props.id === 4 && <HowToHelp />}
    </section>
  );
}
