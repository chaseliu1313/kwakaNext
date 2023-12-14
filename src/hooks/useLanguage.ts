import { useContext } from "react";
import { langKey, LanguageContext, Translation } from "@lan/index";

export const useLanguage = (): {
  lang: Translation;
  updateLanguage: (lang: langKey) => void;
  switchLanguage: () => void;
} => {
  const { language, updateLanguage, switchLanguage } =
    useContext(LanguageContext);

  return { lang: language, updateLanguage, switchLanguage };
};
