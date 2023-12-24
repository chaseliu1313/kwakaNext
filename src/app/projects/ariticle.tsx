import React, { useEffect, useRef, useState } from "react";
import { CaseStudy, Translation } from "@lan/translation.interface";
import Image from "next/image";
import tm1 from "@public/image/tm1.png";
import tm2 from "@public/image/tm2.png";
import tl1 from "@public/image/tl1.png";
import tl2 from "@public/image/tl2.png";
import camh from "@public/image/camh.png";

type Props = {
  article: CaseStudy;
  lang: Translation;
};

export default function CaseStudyArticle({ article, lang }: Props) {
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [article]);
  const ref = useRef<HTMLElement | null>(null);
  return (
    <section
      className="h-full w-full p-4 overflow-y-auto text-text box-border relative pb-[30%] md:pb-1"
      id="article"
      ref={ref}
    >
      <h1 className="text-2xl mt-4 font-extrabold">{article.title}</h1>

      <h2 className="text-lg font-bold mt-4 text-primary">
        {lang.caseStudy.background}
      </h2>
      {article.background.map((b, i) => {
        return (
          <p className="mt-4 text-base" key={i}>
            {b}
          </p>
        );
      })}
      <Image
        src={
          article.title.includes("Truck-log")
            ? tl1
            : article.title.includes("Compass")
            ? tm1
            : camh
        }
        className="w-[80%] h-[auto] mt-4 "
        alt="website image"
      />
      <h2 className="text-lg font-bold mt-4 text-primary">
        {lang.caseStudy.challenge}
      </h2>
      {article.challenge.map((b, i) => {
        return (
          <p className="mt-4 text-base " key={i}>
            <span className="mt-4 text-base inline font-bold">•{b.title}</span>{" "}
            {b.content}
          </p>
        );
      })}
      {article.solution.length > 0 && (
        <>
          <h2 className="text-lg font-bold mt-4 text-primary">
            {lang.caseStudy.solution}
          </h2>
          {article.solution.map((b, i) => {
            return (
              <p className="mt-4 text-base " key={i}>
                <span className="mt-4 text-base inline font-bold">
                  •{b.title}
                </span>{" "}
                {b.content}
              </p>
            );
          })}
        </>
      )}
      {!article.title.toUpperCase().includes("CAMH") && (
        <Image
          src={article.title.includes("Truck-log") ? tl2 : tm2}
          className="w-[80%] h-[auto] mt-4 "
          alt="website image"
        />
      )}
      <h2 className="text-lg font-bold mt-4 text-success">
        {lang.caseStudy.result}
      </h2>
      {article.result.map((b, i) => {
        return (
          <p className="mt-4 text-base" key={i}>
            {b}
          </p>
        );
      })}
      <p className="relative mt-4 text-[8px]">{lang.cr.caseStudy}</p>
    </section>
  );
}
