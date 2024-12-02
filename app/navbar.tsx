"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const navLinks = [
    { href: "/", label: "Нүүр" },
    { href: "/service", label: "Монголын гайхамшигууд" },
    { href: "/product", label: "Аялалын брэндүүд" },
    { href: "/amralt", label: "Амралтын газрууд" },

    { href: "/contact", label: "Холбоо барих" },
  ];

  return (
    <nav className="flexBetween max-container padding-container bg-gray-200 z-30 py-5 items-center sticky top-0">
      <Link href="/">
        <div className="flex text-2xl font-bold items-center justify-center hover:cursor-pointer">
          <span className="text-green-500">Wel</span>
          <span className="text-black">come</span>
        </div>
      </Link>

      <div className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            <div
              className={`group relative p-2 rounded-md ${
                activeLink === link.href ? "bg-green-100" : ""
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
              <span className="absolute top-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
              <span className="text-black font-bold text-md hover:text-green-500">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
              <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
