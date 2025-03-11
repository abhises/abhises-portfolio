export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];
