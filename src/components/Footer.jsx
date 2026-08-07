import {FaGithub,FaLinkedin,FaInstagram,FaWhatsapp} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { portfolioData } from '../config/portfolio';

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-bg border-t border-white/5 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <span className="font-display font-black text-sm tracking-widest bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
            FAHANA.DEV
          </span>
          <span className="text-[11px] text-gray-500 font-normal">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
        </div>
        {/* Center: System Status Indicators */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FaGithub size={16} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FaLinkedin size={16} />
            </a>
            <a href={portfolioData.personal.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500 hover:scale-110 transition-all duration-300">
              <FaInstagram size={16} />
            </a>
            <a href={`https://wa.me/${portfolioData.personal.whatsappNumber}?text=${encodeURIComponent("Hi Fahana, I saw your portfolio and would like to connect.")}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400 hover:scale-110 transition-all duration-300">
              <FaWhatsapp className="w-4 h-4"/>
            </a>
          </div>
          <button onClick={handleScrollTop} className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-accent-cyan/30 hover:scale-105 transition-all duration-300 cursor-pointer" aria-label="Back to Top">
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
