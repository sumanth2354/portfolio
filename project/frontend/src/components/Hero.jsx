import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: subtle grid + glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to internships &amp; full-time roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold tracking-tight leading-[0.92] mb-6"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 8rem)' }}
        >
          <span className="block text-white">Sumanth</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.18)',
              color: 'transparent',
            }}
          >
            Banisetti
          </span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-white/35 mb-12 tracking-[0.22em] uppercase font-light"
        >
          Full-Stack Developer &nbsp;·&nbsp; IT Student &nbsp;·&nbsp; API &amp; Database Enthusiast
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/sumanth-banisetti-resume.pdf"
            download="Sumanth_Banisetti_Resume.pdf"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/92 active:scale-95 transition-all duration-200 shadow-lg shadow-white/10"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/12 text-white/70 font-medium text-sm hover:bg-white/5 hover:border-white/22 hover:text-white active:scale-95 transition-all duration-200"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/55 transition-colors duration-300 cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
