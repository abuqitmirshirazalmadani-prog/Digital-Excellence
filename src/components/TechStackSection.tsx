"use client";

import React from 'react';
import { motion } from 'motion/react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

const techGroups = [
    {
        category: "Frontend & Web",
        items: ["React.js", "Next.js", "Tailwind CSS"],
        icon: "⚛️"
    },
    {
        category: "Mobile App Development",
        items: ["Flutter", "React Native"],
        icon: "📱"
    },
    {
        category: "Backend & APIs",
        items: ["Node.js", "Express"],
        icon: "🟢"
    },
    {
        category: "AI & Data Integration",
        items: ["Python", "LangChain", "Semantic Kernel"],
        icon: "🐍"
    },
    {
        category: "Cloud & Database",
        items: ["Firebase", "AWS", "MongoDB", "PostgreSQL"],
        icon: "☁️"
    }
];

const TechStackSection = () => {
    return (
        <section id="tech-stack" className="bg-[#0a0a0a] py-32 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Header based on user-provided snippet style */}
                <div className="max-w-4xl flex flex-col gap-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4 block">
                            Tech Stack
                        </span>
                        <AnimatedShinyText 
                            text="Modern Technologies We Use" 
                            textClassName="leading-tight md:text-8xl text-6xl text-white mb-2 font-bold tracking-tighter"
                            className="mb-8"
                        />
                    </motion.div>
                    
                    <MagicText 
                        text="We refuse to rely on outdated frameworks. We utilize a modern, battle-tested tech stack renowned for its speed, infinite scalability, and military-grade security."
                        className="md:text-3xl text-xl font-normal text-white/50 tracking-tight leading-snug max-w-2xl"
                    />
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">
                                {group.icon}
                            </div>
                            <AnimatedBreathingText text={group.category} className="text-xl font-bold text-white mb-4 uppercase tracking-wider block" />
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Ambient Background Decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default TechStackSection;
