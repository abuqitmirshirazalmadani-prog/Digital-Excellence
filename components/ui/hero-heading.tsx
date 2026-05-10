"use client";

import React from 'react';
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";

interface HeroHeadingProps {
    className?: string;
}

const HeroHeading = ({ className }: HeroHeadingProps) => {
    return (
        <div className={cn("flex flex-col items-center text-center", className)}>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-black uppercase tracking-tighter leading-[0.85] flex flex-col"
            >
                {/* Row 1: FUTURE-PROOF */}
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    Future-Proof
                </span>
                
                {/* Row 2: YOUR BUSINESS */}
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    Your Business
                </span>
                
                {/* Row 3: WITH AI-DRIVEN TECH (Outlined) */}
                <span 
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ 
                        WebkitTextStroke: '1px white',
                        color: 'transparent'
                    }}
                >
                    With AI-Driven Tech
                </span>
                
                {/* Row 4: & SEMANTIC SEO SOLUTIONS (Lime) */}
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#ccff00]">
                    & Semantic SEO Solutions.
                </span>
            </motion.h1>
        </div>
    );
};

export default HeroHeading;
