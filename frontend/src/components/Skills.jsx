import React from 'react';
import { Code2, Database, Smartphone, Layout, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      icon: Code2,
      color: 'text-blue-400',
      level: 90,
    },
    {
      name: 'JavaScript',
      icon: Code2,
      color: 'text-yellow-400',
      level: 95,
    },
    {
      name: 'Java',
      icon: Code2,
      color: 'text-red-400',
      level: 85,
    },
    {
      name: 'React',
      icon: Layout,
      color: 'text-cyan-400',
      level: 90,
    },
    {
      name: 'Node.js',
      icon: Server,
      color: 'text-green-400',
      level: 88,
    },
    {
      name: 'MongoDB',
      icon: Database,
      color: 'text-emerald-400',
      level: 85,
    },
    {
      name: 'Android',
      icon: Smartphone,
      color: 'text-green-500',
      level: 87,
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'text-orange-400',
      level: 92,
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-24 px-8 md:px-16 lg:px-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">Skills</h2>
          <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-xl bg-white/5 ${skill.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-white/60 to-white/30 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-white/50 text-sm mt-2">{skill.level}%</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;