"use client"; // Required for hooks in Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="flex items-center justify-center gap-4 text-2xl bg-gray-800 text-white">
      {[
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Resume", path: "/resume" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ].map((link) => (
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
  );
};

export default Navbar;
