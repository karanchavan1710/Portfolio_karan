import { Button, TextField } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 max-w-5xl mx-auto my-8 md:my-12 lg:my-20">
  

      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Get In <span className="text-sky-400">Touch</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">Send a Message</h4>
            <form className="flex flex-col gap-6">
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiInputBase-input': { color: 'white' },
                }}
              />
              <TextField
                label="Your Email"
                type="email"
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiInputBase-input': { color: 'white' },
                  
                }}
              />
              <TextField
                label="Your Message"
                multiline
                rows={5}
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiInputBase-input': { color: 'white' },
                }}
              />
              <Button
                variant="contained"
                size="large"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">

          {/* Intro Text 
 <div className="text-center lg:text-left">
              <h4 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h4>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>
          */}
           

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">karan.chavan1710@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white">Connect with me</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faGithub} className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white">Check my projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

