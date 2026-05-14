import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Star, ShieldCheck, Check, TrendingUp, Lock, Award, Zap } from 'lucide-react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';
import { MagicText } from './ui/magic-text';

const TrustSection = () => {
    const fadeInSlide = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    } as any;

    return (
        <section className="bg-[#0a0a0a] py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeInSlide}
                    className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Left: Core differentiator */}
                        <motion.div 
                            custom={0.1}
                            variants={fadeInSlide}
                            className="overflow-hidden bg-center border border-white/10 rounded-2xl relative min-h-[440px] sm:h-[520px]"
                            style={{ 
                                backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&fm=webp)',
                                backgroundSize: 'cover'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="relative h-full p-8 flex flex-col">
                                {/* Stats Overlay */}
                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-xl font-black text-white">410+</div>
                                        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Completed</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-xl font-black text-white">290+</div>
                                        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Reviews</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-xl font-black text-white">5+</div>
                                        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Years</div>
                                    </div>
                                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-xl font-black text-white">350+</div>
                                        <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Clients</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Middle: Results & methodology */}
                        <motion.div 
                            custom={0.2}
                            variants={fadeInSlide}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl relative flex flex-col"
                        >
                            <MagicText text="Trust Signals & Authority" className="text-sm text-neutral-400 font-bold tracking-widest uppercase mb-2" />
                            <AnimatedShinyText 
                                text="3x Faster ROI, Verified Excellence" 
                                textClassName="text-3xl md:text-4xl lg:text-5xl leading-tight"
                                className="mt-2"
                            />

                            <div className="mt-8 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-neutral-200">
                                    <TrendingUp className="h-5 w-5 text-blue-500 shrink-0" />
                                    <div>
                                        <AnimatedBreathingText text="Data-Driven ROI Focus" className="font-bold text-white block" />
                                        <MagicText text="We measure success by your revenue growth." className="text-neutral-400" />
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-neutral-200">
                                    <Lock className="h-5 w-5 text-blue-400 shrink-0" />
                                    <div>
                                        <AnimatedBreathingText text="Enterprise-Grade Security" className="font-bold text-white block" />
                                        <MagicText text="100% secure, scalable, and robust architecture." className="text-neutral-400" />
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-neutral-200">
                                    <Award className="h-5 w-5 text-blue-600 shrink-0" />
                                    <div>
                                        <AnimatedBreathingText text="E-E-A-T Compliant" className="font-bold text-white block" />
                                        <MagicText text="Proven experience, expertise, and authority." className="text-neutral-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-8">
                                <div className="rounded-xl border p-5 border-white/10 bg-black/30 backdrop-blur-md">
                                    <div className="flex items-center gap-1 text-amber-300 mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                    </div>
                                    <MagicText 
                                        text='"ABUQITMIRLABS.TECH doesn&apos;t just build websites—they architect growth engines. Their strategic thinking transformed our digital presence."'
                                        className="text-sm text-neutral-300 italic"
                                    />
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                                        <div className="text-sm">
                                            <p className="text-neutral-200 font-bold">Michael Torres</p>
                                            <p className="text-xs text-neutral-500">CEO, Tech Innovations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Trust indicators & guarantees */}
                        <div className="grid grid-rows-2 gap-6">
                            {/* Trust & expertise */}
                            <motion.div 
                                custom={0.3}
                                variants={fadeInSlide}
                                className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center"
                            >
                                <div className="relative h-24 w-24">
                                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-20"></div>
                                    <div className="absolute inset-[8px] rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                                        <ShieldCheck className="h-10 w-10 text-blue-400" />
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-col items-center">
                                    <AnimatedBreathingText text="5-Star Business Rating" className="text-lg font-bold text-white mb-2" />
                                    <p className="text-sm text-neutral-400 leading-relaxed max-w-[200px]">
                                        Verified entity on Google Business recognized for technical excellence.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Key metrics */}
                            <motion.div 
                                custom={0.4}
                                variants={fadeInSlide}
                                className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-neutral-300">Semantic SEO</span>
                                        <span className="text-blue-500 font-bold">Expert</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-neutral-300">AI Integration</span>
                                        <span className="text-blue-400 font-bold">Expert</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-neutral-300">Cloud Infrastructure</span>
                                        <span className="text-blue-600 font-bold">Expert</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-[10px] text-neutral-300 uppercase tracking-widest font-bold">
                                        <Check className="h-3 w-3 text-emerald-400" />
                                        Certified Digital Excellence
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSection;
