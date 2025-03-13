"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { navItems } from "@/data/navItems";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu);

  return (
    <>
      <div className="grid grid-cols-12 mt-4">
        <div className="mx-2  my-1 md:hidden">
          <Menu className="cursor-pointer" onClick={toggle} />
        </div>
        <nav className="col-span-10 md:col-span-11 flex justify-center items-center">
          <ul
            className={`${
              toggleMenu
                ? "flex flex-col gap-2 mt-15"
                : "hidden md:flex flex-col md:flex-row gap-4"
            }`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-1 flex flex-col-reverse gap-1 justify-end  mx-2">
          <ModeToggle />
          {toggleMenu ? (
            <>
              <X
                className="ml-1 mt-1 cursor-pointer md:hidden"
                onClick={() => setToggleMenu(false)}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default NavBar;
