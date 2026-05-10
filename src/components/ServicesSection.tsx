"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import * as THREE from 'three';
import { 
    Code2, 
    Smartphone, 
    Globe, 
    Bot, 
    Search, 
    Palette, 
    FileText, 
    ArrowRight, 
    Lightbulb, 
    Layers, 
    Sparkles, 
    Wand2, 
    ShieldCheck, 
    Award, 
    Monitor,
    Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

interface Service {
    number: string;
    title: string;
    fullTitle: string;
    description: string;
    tags: string[];
    icon: React.ReactNode;
    highlight: boolean;
    href?: string;
}

const services: Service[] = [
    {
        number: "01",
        title: "Software & Mobile",
        fullTitle: "Custom Software & Mobile App Development",
        description: "Turn your disruptive ideas into market-ready realities. We specialize in scalable MVP development for tech startups and comprehensive software solutions for established enterprises.",
        tags: ["React Native", "MVP", "SaaS"],
        icon: <Smartphone className="text-violet-400" />,
        highlight: false,
        href: "/custom-software"
    },
    {
        number: "02",
        title: "Web Tech",
        fullTitle: "High-Performance Web Development",
        description: "We engineer high-performance Jamstack web development solutions that prioritize speed, security, and scalability. Sub-second load times that convert.",
        tags: ["Jamstack", "Headless CMS", "Next.js"],
        icon: <Globe className="text-violet-400" />,
        highlight: true, // This will have the WebGL background
        href: "/web-development"
    },
    {
        number: "03",
        title: "AI Agents",
        fullTitle: "Intelligent AI Agent Development",
        description: "Transform your business with autonomous LLM agents that automate complex workflows and provide 24/7 intelligent support. Agentic AI is the future.",
        tags: ["LLM", "RAG", "Automation"],
        icon: <Bot className="text-violet-400" />,
        highlight: false,
        href: "/ai-agent-development"
    },
    {
        number: "04",
        title: "SEO Mastery",
        fullTitle: "SEO & Local SEO Mastery",
        description: "We utilize data-driven Semantic Entity SEO and hyper-local map strategies to establish topical authority and capture high-intent buyers.",
        tags: ["Semantic SEO", "GBP", "Entity SEO"],
        icon: <Search className="text-violet-400" />,
        highlight: false,
        href: "/seo-mastery"
    },
    {
        number: "05",
        title: "Design",
        fullTitle: "Premium Graphics Designing",
        description: "Conversion-focused brand identity design. Logos, UI/UX layouts, and social media creatives strategically formulated to build trust.",
        tags: ["UI/UX", "Branding", "Creative"],
        icon: <Palette className="text-violet-400" />,
        highlight: false,
        href: "/graphics-design"
    },
    {
        number: "06",
        title: "Content",
        fullTitle: "Professional Content Writing",
        description: "E-E-A-T focused technical content writing that satisfies algorithms and humans. Naratives that establish your brand as an authority.",
        tags: ["E-E-A-T", "Semantic", "Copywriter"],
        icon: <FileText className="text-violet-400" />,
        highlight: false,
        href: "/content-writing"
    }
];

const TorusKnotAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x8b5cf6, // Violet
            size: 0.1,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, particleMaterial);
        scene.add(particles);

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
            mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const frame = requestAnimationFrame(animate);
            
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            particles.rotation.y += 0.001;
            particles.rotation.x += 0.0005;
            particles.rotation.y += targetX;
            particles.rotation.x += targetY;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            geometry.dispose();
            particleMaterial.dispose();
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen" />;
};

const ServiceItem: React.FC<{ service: Service }> = ({ service }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`group w-full relative border-white/5 border-b last:border-b-0 ${service.highlight ? 'bg-white/[0.02]' : ''}`}>
            {service.highlight && (
                <>
                    <TorusKnotAnimation />
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)] pointer-events-none"></div>
                </>
            )}
            
            <div className="relative z-10 lg:px-12 lg:py-24 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 w-full max-w-7xl mx-auto py-16 px-6">
                {/* ID */}
                <div className="w-12">
                    <span className="text-lg text-white/40 font-mono relative pb-2 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white/20">
                        {service.number}
                    </span>
                </div>

                {/* Main Label */}
                <div className="lg:w-[500px] shrink-0">
                    {isInView && (
                        <AnimatedShinyText 
                            text={service.title} 
                            textClassName="text-4xl sm:text-5xl md:text-6xl lg:text-6xl"
                        />
                    )}
                </div>

                {/* Sub Description */}
                <div className="flex-1 flex items-start gap-6 max-w-xl">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white/80 bg-white/5 border border-white/10 backdrop-blur-md">
                        {service.icon}
                    </div>
                    <div>
                        <AnimatedBreathingText 
                            text={service.fullTitle.split(': ')[1] || service.fullTitle.split(' Mastery')[0]} 
                            className="text-sm font-bold text-white mb-2 uppercase tracking-wider block" 
                        />
                        <MagicText text={service.description} className="text-sm text-white/50" />
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-row lg:flex-col gap-3 shrink-0 flex-wrap">
                    {service.tags.map((tag, i) => (
                        <div 
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold text-white/80 w-fit bg-white/5 border border-white/10 backdrop-blur-md hover:border-violet-400/50 transition-colors cursor-default"
                        >
                            <Sparkles className="w-3 h-3 text-violet-400" />
                            {tag.toUpperCase()}
                        </div>
                    ))}
                </div>

                {/* Action Arrow */}
                <div className="lg:ml-auto">
                    {service.href ? (
                        <Link to={service.href} className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-white/5 border border-white/10 backdrop-blur-md hover:bg-violet-500 hover:text-white hover:border-violet-400 transition-all group-hover:-rotate-45">
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    ) : (
                        <button className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-white/5 border border-white/10 backdrop-blur-md hover:bg-violet-500 hover:text-white hover:border-violet-400 transition-all group-hover:-rotate-45">
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <section id="services" className="bg-[#0a0a0a] py-20 px-6">
            <div className="max-w-7xl mx-auto mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 inline-block"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-violet-400 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
                        Premium Digital Expertise
                    </span>
                </motion.div>
                <AnimatedShinyText 
                    text="Our Premium Digital Services (Engineered for Growth)" 
                    textClassName="text-4xl md:text-6xl"
                    className="mb-8"
                />
                <MagicText 
                    text="In an era dominated by AI and highly intelligent search algorithms, generic services fail. We utilize semantic entity optimization and advanced development frameworks to give you an unfair advantage."
                    className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto font-light"
                />
            </div>

            <div className="w-full border-white/5 border rounded-[32px] overflow-hidden bg-[#050508]/90 shadow-2xl backdrop-blur-3xl">
                {services.map((service, idx) => (
                    <ServiceItem key={idx} service={service} />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
