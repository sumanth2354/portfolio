import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Layers } from 'lucide-react';

const projects = [
  {
    title: 'TeleCloud',
    description:
      'A self-hosted web application that turns Telegram into personal cloud storage. Upload up to 2 GB per file with drag-and-drop, organize into virtual folders, search and preview files in-browser, and share files via password-protected expiring links — all with Fernet-encrypted storage and CSRF + rate-limit protection.',
    date: '2025-08-18',
    tech: ['Python', 'Flask', 'Telethon', 'Cryptography', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sumanth2354/telecloud',
    live: null,
    category: 'Cloud Storage App',
    color: 'from-cyan-600/12 to-sky-600/6',
    border: 'border-cyan-500/18',
    accent: 'text-cyan-400',
    badge: 'bg-cyan-500/12 text-cyan-300 border-cyan-500/22',
    liveBadge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25 hover:bg-cyan-500/25',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    letter: 'TC',
    featured: true,
  },
  {
    title: 'Smart Leads Dashboard',
    description:
      'A production-ready full-stack CRM for managing sales leads with JWT-based auth and role-based access (Admin vs Sales). Includes paginated lead tables, advanced filtering by status/source/text, CSV export, a statistics dashboard, and dark mode with system-preference detection.',
    date: '2026-05-20',
    tech: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT'],
    github: 'https://github.com/sumanth2354/internshala',
    live: null,
    category: 'Full-Stack CRM',
    color: 'from-violet-600/12 to-indigo-600/6',
    border: 'border-violet-500/18',
    accent: 'text-violet-400',
    badge: 'bg-violet-500/12 text-violet-300 border-violet-500/22',
    liveBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/25 hover:bg-violet-500/25',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
    letter: 'SL',
    featured: true,
  },
  {
    title: 'DesignConnect',
    description:
      'A full-stack platform where users can discover and book talented designers. Features designer registration, personalized dashboards, editable profiles, client-side browsing with messaging, and secure backend integration.',
    date: '2025-07-02',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Multer'],
    github: 'https://github.com/sumanth2354/designconnect',
    live: 'https://designconnect-navy.vercel.app',
    category: 'Full-Stack Platform',
    color: 'from-blue-600/12 to-indigo-600/6',
    border: 'border-blue-500/18',
    accent: 'text-blue-400',
    badge: 'bg-blue-500/12 text-blue-300 border-blue-500/22',
    liveBadge: 'bg-blue-500/15 text-blue-300 border-blue-500/25 hover:bg-blue-500/25',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
    letter: 'DC',
  },
  {
    title: 'VoiceOverAI',
    description:
      'An AI-powered web application that dubs uploaded videos into 40+ languages using Whisper for transcription, TranslatePy for translation, and Google TTS for speech synthesis. Supports major Indian and global languages with real-time progress tracking.',
    date: '2025-07-23',
    tech: ['Python', 'Flask', 'OpenAI Whisper', 'Google TTS', 'TranslatePy', 'FFmpeg'],
    github: 'https://github.com/sumanth2354/VoiceOverAI',
    live: null,
    category: 'AI / Machine Learning',
    color: 'from-purple-600/12 to-pink-600/6',
    border: 'border-purple-500/18',
    accent: 'text-purple-400',
    badge: 'bg-purple-500/12 text-purple-300 border-purple-500/22',
    liveBadge: 'bg-purple-500/15 text-purple-300 border-purple-500/25 hover:bg-purple-500/25',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/15',
    letter: 'VA',
  },
  {
    title: 'IT Attendance System',
    description:
      'A secure web-based attendance management system for the IT Department. Features dedicated teacher and student portals, real-time attendance tracking, weekly/monthly/full-term report generation, CSV export, and role-based authentication.',
    date: '2025-09-01',
    tech: ['Node.js', 'Express.js', 'EJS', 'PostgreSQL', 'bcrypt', 'Neon Cloud'],
    github: 'https://github.com/sumanth2354/ITAttendance',
    live: 'https://it-attendance01.vercel.app',
    category: 'Web Application',
    color: 'from-emerald-600/12 to-teal-600/6',
    border: 'border-emerald-500/18',
    accent: 'text-emerald-400',
    badge: 'bg-emerald-500/12 text-emerald-300 border-emerald-500/22',
    liveBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25 hover:bg-emerald-500/25',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    letter: 'IT',
  },
];

const ProjectCard = ({ project, index }) => {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative p-7 rounded-3xl bg-gradient-to-br ${project.color} border ${project.border} hover:border-white/15 transition-all duration-300`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-7">
        {/* Visual placeholder */}
        <div className="relative rounded-2xl overflow-hidden bg-black/18 aspect-video flex items-center justify-center border border-white/5">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Project monogram */}
          <div className="relative text-center select-none">
            <div
              className={`w-16 h-16 rounded-2xl ${project.iconBg} border border-white/10 flex items-center justify-center mx-auto mb-3`}
            >
              <span className={`text-2xl font-bold ${project.iconColor}`}>{project.letter}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-white/20 text-xs">
              <Layers className="w-3 h-3" />
              Preview coming soon
            </div>
          </div>
        </div>

        {/* Project info */}
        <div className="flex flex-col justify-between gap-5">
          <div>
            {/* Category + date row */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium border ${project.badge}`}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/8 border border-white/15 text-white/60 tracking-wide uppercase">
                    New
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-white/30 text-xs shrink-0">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2.5">{project.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-4">
            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-[11px] bg-white/5 border border-white/8 text-white/55"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link buttons */}
            <div className="flex gap-2.5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 hover:bg-white/14 hover:border-white/22 text-white/80 hover:text-white text-xs font-medium transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all duration-200 ${project.liveBadge}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-3">What I've built</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Projects</h2>
          <div className="h-px w-full bg-gradient-to-r from-white/18 to-transparent" />
        </motion.div>

        <div className="space-y-7">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/sumanth2354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/12 hover:border-white/22 text-white/65 hover:text-white text-sm font-medium transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
