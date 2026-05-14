"use client";

import React from 'react';
import { motion } from 'motion/react';
import { 
    Rocket, 
    Mail, 
    Phone, 
    Linkedin, 
    Twitter, 
    Github, 
    Facebook, 
    Instagram, 
    Youtube,
    MapPin,
    ArrowRight,
    ExternalLink,
    MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

const Footer = () => {
    return (
        <section id="contact" className="bg-[#ccff00] border-t-[8px] border-black w-full py-24 relative overflow-hidden text-black font-display">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Top Label */}
                <div className="flex items-center justify-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] border-2 border-black rounded-full px-4 py-1.5 text-black font-black bg-white/10"
                    >
                        <Rocket className="h-4 w-4" />
                        Start Your Transformation
                    </motion.span>
                </div>

                {/* Main Heading Area */}
                <div className="text-center max-w-4xl mt-12 mx-auto">
                    <AnimatedShinyText 
                        text="Ready to Dominate Your Digital Landscape?" 
                        textClassName="md:text-8xl text-5xl text-black"
                    />
                    
                    <MagicText 
                        text="The digital landscape waits for no one. Stop settling for mediocre solutions that drain your budget without delivering ROI. Partner with ABUQITMIRLABS.TECH to build secure, fast, and highly intelligent digital assets that propel your business forward."
                        className="mt-10 text-xl md:text-2xl text-black max-w-3xl mx-auto leading-tight font-bold lowercase"
                    />
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="mt-6 text-black font-black text-sm uppercase tracking-widest bg-white/20 inline-block px-4 py-2 border-2 border-black rounded-lg"
                    >
                        Let's discuss your next big project. Our initial technical consultation and digital audit are completely free.
                    </motion.p>

                    {/* CTA Button */}
                    <div className="relative inline-block group mt-12">
                        <Link 
                            to="/contact"
                            className="relative z-10 px-10 py-6 bg-black text-[#ccff00] font-black text-2xl rounded-2xl brutalist-shadow border-4 border-black flex items-center gap-4 transition-transform uppercase tracking-tighter hover:bg-[#ccff00] hover:text-black"
                        >
                            Start Your Project
                            <ArrowRight className="w-8 h-8" />
                        </Link>
                    </div>

                    {/* Contact info Bar */}
                    <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-lg text-black border-y-4 border-black py-10 font-black uppercase tracking-tighter">
                        <div className="flex flex-col items-center gap-2 group">
                            <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=abuqitmirshirazalmadani@gmail.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline transition items-center gap-2 flex"
                            >
                                <Mail className="h-6 w-6" />
                                abuqitmirshirazalmadani@gmail.com
                            </a>
                            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Connect via Gmail</p>
                        </div>
                        <span className="hidden md:block h-6 w-1 bg-black"></span>
                        <a href="https://wa.me/923233260859" target="_blank" rel="noreferrer" className="group hover:underline transition flex items-center gap-2">
                            <MessageCircle className="h-6 w-6" />
                            +92-323-3260859 (Tap to Chat)
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <footer className="pt-20">
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                        {/* Brand */}
                        <div className="flex flex-col gap-2 origin-left">
                            <Logo />
                            <p className="text-[10px] text-black font-black mt-2 uppercase tracking-[0.2em]">POWERED BY ADVANCED AI TECHNOLOGY</p>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <Facebook className="w-6 h-6 outline-none" />, href: "https://www.facebook.com/profile.php?id=61583768706452" },
                                { icon: <MapPin className="w-6 h-6" />, href: "https://www.google.com/search?q=ABUQITMIRLABS.TECH&stick=H4sIAAAAAAAA_-NgU1I1qEg0SUwyMkw2MzIySUkyTba0MqhITUtOMUgztzRLTTM2TjI3XMTK5ZhUqhCYWZKbWQQAgvyVVDYAAAA&hl=en&mat=CZLYxD3dn4-XElcBTVDHnmXSKVhVcvJTl5LdX-OEaaOViC2V8fJZjkseklE5xuWjtkBxO-4XBgP9s87BonPt73AGlgF_gCfDR0OBlJ87IyZC-1OVUDGmHgKOo0SrOjnijr4&authuser=0" },
                                { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/abuqitmirshirazalmadani/" },
                                { icon: <Youtube className="w-6 h-6" />, href: "https://www.youtube.com/@AbuQitmir" },
                                { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/abu-qitmir-697423390/" },
                                { icon: <Twitter className="w-6 h-6" />, href: "https://x.com/AbuQitmir" },
                                { icon: <MessageCircle className="w-6 h-6" />, href: "https://www.tiktok.com/@abuqitmirmohammadshiraz" }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl border-4 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-[#ccff00] transition-all brutalist-shadow"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Nav */}
                    <nav className="flex flex-wrap gap-x-10 gap-y-6 text-sm text-black font-black mt-16 pt-10 border-t-4 border-black uppercase tracking-widest">
                        <Link to="/" className="hover:underline transition-colors">Home</Link>
                        <Link to="/#services" className="hover:underline transition-colors">Services</Link>
                        <Link to="/custom-software" className="hover:underline transition-colors">Custom Software</Link>
                        <Link to="/mobile-app-development" className="hover:underline transition-colors">Mobile Apps</Link>
                        <Link to="/web-development" className="hover:underline transition-colors">Web Dev</Link>
                        <Link to="/ai-agent-development" className="hover:underline transition-colors">AI Agents</Link>
                        <Link to="/seo-mastery" className="hover:underline transition-colors">SEO Mastery</Link>
                        <Link to="/graphics-design" className="hover:underline transition-colors">Graphics Design</Link>
                        <Link to="/content-writing" className="hover:underline transition-colors">Content Writing</Link>
                        <Link to="/about" className="hover:underline transition-colors">About Us</Link>
                        <Link to="/contact" className="hover:underline transition-colors">Contact Us</Link>
                        <Link to="/us-market" className="hover:underline transition-colors">US Market</Link>
                        <Link to="/uk-market" className="hover:underline transition-colors">UK Market</Link>
                        <Link to="/pakistan-market" className="hover:underline transition-colors">Pakistan Market</Link>
                        <Link to="/canada-market" className="hover:underline transition-colors">Canada Market</Link>
                        <Link to="/poland-market" className="hover:underline transition-colors">Poland Market</Link>
                        <Link to="/australia-market" className="hover:underline transition-colors">Australia Market</Link>
                        <Link to="/terms" className="hover:underline transition-colors">Terms of Service</Link>
                        <Link to="/privacy" className="hover:underline transition-colors">Privacy Policy</Link>
                        <Link to="/blog" className="hover:underline transition-colors uppercase">Blog</Link>
                        <button 
                            onClick={() => window.location.href = '/admin'}
                            className="px-4 py-1.5 bg-black text-[#ccff00] rounded-lg hover:bg-zinc-800 transition-all font-black text-[10px] brutalist-shadow border-2 border-black cursor-pointer"
                        >
                            ADMIN ACCESS
                        </button>
                        <div className="md:ml-auto font-black text-black">
                            <div className="flex flex-col md:items-end gap-2">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/50 mb-2">
                                    <span>Karachi, PK</span>
                                    <span>•</span>
                                    <span>Dubai, AE</span>
                                    <span>•</span>
                                    <span>Warsaw, PL</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href="/sitemap.xml" className="hover:underline text-[10px]">Index Protocol</a>
                                    <span className="text-[10px]">© 2026 ABUQITMIRLABS.TECH. All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </footer>
            </div>
        </section>
    );
};

export default Footer;

