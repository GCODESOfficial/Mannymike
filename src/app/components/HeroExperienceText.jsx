import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: `“Working with Manny was a game-changer. His dedication and creativity stood out from day one. He brought fresh, insightful perspectives that significantly enhanced our business UI framework. Absolutely a top-tier designer and collaborator.”`,
      author: 'Patrick King, Project Manager',
    },
    {
      quote: `“Manny’s attention to detail and design strategy helped us launch a product that truly resonated with users. Highly recommended for any ambitious team.”`,
      author: 'Sarah Chen, Product Lead',
    },
    {
      quote: `“An exceptional designer with strategic thinking. Manny transformed complex ideas into simple, intuitive designs for our app.”`,
      author: 'David Smith, Founder & CEO',
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
