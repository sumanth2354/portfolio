import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce platform with product management, shopping cart, payment integration, and user authentication. Built with modern web technologies for optimal performance.',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/666666?text=E-Commerce+Home',
        'https://via.placeholder.com/800x500/1a1a1a/666666?text=Product+Page',
        'https://via.placeholder.com/800x500/1a1a1a/666666?text=Shopping+Cart',
      ],
      date: '2024-01-15',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, team collaboration features, project tracking, and analytics dashboard. Designed for productivity and seamless team workflows.',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/666666?text=Dashboard',
        'https://via.placeholder.com/800x500/1a1a1a/666666?text=Task+Board',
        'https://via.placeholder.com/800x500/1a1a1a/666666?text=Analytics',
      ],
      date: '2023-11-20',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      link: '#',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length,
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length,
    }));
  };

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
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Image Carousel */}
              <div className="relative rounded-2xl overflow-hidden bg-black/50">
                <div className="aspect-video relative">
                  <img
                    src={project.images[currentImageIndex[projectIndex] || 0]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(projectIndex)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={() => nextImage(projectIndex)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
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
                    </>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <a
                      href={project.link}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">{project.description}</p>
                  <p className="text-white/40 text-sm mb-4">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;