"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <nav className="flexBetween max-container padding-container bg-gray-200 z-30 py-5 items-center sticky top-0">
      <Link href="/">
        <div className="flex text-2xl font-bold items-center justify-center hover:cursor-pointer">
          <p className="text-green-500">Wel</p>
          <p className="text-black">come</p>
        </div>
      </Link>

      <div className="hidden h-full gap-12 lg:flex">
        <Link href="/">
          <p
            className={`group relative p-2 rounded-md ${
              activeLink === "/" ? "bg-green-100" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute top-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
            <p className="text-black font-bold text-md hover:text-green-500">
              Нүүр
            </p>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
          </p>
        </Link>

        <Link href="/service">
          <p
            className={`group relative p-2 rounded-md ${
              activeLink === "/service" ? "bg-green-100" : ""
            }`}
            onClick={() => handleLinkClick("/service")}
          >
            <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute top-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
            <p className="text-black font-bold text-md hover:text-green-500">
              Монголын гайхамшигууд
            </p>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
          </p>
        </Link>

        <Link href="/product">
          <p
            className={`group relative p-2 rounded-md ${
              activeLink === "/product" ? "bg-green-100" : ""
            }`}
            onClick={() => handleLinkClick("/product")}
          >
            <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute top-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
            <p className="text-black font-bold text-md hover:text-green-500">
              Аялалын брэндүүд
            </p>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
          </p>
        </Link>

        <Link href="/amralt">
          <p
            className={`group relative p-2 rounded-md ${
              activeLink === "/amralt" ? "bg-green-100" : ""
            }`}
            onClick={() => handleLinkClick("/shop")}
          >
            <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute top-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
            <p className="text-black font-bold text-md hover:text-green-500">
              Амралтын газрууд
            </p>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
          </p>
        </Link>

        <Link href="/contactUs">
          <p
            className={`group relative p-2 rounded-md ${
              activeLink === "/contactUs" ? " bg-green-100" : ""
            }`}
            onClick={() => handleLinkClick("/contactUs")}
          >
            <span className="absolute top-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute top-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>

            <p className="text-black font-bold text-md hover:text-green-500">
              Аялаллын багаж хэрэгсэлүүд
            </p>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:left-0"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 ease-out group-hover:w-1/2 group-hover:right-0"></span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
