import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
      <a
        href="https://www.linkedin.com/in/sumanth-banisetti-19912a286/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
      >
        <Linkedin className="w-5 h-5 text-white" />
      </a>
      <a
        href="https://github.com/sumanth2354"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
      >
        <Github className="w-5 h-5 text-white" />
      </a>
      <a
        href="mailto:sumanthbanisetti2354@gmail.com"
        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
      >
        <Mail className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};

export default SocialSidebar;