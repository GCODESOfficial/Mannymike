/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Lock scroll when menu is open (on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[1000001] transition-opacity duration-500"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform z-[1000002] bg-black text-white px-8 ${
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Cancel button inside dropdown */}
        <div className="flex justify-end p-5 pr-0">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-7 h-full -mt-20">
          {[
            { label: "Home", href: "/" },
            { label: "My Work", href: "/#my-work" },
            { label: "Services", href: "/#services" },
            { label: "Testimonials", href: "#testimonials" },
          ].map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-center text-lg transition-opacity delay-[${
                index * 100
              }ms] duration-500`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://wa.me/+2348104283896"
            target="_blank"
            className="bg-[#C199D7] px-4 py-2 text-sm text-center cursor-pointer font-semibold rounded-full text-black"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      {/* Top Nav  Desktop */}
      <div className="w-full md:h-32 bg-white/25 backdrop-blur-md relative z-50 flex justify-center items-center md:fixed font-[TTFirsNeueReg]">
      {/* Dark Nav  */}
        <header className="md:w-10/12 w-11/12 mx-auto text-[16px] md:rounded-full p-[1px] md:top-10 top-5 absolute">
          <div className="px-2 py-2 flex items-center justify-between bg-[#010003] rounded-full ">
            {/* Logo */}
            <div
              className="flex items-center z-40 cursor-pointer md:ml-2"
              onClick={() => router.push("/")}
            >
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={60}
                height={20}
                className="md:w-auto h-auto"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="flex items-center">
              <Link
                href="/#my-work"
                className="text-gray-300 text-lg hover:text-white hover:bg-white/20 hover:backdrop-blur-lg rounded-full px-10 py-2 hidden md:block"
              >
                My Work
              </Link>
              <Link
                href="/#services"
                className="text-gray-300 text-lg hover:text-white hover:bg-white/20 hover:backdrop-blur-lg rounded-full px-10 py-2 hidden md:block"
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 text-lg hover:text-white hover:bg-white/20 hover:backdrop-blur-lg rounded-full px-10 py-2 hidden md:block"
              >
                Testimonials
              </Link>
            </nav>

            {/* Launch Button */}
            <a
              href="https://wa.me/+2348104283896"
              target="_blank"
              className="button-glow hidden md:block font-semibold bg-[#C199D7] px-8 py-2 cursor-pointer rounded-full text-black"
            >
              Let's Work Together
            </a>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex gap-2">
              <a
                href="https://wa.me/+2348104283896"
                target="_blank"
                className="button-glow font-semibold bg-[#C199D7] px-4 py-2 cursor-pointer rounded-full text-black text-xs"
              >
                Let's Work Together
              </a>

              <button
                className="z-50 flex items-center gap-1 text-white transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
