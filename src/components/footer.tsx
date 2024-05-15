import Link from "next/link";
import logo from "@public/image/logo-lt.png";
import logod from "@public/image/logo-dk.png";
import { light } from "@constant/values";
import useTheme from "@hooks/useTheme";
import Image from "next/image";
import Button from "./button";
import { IoIosContact, IoLogoLinkedin } from "react-icons/io";
export default function Footer() {
  const { theme } = useTheme();
  return (
    <div
      id="footer"
      className="relative bg-bkg border-accent border-t-[0.5px] text-text w-full h-screen snap-start snap-mandatory flex justify-start items-center pt-[80px] box-border flex-col "
    >
      <div className="h-[75%] w-[80%] flex flex-col md:flex-row justify-center items-center p-10 bg-primary rounded-3xl text-bkg shadow-sm">
        <div className="flex flex-col justify-center items-start h-full w-full md:w-[30%] relative text-left p-2 ">
          <Link className="text-xl md:text-3xl  " href="/">
            Home
          </Link>
          <Link className="text-xl md:text-3xl   pl-6" href="/#purpose">
            Our Purpose
          </Link>
          <Link
            className="text-xl md:text-3xl    pl-6"
            href="/#dataVisualization"
          >
            Data Visualization
          </Link>
          <Link
            className="text-xl md:text-3xl   pl-6"
            href="/#mobileDevelopment"
          >
            Mobile Development
          </Link>
          <Link className="text-xl md:text-3xl   pl-6" href="/#howToHelp">
            Our Services
          </Link>
          <Link className="text-xl md:text-3xl  " href="/projects">
            Projects
          </Link>
          <Link className="text-xl md:text-3xl  " href="/blog">
            Blog
          </Link>
          <Link className="text-xl md:text-3xl  " href="/contact">
            Contact us
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center   md:items-start   relative p-2">
          <div className="w-[70%] h-full flex flex-row items-center self-start box-border">
            <Image
              alt="logo"
              src={theme === light ? logod : logo}
              className="h-auto w-[50%] object-contain"
              priority
            />
          </div>
          <h2 className="text-3xl md:text-5xl text-primary mt-5">
            Have a project for us?
          </h2>
          <p className="text-xl md:text-3xl text-accent mb-5">
            Let us help you to success in the digital age
          </p>
          <Button
            label="Contact us"
            size="sm"
            shadow={false}
            onClick={() => {
              window.location.href = "/contact";
            }}
            icon={<IoIosContact className="h-5 w-5 text-accent" />}
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full md:w-[30%] md:items-start p-2 relative">
          <h2 className="text-xl md:text-3xl mb-5 text-bkg">
            Follow us on social media:
          </h2>
          <button
            role="button"
            type="button"
            aria-label="linkedin"
            className={`h-[50px] w-[50px] rounded-[15px] bg-bkg relative flex items-center justify-center text-lg first:h-[35px] first:w-[35px] text-primary fill-primary`}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/kwaka-tech-inc/",
                "_blank"
              );
            }}
          >
            <IoLogoLinkedin size={35} />
          </button>
        </div>
      </div>
      <div className="h-[25%] w-full flex justify-center items-center">
        <p className="pt-10">Copyright © 2023. Kwaka Tech Inc. Company</p>
      </div>
    </div>
  );
}
