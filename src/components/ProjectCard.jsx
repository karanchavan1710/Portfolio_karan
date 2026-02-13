import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ project, iconMap = {} }) {
  const Icon = iconMap[project.icon] || faCode;

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-sky-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 group">
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-sky-500/50"
              title="View Live Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
            </a>
          )}
          <a
            href={project.githubLink}
            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-500/50"
            title="View Source Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-sm" />
          </a>
        </div>

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-xs font-semibold rounded-full backdrop-blur-sm shadow-lg">
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="p-6 relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-sky-500/30 transition-all duration-300">
            <FontAwesomeIcon icon={Icon} className="text-white text-sm" />
          </div>
          <h4 className="text-xl font-semibold text-white group-hover:text-sky-300 transition-colors duration-300">{project.title}</h4>
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-300 text-xs font-medium rounded-full border border-sky-500/30 hover:from-sky-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25">
                View Project
              </button>
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300 hover:scale-105">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
