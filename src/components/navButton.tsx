"use client";
import React, { ReactElement, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  label: string;
  navPath: string;
  isMobile?: boolean;
};

const enter = "Enter";

export default function NavButton(props: Props) {
  const { label, navPath } = props;
  const path = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-11 w-20 relative flex justify-center items-center z-40">
      {props.isMobile ? (
        <button
          className="text-text w-20 h-10 border-0 rounded-md bg-bkg hover:bg-accent hover:text-bkg lg:hover:border-[3px] ease-in-out transition duration-250 lg:hover:border-accent md:bg-transparent  "
          role="button"
          type="button"
          aria-label={label}
          onKeyDown={(e) => {
            if (e.key === enter) {
              router.push(navPath);
            }
          }}
        >
          <Link href={navPath} tabIndex={-1}>
            {label}
          </Link>
        </button>
      ) : (
        <button
          className=" w-20 h-10 border-0 rounded-md md:bg-transparent z-40 before:contents-[''] before:absolute before:top-[40%] before:left-[40%] before:w-[20%] before:h-[20%] before:bg-accent before:z-40 before:rounded-md before:scale-0 cursor-pointer
        before:duration-300 hover:before:scale-[500%]  "
          role="button"
          type="button"
          aria-label={label}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          onKeyDown={(e) => {
            if (e.key === enter) {
              router.push(navPath);
            }
          }}
        >
          <Link
            href={navPath}
            tabIndex={-1}
            className={`z-50 relative ${hovered ? "text-white" : "text-text"}`}
          >
            {label}
          </Link>
        </button>
      )}
      <span
        className={`absolute left-[calc(50%-4px)] bottom-0 w-[8px] h-[8px] z-50 rounded-md 
        ${hovered ? "bg-white" : "bg-accent"} ${
          path === navPath ? "block" : "hidden"
        } `}
      />
    </div>
  );
}
