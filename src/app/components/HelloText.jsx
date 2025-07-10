import React, { useState, useEffect } from 'react';

export default function HelloButton() {
  const greetings = ['Hello!', 'Hola!', 'Bonjour!', 'Hallo!', 'Ciao!', 'Olá!'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button className="px-5 py-2 md:text-sm text-xs border border-black rounded-full md:mt-4 mt-2">
      {greetings[index]}
    </button>
  );
}
