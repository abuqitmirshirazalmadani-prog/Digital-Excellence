"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link 
            to="/" 
            className={`flex flex-col no-underline group transition-all duration-300 ${className}`}
        >
            <div className="flex flex-col leading-[0.8]">
                <span className="text-[#0066ff] font-black text-xl md:text-2xl tracking-tighter uppercase group-hover:text-white transition-colors">
                    ABUQITMIR
                </span>
                <div className="bg-[#ccff00] text-black text-[10px] md:text-[11px] font-black px-2 py-0.5 rounded-sm tracking-[0.1em] uppercase self-start mt-1">
                    LABS.TECH
                </div>
            </div>
        </Link>
    );
};

export default Logo;
