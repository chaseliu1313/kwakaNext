"use client";
import React, { useState } from "react";
import useTheme from "@hooks/useTheme";
import { motion } from "framer-motion";
import { light } from "@constant/values";
import { useLanguage } from "@hooks/useLanguage";
import Lottie from "lottie-react";
import contactL from "@public/animation/kwaka_contact_lt.json";
import contactD from "@public/animation/kwaka_contact_dk.json";
import { useRouter } from "next/navigation";
import Button from "@component/button";
import { HiMailOpen } from "react-icons/hi";

type ContactDetail = {
  name: string | undefined;
  number: string | undefined;
  email: string | undefined;
  message: string | undefined;
};
type Err = {
  err: boolean;
  msg: string;
};
type ContactError = {
  name: Err;
  number: Err;
  email: Err;
  message: Err;
};

const defaultErr: Err = { err: false, msg: "" };

const Contact = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const router = useRouter();
  const [contactInput, setContactInput] = useState<ContactDetail>({
    name: "",
    number: undefined,
    email: "",
    message: "",
  });
  const [inputErr, setInputErr] = useState<ContactError>({
    name: defaultErr,
    number: defaultErr,
    email: defaultErr,
    message: defaultErr,
  });

  function handleValidation(
    v: string,
    key: "name" | "email" | "number" | "message"
  ): boolean {
    switch (key) {
      case "name":
        if (v.length > 30) {
          setInputErr({
            ...inputErr,
            name: { err: true, msg: "That's probably too long :)" },
          });
          return true;
        } else {
          setInputErr({
            ...inputErr,
            name: defaultErr,
          });
          return defaultErr.err;
        }

      case "email":
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v)) {
          setInputErr({
            ...inputErr,
            email: {
              err: true,
              msg: "That doesn't look like an email adress.",
            },
          });
          return true;
        } else {
          setInputErr({
            ...inputErr,
            email: defaultErr,
          });
          return defaultErr.err;
        }

      case "number":
        if (!/^\d+$/.test(v)) {
          setInputErr({
            ...inputErr,
            number: { err: true, msg: "We need real numbers :)." },
          });
          return true;
        } else if (v.length > 11 && v.length < 10) {
          setInputErr({
            ...inputErr,
            number: {
              err: true,
              msg: "That doesn't look like a phone number.",
            },
          });
          return true;
        } else {
          setInputErr({
            ...inputErr,
            number: defaultErr,
          });
          return defaultErr.err;
        }

      case "message":
        if (v) {
          setInputErr({
            ...inputErr,
            message: { err: true, msg: "Please add your message." },
          });
          return true;
        } else {
          return defaultErr.err;
        }

      default:
        return false;
    }
  }

  function handleInputChnage(
    v: string,
    key: "name" | "email" | "number" | "message"
  ) {
    switch (key) {
      case "name":
        handleValidation(v, "name");
        setContactInput({ ...contactInput, name: v });
        break;
      case "email":
        setContactInput({ ...contactInput, email: v });
        break;
      case "number":
        setContactInput({ ...contactInput, number: v });

        break;
      case "message":
        handleValidation(v, "message");
        setContactInput({ ...contactInput, message: v });
        break;

      default:
        break;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="h-[92vh] w-full flex flex-col-reverse md:flex-row justify-evenly items-center overflow-hidden"
    >
      <div
        className={`h-[15%] w-[80%] md:h-[40%] md:w-[50%] lg:h-[500px] lg:w-[500px] bg-bkg rounded-[50px] ${
          theme === light ? "shadow-light" : "shadow-dark"
        }`}
      >
        <Lottie
          animationData={theme === light ? contactL : contactD}
          className="h-full w-full"
        />
      </div>
      <div
        className={`h-[80%] w-full md:h-[400px] md:w-[400px] lg:h-[80%] lg:w-[50%] flex flex-col justify-center items-center   `}
      >
        <h1 className="text-text text-[4rem] lg:text-[6rem] font-extrabold">
          {lang.contactUs}
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row  justify-start md:justify-evenly items-center">
          <form className="md:w-[50%]">
            <div className="relative h-10 w-full mb-8">
              <input
                required
                aria-required
                maxLength={25}
                onChange={(e) => {
                  handleInputChnage(e.target.value, "name");
                }}
                value={contactInput.name}
                type="text"
                className={`peer h-full w-full ${
                  theme === light ? "shadow-insetInput" : "shadow-dark"
                } border-0  focus:border-error focus:ring focus:ring-accent rounded-xl p-2 bg-bkg text-text outline outline-0 transition-all placeholder-shown:border-accent`}
              />
              <label
                className={`after:content[''] pointer-events-none absolute left-2 text-sm text-text leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-xs peer-focus:leading-tight peer-focus:text-text peer-focus:after:scale-x-100 peer-focus:-top-6 peer-placeholder-shown:-top-6 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-text ${
                  contactInput.name ? "-top-6" : "top-2"
                }`}
              >
                {lang.name}
                {contactInput.name
                  ? " " + contactInput.name.length + "/25"
                  : ""}
              </label>
            </div>
            <div className="relative h-10 w-full mb-8">
              <input
                required
                aria-required
                onChange={(e) => {
                  handleInputChnage(e.target.value, "email");
                }}
                onBlur={(e) => {
                  handleValidation(e.target.value, "email");
                }}
                type="email"
                value={contactInput.email}
                className={`peer h-full w-full ${
                  theme === light ? "shadow-insetInput" : "shadow-dark"
                } ${
                  inputErr.email.err
                    ? "  ring-1  ring-danger focus:border-danger focus:ring focus:ring-danger"
                    : " focus:border-accent focus:ring focus:ring-accent"
                } border-0 ring-0 focus:border-accent focus:ring focus:ring-accent rounded-xl p-2 bg-bkg text-text outline outline-0 transition-all placeholder-shown:border-accent invalid:border-error`}
              />
              <label
                className={`after:content[''] pointer-events-none absolute left-2 text-sm text-text leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-xs peer-focus:leading-tight peer-focus:text-text peer-focus:after:scale-x-100 peer-focus:-top-6 peer-placeholder-shown:-top-6 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-text ${
                  contactInput.email ? "-top-6" : "top-2"
                }`}
              >
                {lang.email}
                <span className="text-xs text-danger ml-2">
                  {inputErr.email.msg}
                </span>
              </label>
            </div>
            <div className="relative h-10 w-full mb-8">
              <input
                required
                aria-required
                type="tel"
                onChange={(e) => {
                  handleInputChnage(e.target.value, "number");
                }}
                onBlur={(e) => {
                  const value = e.target.value
                    .replaceAll("-", "")
                    .replaceAll("(", "")
                    .replaceAll(")", "")
                    .replaceAll(" ", "");
                  const hasErr = handleValidation(value, "number");
                  console.log(hasErr);
                  if (hasErr) {
                    setContactInput({ ...contactInput, number: "" });
                  } else {
                    setContactInput({ ...contactInput, number: value });
                  }

                  console.log(value);
                }}
                value={contactInput.number}
                className={`peer h-full w-full ${
                  theme === light ? "shadow-insetInput" : "shadow-dark"
                } ${
                  inputErr.number.err
                    ? "  ring-1  ring-danger focus:border-danger focus:ring focus:ring-danger"
                    : " focus:border-accent focus:ring focus:ring-accent"
                }
                border-0   rounded-xl p-2 bg-bkg text-text outline outline-0 transition-all placeholder-shown:border-accent`}
              />
              <label
                className={`after:content[''] pointer-events-none absolute left-2 text-sm text-text leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-xs peer-focus:leading-tight peer-focus:text-text peer-focus:after:scale-x-100 peer-focus:-top-6 peer-placeholder-shown:-top-6 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-text ${
                  contactInput.number ? "-top-6" : "top-2"
                }`}
              >
                {lang.number}
                <span className="text-xs text-danger ml-2">
                  {inputErr.number.msg}
                </span>
              </label>
            </div>
            <div className="relative h-[200px] w-full">
              <textarea
                required
                maxLength={300}
                onChange={(e) => {
                  handleInputChnage(e.target.value, "message");
                }}
                autoCorrect="true"
                aria-required
                value={contactInput.message}
                className={`peer h-full w-full ${
                  theme === light ? "shadow-insetInput" : "shadow-dark"
                } border-0  focus:border-accent focus:ring focus:ring-accent rounded-xl p-2 bg-bkg text-text outline outline-0 transition-all placeholder-shown:border-accent`}
              />
              <label
                className={`after:content[''] pointer-events-none absolute left-2 text-sm text-text leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-xs peer-focus:leading-tight peer-focus:text-text peer-focus:after:scale-x-100 peer-focus:-top-6 peer-placeholder-shown:-top-6 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-text ${
                  contactInput.message ? "-top-6" : "top-2"
                }`}
              >
                {lang.message}
                {contactInput.message
                  ? " " + contactInput.message.length + " /300"
                  : ""}
              </label>
            </div>
          </form>
          <div className="mt-3 md:mt-0 md:w-[30%]">
            <Button
              label={lang.send}
              size="lg"
              onClick={() => {
                router.back();
              }}
              icon={<HiMailOpen className="h-4 w-4 text-accent" />}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
