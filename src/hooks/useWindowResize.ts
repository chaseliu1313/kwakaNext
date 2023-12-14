import { useState, useEffect } from "react";

export const useWindowResize = (): {
  windowSize: { width: number; height: number };
} => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleReize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (typeof window === "object") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener("resize", handleReize);
    }

    return () => {
      window.removeEventListener("resize", handleReize);
    };
  }, []);

  return { windowSize };
};
