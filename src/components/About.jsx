import { motion } from 'framer-motion';
import {FaUser,FaBookOpen,FaGraduationCap,FaMapMarkerAlt,FaFolder,} from "react-icons/fa";

import {MdAutoAwesome} from "react-icons/md";
import {SiJson} from "react-icons/si";
import { portfolioData } from '../config/portfolio';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-dark-bg/50 border-y border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wider"
          >
            <FaUser size={12} />
            <span>Developer Story</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            About <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Myself</span>
          </motion.h2>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual IDE Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 w-full rounded-2xl border border-white/10 bg-dark-card backdrop-blur-md shadow-2xl overflow-hidden"
          >
            {/* Mockup Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">environment.json</span>
              <div className="w-6" /> {/* Spacer */}
            </div>

            {/* Mockup Body */}
            <div className="p-5 font-mono text-xs md:text-sm text-left flex gap-6">
              
              {/* Fake File Explorer */}
              <div className="hidden sm:flex flex-col gap-3 text-gray-500 border-r border-white/5 pr-5 select-none">
                <div className="flex items-center gap-1.5 text-gray-300 font-semibold text-[10px] uppercase tracking-wider">
                  <FaFolder size={12} className="text-accent-violet" />
                  <span>SRC</span>
                </div>
                <div className="flex items-center gap-1.5 pl-3">
                  <FaFolder size={11} className="text-gray-500" />
                  <span>components</span>
                </div>
                <div className="flex items-center gap-1.5 pl-3">
                  <FaFolder size={11} className="text-gray-500" />
                  <span>config</span>
                </div>
                <div className="flex items-center gap-1.5 pl-3 text-accent-cyan font-medium">
                  <SiJson size={11} className="text-accent-cyan" />
                  <span>{portfolioData.personal.name.toLowerCase()}.json</span>
                </div>
              </div>

              {/* JSON Mockup Data */}
              <div className="flex-1 overflow-x-auto no-scrollbar text-gray-300 leading-relaxed text-[11px] md:text-xs">
                <div>
                  <span className="text-amber-400">"developer"</span>: &#123;
                  <div className="pl-4">
                    <span className="text-accent-cyan">"name"</span>: <span className="text-emerald-400">"{portfolioData.personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-accent-cyan">"role"</span>: <span className="text-emerald-400">"{portfolioData.personal.role}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-accent-cyan">"location"</span>: <span className="text-emerald-400">"{portfolioData.personal.location}"</span>,
                  </div>
                  <div className="pl-4 flex items-start gap-1">
                    <span className="text-accent-cyan">"focus"</span>: <span className="text-emerald-400">["MERN Stack","Clean APIs"]</span>
                  </div>
                  &#125;,
                </div>
                <div className="mt-4">
                  <span className="text-amber-400">"geographic"</span>: &#123;
                  <div className="pl-4">
                    <span className="text-accent-cyan">"coordinates"</span>: <span className="text-purple-400">"11.2588° N, 75.7804° E"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-accent-cyan">"vibes"</span>: <span className="text-emerald-400">"Malabar biryani, beaches & clean code"</span>
                  </div>
                  &#125;
                </div>
              </div>
            </div>

            {/* Bottom Panel Display Info */}
            <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt size={10} className="text-accent-cyan" />
                {portfolioData.personal.location}
              </span>
              <span>UTF-8</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative + Education */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glow-card rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-display font-bold text-lg md:text-xl text-white flex items-center gap-2 mb-4">
                <MdAutoAwesome size={18} className="text-accent-cyan animate-pulse" />
                My Passion & Mission
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-4 font-normal">
                {portfolioData.personal.bio}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-normal">
                {portfolioData.personal.subBio} My ultimate objective is to architect high-performance platforms with minimal load times, responsive fluid UI animations, and exceptional design principles.
              </p>
            </motion.div>

            {/* Education Timeline block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glow-card rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-display font-bold text-lg md:text-xl text-white flex items-center gap-2 mb-6">
                <FaBookOpen size={18} className="text-accent-violet" />
                Education Journey
              </h3>
              
              <div className="flex flex-col gap-6">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-accent-violet/20 flex flex-col gap-1.5">
                    {/* Circle timeline dot */}
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent-violet border border-dark-bg" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display font-semibold text-sm md:text-base text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                        {edu.period}
                      </span>
                    </div>
                    
                    <span className="text-xs font-medium text-accent-cyan flex items-center gap-1">
                      <FaGraduationCap size={12} />
                      {edu.institution}
                    </span>
                    
                    <p className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
