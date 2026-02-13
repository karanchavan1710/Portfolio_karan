import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-900/60 backdrop-blur-sm border-t border-white/10 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Karan Chavan. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-sky-500 hover:!bg-sky-600 text-white p-3 rounded-full transition-colors duration-300 shadow-lg cursor-pointer"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
