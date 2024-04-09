"use client";
import { dark, light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { ReactElement, useState } from "react";

type ButtonProps = {
  label: string;
  styles?: string;
  size: "xs" | "sm" | "md" | "lg";
  useLink?: boolean;
  link?: string;
  icon?: ReactElement;
  disabled?: boolean;
  loading?: boolean;
  mailing?: "editing" | "sending" | "sent";
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      disabled={props.disabled}
      className={` ${theme === light ? "shadow-light" : "shadow-dark"}
      
      ${
        props.size === "xs"
          ? "min-w-[100px] min-h-[30px] h-[30px] md:h-[50px] md:min-h-[50px]"
          : props.size === "sm"
          ? "min-w-[100px] h-[40px] min-h-[40px] md:h-[50px] w-[100px] md:w-[110px] lg:w-[150px]"
          : props.size === "md"
          ? "min-w-[200px] h-[60px] min-h-[60px] md:h-[80px]"
          : "min-w-[200px] h-[80px] min-h-[80px] md:h-[100px]"
      } rounded-[50px] bg-bkg box-border p-1 text-2 font-semibold flex justify-evenly items-center z-40 relative [&>svg]:z-50
        before:contents-[''] before:absolute before:top-[40%] before:left-[40%] before:w-[20%] before:h-[20%] before:z-40 before:rounded-[50px] before:scale-0 before:bg-accent
        before:duration-300 hover:before:scale-[500%] 
        disabled:cursor-not-allowed
        disabled:before:hidden
        disabled:hover:text-danger
        leading-4
        md:leading-relaxed
      ${
        hovered && theme === light
          ? "text-white"
          : hovered && theme === dark
          ? "text-black"
          : "text-text"
      }
      
       ${props.styles}`}
      onClick={(e) => {
        e.preventDefault();
        if (!props.disabled) props.onClick();
      }}
      onHoverStart={() => {
        setHovered(true);
      }}
      onHoverEnd={() => {
        setHovered(false);
      }}
      aria-label={props.label}
      whileHover={{
        scale: props.disabled ? 1 : 1.15,
      }}
      transition={{ duration: 0.2, delay: 0 }}
    >
      {props.useLink ? (
        <Link
          className="z-50 w-full h-full relative flex justify-evenly items-center"
          href={props.link!}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Space") {
              e.preventDefault();
            }
          }}
        >
          <p className="z-50">{props.label}</p>
          <motion.div
            animate={{
              y:
                props.mailing === "sending"
                  ? [-5, 0, 5, -5, 5, -2]
                  : props.mailing === "sent"
                  ? 0
                  : [-10, 0],
              x: props.mailing === "sent" ? 50 : 0,
              scale: props.mailing === "sent" ? 1.5 : 1,
              opacity: props.mailing === "sent" ? [0.5, 0] : 1,
            }}
            transition={{
              repeat: props.mailing === "sending" ? Infinity : undefined,
              duration: props.mailing === "sent" ? 0.1 : 1,
              ease: easeInOut,
            }}
            className={`z-50   ${
              hovered && theme === light && !props.disabled
                ? "[&>svg]:fill-white [&>svg]:stroke-white"
                : hovered && theme === dark && !props.disabled
                ? "[&>svg]:fill-black [&>svg]:stroke-black"
                : props.disabled && hovered
                ? "[&>svg]:fill-danger [&>svg]:stroke-danger"
                : "fill-accent stroke-accent"
            }`}
          >
            {props.icon}
          </motion.div>
        </Link>
      ) : (
        <>
          <p className="z-50">{props.label}</p>
          <motion.div
            animate={{
              y:
                props.mailing === "sending"
                  ? [-5, 0, 5, -5, 5, -2]
                  : props.mailing === "sent"
                  ? 0
                  : [-10, 0],
              x: props.mailing === "sent" ? 50 : 0,
              scale: props.mailing === "sent" ? 1.5 : 1,
              opacity: props.mailing === "sent" ? [0.5, 0] : 1,
            }}
            transition={{
              repeat: props.mailing === "sending" ? Infinity : undefined,
              duration: props.mailing === "sent" ? 0.1 : 1,
              ease: easeInOut,
            }}
            className={`z-50   ${
              hovered && theme === light && !props.disabled
                ? "[&>svg]:fill-white [&>svg]:stroke-white"
                : hovered && theme === dark && !props.disabled
                ? "[&>svg]:fill-black [&>svg]:stroke-black"
                : props.disabled && hovered
                ? "[&>svg]:fill-danger [&>svg]:stroke-danger"
                : "fill-accent stroke-accent"
            }`}
          >
            {props.icon}
          </motion.div>
        </>
      )}
    </motion.button>
  );
}
