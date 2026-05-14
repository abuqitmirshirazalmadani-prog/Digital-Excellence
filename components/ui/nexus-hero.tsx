"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Terminal, ChevronRight, BarChart3, Server, Code2, ShieldCheck, AlertTriangle } from 'lucide-react';
import HeroHeading from './hero-heading';
import { MagicText } from './magic-text';

const NexusHero = () => {
    const tunnelRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<HTMLDivElement>(null);
    
    // Scroll Parallax
    const { scrollY } = useScroll();
    const tunnelY = useTransform(scrollY, [0, 800], [0, -120]);
    const ambientY = useTransform(scrollY, [0, 800], [0, 50]);
    
    // Mouse Parallax state
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });

    useEffect(() => {
        if (!tunnelRef.current) return;

        const generators = {
            chart: () => `
                <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-medium text-gray-200">Latency</span>
                    <div class="text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 16V8"/><path d="M12 16V12"/><path d="M17 16V10"/></svg></div>
                </div>
                <div class="flex items-end gap-1.5 h-16 w-full">
                    ${Array.from({length: 8}).map(() => `<div class="w-full bg-gray-700 hover:bg-blue-500/50 transition-colors rounded-t-sm" style="height: ${Math.random() * 60 + 20}%"></div>`).join('')}
                </div>`,
            stats: () => `
                <div class="flex flex-col gap-1">
                    <div class="flex items-center justify-between w-full">
                        <span class="text-xs text-gray-400 font-medium">Nodes</span>
                        <div class="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg></div>
                    </div>
                    <span class="text-3xl font-medium text-white tracking-tight mt-1">1,024</span>
                    <div class="flex items-center gap-1 text-[10px] text-emerald-400 mt-2">
                        <span>+12.5% scaling</span>
                    </div>
                </div>`,
            code: () => `
                <div class="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                    <div class="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                    <span class="text-[10px] font-medium text-gray-200">router.ts</span>
                </div>
                <div class="font-mono text-[10px] text-gray-400 flex flex-col gap-1.5 leading-tight">
                    <div class="flex gap-2"><span class="text-blue-400">export</span> <span class="text-yellow-200">handler</span> <span class="text-gray-200">=</span> <span>(req)</span></div>
                    <div class="pl-3 text-gray-200">await process(req.body);</div>
                </div>`,
            status: () => `
                <div class="flex items-start justify-between">
                    <div class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-gray-200">DB Sync</span>
                        <span class="text-[10px] text-gray-400">eu-central-1</span>
                    </div>
                    <div class="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div class="w-full bg-gray-800 h-1 rounded-full mt-4">
                    <div class="w-[85%] h-full bg-emerald-500 rounded-full"></div>
                </div>`,
            alert: () => `
                <div class="flex items-start gap-3">
                    <div class="p-1.5 rounded bg-red-500/10 text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-xs font-medium text-white">Memory Spike</span>
                        <span class="text-[10px] text-gray-400 leading-tight">Pod worker-03 exceeding limits.</span>
                    </div>
                </div>`
        };

        const panelTypes = Object.keys(generators) as (keyof typeof generators)[];
        const numPanels = window.innerWidth < 768 ? 15 : 30;
        const maxDepth = 4000;
        const panels: { el: HTMLDivElement, x: number, y: number, z: number }[] = [];

        for (let i = 0; i < numPanels; i++) {
            const el = document.createElement('div');
            const type = panelTypes[Math.floor(Math.random() * panelTypes.length)];
            el.className = 'absolute top-1/2 left-1/2 w-64 p-5 rounded-xl border border-white/5 bg-zinc-900/60 backdrop-blur-md flex flex-col will-change-transform';
            if(type === 'alert') el.classList.add('border-red-500/20');
            el.innerHTML = generators[type]();
            tunnelRef.current.appendChild(el);
            
            const angle = Math.random() * Math.PI * 2;
            const radiusX = (window.innerWidth < 768 ? 180 : 350) + Math.random() * 400;
            const radiusY = (window.innerWidth < 768 ? 130 : 250) + Math.random() * 300;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;
            const z = -Math.random() * maxDepth;
            panels.push({ el, x, y, z });
        }

        let speed = 2.5;
        const cameraZ = 300;
        let animationFrameId: number;

        const animate = () => {
            panels.forEach(p => {
                p.z += speed;
                if (p.z > cameraZ) p.z -= maxDepth + cameraZ;
                
                let blur = p.z < -1200 ? Math.min(6, (-p.z - 1200) / 400) : 0;
                let opacity = p.z < -3200 
                    ? Math.max(0, 1 - ((-p.z - 3200) / 800)) 
                    : (p.z > 0 ? Math.max(0, 1 - (p.z / cameraZ)) : 1);
                
                p.el.style.transform = `translate(-50%, -50%) translate3d(${p.x}px, ${p.y}px, ${p.z}px)`;
                p.el.style.filter = blur > 0.5 ? `blur(${blur.toFixed(1)}px)` : 'none';
                p.el.style.opacity = opacity.toFixed(2);
                p.el.style.zIndex = Math.round(p.z + maxDepth).toString(); 
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: 50 + ((e.clientX / window.innerWidth - 0.5) * 20),
                y: 50 + ((e.clientY / window.innerHeight - 0.5) * 20)
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            if (tunnelRef.current) {
                while (tunnelRef.current.firstChild) {
                    tunnelRef.current.removeChild(tunnelRef.current.firstChild);
                }
            }
        };
    }, []);

    // Smooth parallax effect
    useEffect(() => {
        let rafId: number;
        const updateParallax = () => {
            setTargetPos(prev => ({
                x: prev.x + (mousePos.x - prev.x) * 0.05,
                y: prev.y + (mousePos.y - prev.y) * 0.05
            }));
            rafId = requestAnimationFrame(updateParallax);
        };
        rafId = requestAnimationFrame(updateParallax);
        return () => cancelAnimationFrame(rafId);
    }, [mousePos]);

    return (
        <section id="nexus-engine-hero" className="bg-[#0a0a0a] text-[#ededed] overflow-hidden w-full min-h-screen relative font-sans selection:bg-white/20 selection:text-white flex flex-col">
            {/* Ambient Background */}
            <motion.div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ 
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)',
                    y: ambientY
                }}
            />

            {/* 3D Tunnel Scene */}
            <div 
                ref={sceneRef} 
                className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
                style={{ 
                    perspective: '800px', 
                    perspectiveOrigin: `${targetPos.x}% ${targetPos.y}%` 
                }}
            >
                <motion.div 
                    ref={tunnelRef} 
                    className="relative w-full h-full" 
                    style={{ 
                        transformStyle: 'preserve-3d',
                        y: tunnelY
                    }}
                >
                    {/* Panels injected via Effect */}
                </motion.div>
            </div>

            {/* Content Overlay */}
            <main className="relative z-40 flex-1 flex flex-col items-center justify-center text-center px-6 pointer-events-none pt-24 pb-20 md:pt-32 md:pb-32">
                <div className="pointer-events-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-medium text-gray-400 mb-6 sm:mb-8 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md max-w-full">
                            <span className="flex h-2 w-2 relative shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="truncate whitespace-nowrap">ABUQITMIRLABS.TECH Digital Excellence v2.0</span>
                            <ChevronRight className="w-3 h-3 shrink-0" />
                        </a>
                    </motion.div>

                    <div className="mb-6 w-full">
                        <HeroHeading />
                    </div>
 
                    <div className="max-w-4xl mx-auto mb-10 px-4">
                        <MagicText 
                            text="“We build futuristic AI-powered mobile apps, SaaS platforms, Flutter applications, and no-code startup solutions.”"
                            className="justify-center text-center leading-[1.6] font-medium"
                            wordClassName="text-xs sm:text-sm md:text-base text-gray-400"
                        />
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <a 
                            href="https://wa.me/923233260859" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-950 font-bold text-sm hover:bg-[#ccff00] transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)] active:scale-95 flex items-center justify-center gap-2"
                        >
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Build Your AI App
                        </a>
                        <Link 
                            to="/contact" 
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/50 border border-white/10 text-white font-bold text-sm hover:bg-zinc-800/50 transition-all backdrop-blur-md flex items-center justify-center gap-2 active:scale-95"
                        >
                            Get Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </main>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default NexusHero;
