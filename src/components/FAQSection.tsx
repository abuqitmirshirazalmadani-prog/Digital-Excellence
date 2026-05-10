"use client";

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { MagicText } from './ui/magic-text';
import { AnimatedBreathingText } from './ui/animated-breathing-text';

const faqItems = [
    {
        question: "What industries does ABUQITMIRLABS.TECH specialize in?",
        answer: "We specialize in Fintech, E-commerce, Healthcare, logistics, and SaaS platforms. Our engineering team provides high-performance, secure, and scalable digital solutions tailor-made for these high-stakes industries where data integrity and user trust are paramount."
    },
    {
        question: "How much time does it take to build a scalable MVP for a startup?",
        answer: "A standard MVP (Minimum Viable Product) usually takes 8-12 weeks to design and deploy. Larger, complex enterprise solutions can take 4-6 months depending on the depth of integrations and specific business logic required. We use Agile methodology to deliver usable features rapidly, ensuring you can start testing your market fit as early as possible."
    },
    {
        question: "Why should my business upgrade to Jamstack and Headless CMS?",
        answer: "Traditional, monolithic websites are often slow, hard to scale, and vulnerable to security breaches. By leveraging Jamstack web development and headless CMS integration services, we decouple your frontend from your backend database. The result? Lightning-fast, sub-second load times that easily pass Google’s Core Web Vitals. This speed drastically reduces bounce rates and provides a frictionless journey that converts casual visitors into buyers."
    },
    {
        question: "What is the exact difference between a standard chatbot and a Custom LLM AI Agent?",
        answer: "A standard chatbot follows rigid, rule-based scripts and often frustrates users when questions go off-script. In contrast, our custom LLM agents for workflow automation are fully autonomous. Powered by large language models, they understand deep context, learn directly from your proprietary data, and can independently execute complex tasks—from handling 24/7 intelligent customer support to deep data analysis—without requiring human intervention."
    },
    {
        question: "How does Semantic Entity SEO differ from traditional keyword SEO?",
        answer: "Traditional SEO relies heavily on stuffing exact-match keywords into text. Semantic Entity SEO optimization is about building a recognizable, trusted digital identity that Google's AI understands conceptually. Instead of just ranking for words, we build your topical authority. Combined with our Google Business Profile authority building, this hyper-local strategy ensures you dominate map results and capture high-intent, ready-to-buy customers in your vicinity."
    },
    {
        question: "Does a conversion-focused brand identity actually improve ROI?",
        answer: "Absolutely. Beautiful design is meaningless if it doesn't drive action. Our conversion-focused brand identity design goes beyond aesthetics. By applying accessible design principles and intuitive UI/UX layouts, we remove friction from the user journey. Every memorable logo, color palette, and social media creative we craft is strategically formulated to build instant trust and subtly guide the user toward making a purchase."
    },
    {
        question: "What is E-E-A-T compliant content, and why do I need it to rank?",
        answer: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. In an internet flooded with generic, AI-generated text, search engines now penalize low-quality content and reward verifiable human expertise. We use detailed semantic content briefs to write E-E-A-T focused technical content. From high-converting landing pages to thought-leadership blog posts, we craft copy that satisfies complex search algorithms while building genuine trust with human readers."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div 
            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                isOpen 
                ? 'border-violet-500/30 bg-gradient-to-b from-violet-500/15 via-violet-500/10 to-transparent ring-1 ring-white/5' 
                : 'border-white/10 bg-neutral-900/40 hover:bg-white/5 ring-1 ring-white/5'
            }`}
        >
            <button 
                onClick={onClick}
                className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between gap-6 transition-colors"
            >
                <span className={`text-lg sm:text-xl font-bold tracking-tight ${isOpen ? 'text-white' : 'text-neutral-300'}`}>
                    <AnimatedBreathingText text={question} className={isOpen ? 'text-white' : 'text-neutral-300'} />
                </span>
                <span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 relative">
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </motion.div>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                            <MagicText text={answer} className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-[#0a0a0a] py-32 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <AnimatedShinyText 
                            text="Frequently Asked Questions (Answering Your Biggest Queries)" 
                            textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                            className="px-2 mb-8"
                        />
                        <MagicText 
                            text="Get instant answers to the most common questions about our high-performance technical solutions and strategic operations."
                            className="mt-6 max-w-2xl mx-auto text-lg text-neutral-400 leading-relaxed font-light"
                        />
                    </motion.div>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <FAQItem 
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Structured Data (JSON-LD) for SEO advantage */}
            <Helmet>
                <script type="application/ld+json" id="faq-schema">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqItems.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })}
                </script>
            </Helmet>
        </section>
    );
};

export default FAQSection;
