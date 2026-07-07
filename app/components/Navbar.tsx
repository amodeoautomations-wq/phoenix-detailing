"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Phoenix Detailing"
            width={95}
            height={95}
            priority
            className="h-auto w-20 transition duration-300 hover:scale-105 md:w-24"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-12 font-semibold tracking-wide text-white">

          <Link
            href="/"
            scroll
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="transition duration-300 hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition duration-300 hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/services"
            className="transition duration-300 hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/#gallery"
            className="transition duration-300 hover:text-blue-400"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="transition duration-300 hover:text-blue-400"
          >
            Contact
          </Link>

        </nav>

        {/* Book Button */}

        <Link
          href="https://myservicelink.app/phoenixdetailingli"
          target="_blank"
          className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,.45)]"
        >
          Book Now
        </Link>

      </div>
    </header>
  );
}