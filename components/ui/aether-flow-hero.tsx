"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import GradientButton from './button-1';

// A utility function for class names
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

// The main hero component
const AetherFlowHero = ({
  h1Text = "Future-Proof Your Business with AI-Driven Tech & Semantic SEO Solutions",
  subHeadline = "Welcome to Abu Qitmir, where we engineer digital excellence. We do not just build generic websites; we architect high-performance digital solutions that serve as the ultimate growth engine for your brand. From intelligent AI agents and scalable MVP development for tech startups to data-driven semantic SEO, our precision-engineered strategies ensure you dominate your market.",
  primaryCTA = "🟢 Chat Directly on WhatsApp",
  secondaryCTA = "📊 Explore Our Custom Solutions"
}) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse collision detection
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            if (!canvas) return;
            particles = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = 'rgba(191, 128, 255, 0.8)'; // Brighter purple
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        };

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); 
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            if (!ctx || !canvas) return;
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        
                        let dx_mouse_a = mouse.x ? particles[a].x - mouse.x : 1000;
                        let dy_mouse_a = mouse.y ? particles[a].y - mouse.y : 1000;
                        let distance_mouse_a = Math.sqrt(dx_mouse_a*dx_mouse_a + dy_mouse_a*dy_mouse_a);

                        if (mouse.x && distance_mouse_a < mouse.radius) {
                             ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
                        } else {
                             ctx.strokeStyle = `rgba(200, 150, 255, ${opacityValue})`;
                        }
                        
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            animationFrameId = requestAnimationFrame(animate);
            // Set the background color inside the canvas draw loop
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        };
        
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-40"></canvas>
            
            {/* Background Blurs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/30 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]"></div>
            </div>

            <div className="relative z-10 text-center p-6 max-w-3xl mt-20">
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
                        Precision-Engineered Growth
                    </span>
                </motion.div>

                <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 italic font-serif">Future-Proof</span> Your Business with <br />
                    <span className="text-white">AI-Driven Tech & Semantic SEO</span>
                </motion.h1>

                <motion.p
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl mx-auto text-xs md:text-sm text-gray-400 mb-10 leading-relaxed"
                >
                    Welcome to Abu Qitmir, where we engineer digital excellence. We architect <span className="text-gray-200 font-medium">high-performance digital solutions</span> that serve as the ultimate growth engine for your brand.
                </motion.p>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <GradientButton 
                        width="280px" 
                        height="64px"
                        onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                    >
                        🟢 Chat Directly on WhatsApp
                    </GradientButton>

                    <GradientButton 
                        width="280px" 
                        height="64px"
                        className="opacity-90 hover:opacity-100"
                    >
                        📊 Explore Our Custom Solutions
                    </GradientButton>
                </motion.div>
            </div>

            {/* Stats / Bottom Bar */}
            <div className="absolute bottom-12 flex justify-between w-full px-12 text-gray-500 hidden md:flex">
                <div className="flex gap-12">
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-white font-mono text-xl">99.9%</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Performance Score</span>
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-white font-mono text-xl">2.5s</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold">Avg Load Time</span>
                    </div>
                </div>
                <div className="flex flex-col items-end leading-tight">
                    <span className="text-white font-mono text-xl">AETHER_FLX</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Engine Version 4.0</span>
                </div>
            </div>
        </div>
    );
};

export default AetherFlowHero;
