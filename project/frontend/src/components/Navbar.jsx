import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certs' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    }).filter(Boolean);
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/88 shadow-2xl shadow-black/40' : 'bg-black/55'
        } backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5`}
      >
        <div className="flex items-center gap-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="text-lg font-bold text-white tracking-tight shrink-0 hover:text-white/80 transition-colors duration-200"
          >
            SB
          </button>

          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-white/10" />

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-0.5 text-sm">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-3.5 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  activeSection === id
                    ? 'text-white bg-white/12'
                    : 'text-white/55 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Resume button */}
          <a
            href="/sumanth-banisetti-resume.pdf"
            download="Sumanth_Banisetti_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 active:scale-95 transition-all duration-200"
          >
            <Download className="w-3 h-3" />
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200 text-white/70"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 w-60 bg-black/92 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col gap-0.5"
          >
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                  activeSection === id
                    ? 'text-white bg-white/10'
                    : 'text-white/55 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="border-t border-white/8 mt-1 pt-1">
              <a
                href="/sumanth-banisetti-resume.pdf"
                download="Sumanth_Banisetti_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
