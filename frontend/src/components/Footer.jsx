import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-8 md:px-16 lg:px-32 border-t border-white/10 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Sumanth Banisetti</h3>
            <p className="text-white/60 leading-relaxed">
              Full-Stack Developer passionate about building scalable applications and creating
              modern digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/60 hover:text-white text-left transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/60 hover:text-white text-left transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white/60 hover:text-white text-left transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="text-white/60 hover:text-white text-left transition-colors duration-200"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/60 hover:text-white text-left transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/60 hover:text-white text-left transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact & Networks */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact & Networks</h4>
            <div className="space-y-3">
              <a
                href="mailto:sumanth@example.com"
                className="block text-white/60 hover:text-white transition-colors duration-200"
              >
                sumanth@example.com
              </a>
              <p className="text-white/60">Hyderabad, India</p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://linkedin.com/in/sumanth-banisetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com/sumanthbanisetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Sumanth Banisetti. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                Legal Notices
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;