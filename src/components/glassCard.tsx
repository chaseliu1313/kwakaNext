"use client";

import { motion } from "framer-motion";
import useTheme from "@hooks/useTheme";

export const darkBg = "rgba(36, 69, 97, 0.5)";
export const darkBd = "rgba(36, 69, 97, 0.18)";
export const lightBg = "rgba(243, 242, 245, 0.5)";
export const lightBd = "rgba(243, 242, 245, 0.18)";
export const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`${className} `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 1.2,
      }}
      style={{
        background: theme === "dark" ? darkBg : lightBg,
        boxShadow: "0 4px 22px 0 rgba( 31, 38, 135, 0.37 )",
        border:
          theme === "dark" ? `1px solid ${darkBd}` : `1px solid ${lightBd}`,
      }}
    >
      {children}
    </motion.div>
  );
};
