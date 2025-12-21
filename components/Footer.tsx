import React from 'react';
import { Zap, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="text-white w-5 h-5 fill-current" />
                </div>
                <span className="text-xl font-bold text-white">
                    Ticket Manager
                </span>
            </div>
            <p className="text-slate-400 max-w-md">
                L'estensione Chrome che trasforma il modo in cui i team IT gestiscono il supporto. Veloce, intelligente, integrata.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Prodotto</h4>
            <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">Funzionalità</a></li>
                <li><a href="#" className="hover:text-indigo-400">Changelog</a></li>
                <li><a href="#" className="hover:text-indigo-400">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legale</h4>
            <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400">Termini di Servizio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Ticket Manager. Tutti i diritti riservati.</p>
            <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white"><Github className="w-5 h-5"/></a>
                <a href="#" className="text-slate-400 hover:text-white"><Twitter className="w-5 h-5"/></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;