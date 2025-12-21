import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3 } from 'lucide-react';

const Intelligence: React.FC = () => {
  return (
    <section id="intelligence" className="py-20 md:py-32 bg-background relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-indigo-900/20 blur-[60px] md:blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                        <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                    </div>
                    <span className="text-indigo-400 font-mono text-xs md:text-sm tracking-wider uppercase">Analytics 2.0</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                  Workload Intelligence
                </h2>
                <p className="text-slate-400 text-base md:text-xl leading-relaxed">
                  Basta report manuali. La dashboard di Ticket Manager si popola mentre lavori, offrendoti insights in tempo reale sulla tua produttività.
                </p>
            </div>
            <button className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all w-full md:w-auto">
                <span className="text-slate-200 font-medium">Esplora Demo</span>
                <div className="bg-indigo-600 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
            </button>
        </div>

        {/* Intelligence Image Container with Animated Border */}
        <div className="relative group rounded-xl md:rounded-2xl p-[1px] overflow-hidden">
            {/* Animated Border Beam */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            
            <div className="relative rounded-xl md:rounded-2xl bg-[#0B0E14] p-1.5 md:p-2 overflow-hidden">
                <div className="rounded-lg md:rounded-xl overflow-hidden bg-slate-900 aspect-video relative flex items-center justify-center">
                     {/* REPLACE WITH YOUR STATS IMAGE */}
                     <img 
                        src="https://placehold.co/1200x675/0f172a/ffffff?text=Screenshot+Workload+Intelligence"
                        alt="Workload Intelligence Dashboard"
                        className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                     />
                     
                     {/* Overlay reflection */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
                { title: 'Live Sync', desc: 'Aggiornamento istantaneo.', value: '0.2s' },
                { title: 'Predictive', desc: 'Stima fine giornata.', value: 'AI' },
                { title: 'Privacy', desc: 'Local Storage Only.', value: '100%' }
            ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-colors group">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                        <h3 className="text-white font-bold text-base md:text-lg">{item.title}</h3>
                        <span className="text-indigo-400 font-mono text-[10px] md:text-xs border border-indigo-500/30 px-2 py-0.5 rounded">{item.value}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Intelligence;