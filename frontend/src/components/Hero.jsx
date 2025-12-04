import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Diagonal gradient overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[150%] bg-gradient-to-br from-gray-800/30 via-transparent to-transparent rotate-[-15deg]"></div>
          <div className="absolute top-[-10%] right-[-15%] w-[50%] h-[140%] bg-gradient-to-bl from-gray-700/20 via-transparent to-transparent rotate-[15deg]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tight">
          <span className="block text-white">Sumanth Banisetti</span>
          <span
            className="block text-transparent"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
              textStroke: '2px rgba(255, 255, 255, 0.3)',
            }}
          >
            Sumanth Banisetti
          </span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;