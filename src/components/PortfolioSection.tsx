import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="bg-[#0a0a0a] py-32 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                            Portfolio & Recent Work
                        </span>
                    </motion.div>

                    <AnimatedShinyText 
                        text="See Our Work in Action: Real Projects, Real Results" 
                        textClassName="text-4xl md:text-6xl lg:text-7xl"
                        className="mb-8"
                    />

                    <MagicText 
                        text="We believe that exceptional work speaks for itself. Explore our recent case studies and project breakdowns below. See exactly how we transform complex challenges into elegant digital solutions."
                        className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto"
                    />
                </div>

                {/* Project Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {[
                        {
                            title: "AI Commerce Engine",
                            category: "AI Integration",
                            desc: "Autonomous workflow system reduced manual processing by 85%.",
                            img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop"
                        },
                        {
                            title: "Zenith Cloud Dashboard",
                            category: "SaaS Development",
                            desc: "High-performance interface for distributed edge node management.",
                            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        }
                    ].map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                    src={`${project.img}&w=1200&fm=webp`} 
                                    alt={`futuristic ${project.title} UI dashboard showcase`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">{project.category}</span>
                                <AnimatedBreathingText text={project.title} className="text-2xl font-bold text-white mb-2" />
                                <MagicText text={project.desc} className="text-sm text-gray-400 max-w-md" />
                                <div className="mt-6 flex justify-end">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
