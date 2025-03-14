"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Contact = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Me.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Contact me
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a
          href="https://www.upwork.com/freelancers/abhisesp"
          target="_blank"
          rel="noopener noreferrer">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent cursor-pointer text-white text-sm">
            Contact me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
