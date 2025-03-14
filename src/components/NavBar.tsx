"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { navItems } from "@/data/navItems";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu);
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="md:fixed top-0 left-0 w-full md:z-50 shadow-md">
        <div className="grid grid-cols-12 mx-4 my-4 sm:overflow-x-hidden">
          <div className="my-1 md:hidden">
            <Menu className="cursor-pointer" onClick={toggle} />
          </div>
          <nav className="col-span-9 md:col-span-11 flex justify-center items-center">
            <ul className="hidden md:flex flex-col md:flex-row gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.path.startsWith("#") ? (
                    <Link
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor behavior
                        handleScroll(item.path.substring(1)); // Remove '#' and scroll to the target
                      }}>
                      {item.name}
                    </Link>
                  ) : (
                    <Link href={item.path}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 md:col-span-1 flex gap-2">
            <ModeToggle />

            {toggleMenu ? (
              <X
                size={24}
                className="cursor-pointer mt-1  md:hidden"
                onClick={() => setToggleMenu(false)}
              />
            ) : null}
          </div>
        </div>
        {toggleMenu ? (
          <div className="mx-4 h-screen relative ">
            <ul className="flex flex-col md:hidden gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
