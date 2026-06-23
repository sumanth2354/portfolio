import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Award } from 'lucide-react';
import mine from '../assets/mine.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { icon: Code2, value: '5+', label: 'Projects Built' },
  { icon: Award, value: '4+', label: 'Certifications' },
  { icon: GraduationCap, value: '2023', label: 'B.Tech Start' },
];

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    years: '2023 – Present',
    current: true,
  },
  {
    degree: 'Intermediate (MPC)',
    field: 'Mathematics, Physics & Chemistry',
    years: '2021 – 2023',
  },
  {
    degree: 'High School',
    field: 'Science & Mathematics',
    years: '2016 – 2021',
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-3">Get to know me</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">About</h2>
          <div className="h-px w-full bg-gradient-to-r from-white/18 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: image + stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            {/* Profile image with glow ring */}
            <div className="relative inline-block">
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-white/12 via-white/5 to-transparent" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={mine}
                  alt="Sumanth Banisetti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/8 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white/35 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-white/40 text-[11px] mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: bio + education */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Sumanth Banisetti</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/55">
                  <MapPin className="w-3 h-3" />
                  Eluru, Andhra Pradesh
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/55">
                  Web Applications
                </span>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                Developer with a strong interest in databases and API development, building reliable
                and user-friendly web applications with clean, maintainable code. Passionate about
                crafting full-stack solutions that are both performant and intuitive to use.
              </p>
            </div>

            {/* Education timeline */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-white/50 tracking-widest uppercase mb-6">
                <GraduationCap className="w-4 h-4" />
                Education
              </h4>
              <div className="space-y-0">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-5">
                    {/* Timeline dot + line */}
                    <div className="flex flex-col items-center pt-0.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 border-2 transition-colors duration-200 ${
                          edu.current
                            ? 'bg-white border-white'
                            : 'bg-transparent border-white/25'
                        }`}
                      />
                      {i < education.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-white/15 to-white/5 my-1.5" />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-7 ${i === education.length - 1 ? 'pb-0' : ''}`}>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h5 className="text-white text-sm font-semibold">{edu.degree}</h5>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full bg-white/8 text-white/50 text-[10px] border border-white/10">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-white/45 text-sm">{edu.field}</p>
                      <p className="text-white/25 text-xs mt-0.5">{edu.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/sumanth-banisetti-resume.pdf"
              download="Sumanth_Banisetti_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200 text-sm"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
