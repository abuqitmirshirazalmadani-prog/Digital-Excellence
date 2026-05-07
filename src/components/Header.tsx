import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-24 flex items-center ${
                scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-12 w-full flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-800 rounded-lg flex items-center justify-center text-white">
                        <span className="text-[10px] font-bold">AQ</span>
                    </div>
                    <span>Abu Qitmir</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-purple-100 transition-colors">
                        Contact Now
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full py-3 bg-white text-black font-bold rounded-lg mt-2">
                                Contact Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
