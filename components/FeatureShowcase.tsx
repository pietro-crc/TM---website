import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, GripVertical } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('touchend', handleUp);
      window.addEventListener('touchmove', handleTouchMove as any);
    }
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('touchmove', handleTouchMove as any);
    };
  }, [isDragging]);

  return (
    <section id="zexcel" className="py-20 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-green-500/30">
                    <Table className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                    Zexcel Spreadsheet.
                </h2>
                
                <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                    Potenza di calcolo bruta, direttamente nell'interfaccia web.
                    Ticket Manager include un editor di tabelle completo. Formule, ordinamento, filtri e molto altro.
                    <br/><br/>
                    <span className="text-white font-medium border-b border-white/20 pb-0.5">Dual Mode:</span> Perfetto sia di giorno che di notte.
                </p>

                {/* Slider Indicators */}
                <div className="flex gap-6 md:gap-8">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">Light</div>
                        <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">Clean Look</div>
                    </div>
                    <div className="w-px bg-slate-800"></div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">Dark</div>
                        <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">Pro Mode</div>
                    </div>
                </div>
            </motion.div>

            {/* Image Comparison Slider */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative group perspective-1000"
            >
                <div 
                    ref={containerRef}
                    className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-col-resize select-none transform transition-transform group-hover:scale-[1.01]"
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                >
                    {/* Dark Mode Image (Background) */}
                    <img 
                        src="https://placehold.co/800x600/0f172a/ffffff?text=Zexcel+DARK+Screenshot" 
                        alt="Zexcel Dark Mode" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Light Mode Image (Foreground - Clipped) */}
                    <div 
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img 
                            src="https://placehold.co/800x600/f8fafc/0f172a?text=Zexcel+LIGHT+Screenshot" 
                            alt="Zexcel Light Mode" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Glassy Slider Handle */}
                    <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-white/50 cursor-col-resize z-20 backdrop-blur-md"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform">
                            <GripVertical className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                    </div>
                </div>
                
                {/* Tooltip - Always visible on mobile, hover on desktop */}
                <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 text-xs md:text-sm font-mono text-slate-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center gap-2 whitespace-nowrap">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full animate-ping"></span>
                    DRAG TO COMPARE
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;