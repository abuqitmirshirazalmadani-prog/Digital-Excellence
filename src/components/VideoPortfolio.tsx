"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

const videos = [
    {
        id: "v1",
        title: "Enterprise Digital Architecture",
        desc: "Watch our lead architect ABUQITMIRLABS.TECH breakdown complex digital ecosystems.",
        videoId: "v25Fo6O3iy4"
    },
    {
        id: "v2",
        title: "Advanced Engineering Solutions",
        desc: "Deep dive into High-Performance Web Tech and scalable backend systems.",
        videoId: "110zeH-eEEk"
    },
    {
        id: "v3",
        title: "AI-Driven Business Growth",
        desc: "How we implement autonomous LLM agents to automate business workflows.",
        videoId: "HgPP7c9fftw"
    },
    {
        id: "v4",
        title: "Strategic Consulting Session",
        desc: "A look at our detailed technical roadmap building for enterprise clients.",
        videoId: "M4m1rplTxDk"
    },
    {
        id: "v5",
        title: "Modern Tech Explained",
        desc: "Quick insights into modern tech stacks and semantic search optimization.",
        videoId: "KowPMteJA-E"
    },
    {
        id: "v6",
        title: "Future of Digital Assets",
        desc: "A vision for secure, fast, and highly intelligent digital transformations.",
        videoId: "X9xyYiT79Cc"
    }
];

const VideoPortfolio = () => {
    return (
        <section id="video-portfolio" className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all shadow-xl backdrop-blur-sm"
                        >
                            {/* Video Container */}
                            <div className="aspect-video relative overflow-hidden bg-black/60">
                                <iframe 
                                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                                    src={`https://www.youtube.com/embed/${item.videoId}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                {/* Overlay Play Indicator (Visual Only) */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play className="w-5 h-5 text-white fill-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <AnimatedBreathingText text={item.title} className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors block" />
                                <MagicText text={item.desc} className="text-sm text-gray-400 font-light" />
                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Case Study</span>
                                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoPortfolio;
