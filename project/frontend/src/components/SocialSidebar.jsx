import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const links = [
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

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2.5"
    >
      {links.map(({ icon: Icon, href, label, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          title={label}
          className="group relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 transition-all duration-200"
        >
          <Icon className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-200" />
          {/* Tooltip */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10 text-white/70 text-xs whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            {label}
          </span>
        </a>
      ))}
      {/* Decorative line */}
      <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent mt-1" />
    </motion.div>
  );
};

export default SocialSidebar;
