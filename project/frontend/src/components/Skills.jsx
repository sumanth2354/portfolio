import React from 'react';
import { Code2, Database, Layout, Server, GitBranch, Figma, Send } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      icon: Code2,
      color: 'text-red-400',

    },
    {
      name: 'SQL',
      icon: Database,
      color: 'text-blue-400',

    },
    {
      name: 'Python',
      icon: Code2,
      color: 'text-blue-400',

    },
    {
      name: 'JavaScript',
      icon: Code2,
      color: 'text-yellow-400',

    },
    {
      name: 'React',
      icon: Layout,
      color: 'text-cyan-400',

    },
    {
      name: 'Node.js',
      icon: Server,
      color: 'text-green-400',

    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'text-orange-400',

    },
    {
      name: 'Postman',
      icon: Send,
      color: 'text-orange-400',
    },
    {
      name: 'Figma',
      icon: Figma,
      color: 'text-purple-400',
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

                    </div>

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