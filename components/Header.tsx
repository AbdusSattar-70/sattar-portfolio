"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if scrolling up, hide if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full h-16 transition-transform duration-300 z-50 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } bg-white dark:bg-background shadow-md`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-6 h-6" />
        </Link>

        {/* Desktop navigation and mode toggler */}
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
