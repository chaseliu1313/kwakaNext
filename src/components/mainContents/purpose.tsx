"use client";
import { ReactElement, useEffect, useRef } from "react";
import { light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import { motion } from "framer-motion";
import aniL from "@public/animation/kwaka_home_2_lt.json";
import aniD from "@public/animation/kwaka_home_2_dk.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useLanguage } from "@hooks/useLanguage";
import { transLabel } from "@lan/translation.interface";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";
import Button from "@component/button";
import uiux_l from "@public/illustrations/uiux_l.svg";
import uiux_d from "@public/illustrations/uiux_d.svg";
import custom_l from "@public/illustrations/custom_l.svg";
import custom_d from "@public/illustrations/custom_d.svg";
import qa_l from "@public/illustrations/qa_l.svg";
import qa_d from "@public/illustrations/qa_d.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CardBody, CardContainer, CardItem } from "@component/3dCard";
const mainDelay = 0.3;
const icons: { light: string | StaticImport; dark: string | StaticImport }[] = [
  { light: uiux_l, dark: uiux_d },
  { light: custom_l, dark: custom_d },
  { light: qa_l, dark: qa_d },
];

export default function Purpose({ isInView }: { isInView: boolean }) {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const lottiref1 = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottiref1 && lottiref1.current) {
      lottiref1.current.setSpeed(0.5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, lottiref1.current]);

  return (
    <motion.section
      id="purpose"
      transition={{ duration: 0.3 }}
      className="h-screen w-full box-border pt-[80px] flex flex-col md:flex-row justify-evenly items-center bg-bkg relative snap-start md:px-2 lg:px-0"
    >
      <div
        className={`h-[80%] w-full md:h-[70%] md:w-[400px] lg:h-[80%] lg:w-[50%] flex flex-col justify-start items-center text-center md:text-left `}
      >
        <h1
          className={`text-text text-xl md:text-3xl lg:w-[95%] ${
            lang.trans_label === transLabel.fr ? "lg:text-4xl" : "lg:text-6xl"
          } font-extrabold leading-loose selection:bg-accent`}
        >
          {lang.landing}
        </h1>
        <p
          className={`text:xl md:text:2xl w-[70%] md:w-[95%]  ${
            lang.trans_label === transLabel.fr ? "lg:text-3xl" : "lg:text-4xl"
          } text-text leading-normal selection:bg-accent font-light mt-4`}
        >
          {lang.makeWebsite}
          <span className="text-warning">{lang.makeWebsite1}</span>
          <span className="text-accent selection:bg-warning">
            {lang.makeWebsite2}
          </span>
          <span className="text-primary">{lang.makeWebsite3}</span>
          <span className="text-text">{lang.makeWebsite4}</span>
        </p>
        <div className="h-[70%] md:h-full w-full flex flex-col md:flex-row justify-between items-center relative box-border p-5 pt-8">
          <h2
            className={`text-text text:xl md:text:2xl top-4 ${
              lang.trans_label === transLabel.fr ? "lg:text-2xl" : "lg:text-3xl"
            } absolute lg:top-6 left-8 md:left-4 font-semibold`}
          >
            {lang.ourService}
          </h2>
          {lang.services.slice(0, 3).map((s, i) => (
            <CardContainer
              key={i}
              className="h-full w-full"
              containerClassName="h-[25%] w-[80%] md:max-h-[300px] md:h-[80%] md:w-[30%]"
            >
              <CardBody
                className={`rounded-2xl text-center p-2 box-border bg-bkg lg:p-8 flex justify-center items-center flex-col  ${
                  theme === light ? "shadow-light" : "shadow-dark"
                }`}
              >
                <CardItem translateZ="60">
                  <h3 className="text-text text-sm lg:text-xl">{s}</h3>
                </CardItem>
                <CardItem
                  translateZ="90"
                  className="w-full h-full flex justify-center items-center"
                >
                  <Image
                    src={theme === light ? icons[i].light : icons[i].dark}
                    alt="illustrations"
                    className="md:h-[50%] w-auto h-[80%] "
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
      <div
        className={`fadein-container flex flex-row md:flex-col justify-end h-[15%] w-[80%] md:h-[40%] md:w-[50%] lg:h-[500px] lg:w-[500px] relative`}
      >
        <motion.div
          className="h-[90%] w-[50%] md:w-full absolute top-0 left-0 right-0 bg-bkg rounded-2xl md:rounded-[50px]"
          transition={{ delay: 0.4, duration: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
        >
          <Lottie
            animationData={theme === light ? aniL : aniD}
            className="h-full w-full"
            lottieRef={lottiref1}
          />
        </motion.div>
        <motion.div
          className={`absolute h-[90%] w-[50%] md:w-full bg-transparent top-0 left-0 right-0  rounded-2xl md:rounded-[50px] ${
            theme === light ? "shadow-light" : "shadow-dark"
          }  `}
          transition={{ delay: 0.5, duration: 0.7 }}
        />

        <div className="h-full w-[50%] md:h-[10%] md:w-full flex flex-col md:flex-row justify-evenly items-center md:pt-5">
          <Button
            label={lang.control.back}
            styles="m-auto"
            size="sm"
            useLink
            link="#landing"
            onClick={() => {}}
            icon={
              <HiOutlineChevronDown className="h-5 w-5 text-accent rotate-180" />
            }
          />
          <Button
            label={lang.control.continue}
            styles="m-auto"
            useLink
            link="#dataVisualization"
            size="sm"
            onClick={() => {}}
            icon={<HiOutlineChevronDown className="h-5 w-5 text-accent" />}
          />
        </div>
      </div>
    </motion.section>
  );
}
