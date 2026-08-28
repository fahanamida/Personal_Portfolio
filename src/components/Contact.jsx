import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaGithub,FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa";
import {MdEmail,MdSend,MdCheckCircle,MdAutoAwesome,MdError,} from "react-icons/md";
import { portfolioData } from '../config/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Please provide a valid email';
    }
    if (!form.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    // Simulate backend submission delay
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });

      // Reset back to idle after a delay
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-bg/30 border-t border-white/5 overflow-hidden">
      {/* Background neon light blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/5 text-xs font-semibold text-accent-violet mb-3 uppercase tracking-wider"
          >
            <MdEmail size={12} className="text-accent-violet" />
            <span>Connect With Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight"
          >
            Get In <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <p className="text-gray-400 max-w-md mx-auto mt-4 text-xs md:text-sm font-normal">
            Have a project in mind, want to collaborate, or just say hello? Fill out the form or reach out through social channels.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Direct Links & Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8 text-left"
          >
            <div className="glow-card rounded-3xl p-6 md:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-display font-extrabold text-lg md:text-xl text-white mb-2 flex items-center gap-2">
                  <MdAutoAwesome size={16} className="text-accent-cyan" />
                  Let's create something!
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal mb-6">
                  Based in the scenic landscapes of Kerala, India. I am fully equipped and open to remote positions, freelance consulting, or local collaborations.
                </p>

                {/* Contact Email Direct */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 mb-8">
                  <span className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                    <MdEmail size={16} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Email</span>
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-xs md:text-sm font-semibold text-white hover:text-accent-cyan transition-colors">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Phone
                  </span>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-xs md:text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              {/* Social Channels badges */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-3">On Social Media</span>
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={portfolioData.personal.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glow-card rounded-3xl p-6 md:p-8 text-left shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    >
                      <MdCheckCircle size={40} className="stroke-[2.5]" />
                    </motion.div>
                    <h3 className="font-display font-extrabold text-xl md:text-2xl text-white mb-2">Message Sent!</h3>
                    <p className="text-xs md:text-sm text-gray-400 max-w-xs leading-relaxed">
                      Thank you for reaching out. I have received your message and will respond as quickly as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 text-sm md:text-base rounded-xl bg-white/5 border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${errors.name
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                              : 'border-white/10 focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/30'
                            }`}
                        />
                        {errors.name && (
                          <span className="absolute right-3 top-3 text-red-500 flex items-center gap-1 text-[11px] font-semibold bg-dark-bg/85 px-2 rounded-full border border-red-500/20">
                            <MdError size={10} />
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 text-sm md:text-base rounded-xl bg-white/5 border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 ${errors.email
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                              : 'border-white/10 focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/30'
                            }`}
                        />
                        {errors.email && (
                          <span className="absolute right-3 top-3 text-red-500 flex items-center gap-1 text-[11px] font-semibold bg-dark-bg/85 px-2 rounded-full border border-red-500/20">
                            <MdError size={10} />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Hey, let's connect for an application build..."
                          className={`w-full px-4 py-3 text-sm md:text-base rounded-xl bg-white/5 border text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none ${errors.message
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                              : 'border-white/10 focus:border-accent-violet focus:ring-1 focus:ring-accent-violet/30'
                            }`}
                        />
                        {errors.message && (
                          <span className="absolute right-3 bottom-3 text-red-500 flex items-center gap-1 text-[11px] font-semibold bg-dark-bg/85 px-2 rounded-full border border-red-500/20">
                            <MdError size={10} />
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] disabled:opacity-50 disabled:scale-100 cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <MdSend size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
