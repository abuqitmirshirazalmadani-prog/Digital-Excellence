"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useTransform } from 'motion/react';
import { Layers, ArrowRight, Server, CheckCircle2, Zap, Globe, Users } from 'lucide-react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';
import { MagicText } from './ui/magic-text';

const ImpactSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Smooth spring animation for the parallax movement
    const xSpring = useSpring(0, { stiffness: 50, damping: 20 });
    const ySpring = useSpring(0, { stiffness: 50, damping: 20 });

    const rotateY = useTransform(xSpring, [-0.5, 0.5], [10, -10]);
    const rotateX = useTransform(ySpring, [-0.5, 0.5], [-10, 10]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            // Calculate relative mouse position (-0.5 to 0.5)
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            xSpring.set(x);
            ySpring.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [xSpring, ySpring]);

    const impactPoints = [
        {
            title: "Reduce Manual Work",
            value: "70%",
            desc: "Through autonomous AI workflows and intelligent automation.",
            icon: <Zap className="text-cyan-400 w-5 h-5" />
        },
        {
            title: "Operational Efficiency",
            value: "Scale",
            desc: "Integrating disjointed systems into a single, cohesive ecosystem.",
            icon: <Server className="text-blue-400 w-5 h-5" />
        }
    ];

    return (
        <section 
            ref={sectionRef}
            className="bg-[#050505] text-zinc-100 py-32 overflow-hidden selection:bg-cyan-500/30 w-full min-h-screen flex items-center justify-center relative border-t border-white/5"
        >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none mix-blend-screen animate-pulse z-0"></div>

            <motion.div 
                style={{ 
                    perspective: '1200px',
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY
                }}
                className="relative w-full max-w-7xl px-6 flex items-center justify-center z-10"
            >
                {/* LAYER -3: Deepest Background Grid */}
                <div style={{ transform: 'translateZ(-600px) scale(1.6)' }} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                </div>

                {/* LAYER -2: Background UI Elements */}
                <div style={{ transform: 'translateZ(-300px) scale(1.2)' }} className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40 blur-[2px]">
                    <div className="absolute top-[10%] left-[5%] w-72 bg-zinc-950/80 border border-white/5 rounded-2xl p-6 backdrop-blur-2xl">
                        <div className="flex gap-2 mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-zinc-800/50 rounded-full"></div>
                            <div className="h-2 w-2/3 bg-zinc-800/50 rounded-full"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-[10%] right-[5%] w-64 bg-zinc-900/40 border border-cyan-500/10 rounded-2xl p-5 backdrop-blur-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                <Server size={16} />
                            </div>
                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Global Compute</div>
                        </div>
                        <div className="flex items-end gap-1.5 h-12 w-full">
                            {[0.3, 0.7, 0.4, 0.9, 0.6].map((h, i) => (
                                <div key={i} className="w-full bg-cyan-500/40 rounded-sm" style={{ height: `${h * 100}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* LAYER 0: Main Content */}
                <div style={{ transform: 'translateZ(0px)' }} className="relative z-30 flex flex-col items-center text-center w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
                    >
                        <Layers size={14} className="text-cyan-400" />
                        <span className="text-[10px] font-bold text-zinc-200 tracking-[0.2em] uppercase">Impact Analytics</span>
                    </motion.div>

                    <AnimatedShinyText 
                        text="Real Business Impact: What You Will Achieve" 
                        textClassName="text-3xl md:text-5xl lg:text-7xl"
                        className="mb-8"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12">
                        {[
                            { title: "Reduce Manual Work", val: "70%", desc: "Autonomous AI workflows and intelligent automation.", icon: <Zap className="text-cyan-400" /> },
                            { title: "Operational Efficiency", val: "Peak", desc: "Integrating disjointed systems into a single ecosystem.", icon: <Globe className="text-blue-400" /> },
                            { title: "Technical Scaling", val: "∞", desc: "No technical limitations using cloud-native infrastructures.", icon: <Server className="text-indigo-400" /> },
                            { title: "Customer Experience", val: "Elite", desc: "Zero-friction navigation and intuitive UI/UX design.", icon: <Users className="text-purple-400" /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-left hover:bg-white/[0.06] transition-all group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white tracking-tight">{item.val}</div>
                                </div>
                                <AnimatedBreathingText text={item.title} className="text-sm font-bold text-white mb-1" />
                                <MagicText text={item.desc} className="text-xs text-zinc-400" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-100 text-zinc-950 font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Initialize Growth <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* LAYER 1: Foreground Decorative Elements */}
                <div style={{ transform: 'translateZ(150px)' }} className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_10px_2px_#22d3ee] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[20%] w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_#a855f7]"></div>
                </div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default ImpactSection;
