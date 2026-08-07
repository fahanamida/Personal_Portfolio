import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../config/portfolio';
import { FaTools , FaLayerGroup,FaGlobe,FaIcons,FaAngular,FaReact,FaBootstrap,FaNode,FaDatabase, FaMagic, FaCode, FaGitAlt, FaGithub, FaServer, FaRobot  } from "react-icons/fa";
import { FaHtml5  } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiExpress, SiJavascript, SiMongodb,SiVite,SiTypescript,SiPostman} from "react-icons/si";
import { MdComputer, MdTerminal, MdRoute, MdBolt, MdDashboard,MdCode ,MdCloud} from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const ICON_MAP = {
  Cpu: MdComputer,
  Terminal: MdTerminal,
  Database: FaDatabase,
  ShieldAlert: FaTools ,
  Sparkles: FaMagic,
  Code: FaCode,
  Wind: SiTailwindcss,
  LayoutGrid: MdDashboard,
  Server: FaServer,
  Route: MdRoute,
  Zap: MdBolt,
  GitBranch: FaGitAlt,
  Monitor: MdComputer,
  FileCode: MdCode,
  Box: SiVite,
  Layers: FaLayerGroup,
  Globe: FaGlobe,
  Github: FaGithub,
  TerminalSquare: MdTerminal,
  Cloud: MdCloud,
  DatabaseZap: SiMongodb,
  Bot: FaRobot,
};

const CATEGORIES = [
  { id: 'frontend', name: 'Frontend', icon: MdComputer },
  { id: 'backend', name: 'Backend', icon: MdTerminal },
  { id: 'database', name: 'Database', icon: FaDatabase },
  { id: 'tools', name: 'Tools', icon: FaTools  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeSkills = portfolioData.skills[activeTab] || [];
  const ActiveIcon = CATEGORIES.find(c => c.id === activeTab)?.icon || MdComputer;

  // Circular progress dimensions
  const radius = 32;
  const ICON_FOR_SKILL = {
    "Angular":FaAngular ,
    "React.js": FaReact ,
    "Next.js":RiNextjsFill,
    "JavaScript": SiJavascript,
    "TypeScript":SiTypescript,
    "Tailwind CSS": SiTailwindcss,
    "Bootstrap": FaBootstrap ,
    "HTML / CSS": FaHtml5,
    "Node.js": FaNode ,
    "Express.js": SiExpress,
    "REST APIs": FaServer ,
    "MongoDB": FaDatabase,
    "Git & GitHub": FaGithub,
    "Postman": SiPostman ,
    "VS Code": VscVscode,
  };

  const getSkillIcon = (name) => {
    return ICON_FOR_SKILL[name] || FaMagic;
  };
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="relative py-24 bg-dark-bg/20 overflow-hidden">
      {/* Background neon light blob */}
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent-violet/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/5 text-xs font-semibold text-accent-violet mb-3 uppercase tracking-wider"
          >
            <FaMagic size={12} className="text-accent-violet animate-pulse" />
            <span>Tech Stack Abilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Skills & <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${isActive
                    ? 'border-accent-violet/40 bg-accent-violet/5 text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                    : 'border-white/5 bg-white/5 text-gray-400 hover:border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <FaIcons size={14} className={isActive ? 'text-accent-violet' : 'text-gray-400'} />
                <span>{category.name}</span>

                {/* Active Underline Pill */}
                {isActive && (
                  <motion.div
                    layoutId="skills-active-pill"
                    className="absolute inset-0 border border-accent-violet/40 rounded-full pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[280px]">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center"
          >
            <AnimatePresence mode="popLayout">
              {activeSkills.map((skill, index) => {
                const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                const Icon = getSkillIcon(skill.name);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="glow-card rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 shadow-lg group hover:border-accent-violet/30"
                  >                    {/* SVG Circular Progress Meter */}
                    <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          className="stroke-white/5 fill-transparent"
                          strokeWidth="5"
                        />
                        {/* Interactive progress circle */}
                        <motion.circle
                          cx="40"
                          cy="40"
                          r={radius}
                          className={`stroke-accent-violet fill-transparent`}
                          strokeWidth="5"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* Inner percentage score */}
                      <span className="absolute text-xs font-mono font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Label Badge */}
                    <div className="flex flex-col items-center">
                      <Icon className="text-accent-violet mb-1" style={{fontSize:"25px",margin:"2px"}} />
                      <span className="font-display font-bold text-sm text-gray-200 text-center tracking-wide group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
