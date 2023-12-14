"use client";
import React, { useState } from "react";
import useTheme from "@hooks/useTheme";
import { motion } from "framer-motion";
import { light } from "@constant/values";
import { useLanguage } from "@hooks/useLanguage";
import Lottie from "lottie-react";
import aniL from "@public/animation/comesoone_lt.json";
import aniD from "@public/animation/comesoon_dk.json";

const blog = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();
  return (
    <div className="h-[92vh] w-full flex flex-col-reverse md:flex-row justify-center items-center overflow-hidden">
      <motion.div
        className="h-[50%] w-[60%] bg-accent rounded-[50px]"
        initial={{ height: "0%" }}
        animate={{ height: "50%" }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <Lottie
          animationData={theme === light ? aniL : aniD}
          className="h-full w-full"
        />
      </motion.div>
    </div>
  );
};

export default blog;
