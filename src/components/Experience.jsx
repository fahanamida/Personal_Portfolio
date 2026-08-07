import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdAutoAwesome } from "react-icons/md";
import { portfolioData } from '../config/portfolio';

// Individual timeline card component
function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Icon node on vertical line */}
      <span className="absolute left-[-11px] top-1.5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-dark-bg border-2 border-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.4)]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
      </span>

      {/* Experience Content Card */}
      <div className="glow-card rounded-2xl p-6 md:p-8 hover:border-accent-cyan/20 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/5 pb-4 mb-4">
          <div className="flex flex-col text-left">
            <h3 className="font-display font-extrabold text-lg md:text-xl text-white">
              {item.role}
            </h3>
            <span className="text-sm font-semibold text-accent-cyan mt-1 flex items-center gap-1.5">
              <FaBriefcase size={13} />
              {item.company}
            </span>
          </div>
          <div className="flex flex-col items-end gap-1.5 text-right">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
              {item.period}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <FaMapMarkerAlt size={20} />
              {item.location}
            </span>
          </div>
        </div>

        {/* Accomplishments checklist */}
        <ul className="flex flex-col gap-2.5 text-left list-none pl-0">
          {item.description.map((desc, i) => (
            <li key={i} className="text-xs md:text-sm text-gray-400 leading-relaxed flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet mt-1.5 shrink-0" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);

  // Track scroll position across the vertical timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Smooth scroll scale spring mapping
  const scaleYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative py-24 bg-dark-bg" ref={containerRef}>
      {/* Background neon light blob */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wider"
          >
            <MdAutoAwesome size={20} className="text-accent-cyan animate-pulse" />
            <span>Professional Career</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Work <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative pl-1 md:pl-4">

          {/* Vertical scroll progress background line */}
          <div className="absolute left-[1px] md:left-[17px] top-2 bottom-2 w-0.5 bg-white/5" />

          {/* Animated vertical scroll progress foreground line */}
          <motion.div
            style={{
              scaleY: scaleYSpring,
              transformOrigin: "top"
            }}
            className="absolute left-[1px] md:left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-blue"
          />

          {/* Timeline Cards Container */}
          <div className="flex flex-col">
            {portfolioData.experience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
