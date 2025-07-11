"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-white overflow-hidden">
      <footer className="bg-[#1F1F1F] text-white py-12 pt-20 md:pt-12 px-4 md:px-16 font-[TTFirsNeueReg] rounded-t-[2rem]">
        {/* CTA Section */}
        <div className="md:flex justify-between mx-auto md:text-left space-y-6">
          <h2 className="md:text-5xl text-3xl font-semibold leading-tight">
            Have a Project?
            <br />
            Let’s Discuss
          </h2>

          {/* Buttons */}
          <div className="flex md:justify-center justify-between gap-4 md:h-12 h-14 bg-[#ffffff55] border border-[#C9C9C9] rounded-full p-1">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+2348104283896"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C199D7] text-white px-6 py-2 rounded-full font-medium w-[50%] hover:bg-[#b387f2] transition"
            >
              WhatsApp
              <ArrowRight className="text-white md:hidden -rotate-45  w-5 h-5 font-[TTFirsNeueReg]" />
            </a>

            {/* Email Button */}
            <a
              href="mailto:emi.debrands@gmail.com"
              target="_blank"
              className="md:flex items-center gap-2 px-6 py-2 hidden font-medium"
            >
              Email
            </a>

            <a
              href="mailto:emi.debrands@gmail.com"
              target="_blank"
              className="flex items-center gap-2 md:w-full w-[50%]  justify-center border rounded-full font-medium md:hidden"
            >
              Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="md:my-8 my-14 border-t border-gray-700" />

        {/* Navigation Card */}
        <div className="md:max-w-4xl w-full mx-auto bg-[#1F1F1F] border border-gray-600 rounded-full flex justify-between items-center px-3 py-3 font-light">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={50}
              height={34}
              className="md:w-auto md:h-auto"
            />
          </div>

          <a href="#my-work" className="hover:underline hidden md:block">
            My Work
          </a>
          <a href="#services" className="hover:underline hidden md:block">
            Services
          </a>
          <a href="#testimonials" className="hover:underline hidden md:block">
            Testimonials
          </a>

          <a
            href="https://wa.me/+2348104283896"
            target="_blank"
            className="bg-[#C199D7]  text-black px-4 py-2 rounded-full hover:bg-[#c199d7de] transition md:text-sm text-xs"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Divider */}
        <div className="md:my-8 my-14 border-t border-gray-700" />

        {/* Bottom Section */}
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center  text-gray-400">
          <p className="md:block hidden">
            Copyright© {new Date().getFullYear()} MannyMike. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 mt-10 md:mt-8 md:mr-48">
            <a
              href="https://www.linkedin.com/in/manny-mike-59a356278/"
              target="_blank"
            >
              <Image
                src="/images/socials/LinkedIN.svg"
                alt="LinkedIn"
                width={35}
                height={35}
              />
            </a>
            <a href="https://x.com/Manny_mikee" target="_blank">
              <Image
                src="/images/socials/twitter.svg"
                alt="Twitter"
                width={35}
                height={35}
              />
            </a>
            <a href="https://web.facebook.com/manny.mike.14/" target="_blank">
              <Image
                src="/images/socials/facebook.svg"
                alt="Facebook"
                width={35}
                height={35}
              />
            </a>
            <a
              href="https://www.instagram.com/mannymikee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <Image
                src="/images/socials/instagram.svg"
                alt="Instagram"
                width={35}
                height={35}
              />
            </a>
          </div>

          <p className="md:hidden text-xs pt-20">
            Copyright© {new Date().getFullYear()} MannyMike. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
