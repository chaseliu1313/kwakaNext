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
    <section className={`content-container h-[calc(100vh-80px)] w-full   `}>
      {props.id == 1 && (
        <Purpose
          goForward={props.goForward}
          currentSection={props.currentSection}
          goBack={props.goBack}
        />
      )}
      {props.id === 2 && (
        <DataV
          goForward={props.goForward}
          currentSection={props.currentSection}
          goBack={props.goBack}
        />
      )}
      {props.id === 3 && (
        <Mobile
          goForward={props.goForward}
          currentSection={props.currentSection}
          goBack={props.goBack}
        />
      )}
      {props.id === 4 && (
        <HowToHelp
          goForward={props.goForward}
          currentSection={props.currentSection}
          goBack={props.goBack}
          returnToFirstPage={props.returnToFirstPage}
        />
      )}
    </section>
  );
}
