import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Zexcel', href: '#zexcel' },
    { name: 'Intelligence', href: '#intelligence' },
  ];

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] w-full max-w-5xl'
              : 'bg-transparent border border-transparent w-full max-w-7xl'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-900 border border-slate-700 rounded-lg p-1.5">
                    <Zap className="text-indigo-400 w-4 h-4 fill-current" />
                </div>
            </div>
            <span className="text-lg font-bold font-display tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              Ticket Manager
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex bg-white/5 rounded-full p-1 border border-white/5 mr-4 backdrop-blur-sm">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                    {link.name}
                </a>
                ))}
            </div>
            
            <button className="group relative px-6 py-2.5 rounded-full bg-slate-50 text-slate-950 font-semibold text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Download
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#0F1218] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4 md:hidden ring-1 ring-white/10"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">
                Aggiungi a Chrome
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;