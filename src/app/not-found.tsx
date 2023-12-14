"use client";
import React from "react";
import useTheme from "@hooks/useTheme";
import { motion } from "framer-motion";
import { light } from "@constant/values";
import { useLanguage } from "@hooks/useLanguage";
import Lottie from "lottie-react";
import nfL from "@public/animation/kawak_404_lt.json";
import nfD from "@public/animation/kwaka_404_dk.json";
import { useRouter } from "next/navigation";
import Button from "@component/button";
import { HiReply } from "react-icons/hi";
const NotFound = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="h-[92vh] w-full flex flex-col-reverse md:flex-row justify-evenly items-center overflow-hidden"
    >
      <div
        className={`h-[15%] w-[80%] md:h-[40%] md:w-[50%] lg:h-[500px] lg:w-[500px] bg-bkg rounded-[50px] ${
          theme === light ? "shadow-light" : "shadow-dark"
        }`}
      >
        <Lottie
          animationData={theme === light ? nfL : nfD}
          className="h-full w-full"
        />
      </div>
      <div
        className={`h-[80%] w-full md:h-[400px] md:w-[400px] lg:h-[60%px] lg:w-[50%] flex flex-col justify-center items-center   `}
      >
        <h1 className="text-text text-[4rem] lg:text-[6rem] font-extrabold">
          {lang.notFound}
        </h1>
        <Button
          label={lang.goBack}
          size="md"
          onClick={() => {
            router.back();
          }}
          icon={<HiReply className="h-4 w-4 text-accent" />}
        />
      </div>
    </motion.div>
  );
};

export default NotFound;
