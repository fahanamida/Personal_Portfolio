import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset/page loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-bg"
            exit={{ 
              opacity: 0, 
              y: -40, 
              transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
            }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Logo Brand Glyph */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-blue flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                <span className="font-display font-black text-2xl text-white">F</span>
              </motion.div>
              
              {/* Text logo brand */}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-display font-black text-xs tracking-[0.2em] text-white/80 mt-2"
              >
                FAHANA.DEV
              </motion.span>

              {/* Progress bar loader */}
              <div className="w-48 h-[3px] bg-white/5 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-blue"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-bg text-gray-100 min-h-screen selection:bg-accent-violet/30 selection:text-white"
          >
            {/* Global Cursor Glow Follower */}
            <CursorGlow />

            {/* Sticky Floating Social Actions */}
            <FloatingActions />

            {/* Float Navigation Header */}
            <Navbar />

            {/* Main Application Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            {/* Footer metadata dashboard */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
