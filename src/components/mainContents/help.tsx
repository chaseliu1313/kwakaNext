"use client";
import { ReactElement, useRef, useState } from "react";
import { light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import { easeInOut, motion, useAnimate, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useLanguage } from "@hooks/useLanguage";
import { transLabel } from "@lan/translation.interface";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";
import Button from "@component/button";
import illu_l from "@public/illustrations/help_l.svg";
import illu_d from "@public/illustrations/help_d.svg";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

import { IoIosContact } from "react-icons/io";

import { MainContentProps } from "./purpose";
import { DiMysql } from "react-icons/di";
import { useWindowResize } from "@hooks/useWindowResize";
import { FaAngular, FaAws, FaLinux, FaReact, FaSwift } from "react-icons/fa";
import {
  SiAdobexd,
  SiAzuredevops,
  SiDart,
  SiGraphql,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { FaFigma, FaSketch, FaDev } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import {
  RiCustomerService2Fill,
  RiFlutterFill,
  RiRobot2Line,
  RiSeoLine,
} from "react-icons/ri";
const ServiceBox = ({
  shouldAnimate,
  title,
  index,
}: {
  shouldAnimate: boolean;
  title: string;
  index: number;
}): ReactElement => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className={` h-[150px] w-[150px] lg:w-[220px] lg:h-[220px] rounded-2xl text-center p-2 box-border bg-bkg flex justify-center items-center overflow-hidden flex-col mr-5 mt-5 relative z-1 before:contents-[''] before:absolute before:top-[100%] before:left-0 before:w-full before:h-full hover:before:transition-[top 1s ease-in-out] before:bg-accent before:rounded-2xl before:z-1 hover:before:top-0 before:duration-300 ${
        theme === light ? "shadow-light" : "shadow-dark"
      }`}
      animate={{
        opacity: shouldAnimate ? 1 : 0,
        scale: shouldAnimate ? 1 : 0.6,
        x: shouldAnimate ? 0 : -50,
      }}
      transition={{ delay: 0.2 * index, duration: 0.4 }}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
    >
      <h3
        className={`text-text text-sm lg:text-xl z-10 ${
          hovered ? "text-white" : "text-text"
        } `}
      >
        {title}
      </h3>
      <motion.div
        className={`flex justify-center items-center w-full h-[20%] text-[30px] lg:text-[50px] box-border pt-4 z-10 ${
          hovered ? "text-warning" : "text-accent"
        }`}
        animate={{ rotateY: hovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {index === 0 && (
          <>
            <SiAdobexd />
            <FaFigma />
            <FaSketch />
          </>
        )}
        {index === 1 && <FaDev />}
        {index === 2 && <GiAutoRepair />}
        {index === 3 && <RiSeoLine />}
        {index === 4 && <RiRobot2Line />}
        {index === 5 && <RiCustomerService2Fill />}
      </motion.div>
    </motion.div>
  );
};

const icon: ReactElement[] = [];

export default function HowToHelp(
  props: MainContentProps & { returnToFirstPage: () => void }
) {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const { windowSize } = useWindowResize();
  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);
  const isInView = true; //props.currentSection === 3;
  const router = useRouter();

  return (
    <motion.div
      // animate={{
      //   opacity: isInView ? 1 : 0,
      //   scale: isInView ? 1 : 0.9,
      // }}
      transition={{ duration: 0.3 }}
      className="h-full w-full flex flex-col-reverse md:flex-row justify-evenly items-center overflow-hidden bg-bkg relative"
    >
      <div
        className={`h-[35%] w-full md:h-[70%] md:w-[50%] lg:h-[80%] lg:w-[50%] flex md:flex-col justify-start items-center text-center md:text-left md:pt-5 z-1 [z-index:1]`}
      >
        <motion.h1
          className={`text-text text-xl md:text-3xl    ${
            lang.trans_label === transLabel.fr ? "lg:text-4xl" : "lg:text-6xl"
          } font-extrabold leading-loose selection:bg-accent `}
        >
          {lang.howHelp}
        </motion.h1>
        <Image
          src={theme === light ? illu_l : illu_d}
          alt="illustration"
          className="h-[70%] w-[auto] pt-2"
        />
        <div className="h-full w-full lg:w-[90%] pb-2 md:pb-0 md:h-[20%] flex-col md:flex-row md:w-full flex  justify-evenly md:items-end items-center">
          <Button
            label={lang.control.back}
            size="sm"
            onClick={props.goBack}
            icon={
              <HiOutlineChevronDown className="h-5 w-5 text-accent rotate-180" />
            }
          />
          <Button
            label={lang.control.backToTop}
            size="sm"
            onClick={props.returnToFirstPage}
            icon={<AiOutlineVerticalAlignTop className="h-5 w-5 text-accent" />}
          />
          <Button
            label={lang.contactUs}
            size="sm"
            onClick={() => {
              router.push("/contact");
            }}
            icon={<IoIosContact className="h-5 w-5 text-accent" />}
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-start items-start h-full w-full md:h-full md:w-[50%] relative  md:pt-0  `}
      >
        <div className="h-[85%] w-full text-center md:text-left p-2">
          <h2
            className={`text-text text:xl md:text:2xl  ${
              lang.trans_label === transLabel.fr ? "lg:text-2xl" : "lg:text-3xl"
            } font-semibold`}
          >
            {lang.ourService}
          </h2>
          <div className="w-full flex justify-center flex-wrap box-border pt-2">
            {lang.services.map((s, i) => (
              <ServiceBox
                title={s}
                key={i}
                index={i}
                shouldAnimate={isInView}
              />
            ))}
          </div>
        </div>
        <div className="hidden [@media(min-height:910px)]:flex h-[10%] w-full self-end justify-start items-center text-primary relative [&>svg]:w-10 [&>svg]:h-10 [&>svg]:mr-2 mt-10 md:mt-0 ">
          <h2
            className={`hidden md:block text-text text:xl md:text:2xl lg:text-2xl font-semibold absolute -top-10 left-0`}
          >
            {lang.tech}
          </h2>
          <FaReact />
          <FaAngular />
          <RiFlutterFill />
          <SiDart />
          <FaSwift />
          <SiNextdotjs />
          <SiMongodb />
          <SiGraphql />
          <SiPostgresql />
          <DiMysql />
          <FaLinux />
          <SiMui />
          <SiTailwindcss />
          <FaAws />
          <SiAzuredevops />
        </div>
      </div>
      <p className="absolute bottom-0 left-2 text-[8px] font-light">
        {lang.cr.disclaim}
      </p>
    </motion.div>
  );
}
