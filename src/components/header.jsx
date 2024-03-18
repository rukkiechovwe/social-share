'use client';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const texts = ['Twitter', 'Linkedin', 'Whatsapp', 'Pinterest'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <header className="relative max-w-8xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center text-center h-[50vh]">
        <h1 className="text-4xl md:text-5xl font-bold max-w-[650px] !leading-tight">
          Get Social shareable links for{' '}
          <span className="font-bold gradient">{texts[currentIndex]}</span>
        </h1>
        <button className="flex items-center gap-6px cursor-pointer text-white rounded-lg bg-gray-900 px-3 py-2 text-sm mt-8 md:mt-[42px]">
          Take a tour
        </button>
      </div>
    </header>
  );
}
