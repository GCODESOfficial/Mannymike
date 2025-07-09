'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Samuel Joseph',
    role: 'Creative Director, Propstake',
    rating: 5,
    avatar: '/images/Testimonials1.svg',
    text: `Working with Manny Mike was a game-changer. Their dedication and creativity stood out from day one. They brought fresh, insightful perspectives that significantly enhanced our business UI framework. Absolutely a top-tier designer and collaborator.`,
  },
  {
    name: 'Patrick King',
    role: 'Project Manger',
    rating: 5,
    avatar: '/images/Testimonials2.svg',
    text: `Working with Manny Mike was a game-changer. Their dedication and creativity stood out from day one. They brought fresh, insightful perspectives that significantly enhanced our business UI framework. Absolutely a top-tier designer and collaborator.`,
  },
  {
    name: 'Godwin Aniefiok',
    role: 'Web Designer & No-code Developer',
    rating: 5,
    avatar: '/images/Testimonials3.svg',
    text: `Collaborating with you on design projects is consistently enjoyable. Your adaptability, extensive background, and knack for offering insightful suggestions in brainstorming meetings truly distinguish you. I anticipate engaging in numerous more creative partnerships with you.`,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const handleNext = () => setCurrent((prev) => (prev + 1) % total);

  const { name, role, avatar, rating, text } = testimonials[current];

  return (
    <section className="bg-[#1f1f1f] text-white py-28 px-4 md:px-16 text-center font-[TTFirsNeueReg] rounded-[2rem] md:hidden">
      <h2 className="text-4xl font-bold mb-2 font-[TTFirsNeueBold]">
        Testimonials
      </h2>
      <p className="text-sm text-gray-300 mb-8">
        What clients, Team mates and stakeholders <br />
        have to say about working with me
      </p>

      <div className="bg-[#2c2c2c] rounded-xl p-6 max-w-xl mx-auto shadow-lg text-left space-y-3 mt-20">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-orange-400 mt-2">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-white ml-1">{rating}.0</span>
        </div>

        <p className="text-sm text-white leading-relaxed">{text}</p>
      </div>

      <div className="flex justify-center gap-20 mt-20">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-[#C199D7]  text-white flex items-center justify-center transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-[#C199D7]  text-white flex items-center justify-center transition"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
