import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: `“Working with Manny was a game-changer. His dedication and creativity stood out from day one. He brought fresh, insightful perspectives that significantly enhanced our business UI framework. Absolutely a top-tier designer and collaborator.”`,
      author: 'Patrick King, Project Manager',
    },
    {
      quote: `“Collaborating with you on design projects is consistently enjoyable. Your adaptability, extensive background, and knack for offering insightful suggestions in brainstorming meetings truly distinguish you. I anticipate engaging in numerous more creative partnerships with you.”`,
      author: 'Godwin Aniefiok, Web Designer & No-code Developer',
    },
    {
      quote: `“Working with Manny Mike was a game-changer. Their dedication and creativity stood out from day one. They brought fresh, insightful perspectives that significantly enhanced our business UI framework. Absolutely a top-tier designer and collaborator.”`,
      author: 'Samuel Joseph, Creative Director, Propstake',
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length); // change testimonial
        setFade(true); // fade in
      }, 500); // fade out duration (matches CSS)
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transition-opacity duration-500 ease-in-out" style={{ opacity: fade ? 1 : 0 }}>
      <p className="mb-4 md:w-sm text-xs md:text-base text-center md:text-left px-10 md:px-0">
        {testimonials[index].quote.split('He').length > 1 ? (
          <>
            {testimonials[index].quote.split('He')[0]}
            <strong className="text-black">He{testimonials[index].quote.split('He')[1]}</strong>
          </>
        ) : (
          testimonials[index].quote
        )}
      </p>
      <p className="font-semibold text-sm md:text-base text-center md:text-left text-black">
        {testimonials[index].author}
      </p>
    </div>
  );
}
