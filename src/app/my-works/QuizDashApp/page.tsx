// app/My works/Quiz Dash App/page.tsx

'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function QuizDashAppPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans overflow-hidden py-10 md:pt-52 pt-40">
      {/* Breadcrumb */}
      <div className="mb-20 text-gray-500 px-4 md:px-12 ">
        <Link href="/My works" className="hover:underline">
          My Works
        </Link>{' '}
        &gt; <span className="text-black font-medium">Quiz Dash App</span>
      </div>

      {/* Header */}
      <div className="md:flex justify-between items-center mb-10 px-4 md:px-12">
        <h1 className="md:text-5xl text-4xl text-center md:text-left font-extrabold text-[#2D334A]">Quiz Dash App</h1>
        <div className="md:flex gap-4 hidden">
          <a
            href="https://www.quizdash.app/"
            className="px-8 py-4 border text-lg font-semibold border-black rounded-full text-black hover:bg-black hover:text-white transition"
          >
            View Website
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.owlya.quizdash"
            className="px-8 py-4 text-lg font-semibold bg-[#C199D7] text-black rounded-full flex items-center gap-1 hover:bg-[#aa82c4] transition"
          >
            Download the App
            <ArrowRight className="w-6 h-6 -rotate-45" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-screen text-center relative overflow-hidden">
       
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/replace.svg" // Replace with your actual image path
            alt="Quiz Dash App Screens"
            width={1000}
            height={600}
            className=" w-full h-full"
          />
        </div>
      </section>


      <div className="space-y-5 py-20 md:hidden w-full px-4">
      <a
            href="https://play.google.com/store/apps/details?id=com.owlya.quizdash"
            className=" py-4 font-semibold bg-[#C199D7] text-black rounded-full flex justify-center gap-1 hover:bg-[#aa82c4] transition"
          >
            Download the App
            <ArrowRight className="w-6 h-6 -rotate-45" />
          </a>
          <a
            href="https://www.quizdash.app/"
            className="py-3 border flex justify-center  font-semibold border-black rounded-full text-black hover:bg-black hover:text-white transition"
          >
            View Website
          </a>
         
        </div>
    </main>
  );
}