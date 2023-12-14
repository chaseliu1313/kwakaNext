import { colorTheme } from "@constant/types";
import { dark, light } from "@constant/values";
import { useState, useEffect } from "react";

export default function useTheme() {
  const [root, setRoot] = useState<Element | null>(null);
  const [observer, setObserver] = useState<MutationObserver | null>(null);
  const [theme, setTheme] = useState(root?.getAttribute("data-theme") ?? light);

  function setGloabalTheme() {
    if (root) {
      const currentTheme = root.getAttribute("data-theme");
      if (currentTheme === light) {
        root.setAttribute("data-theme", dark);
      } else {
        root.setAttribute("data-theme", light);
      }
    }
  }

  useEffect(() => {
    const root = document.querySelector("#root");
    if (root) {
      setRoot(root);
    }
  }, []);

  useEffect(() => {
    function mutationCallback() {
      if (root) {
        const currentTheme = root.getAttribute("data-theme");

        if (currentTheme) {
          setTheme(currentTheme);
        }
      }
    }
    const obs = new MutationObserver(mutationCallback);

    setObserver(obs);
  }, [root]);

  useEffect(() => {
    if (!observer) return;

    if (root) {
      observer.observe(root, { attributes: true });
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, root]);

  useEffect(() => {
    const root = document.querySelector("#root");
    if (root) {
      const theme = root.getAttribute("data-theme");
      if (theme) {
        setTheme(theme);
      }
    }
  }, []);
  return { theme, setTheme: setGloabalTheme };
}
