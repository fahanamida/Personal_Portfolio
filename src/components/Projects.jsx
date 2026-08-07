import { useState } from 'react';
import { motion } from 'framer-motion';
import {FaGithub,FaCode} from "react-icons/fa" ;
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {MdAutoAwesome} from "react-icons/md";
import { portfolioData } from '../config/portfolio';

// Interactive 3D Tilt Card Component
function ProjectCard({ project, isFeatured }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, xPercent: 50, yPercent: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation angles (-6 to 6 degrees)
    const rotateY = ((mouseX - width / 2) / (width / 2)) * 6;
    const rotateX = -((mouseY - height / 2) / (height / 2)) * 6;
    
    // Calculate percentages for border glow tracking
    const xPercent = (mouseX / width) * 100;
    const yPercent = (mouseY / height) * 100;

    setTilt({ rotateX, rotateY, xPercent, yPercent });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, xPercent: 50, yPercent: 50 });
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s ease, border-color 0.5s ease',
      }}
      className={`relative rounded-3xl overflow-hidden border border-white/10 bg-dark-card backdrop-blur-md shadow-2xl flex flex-col justify-between group transition-all duration-300 ${
        isFeatured 
          ? 'lg:grid lg:grid-cols-12 gap-6 p-6 lg:p-8 min-h-[380px] hover:border-accent-violet/30' 
          : 'p-6 min-h-[340px] hover:border-accent-cyan/30'
      }`}
    >
      {/* Interactive Border Glow Follower */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${tilt.xPercent}% ${tilt.yPercent}%, ${isFeatured ? 'rgba(139, 92, 246, 0.08)' : 'rgba(6, 182, 212, 0.08)'}, transparent 80%)`,
          }}
        />
      )}

      {/* Main Content Area */}
      <div className={`z-10 ${isFeatured ? 'lg:col-span-7 flex flex-col justify-center text-left' : 'flex flex-col text-left'}`}>
        {/* Featured Tag */}
        {isFeatured && (
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-accent-violet/30 bg-accent-violet/5 text-[10px] font-bold text-accent-violet uppercase tracking-wider mb-4 w-fit">
            <MdAutoAwesome size={20} className="animate-pulse" />
            <span>Featured Case Study</span>
          </div>
        )}

        {/* Project Title */}
        <h3 className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight group-hover:text-accent-cyan transition-colors mb-3">
          {project.title}
        </h3>

        {/* Impact Stats */}
        {project.impact && (
          <div className="text-xs font-semibold text-accent-cyan/90 mb-3 flex items-center gap-1">
            <FaCode size={20} />
            <span>Impact: {project.impact}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(tag => (
            <span
              key={tag}
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                isFeatured 
                  ? 'bg-accent-violet/5 border-accent-violet/20 text-accent-violet' 
                  : 'bg-accent-cyan/5 border-accent-cyan/20 text-accent-cyan'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Image / Representation area */}
      {isFeatured ? (
        <div className="lg:col-span-5 relative h-48 lg:h-full rounded-2xl overflow-hidden border border-white/5 z-10 flex items-center justify-center bg-black/40 group-hover:border-accent-violet/20 transition-all duration-300">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-500" 
          />
          {/* Neon overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative h-36 mt-4 rounded-xl overflow-hidden border border-white/5 z-10 flex items-center justify-center bg-black/40 group-hover:border-accent-cyan/20 transition-all duration-300">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
        </div>
      )}

      {/* Interactive Links Container */}
      <div className={`mt-6 z-10 flex items-center justify-start gap-4 ${isFeatured ? 'lg:col-span-12 border-t border-white/5 pt-4' : 'border-t border-white/5 pt-4'}`}>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-accent-cyan transition-colors"
        >
          <span>Live Demo</span>
          <FaArrowUpRightFromSquare size={20} />
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={20} />
          <span>Repository</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featuredProject = portfolioData.projects.find(p => p.isFeatured);
  const otherProjects = portfolioData.projects.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="relative py-24 bg-dark-bg/40 border-y border-white/5 overflow-hidden">
      {/* Background decoration grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wider"
          >
            <FaCode size={20} />
            <span>Showcase Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-blue bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-xs md:text-sm font-normal">
            A handpicked selection of key items. Move your mouse over the cards to experience interactive 3D depth and glow borders.
          </p>
        </div>

        {/* Projects Layout */}
        <div className="flex flex-col gap-8">
          
          {/* Row 1: Featured Project (Large Card) */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={featuredProject} isFeatured={true} />
            </motion.div>
          )}

          {/* Row 2: Sub-Projects (Grid of 2 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} isFeatured={false} />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
