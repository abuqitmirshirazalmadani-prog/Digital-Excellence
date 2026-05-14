import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, ChevronRight, Binary, Cpu, Zap, LifeBuoy, MapPin, Play } from 'lucide-react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';
import { MagicText } from './ui/magic-text';

const DifferentiatorsSection = () => {
    return (
        <section id="abu-qitmir-differentiators" className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-10">
                <Link to="/about" className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 hover:bg-purple-500/15 transition backdrop-blur-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="tracking-wide">View Technical Roadmap</span>
                </Link>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abuqitmirshirazalmadani@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 transition backdrop-blur-sm">
                    <Mail className="h-4 w-4" />
                    <span className="tracking-wide">Subscribe to AI Insights</span>
                </a>
            </div>

            <AnimatedShinyText 
                text="What Makes Us Different in the Digital Landscape" 
                textClassName="text-3xl md:text-5xl"
                className="mb-8"
            />

            <div className="space-y-4">
                {/* Differentiator 1 */}
                <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-5 py-6 group hover:border-purple-500/30 transition-colors"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-6">
                        <div>
                            <AnimatedBreathingText text="Analysis" className="md:mt-2 text-xl md:text-2xl font-bold tracking-tight text-white/95" />
                        </div>
                        <div>
                            <AnimatedBreathingText text="Deep Business Workflow Understanding" className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors" />
                            <MagicText text="Before we write a single line of code, we analyze your operational bottlenecks, target audience, and long-term objectives." className="mt-2 text-sm text-white/60" />
                        </div>
                        <div className="justify-self-end mt-4 md:mt-0">
                            <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.article>

                {/* Featured Differentiator (Middle/Main) */}
                <motion.article 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-purple-400/30 bg-purple-500/5 backdrop-blur shadow-lg shadow-purple-500/10"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                        alt="futuristic global network and data infrastructure visual for future-proof scaling" 
                        className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
                    <div className="relative px-5 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-6">
                            <div>
                                <AnimatedBreathingText text="Scaling" className="md:mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white" />
                            </div>
                            <div>
                                <AnimatedBreathingText text="Clean, Scalable Architecture" className="text-xl md:text-2xl font-bold tracking-tight text-white" />
                                <MagicText text="We build systems that grow with you. Our legacy system modernization services ensure you are never held back by outdated tech." className="mt-2 text-sm text-white/80 max-w-xl" />
                            </div>
                            <div className="justify-self-end mt-4 md:mt-0">
                                <button className="h-12 w-12 grid place-items-center rounded-xl bg-purple-500 text-white hover:bg-purple-400 transition shadow-lg shadow-purple-500/30">
                                    <Play className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.article>

                {/* Differentiator 3 */}
                <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-5 py-6 hover:border-purple-500/30 transition-colors"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-6">
                        <div>
                            <AnimatedBreathingText text="Performance" className="md:mt-2 text-xl md:text-2xl font-bold tracking-tight text-white/95" />
                        </div>
                        <div>
                            <AnimatedBreathingText text="Performance-Focused Development" className="text-lg md:text-xl font-bold tracking-tight text-white" />
                            <MagicText text="Speed is a massive ranking and conversion factor. Our engineering prioritizes sub-second load times and seamless interactions." className="mt-2 text-sm text-white/60" />
                        </div>
                        <div className="justify-self-end mt-4 md:mt-0">
                            <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.article>

                {/* Differentiator 4 */}
                <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-5 py-6 hover:border-purple-500/30 transition-colors"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-6">
                        <div>
                            <AnimatedBreathingText text="Optimization" className="md:mt-2 text-xl md:text-2xl font-bold tracking-tight text-white/95" />
                        </div>
                        <div>
                            <AnimatedBreathingText text="Continuous Support & Improvement" className="text-lg md:text-xl font-bold tracking-tight text-white" />
                            <MagicText text="The digital world evolves daily. We provide ongoing optimization to ensure your digital assets remain cutting-edge." className="mt-2 text-sm text-white/60" />
                        </div>
                        <div className="justify-self-end mt-4 md:mt-0">
                            <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;
