import React from 'react';
import { motion } from 'motion/react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';

const ApproachSection = () => {
    return (
        <section id="about" className="bg-[#0a0a0a] py-32 px-6 relative overflow-hidden border-t border-white/5">
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        Our Unique Approach & Real Business Impact
                    </span>
                </motion.div>

                <AnimatedShinyText 
                    text="Our Unique Approach: Why We Are Different" 
                    textClassName="text-4xl md:text-5xl lg:text-3xl"
                    className="mb-8"
                />

                <MagicText 
                    text='Most digital agencies operate like factories—they just "build software" and hand it over. At ABUQITMIRLABS.TECH, we operate as your strategic technical partners. We build comprehensive solutions designed to solve real, complex business problems. We do not just deliver lines of code; we deliver measurable results.'
                    className="text-lg md:text-xl text-gray-400 mt-10 leading-relaxed max-w-3xl mx-auto"
                />
            </div>
        </section>
    );
};

export default ApproachSection;
