import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Chrome, Search, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  // Reduced parallax effect on mobile to prevent layout issues
  const rotateX = useTransform(scrollY, [0, 500], [10, 0]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center">
      
      {/* Aurora Background Effects - Adjusted for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1000px] h-[400px] md:h-[600px] bg-indigo-600/20 rounded-full blur-[80px] md:blur-[120px] -z-10 mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute top-0 left-1/4 w-[250px] md:w-[800px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] -z-10 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs md:text-sm font-medium mb-6 md:mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:border-indigo-500/50 transition-colors cursor-default"
            >
              <Sparkles className="w-3 h-3" />
              <span>Nuova Versione 2.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-6 md:mb-8 leading-[0.95] md:leading-[0.9]"
            >
              Ticket
              <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 animate-shimmer bg-[length:200%_100%] ml-0 md:ml-4">Manager.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl leading-relaxed px-4"
            >
              L'estensione definitiva per la gestione dei ticket. 
              Automazione, notepad contestuale e analytics in tempo reale.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center px-4"
            >
              <button className="group relative flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto">
                <Chrome className="w-5 h-5 text-indigo-600" />
                <span>Aggiungi a Chrome</span>
                <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-2 ring-white/50 opacity-0 group-hover:opacity-100 animate-ping"></div>
              </button>
              
              <button className="flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all w-full sm:w-auto">
                Come funziona
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
        </div>

        {/* Hero Visual - 3D Perspective Browser */}
        <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, rotateX: 25, y: 50 }}
            animate={{ opacity: 1, rotateX: 10, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.2 }}
            className="relative max-w-6xl mx-auto perspective-1200 group px-2 md:px-0"
        >
            <div className="relative bg-[#0F1218] rounded-xl md:rounded-2xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/5 transform-gpu transition-transform duration-500 group-hover:rotate-x-0 group-hover:scale-[1.01]">
                
                {/* Glossy Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>

                {/* Browser Header */}
                <div className="h-8 md:h-12 bg-[#1A1F2E] border-b border-white/5 flex items-center px-3 md:px-5 justify-between relative z-10">
                    <div className="flex gap-1.5 md:gap-2.5">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF5F57] shadow-inner"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FEBC2E] shadow-inner"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#28C840] shadow-inner"></div>
                    </div>
                    <div className="flex-1 text-center mx-4 md:mx-10">
                        <div className="inline-flex items-center justify-center w-full max-w-md bg-[#0F1218] rounded-md md:rounded-lg h-6 md:h-8 text-[10px] md:text-xs text-slate-500 border border-white/5 font-mono shadow-inner overflow-hidden whitespace-nowrap px-2">
                            <span className="text-indigo-400 mr-2 hidden xs:inline">🔒</span> sistema.com/tickets/TICK-123
                        </div>
                    </div>
                </div>

                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[16/9] bg-[#030712] flex items-center justify-center overflow-hidden">
                    {/* Placeholder content - REPLACE THIS IMG TAG WITH YOUR SCREENSHOT */}
                    <img 
                        src="https://placehold.co/1920x1080/0f172a/ffffff?text=Inserisci+Screenshot+Ticket+Qui" 
                        alt="Ticket Interface Screenshot" 
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    />

                    {/* Gradient Fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 md:h-40 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent pointer-events-none"></div>
                </div>
            </div>
            
            {/* Glowing Backlight */}
            <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[40px] md:blur-[60px] -z-10 rounded-[2rem] md:rounded-[3rem] opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;