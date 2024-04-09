import Link from "next/link";
import logo from "@public/image/logo-lt.png";
import Image from "next/image";
import Button from "./button";
import { IoIosContact, IoLogoLinkedin } from "react-icons/io";
export default function Footer() {
  return (
    <div
      id="footer"
      className="relative bg-bkg border-accent border-t-[0.5px] text-text w-full h-screen snap-start snap-mandatory flex justify-evenly items-center pt-[80px] box-border flex-col md:flex-row "
    >
      <div className="flex flex-col justify-center items-start h-full w-full md:w-[30%] relative text-left p-5 md:p-0">
        <Link className="text-3xl  text-accent" href="/">
          Home
        </Link>
        <Link className="text-3xl text-accent pl-3" href="/#purpose">
          Our Purpose
        </Link>
        <Link className="text-3xl  text-accent pl-3" href="/#dataVisualization">
          Data Visualization
        </Link>
        <Link className="text-3xl text-accent pl-3" href="/#mobileDevelopment">
          Mobile Development
        </Link>
        <Link className="text-3xl text-accent pl-3" href="/#howToHelp">
          Our Services
        </Link>
        <Link className="text-3xl text-accent" href="/projects">
          Projects
        </Link>
        <Link className="text-3xl text-accent" href="/blog">
          Blog
        </Link>
        <Link className="text-3xl text-accent" href="/contact">
          Contact us
        </Link>
        <p className="pt-10">Copyright © 2023. Kwaka Tech Inc. Company</p>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:items-start md:p-0 relative">
        <div className="w-[40%] h-full flex flex-row items-center self-start box-border">
          <Image
            alt="logo"
            src={logo}
            className="h-full w-[auto] object-contain"
            priority
          />
        </div>
        <h2 className="text-5xl text-primary mt-5">Have a project for us? </h2>
        <p className="text-3xl text-accent mb-5">
          Let us help you to success in the digital age
        </p>
        <Button
          label="Contact us"
          size="sm"
          onClick={() => {
            window.location.href = "/contact";
          }}
          icon={<IoIosContact className="h-5 w-5 text-accent" />}
        />
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full md:w-[30%] p-5 md:items-start md:p-0 relative">
        <h2 className="text-3xl text-accent mb-5">
          Follow us on social media:
        </h2>
        <button
          role="button"
          type="button"
          aria-label="linkedin"
          className={`h-[50px] w-[50px] rounded-[15px] bg-bkg relative flex items-center justify-center shadow-light text-lg first:h-[35px] first:w-[35px] text-primary fill-primary`}
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
  );
}
