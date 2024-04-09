"use client";
import React, { ReactElement } from "react";
import LogoContainer from "./logoContainer";
import { ActionContainer } from "./actionContainer";
import { motion } from "framer-motion";

export default function NavBar(): ReactElement {
  return (
    <motion.div
      className="bg-bkg w-screen h-[80px] fixed left-0 top-0 flex flex-row items-center justify-center box-border z-[999] "
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.8,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <LogoContainer />
      <ActionContainer />
    </motion.div>
  );
}
