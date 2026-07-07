"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Phoenix Detailing"
            width={95}
            height={95}
            priority
            className="w-20 h-auto transition duration-300 hover:scale-105 md:w-24"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-12 font-semibold tracking-wide text-white md:flex">

          <Link
            href="/"
            onClick={closeMenu}
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/services"
            className="transition hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            className="transition hover:text-blue-400"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-blue-400"
          >
            Contact
          </Link>

        </nav>
                {/* Desktop Book Button */}

        <Link
          href="https://myservicelink.app/phoenixdetailingli"
          target="_blank"
          className="hidden rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,.45)] md:inline-block"
        >
          Book Now
        </Link>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >

       <nav className="flex flex-col px-8 py-6 text-white">
                  <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-lg transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-lg transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-lg transition hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-lg transition hover:text-blue-400"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="py-4 text-lg transition hover:text-blue-400"
          >
            Contact
          </Link>

          <Link
            href="https://myservicelink.app/phoenixdetailingli"
            target="_blank"
            onClick={closeMenu}
            className="mt-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 text-center font-bold text-white transition duration-300 hover:scale-105"
          >
            Book Now
          </Link>

        </nav>

      </div>

    </header>
  );
}