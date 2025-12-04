import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Coursera - Meta',
      date: 'January 2024',
      credential: 'ABC123456',
      link: '#',
    },
    {
      title: 'Android Developer Professional',
      issuer: 'Google Developers',
      date: 'December 2023',
      credential: 'GDC789012',
      link: '#',
    },
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'November 2023',
      credential: 'AWS-DEV-2023',
      link: '#',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'October 2023',
      credential: 'MDB345678',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="min-h-screen py-24 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">Certifications</h2>
          <div className="h-1 w-full bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/70 mb-3">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-xs font-mono">ID: {cert.credential}</span>
                    <a
                      href={cert.link}
                      className="flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors duration-200"
                    >
                      View <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;