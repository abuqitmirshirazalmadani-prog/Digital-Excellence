"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
    Search, 
    Palette, 
    Code2, 
    ShieldCheck, 
    Rocket,
    Activity,
    ChevronRight,
    Cpu,
    Terminal,
    Box
} from 'lucide-react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

const steps = [
    {
        title: "Discovery & Planning",
        desc: "We sit down with you to deeply understand your business ecosystem, identify pain points, and define clear, measurable goals.",
        icon: <Search className="w-5 h-5" />,
        progress: 78,
        label: "ANALYSIS_DEPTH: 98%",
        color: "zinc"
    },
    {
        title: "UI/UX Design Prototyping",
        desc: "We create intuitive, modern, and conversion-optimized wireframes and prototypes, allowing you to visualize the end product.",
        icon: <Palette className="w-5 h-5" />,
        progress: 65,
        label: "PIXEL_PRECISION: READY",
        color: "indigo"
    },
    {
        title: "Clean Development",
        desc: "Our engineers write clean, scalable, and modular code, ensuring the foundation of your software is indestructible.",
        icon: <Code2 className="w-5 h-5" />,
        progress: 90,
        label: "CODE_INTEGRITY: 100%",
        color: "indigo"
    },
    {
        title: "Rigorous Testing & QA",
        desc: "We subject the project to intense performance, security, and reliability testing across multiple devices and environments.",
        icon: <ShieldCheck className="w-5 h-5" />,
        progress: 85,
        label: "STRESS_TEST: PASSED",
        color: "emerald"
    },
    {
        title: "Deployment & Long-Term Support",
        desc: "We ensure a smooth launch and remain by your side to provide continuous maintenance, updates, and strategic scaling.",
        icon: <Rocket className="w-5 h-5" />,
        progress: 97,
        label: "UPTIME_TARGET: 99.9%",
        color: "emerald"
    }
];

const Step: React.FC<{ step: typeof steps[0], index: number }> = ({ step, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 1;

    return (
        <div ref={ref} className={`relative flex flex-col md:grid md:grid-cols-2 items-center gap-8 mb-24 last:mb-0 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {/* Content Side */}
            <div className={`${isEven ? 'md:order-2 md:pl-14' : 'md:text-right md:pr-14'}`}>
                {isInView && (
                    <AnimatedBreathingText 
                        text={step.title} 
                        className="text-2xl font-bold text-zinc-100 tracking-tight"
                    />
                )}
                <MagicText 
                    text={step.desc} 
                    className={`mt-2 text-zinc-500 max-w-md ${!isEven ? 'md:ml-auto' : ''}`}
                />
            </div>

            {/* Visual Side */}
            <div className={`${isEven ? 'md:order-1 md:pr-14' : 'md:pl-14'} w-full`}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="rounded-2xl border border-zinc-700/70 p-5 flex items-center gap-4 bg-zinc-900/60 backdrop-blur-md shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(30,30,36,0.8), rgba(14,14,18,0.9))' }}
                >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${step.color === 'emerald' ? 'text-emerald-400' : step.color === 'indigo' ? 'text-indigo-400' : 'text-zinc-300'}`}
                      style={{ background: 'linear-gradient(to bottom, rgba(12,12,14,0.95), rgba(20,20,24,0.95))', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.65)' }}>
                        {step.icon}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden shadow-inner">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${step.progress}%` } : {}}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                className={`h-full ${step.color === 'emerald' ? 'bg-emerald-500' : step.color === 'indigo' ? 'bg-indigo-500' : 'bg-zinc-400'}`}
                            />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">{step.label}</div>
                            <div className="flex gap-1">
                                <div className={`w-1.5 h-1.5 rounded-full ${isInView ? 'animate-pulse' : ''} ${step.color === 'emerald' ? 'bg-emerald-500' : step.color === 'indigo' ? 'bg-indigo-500' : 'bg-zinc-400'}`} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] hidden md:block">
                <div className="relative w-full h-full rounded-full border border-zinc-700/80 flex items-center justify-center bg-zinc-900 shadow-xl overflow-visible">
                    <div className={`w-3 h-3 rounded-full border border-zinc-950 z-10 ${step.color === 'emerald' ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : step.color === 'indigo' ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-zinc-400'}`} />
                    {isInView && (
                        <div className={`absolute inset-0 rounded-full border opacity-50 animate-ping ${step.color === 'emerald' ? 'border-emerald-500' : step.color === 'indigo' ? 'border-indigo-500' : 'border-zinc-400'}`} />
                    )}
                </div>
            </div>
        </div>
    );
};

const ProcessSection = () => {
    return (
        <section id="development-process" className="bg-[#0a0a0c] py-32 px-6 relative overflow-hidden border-y border-zinc-900">
            {/* Custom Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-6 block">
                            The Development Process
                        </span>
                        <AnimatedShinyText 
                            text="Our Proven 5-Step Development Process" 
                            textClassName="text-4xl md:text-6xl"
                            className="mb-8"
                        />
                        <MagicText 
                            text="Transparency and precision are the core of our operations. We follow a highly structured, agile methodology so you are always informed and in control of your project's trajectory."
                            className="mt-8 text-lg text-zinc-400 leading-relaxed"
                        />
                    </motion.div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Spine Line */}
                    <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-[18px] md:-translate-x-1/2 rounded-full border border-zinc-800/70 bg-black/40 shadow-inner z-0">
                        <div className="absolute inset-y-4 left-1/2 w-[2px] -translate-x-1/2 bg-zinc-700/30 overflow-hidden">
                            {/* Animated Beam Effect */}
                            <motion.div 
                                animate={{ y: ["0%", "100%", "200%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 top-0 w-full h-[140px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent shadow-[0_0_18px_rgba(99,102,241,0.65)]"
                            />
                        </div>
                    </div>

                    {/* Steps Overlay */}
                    <div className="relative z-10 pt-12 md:pt-0">
                        {steps.map((step, idx) => (
                            <Step key={idx} step={step} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
