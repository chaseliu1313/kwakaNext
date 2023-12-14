"use client";
import React, { useState, ReactElement, createContext } from "react";
import { cn } from "./cn.translation";
import { en } from "./en.translation";
import { fr } from "./fr.translation";
import { langKey, transLabel, Translation } from "./translation.interface";

type LanguageProps = {
  language: Translation;
  updateLanguage: (lang: langKey) => void;
  switchLanguage: () => void;
};

const LanguageContext = createContext<LanguageProps>({} as LanguageProps);

const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  const [language, setLanguage] = useState<Translation>(en);

  const updateLanguage = (lang: langKey): void => {
    switch (lang) {
      case langKey.en:
        setLanguage(en);
        break;
      case langKey.cn:
        setLanguage(cn);
        break;
      case langKey.fr:
        setLanguage(fr);
        break;
      default:
        setLanguage(language);
    }
  };

  const switchLanguage = (): void => {
    const root = document.querySelector("#root");

    if (language.trans_label === transLabel.en) {
      setLanguage(fr);
      if (root) root.setAttribute("lang", "fr");
    } else if (language.trans_label === transLabel.fr) {
      setLanguage(cn);
      if (root) root.setAttribute("lang", "zh-Hans");
    } else {
      setLanguage(en);
      if (root) root.setAttribute("lang", "en");
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, updateLanguage, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContextProvider, LanguageContext };
