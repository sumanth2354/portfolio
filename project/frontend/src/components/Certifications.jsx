import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Coursera – Meta',
    date: 'January 2024',
    credential: 'ABC123456',
    link: '#',
    accent: 'text-blue-400',
    bg: 'from-blue-500/8 to-blue-600/4',
    border: 'border-blue-500/18',
  },
  {
    title: 'Command Mastery',
    issuer: 'Cyber Twinkle',
    date: 'July 2025',
    credential: 'UC-00cc22b5-cadc-4cd6-8403-766a5b69a377',
    link: '#',
    accent: 'text-emerald-400',
    bg: 'from-emerald-500/8 to-emerald-600/4',
    border: 'border-emerald-500/18',
  },
  {
    title: 'Relational Databases & SQL',
    issuer: 'Udemy – Learn IT University',
    date: 'October 2025',
    credential: 'UC-26862def-86ff-4616-9a60-d3133a3c2043',
    link: '#',
    accent: 'text-orange-400',
    bg: 'from-orange-500/8 to-orange-600/4',
    border: 'border-orange-500/18',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'October 2023',
    credential: 'MDB345678',
    link: '#',
    accent: 'text-green-400',
    bg: 'from-green-500/8 to-green-600/4',
    border: 'border-green-500/18',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-3">Credentials</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Certifications</h2>
          <div className="h-px w-full bg-gradient-to-r from-white/18 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${cert.bg} border ${cert.border} hover:border-white/18 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/8 shrink-0">
                  <Award className={`w-5 h-5 ${cert.accent}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className={`text-xs font-medium ${cert.accent} mb-3`}>{cert.issuer}</p>

                  <div className="flex items-center gap-1.5 text-white/35 text-xs mb-4">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/25 text-[10px] font-mono truncate max-w-[200px]">
                      {cert.credential}
                    </span>
                    <a
                      href={cert.link}
                      className={`flex items-center gap-1 text-xs font-medium ${cert.accent} hover:opacity-70 transition-opacity duration-200 shrink-0`}
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
