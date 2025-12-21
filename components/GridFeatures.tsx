import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StickyNote, Clock, ShieldCheck } from 'lucide-react';

// Spotlight Card Component
const SpotlightCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const GridFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
            Strumenti Integrati.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Un ecosistema completo che vive dentro il tuo browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
          
          {/* Notepad Feature - Large */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 p-6 md:p-10 group">
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                    <StickyNote className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Notepad Contestuale</h3>
                <p className="text-slate-400 leading-relaxed text-base md:text-lg max-w-md">
                    Note che si ricordano del ticket. Scrivi appunti formattati in markdown che si salvano automaticamente e riappaiono solo quando apri quel specifico ticket.
                </p>

                {/* IMAGE CONTAINER */}
                <div className="mt-8 md:mt-auto md:pt-10 relative">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-500 md:group-hover:translate-y-[-10px] md:group-hover:scale-[1.02]">
                        <img 
                            src="https://placehold.co/600x800/1e1e2e/ffffff?text=Screenshot+Notepad" 
                            alt="Notepad Screenshot" 
                            className="w-full h-auto"
                        />
                         {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] -z-10 rounded-full"></div>
          </SpotlightCard>

          {/* Quick Stats */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group h-full">
            <div>
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Smart Timer</h3>
                <p className="text-slate-400 text-sm md:text-base">Tracking automatico del tempo speso su ogni ticket.</p>
            </div>
            <div className="mt-6 md:mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-1/2 animate-shimmer"></div>
            </div>
          </SpotlightCard>

          {/* Secure */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between h-full">
            <div>
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Privacy First</h3>
                <p className="text-slate-400 text-sm md:text-base">Local-first architecture. I dati non lasciano mai il tuo PC.</p>
            </div>
            <div className="mt-6 md:mt-8 flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">ENCRYPTED</span>
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">OFFLINE</span>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};

export default GridFeatures;