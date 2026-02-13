import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faLightbulb,
  faRocket,
  faHeart,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import portfolioData from "../data/portfolioData";

const iconMap = [faCode, faLightbulb, faRocket];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            About <span className="text-sky-400">Me</span>
          </h3>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            {portfolioData.personal.title} with professional experience building responsive,
            accessible, and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
                </div>

                <h4 className="text-xl md:text-2xl font-semibold text-white">
                  Who I Am
                </h4>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                {portfolioData.personal.about.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-sky-400 mb-1">
                  {portfolioData.personal.experience}
                </div>
                <div className="text-sm text-gray-400">
                  Years Experience
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-sky-400 mb-1">
                  {portfolioData.personal.projectsCompleted}
                </div>
                <div className="text-sm text-gray-400">
                  Production Projects
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {portfolioData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={iconMap[index]}
                      className="text-white text-sm"
                    />
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h5>
                    <p className="text-gray-300 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faCoffee}
                  className="text-purple-400 text-lg"
                />
                <span className="text-white font-semibold">Fun Fact</span>
              </div>

              <p className="text-gray-300 text-sm">
                Passionate about optimizing UI performance and building smooth user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500/20 border border-sky-500/30 rounded-full text-sky-300 hover:bg-sky-500/30 transition-all duration-300 cursor-pointer">
            <FontAwesomeIcon icon={faHeart} className="text-sm" />
            <span className="font-medium">
              Let’s build something amazing together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;