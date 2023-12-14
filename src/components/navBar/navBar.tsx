"use client";
import React, { ReactElement, useEffect, useState } from "react";
import LogoContainer from "./logoContainer";
import { ActionContainer } from "./actionContainer";
import { motion } from "framer-motion";
import { firstTimerKey } from "@constant/values";
export default function NavBar(): ReactElement {
  const [firstTimer, setFirstTimer] = useState<boolean>(false);

  useEffect(() => {
    const isfirstTimer = localStorage.getItem(firstTimerKey);
    if (isfirstTimer) {
      if (isfirstTimer === "true") {
        setFirstTimer(true);
      } else {
        setFirstTimer(false);
      }
    } else {
      setFirstTimer(true);
    }
  }, []);

  return (
    <motion.div
      className="bg-bkg w-screen h-[80px] fixed left-0 top-0 flex flex-row items-center justify-center box-border z-[999] "
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: firstTimer ? 1.8 : 0.8,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <LogoContainer />
      <ActionContainer />
    </motion.div>
  );
}
