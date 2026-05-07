import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12 px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-800 rounded-lg flex items-center justify-center text-white">
                            <span className="text-[10px] font-bold">AQ</span>
                        </div>
                        <span>Abu Qitmir</span>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
                        Engineering digital excellence through AI and high-performance architecture.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                </div>

                <div className="text-gray-500 text-sm">
                    © 2026 Abu Qitmir. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
