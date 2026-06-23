import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sumanth-banisetti-19912a286/',
    label: 'LinkedIn',
    external: true,
  },
  {
    icon: Github,
    href: 'https://github.com/sumanth2354',
    label: 'GitHub',
    external: true,
  },
  {
    icon: Mail,
    href: 'mailto:sumanthbanisetti2354@gmail.com',
    label: 'Email',
    external: false,
  },
];

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/8 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-white mb-3 tracking-tight">
              Sumanth Banisetti
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Full-Stack Developer passionate about building scalable web applications and
              modern digital experiences.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  title={label}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/18 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-white/55 hover:text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold text-white/40 tracking-[0.22em] uppercase mb-5">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-white/45 hover:text-white/80 text-sm transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[11px] font-semibold text-white/40 tracking-[0.22em] uppercase mb-5">
              Contact
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:sumanthbanisetti2354@gmail.com"
                className="block text-white/45 hover:text-white/80 text-sm transition-colors duration-200 break-all"
              >
                sumanthbanisetti2354@gmail.com
              </a>
              <p className="text-white/40 text-sm">Eluru, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Sumanth Banisetti. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/18 text-white/40 hover:text-white/70 text-xs transition-all duration-200"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
