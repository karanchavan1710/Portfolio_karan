import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
       {/* Background gradient */}
      <div className="absolute !inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 !rounded-2xl md:!rounded-3xl !opacity-90" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
        
      </>
  );
};

export default Home;

