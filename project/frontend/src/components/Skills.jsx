import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, GitBranch, Figma, Send, Globe, Terminal } from 'lucide-react';

const categories = [
  {
    label: 'Languages',
    accent: 'text-red-400',
    bg: 'from-red-500/8 to-red-600/4',
    border: 'border-red-500/18',
    skills: [
      { name: 'Java', icon: Code2 },
      { name: 'Python', icon: Code2 },
      { name: 'JavaScript', icon: Code2 },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    label: 'Frontend',
    accent: 'text-blue-400',
    bg: 'from-blue-500/8 to-blue-600/4',
    border: 'border-blue-500/18',
    skills: [
      { name: 'React', icon: Layout },
      { name: 'HTML / CSS', icon: Globe },
      { name: 'Figma', icon: Figma },
    ],
  },
  {
    label: 'Backend & Database',
    accent: 'text-emerald-400',
    bg: 'from-emerald-500/8 to-emerald-600/4',
    border: 'border-emerald-500/18',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Server },
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
    ],
  },
  {
    label: 'Tools & Platforms',
    accent: 'text-orange-400',
    bg: 'from-orange-500/8 to-orange-600/4',
    border: 'border-orange-500/18',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Postman', icon: Send },
      { name: 'Linux', icon: Terminal },
    ],
  },
];

const skillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const skillItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-3">What I work with</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Skills</h2>
          <div className="h-px w-full bg-gradient-to-r from-white/18 to-transparent" />
        </motion.div>

        {/* 2×2 category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: catIdx * 0.08 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${cat.bg} border ${cat.border}`}
            >
              {/* Category label */}
              <p className={`text-[11px] font-semibold tracking-[0.22em] uppercase mb-5 ${cat.accent}`}>
                {cat.label}
              </p>

              {/* Skills */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={skillContainer}
                className="grid grid-cols-2 gap-2.5"
              >
                {cat.skills.map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={i}
                    variants={skillItem}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-200 group cursor-default"
                  >
                    <div className={`p-1.5 rounded-lg bg-white/5 ${cat.accent} shrink-0`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200 font-medium">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
