import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CV from "../assets/CV/karan chavan CV.pdf";
import ProfilePic from "../assets/ProfilePIc/Karan Profile pic.jpg";

const Hero = () => {
  const goToContactSection = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center px-6 md:px-16"
    >
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white lg:text-left my-5 md:my-0"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Karan Chavan
            </span>
          </h1>

          {/* Professional Tagline */}
          <p className="mb-4 text-lg text-sky-400 md:text-xl font-medium">
            Frontend Developer | React.js | Tailwind CSS | Material UI
          </p>

          {/* Short Professional Summary */}
          <p className="mb-8 max-w-lg text-gray-300 leading-relaxed">
            Frontend Developer with 1.3+ years of experience building
            scalable, responsive, and production-ready web applications.
            Skilled in React.js, Redux Toolkit, REST API integration,
            and modern UI systems with clean architecture.
          </p>

          {/* Buttons */}
          <div className="mb-8 flex flex-wrap gap-4">
            <button
              onClick={goToContactSection}
              className="rounded-xl bg-sky-500 px-8 py-3 font-semibold text-white hover:bg-sky-600 transition duration-300"
            >
              Contact Me
            </button>

            <a
              href={CV}
              download
              className="rounded-xl border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/karanchavan1710"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/karan-chavan2194/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-3xl animate-pulse" />

            <img
              src={ProfilePic}
              alt="Karan Chavan"
              className="relative h-full w-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;