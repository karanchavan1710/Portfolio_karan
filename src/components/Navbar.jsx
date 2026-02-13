import { Hive, MenuRounded } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className="!bg-transparent !backdrop-blur-md !shadow-md !border-b !border-white/10"
      >
        <Toolbar className="!flex !justify-between !items-center !px-4 sm:!px-6 md:!px-8">
          <div
            onClick={() => scrollToSection('hero')}
            className="!font-black !font-serif !text-xl sm:!text-2xl md:!text-3xl !text-white !cursor-pointer flex items-center !gap-1 sm:!gap-2"
          >
            Karan<span className="text-sky-400">Chavan</span>
          </div>
          <nav className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center ">
            <Tooltip title="Go to Home" arrow>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sky-400 font-bold hover:text-white transition-all duration-200 bg-transparent border-none cursor-pointer"
              >
                Home
              </button>
            </Tooltip>
            <Tooltip title="About Me" arrow>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer"
              >
                About
              </button>
            </Tooltip>
            <Tooltip title="My Skills" arrow>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer"
              >
                Skills
              </button>
            </Tooltip>
            <Tooltip title="My Projects" arrow>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer"
              >
                Projects
              </button>
            </Tooltip>
            <Tooltip title="Contact Me" arrow>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer"
              >
                Contact
              </button>
            </Tooltip>
          </nav>

          <IconButton
            onClick={() => setOpen(true)}
            className="block md:!hidden !text-sky-400"
          >
            <MenuRounded/>
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Toolbar className="!flex !flex-col !items-start !bg-slate-900/95 !backdrop-blur-md !py-6 sm:!py-8 !px-4 sm:!px-6 !gap-4 sm:!gap-6 !min-h-screen !w-64">
          <div
            onClick={() => scrollToSection('hero')}
            className="font-black font-serif text-xl sm:text-2xl text-white cursor-pointer mb-4 flex items-center !gap-1 sm:!gap-2"
          >
            Karan<span className="text-sky-400">Chavan</span>
          </div>
          <nav className="flex flex-col gap-3 sm:gap-4 w-full">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sky-400 font-bold hover:text-white transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white font-bold hover:text-sky-400 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white font-bold hover:text-sky-400 transition-all duration-all duration-200 bg-transparent border-none cursor-pointer text-left"
            >
              Contact
            </button>
          </nav>
        </Toolbar>
      </Drawer>
    </>
  );
};

export default Navbar;

