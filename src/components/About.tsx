"use client";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";

const About = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center gap-5 max-w-md mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-xl">
          <Image
            width={200}
            height={200}
            className="rounded-full"
            src="/assets/profileimage.jpg"
            alt="image"
          />
          <p>
            A full-stack developer is not just a builder of applications, but a
            bridge between the front-end and back-end, turning ideas into
            seamless, dynamic experiences across the web.
          </p>
        </motion.h1>
      </LampContainer>
    </>
  );
};

export default About;
