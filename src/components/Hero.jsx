import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {FaArrowRight,FaCode,FaInstagram,FaGithub,FaLinkedin,} from "react-icons/fa";
import {MdAutoAwesome,MdTerminal,MdComputer,} from "react-icons/md";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
import { portfolioData } from '../config/portfolio';

const TYPING_WORDS = [
  "Frontend Architectures.",
  "Scalable Web Solutions.",
  "Premium UI/UX Experiences.",
  "Creative Interactive Apps."
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Custom typing animation logic
  useEffect(() => {
    let timer;
    const currentWord = TYPING_WORDS[wordIdx];
    const speed = isDeleting ? 30 : 75;

    if (!isDeleting && displayText === currentWord) {
      // Pause when fully typed
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIdx]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-bg"
    >
      {/* Background Animated Gradient Mesh / Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-accent-violet/10 blur-[80px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[90px] animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent-cyan/10 blur-[70px] animate-blob [animation-delay:4s]" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Headline Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/5 text-xs font-semibold text-accent-violet mb-6 glow-text-violet"
          >
            <MdAutoAwesome size={12} className="animate-spin-slow" />
            <span>Open for Remote & Local Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-7xl leading-tight tracking-tight text-white"
          >
            I build modern
            <span className="block mt-1 bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              web experiences
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-400 font-medium min-h-[40px] flex items-center"
          >
            <span>Crafting&nbsp;</span>
            <span className="text-accent-cyan font-semibold border-r-2 border-accent-cyan pr-1 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-xl leading-relaxed text-sm md:text-base font-normal"
          >
            {portfolioData.personal.bio} Located in <span className="text-white font-medium">{portfolioData.personal.location}</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer"
            >
              Explore Work
              <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold text-sm hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </a>
              {/* Resume Button with Dropdown */}
              <div className="relative inline-block text-left group">
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-violet to-blue text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer">
                  Resumes
                </button>
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="/Mern_CV.pdf" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">ATS-Friendly</a>
                    <a href="/Mern_Resume.pdf" target="_blank" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Human-Friendly</a>
                  </div>
                </div>
              </div>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4 pl-1"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2">Connect:</span>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={portfolioData.personal.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={`https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent("Hi Fahana, I saw your portfolio and would like to connect.")}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-emerald-400 hover:scale-110 transition-all duration-300"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
            </a>
          </motion.div>
        </div>

        {/* Right Floating Elements Column */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
          
          {/* Circular Orbit Ring Decor */}
          <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-white/5 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-dashed border-white/10 pointer-events-none" />

          {/* Floating Element 1: Glassmorphic Code Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-10 md:top-16 z-20 w-[280px] md:w-[320px] rounded-2xl glow-card border border-white/10 px-5 py-4 text-left shadow-2xl"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <MdTerminal size={14} className="text-gray-500" />
            </div>
            <pre className="font-mono text-[11px] md:text-xs text-gray-300 leading-relaxed overflow-x-auto no-scrollbar">
              <code>
                <span className="text-accent-violet">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-accent-cyan">'{portfolioData.personal.name}'</span>,<br />
                &nbsp;&nbsp;skills: [<span className="text-accent-cyan">'React'</span>, <span className="text-accent-cyan">'Node'</span>, <span className="text-accent-cyan">'MongoDB'</span>],<br />
                &nbsp;&nbsp;origin: <span className="text-accent-cyan">'{portfolioData.personal.location}'</span>,<br />
                &nbsp;&nbsp;status: <span className="text-accent-cyan">'Ready to build'</span><br />
                &#125;;
              </code>
            </pre>
          </motion.div>

          {/* Floating Element 2: Small Telemetry HUD widget */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-12 md:bottom-16 z-20 w-[200px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md px-4 py-4 shadow-2xl"
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Core Telemetry</span>
              <MdComputer size={12} className="text-accent-cyan animate-pulse" />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <div className="text-2xl font-display font-black text-white glow-text-cyan">99.9%</div>
              <div className="text-[10px] text-gray-400">Application Performance Target</div>
            </div>
          </motion.div>

          {/* Floating Element 3: Sparkle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-1/2 -right-4 z-10 p-3 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan backdrop-blur-md shadow-lg animate-bounce [animation-duration:3s] pointer-events-none"
          >
            <FaCode size={18} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
