import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projects from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const iconMap = { faCode };

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            My <span className="text-sky-400">Projects</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            A showcase of my recent work, featuring modern web applications and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} iconMap={iconMap} />
          ))}
        </div>

            {/* Projects CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-3">Let's Build Something Amazing Together</h4>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Interested in seeing more of my work or discussing a project? Let's create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
              >
                <FontAwesomeIcon icon={faCode} className="text-sm" />
                Let's Work Together
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faGithub} className="text-sm" />
                View More on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
