import React from "react";
import { FaAddressBook, FaAppStore } from "react-icons/fa";

const HoverEffect = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="group relative w-full h-72 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 
                       hover:bg-white/15 transition-all duration-300 hover:scale-105 
                       hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/30 
                       flex items-center justify-center"
          >
            {/* Default Content */}
            <h3 className="text-white text-lg font-medium transition-all duration-300 group-hover:opacity-0">
              Hover over me {item}
            </h3>

            {/* Hover Content */}
            <div
              className="absolute inset-0 top-4 left-4
                         opacity-0 hover:opacity-100
                         transition-all duration-500 transform
                         group-hover:translate-y-0 translate-y-4"
            >
              <h4 className="text-sky-400 text-2xl font-semibold">
                Hello 👋
              </h4>
               <div className="absolute bottom-4 right-4 text-white/70 "> 
         <FaAppStore/>
         </div>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffect;

