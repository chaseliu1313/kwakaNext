"use client";
import React, { ReactElement, useState } from "react";

import { useLanguage } from "@hooks/useLanguage";
import { DarkModeIcon, LangSwitchCircle, LightModeIcon } from "@svg/icons";
import { motion } from "framer-motion";
import useTheme from "@hooks/useTheme";
import { light, dark } from "@constant/values";

import NavButton from "@component/navButton";
import MobileMenu from "./mobileMenu";

export const ActionContainer = (): ReactElement => {
  const { lang, switchLanguage } = useLanguage();

  const { theme, setTheme } = useTheme();

  const [rotate, setRotation] = useState<number>(0);

  const onRotateFinish = () => {
    setRotation(0);
  };

  const navButtons: { label: string; path: string }[] = [
    { label: lang.home, path: "/" },
    { label: lang.projects, path: "/projects" },
    { label: lang.blog, path: "/blog" },
    { label: lang.contact, path: "/contact" },
  ];

  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex-row items-center pr-5  pl-20 box-border justify-end md:flex hidden  ">
        <div className="h-full w-[50%] flex flex-row justify-evenly lg:pl-10 box-border items-center md:mr-5 lg:mr-0">
          {navButtons.map((b) => (
            <NavButton label={b.label} navPath={b.path} key={b.label} />
          ))}
        </div>
        <div className="h-full w-[150px] flex flex-row justify-center items-center ">
          <div className="h-full flex items-center justify-center w-15">
            <button
              role="button"
              type="button"
              aria-label={`language switch button, current language: ${lang.trans_label}`}
              className={`h-[50px] w-[50px] rounded-[15px] bg-bkg relative flex items-center justify-center ${
                theme === light ? "shadow-light" : "shadow-dark"
              }`}
              onClick={() => {
                setRotation(180);
                switchLanguage();
              }}
            >
              <motion.div
                className="relative w-[35px] h-[35px]"
                initial={false}
                transition={{ duration: 0.3 }}
                onAnimationComplete={onRotateFinish}
                animate={{ rotate }}
              >
                <LangSwitchCircle />
              </motion.div>
              <p className="absolute left-4.5 top-4.5 text-center text-primary text-xs">
                {lang.trans_label}
              </p>
            </button>
            <p className="text-primary m-2">|</p>
            <button
              role="button"
              type="button"
              aria-label={`theme switch button, current theme: ${theme}`}
              className={`h-[50px] w-[50px] rounded-[15px] bg-bkg flex items-center justify-center relative ${
                theme === light ? "shadow-light" : "shadow-dark"
              }`}
              onClick={() => {
                setTheme();
              }}
            >
              {theme === light && (
                <motion.div
                  className="w-[35px] h-[35px] absolute"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                >
                  <LightModeIcon />
                </motion.div>
              )}
              {theme === dark && (
                <motion.div
                  className="w-[35px] h-[35px] absolute"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                >
                  <DarkModeIcon />
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};
