import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaGithub,FaLinkedin,FaArrowRight,} from "react-icons/fa";
import {FaBars,FaXmark,} from "react-icons/fa6";
import { portfolioData } from '../config/portfolio';

const NAV_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to update active nav link and blur intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link calculation based on scroll position
      const scrollPosition = window.scrollY + 200;
      const sections = NAV_ITEMS.map(item => document.querySelector(item.href));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (index, href) => {
    setActiveIndex(index);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <nav className={`w-full flex items-center justify-between transition-all duration-300 px-6 py-3 rounded-full border border-white/5 backdrop-blur-lg shadow-2xl ${scrolled ? 'bg-dark-bg/60 border-white/10' : 'bg-transparent'}`}>
            {/* Logo */}
            <a href="#hero" onClick={() => handleNavClick(0, '#hero')} className="flex items-center gap-2 group">
              <span className="font-display font-black text-xl tracking-tight bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-blue bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
                FAHANA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            </a>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center gap-1 relative">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(idx, item.href);
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 z-10 ${activeIndex === idx ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {item.name}
                  
                  {/* Sliding Pill on Hover */}
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  
                  {/* Active Dot/Line */}
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="nav-active-dot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right side CTA & Links */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-105 duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-105 duration-200"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(5, '#contact');
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Let's Talk
                <FaArrowRight size={12} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden p-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[76px] z-40 mx-4 p-6 rounded-3xl border border-white/10 bg-dark-bg/95 backdrop-blur-xl shadow-2xl flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(idx, item.href);
                  }}
                  className={`text-lg font-semibold py-1.5 transition-colors border-b border-white/5 ${activeIndex === idx ? 'text-accent-cyan pl-2 border-accent-cyan/20' : 'text-gray-300'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(5, '#contact');
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white"
              >
                Let's Talk
                <FaArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
