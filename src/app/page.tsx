import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />

      <div id="/">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default page;
