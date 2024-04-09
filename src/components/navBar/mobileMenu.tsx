"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "@hooks/useTheme";
import { light, dark } from "@constant/values";
import { FiAlignRight } from "react-icons/fi";
import NavButton from "@component/navButton";
import { useLanguage } from "@hooks/useLanguage";
import { DarkModeIcon, LangSwitchCircle, LightModeIcon } from "@svg/icons";
export const darkBg = "rgba(36, 69, 97, 0.5)";
export const darkBd = "rgba(36, 69, 97, 0.5)";
export const lightBg = "rgba(243, 242, 245, 0.5)";
export const lightBd = "rgba(243, 242, 245, 0.5)";
export default function MobileMenu() {
  const { lang, switchLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mobileRotate, setMobileRotate] = useState<number>(0);
  const [rotate, setRotation] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onRotateFinish = () => {
    setRotation(0);
  };

  const navButtons: { label: string; path: string }[] = [
    { label: lang.home, path: "/" },
    { label: lang.projects, path: "/projects" },
    { label: lang.blog, path: "/blog" },
    { label: lang.contact, path: "/contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      setMobileRotate(90);
    } else {
      setMobileRotate(0);
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef &&
        containerRef.current &&
        event.target instanceof Element
      ) {
        if (!containerRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      setMenuOpen(false);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className="h-full w-full flex-row items-center pr-5 pl-10 box-border justify-end md:hidden flex relative"
      id="mobile_menu_container"
      ref={containerRef}
    >
      <button
        role="button"
        type="button"
        aria-label={`button to open menu: menu is ${
          menuOpen ? "closed" : "open"
        }`}
        className={`h-[50px] w-[50px] rounded-[15px] bg-bkg relative flex items-center justify-center ${
          theme === light ? "shadow-light" : "shadow-dark"
        }`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <motion.div
          className="relative w-[35px] h-[35px]"
          initial={false}
          transition={{ duration: 0.3 }}
          animate={{ rotate: mobileRotate }}
        >
          <FiAlignRight className="text-primary w-[35px] h-[35px]" />
        </motion.div>
      </button>
      {menuOpen && (
        <div
          className="absolute h-[400px] w-[90px] top-[80px] right-5 rounded-lg flex flex-col justify-evenly items-center z-50"
          style={{
            background: theme === "dark" ? darkBg : lightBg,
            boxShadow: "0 4px 22px 0 rgba( 31, 38, 135, 0.37 )",
            border:
              theme === "dark" ? `1px solid ${darkBd}` : `1px solid ${lightBd}`,
          }}
        >
          <button
            role="button"
            type="button"
            aria-label={`language switch button, current language: ${lang.trans_label}`}
            className={`h-[50px] w-[50px] rounded-[15px] bg-bkg relative flex z-50 items-center justify-center ${
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
          <button
            role="button"
            type="button"
            aria-label={`theme switch button, current theme: ${theme}`}
            className={`h-[50px] w-[50px] rounded-[15px] bg-bkg flex items-center justify-center relative z-50 ${
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
          {navButtons.map((b, i) => (
            <motion.div
              className="relative"
              key={b.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 * (i + 1),
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <NavButton
                label={b.label}
                navPath={b.path}
                key={b.label}
                isMobile={true}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
