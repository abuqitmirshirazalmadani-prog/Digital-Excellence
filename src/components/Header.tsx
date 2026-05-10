import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { 
            name: 'Services', 
            href: '/#services',
            dropdown: [
                { name: 'Custom Software Development', href: '/custom-software' },
                { name: 'Mobile App Development', href: '/mobile-app-development' },
                { name: 'High-Performance Web Development', href: '/web-development' },
                { name: 'Intelligent AI Agent Development', href: '/ai-agent-development' },
                { name: 'SEO & Local SEO Mastery', href: '/seo-mastery' },
                { name: 'Premium Graphics Designing', href: '/graphics-design' },
                { name: 'Professional Content Writing', href: '/content-writing' },
            ]
        },
        {
            name: 'World',
            href: '#',
            dropdown: [
                { name: 'Custom software and SEO agency in the United States', href: '/us-market' },
                { name: 'Digital agency and custom software development UK', href: '/uk-market' },
                { name: 'Top digital agency in Pakistan web and SEO', href: '/pakistan-market' },
                { name: 'Custom software development and SEO Canada', href: '/canada-market' },
                { name: 'Custom software development and SEO Poland', href: '/poland-market' },
            ]
        },
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
    ];

    const isInternalLink = (href: string) => href.startsWith('/#') || href === '/';

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 h-20 md:h-24 flex items-center ${
                scrolled || isOpen ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.dropdown ? (
                                <div 
                                    className="flex items-center gap-1 cursor-pointer py-4"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </span>
                                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-72 bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl py-2 mt-[-5px]"
                                            >
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.href}
                                                        className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link 
                                    to={link.href} 
                                    className={`text-sm font-medium transition-colors ${
                                        location.pathname === link.href 
                                        ? 'text-white' 
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link 
                        to="/contact"
                        className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-purple-100 transition-colors"
                    >
                        Contact Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden p-2 text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-8 gap-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-2">
                                    {link.dropdown ? (
                                        <>
                                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-4">
                                                {link.name}
                                            </div>
                                            {link.dropdown.map((sub) => (
                                                <Link 
                                                    key={sub.name} 
                                                    to={sub.href} 
                                                    className={`text-xl font-semibold transition-colors ${
                                                        location.pathname === sub.href 
                                                        ? 'text-white' 
                                                        : 'text-gray-300 hover:text-white'
                                                    }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </>
                                    ) : (
                                        <Link 
                                            to={link.href} 
                                            className={`text-xl font-semibold transition-colors ${
                                                location.pathname === link.href 
                                                ? 'text-white' 
                                                : 'text-gray-300 hover:text-white'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link 
                                to="/admin"
                                className="w-full py-3 bg-zinc-900 border border-white/10 text-[#ccff00] font-black text-center rounded-xl mt-2 uppercase tracking-widest text-xs"
                                onClick={() => setIsOpen(false)}
                            >
                                Admin Access
                            </Link>
                            <Link 
                                to="/contact"
                                className="w-full py-4 bg-white text-black font-extrabold text-center rounded-2xl mt-4 active:scale-[0.98] transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
