"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { useLanguage } from "@hooks/useLanguage";
import logoLt from "@public/image/logo-lt.png";
import logoDk from "@public/image/logo-dk.png";
import Image, { StaticImageData } from "next/image";
import useTheme from "@hooks/useTheme";
import { light } from "@constant/values";

export default function LogoContainer(): ReactElement {
  const { lang } = useLanguage();
  const [logo, setLogo] = useState<StaticImageData>(logoLt);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === light) {
      setLogo(logoLt);
    } else {
      setLogo(logoDk);
    }
  }, [theme]);
  return (
    <div className="w-[40%] h-full flex flex-row items-center self-start pl-5 box-border">
      <Image
        alt="logo"
        src={logo}
        className="h-full w-[auto] object-contain"
        priority
      />
      <h1 className="text-text ml-3 self-end pb-3 hidden lg:block">
        {lang.designBuild}
      </h1>
    </div>
  );
}
