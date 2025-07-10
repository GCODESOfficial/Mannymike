'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Samuel Joseph',
    role: 'Creative Director, Propstake',
    rating: 5,
    avatar: '/images/Testimonials1.svg', // Replace with real avatar
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

export default function VerticalTestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ top: 220, behavior: 'smooth' });

        // Reset scroll when reaching the bottom
        if (
          containerRef.current.scrollTop + containerRef.current.clientHeight >=
          containerRef.current.scrollHeight - 10
        ) {
          containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-[#1F1F1F] text-white py-16 px-6 md:px-20 rounded-t-[2rem] my-4 font-[TTFirsNeueReg] hidden md:block">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <div className="flex space-x-[-10px] mb-10">
            {[1, 2, 3].map(i => (
              <Image
                key={i}
                src={`/images/Testimonials${i}.svg`} // Replace with real paths
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-[#1C1B22]"
              />
            ))}
          </div>
          <h2 className="text-4xl font-semibold mb-2">Testimonials</h2>
          <p className="text-gray-400 mb-10 max-w-lg">
            What clients, Team mates and Stakeholders have to say about working with me
          </p>
          <a
          href="https://wa.me/+2348104283896"
          target="_blank" 
          className="bg-[#C199D7] hover:bg-[#b387f2] text-black font-semibold py-2 px-5 rounded-full inline-flex items-center">
            Hire me <span className="ml-2">→</span>
          </a>
        </div>

        {/* Right: Vertical Carousel */}
        <div
          ref={containerRef}
          className="space-y-6 h-[500px] overflow-y-auto scroll-smooth hide-scrollbar"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-white/10 backdrop-blur-md shadow-md h-[300px] flex items-end"
            >
               {/* Background image */}
  <Image
    src="/images/Testimonials.svg"
    alt="Background"
    fill
    className="object-cover object-center absolute inset-0 z-0 rounded-3xl "
  />

  {/* Foreground content */}
  <div className="relative z-10">

              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="flex items-center text-orange-400 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-white ml-2">{t.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-300 text-sm">{t.text}</p>
            </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}