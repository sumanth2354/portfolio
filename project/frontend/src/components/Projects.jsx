import React, { useState } from 'react';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    title: 'DesignConnect',
    description:
      'A full-stack platform where users can discover and book talented designers. Features designer registration, personalized dashboards, editable profiles, client-side designer browsing with messaging, and secure backend integration.',
    // Replace these with actual screenshots when ready
    images: [],
    date: '2024-06-01',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Multer'],
    github: 'https://github.com/sumanth2354/designconnect',
    live: 'https://designconnect-navy.vercel.app',
    category: 'Full-Stack Platform',
    color: 'from-blue-600/20 to-indigo-600/10',
    accent: 'border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  },
  {
    title: 'VoiceOverAI',
    description:
      'An AI-powered web application that dubs uploaded videos into 40+ languages using Whisper for transcription, TranslatePy for translation, and Google TTS for speech synthesis. Supports major Indian and global languages with real-time progress tracking.',
    images: [],
    date: '2024-09-01',
    tech: ['Python', 'Flask', 'OpenAI Whisper', 'Google TTS', 'TranslatePy', 'FFmpeg'],
    github: 'https://github.com/sumanth2354/VoiceOverAI',
    live: null,
    category: 'AI / Machine Learning',
    color: 'from-purple-600/20 to-pink-600/10',
    accent: 'border-purple-500/30',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  },
  {
    title: 'IT Attendance System',
    description:
      'A modern, secure web-based attendance management system for the IT Department. Features dedicated teacher and student portals, real-time attendance tracking, weekly/monthly/full-term report generation, CSV export, and role-based authentication.',
    images: [],
    date: '2024-11-01',
    tech: ['Node.js', 'Express.js', 'EJS', 'PostgreSQL', 'bcrypt', 'Neon Cloud'],
    github: 'https://github.com/sumanth2354/ITAttendance',
    live: 'https://it-attendance01.vercel.app',
    category: 'Web Application',
    color: 'from-emerald-600/20 to-teal-600/10',
    accent: 'border-emerald-500/30',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
];

const ImagePlaceholder = ({ title, color, accent }) => (
  <div
    className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${color} border ${accent} rounded-2xl gap-4`}
  >
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
      <ImageIcon className="w-10 h-10 text-white/30" />
    </div>
    <div className="text-center px-4">
      <p className="text-white/30 text-sm font-medium">{title}</p>
      <p className="text-white/20 text-xs mt-1">Screenshot coming soon</p>
    </div>
  </div>
);

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  return (
    <section id="projects" className="min-h-screen py-24 px-8 md:px-16 lg:px-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-3xl bg-gradient-to-br ${project.color} border ${project.accent} hover:border-white/20 transition-all duration-300`}
            >
              {/* Image / Placeholder Area */}
              <div className="relative rounded-2xl overflow-hidden bg-black/30 aspect-video">
                {project.images.length > 0 ? (
                  <>
                    <img
                      src={project.images[currentImageIndex[projectIndex] || 0]}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({ ...prev, [projectIndex]: idx }))
                            }
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              (currentImageIndex[projectIndex] || 0) === idx
                                ? 'bg-white w-6'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <ImagePlaceholder title={project.title} color={project.color} accent={project.accent} />
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Category badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${project.badge} mb-4`}
                  >
                    {project.category}
                  </span>

                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on GitHub"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-white/70 text-base mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-white/40 text-sm mb-5">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/sumanth2354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white font-medium transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;