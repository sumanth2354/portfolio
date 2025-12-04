import React from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">About</h2>
          <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-white/10">
              <img
                src="https://via.placeholder.com/400x400/1a1a1a/666666?text=Profile+Photo"
                alt="Sumanth Banisetti"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white/50 text-sm mt-4">📸 Professional Photo</p>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <p className="text-4xl font-bold text-white mb-2">Sumanth</p>
              <p className="text-5xl font-bold text-white mb-6">Banisetti</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Hyderabad
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white">
                  Full-Stack Development
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white">
                  Android Development
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white">
                  Web Applications
                </span>
              </div>

              <p className="text-white/70 text-lg leading-relaxed">
                Full-Stack Developer passionate about building scalable and user-friendly applications.
                Experienced in Android and Web development, I create seamless digital experiences by
                combining modern technologies with clean code practices.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">My Education</h3>

              <div className="relative pl-8 border-l-2 border-white/20">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#0f0f10]"></div>
                <div className="pb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white uppercase tracking-wide">
                      Bachelor of Technology
                    </h4>
                    <span className="text-sm text-white/50">2020 - 2024</span>
                  </div>
                  <p className="text-white/70">Computer Science Engineering</p>
                </div>

                <div className="absolute left-[-9px] top-28 w-4 h-4 rounded-full bg-white/50 border-4 border-[#0f0f10]"></div>
                <div className="pb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white uppercase tracking-wide">
                      Full-Stack Development
                    </h4>
                    <span className="text-sm text-white/50">2023 - 2024</span>
                  </div>
                  <p className="text-white/70">Advanced Web Technologies & Frameworks</p>
                </div>

                <div className="absolute left-[-9px] top-56 w-4 h-4 rounded-full bg-white/50 border-4 border-[#0f0f10]"></div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white uppercase tracking-wide">
                      High School
                    </h4>
                    <span className="text-sm text-white/50">2018 - 2020</span>
                  </div>
                  <p className="text-white/70">Science & Mathematics</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              View my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;