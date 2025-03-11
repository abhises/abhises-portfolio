"use client"; // Required for hooks in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Install: npm install lucide-react
import { navLinks } from "@/app/constants/navLinks";
const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center gap-6 text-2xl">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`pb-2 border-b-2 transition-all ${
              pathname === link.path ? "border-white" : "border-transparent"
            } hover:border-white`}>
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex justify-between items-center">
        <button onClick={toggleMenu} className="text-white cursor-pointer">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`py-2 border-b-2 transition-all ${
                pathname === link.path ? "border-white" : "border-transparent"
              } hover:border-white`}
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
