"use client";
import { ReactElement, useEffect, useRef, useState } from "react";
import { light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import { easeInOut, motion, useInView } from "framer-motion";
import aniL from "@public/animation/data_l.json";
import aniD from "@public/animation/data-d.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useLanguage } from "@hooks/useLanguage";
import { transLabel } from "@lan/translation.interface";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MainContentProps } from "./purpose";
import Button from "@component/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import bitHeadsLogo from "@public/image/bitheads.png";
import talentMapLogo from "@public/image/TalentMap.png";
import moseaLogo from "@public/image/mosea_logo.svg";

const brands = [
  { alt: "bitheads", logo: bitHeadsLogo },
  { alt: "talentmap", logo: talentMapLogo },
  { alt: "mosea", logo: moseaLogo },
];

const BrandBox = ({
  shouldAnimate,
  img,
  delay,
  alt,
}: {
  shouldAnimate: boolean;
  img: string | StaticImport;
  delay: number;
  alt: string;
}): ReactElement => {
  const { theme } = useTheme();
  return (
    <motion.div
      className={`md:h-[200px] md:w-[200px]  h-[100px]  w-[100px] rounded-2xl text-center p-2 box-border bg-bkg flex justify-center items-center ${
        theme === light ? "shadow-light" : "shadow-dark"
      }`}
      animate={{
        opacity: shouldAnimate ? 1 : 0,
        scale: shouldAnimate ? 1 : 0.9,
        x: shouldAnimate ? 0 : -50,
      }}
      transition={{ delay: 0.8 + delay, duration: 0.4 }}
    >
      <Image src={img} alt={alt} className="h-[auto] w-full" />
    </motion.div>
  );
};

export default function DataV(props: MainContentProps) {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (lottiref1 && lottiref1.current) {
      lottiref1.current.setSpeed(0.2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, lottiref1.current]);

  useEffect(() => {
    if (props.currentSection === 1) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, [props.currentSection]);
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.9,
      }}
      transition={{ duration: 0.3 }}
      className="h-full w-full flex flex-col-reverse md:flex-row justify-evenly items-center overflow-hidden bg-bkg"
    >
      <div
        className={`fadein-container flex flex-row md:flex-col justify-end h-[15%] w-[80%] md:h-[40%] md:w-[50%] lg:h-[500px] lg:w-[500px] relative`}
      >
        <motion.div
          className="h-[90%] w-[50%] md:w-full absolute top-0 left-0 right-0 bg-bkg rounded-2xl md:rounded-[50px]"
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.9,
          }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Lottie
            animationData={theme === light ? aniL : aniD}
            className="h-[120%] w-full absolute bottom-0 left-0 "
            lottieRef={lottiref1}
          />
        </motion.div>
        <motion.div
          className={`absolute h-[90%] w-[50%] md:w-full bg-transparent top-0 left-0 right-0  rounded-2xl md:rounded-[50px] ${
            theme === light ? "shadow-light" : "shadow-dark"
          }  `}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />
        <div className="h-full w-[50%] md:h-[10%] md:w-full flex flex-col md:flex-row justify-evenly items-center md:pt-5">
          <Button
            label={lang.control.back}
            styles="m-auto"
            size="sm"
            onClick={props.goBack}
            icon={
              <HiOutlineChevronDown className="h-5 w-5 text-accent rotate-180" />
            }
          />
          <Button
            label={lang.control.continue}
            styles="m-auto"
            size="sm"
            onClick={props.goForward}
            icon={<HiOutlineChevronDown className="h-5 w-5 text-accent" />}
          />
        </div>
      </div>
      <div
        className={`h-[80%] w-full md:h-[70%] md:w-[400px] lg:h-[80%] lg:w-[50%] flex flex-col justify-start items-center text-center md:text-left `}
      >
        <h1
          className={`text-text text-xl md:text-3xl lg:w-[95%] ${
            lang.trans_label === transLabel.fr ? "lg:text-4xl" : "lg:text-6xl"
          } font-extrabold leading-loose selection:bg-accent`}
        >
          {lang.datav[0]}
          <span className="text-warning">{lang.datav[1]}</span>
          {lang.datav[2]}
          <span className="text-success">{lang.datav[3]}</span>
        </h1>
        <p
          className={`text:xl md:text:2xl w-[70%] md:w-[95%]  ${
            lang.trans_label === transLabel.fr ? "lg:text-3xl" : "lg:text-4xl"
          } text-text leading-normal selection:bg-accent font-light mt-4`}
        >
          {lang.datavDetails}
        </p>

        <div className=" h-full w-full p-4 box-border pt-6">
          <h2
            className={`text-text text:xl md:text:2xl  ${
              lang.trans_label === transLabel.fr ? "lg:text-2xl" : "lg:text-3xl"
            } font-semibold`}
          >
            {lang.ourClients}
          </h2>
          <div className="h-full w-full p-4 box-border flex justify-evenly items-start">
            {brands.map((a, i) => (
              <BrandBox
                alt={a.alt}
                img={a.logo}
                delay={i * 0.2}
                key={i}
                shouldAnimate={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
