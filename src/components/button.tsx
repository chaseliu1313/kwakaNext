"use client";
import { dark, light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import { motion } from "framer-motion";
import { ReactElement, useState } from "react";

type ButtonProps = {
  label: string;
  styles?: string;
  size: "xs" | "sm" | "md" | "lg";
  icon?: ReactElement;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className={` ${theme === light ? "shadow-light" : "shadow-dark"}
      ${
        props.size === "xs"
          ? "min-w-[100px] h-[30px] md:h-[50px]"
          : props.size === "sm"
          ? "min-w-[100px] h-[40px] md:h-[50px] w-[100px] md:w-[110px] lg:w-[150px]"
          : props.size === "md"
          ? "min-w-[200px] h-[60px] md:h-[80px]"
          : "min-w-[200px] h-[80px] md:h-[100px]"
      } rounded-[50px] bg-bkg box-border p-1  text-2  font-semibold flex justify-evenly items-center z-40 relative  [&>svg]:z-50
        before:contents-[''] before:absolute before:top-[40%] before:left-[40%] before:w-[20%] before:h-[20%] before:bg-accent before:z-40 before:rounded-[50px] before:scale-0
        before:duration-300 hover:before:scale-[500%] 
      ${
        hovered && theme === light
          ? "text-white"
          : hovered && theme === dark
          ? "text-black"
          : "text-text"
      }
       ${props.styles}`}
      onClick={() => {
        props.onClick();
      }}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
      aria-label={props.label}
      whileHover={{
        scale: 1.15,
      }}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <p className="z-50">{props.label}</p>
      <div
        className={`z-50   ${
          hovered && theme === light
            ? "[&>svg]:fill-white [&>svg]:stroke-white"
            : hovered && theme === dark
            ? "[&>svg]:fill-black [&>svg]:stroke-black"
            : "fill-accent stroke-accent"
        }`}
      >
        {props.icon}
      </div>
    </motion.button>
  );
}
