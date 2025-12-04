import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80' : 'bg-black/60'
      } backdrop-blur-lg border border-white/10 rounded-full px-8 py-3`}
    >
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-white">VG</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Contact
          </button>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;