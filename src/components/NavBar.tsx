import React from "react";
import { ModeToggle } from "./ModeToggle";
import { navItems } from "@/data/navItems";
import Link from "next/link";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className="grid grid-cols-12 mt-4">
        <div className="mx-2 md:hidden">
          <Menu className="cursor-pointer" />
        </div>
        <nav className="col-span-10 md:col-span-11 flex justify-center items-center">
          <ul className="hidden md:flex flex-col md:flex-row gap-4  ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-1 flex justify-end items-center mx-3">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default NavBar;
