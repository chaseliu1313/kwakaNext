"use client";

import { useLanguage } from "@hooks/useLanguage";
import { cn } from "../utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const { lang } = useLanguage();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.15, { startDelay: 0.6 }),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate, lang]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              <p className="sr-only">{word.text}</p>
              <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {word.text.map((char, index) => (
                  <motion.span
                    initial={{}}
                    key={`char-${index}`}
                    className={cn(`opacity-0 hidden`, word.className)}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 text-accent",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
