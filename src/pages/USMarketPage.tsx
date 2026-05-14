import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Users, 
  Plus, 
  Star, 
  Layout, 
  Cpu, 
  Search,
  Code,
  LineChart,
  Database,
  BarChart,
  Smartphone,
  Globe2
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

import CountryMarquee from '../components/CountryMarquee';
import HeroText from '../components/ui/hero-shutter-text';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';
import { AnimatedBreathingText } from '../components/ui/animated-breathing-text';
import { MagicText } from '../components/ui/magic-text';

const USMarketPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Can you handle time zone differences for US clients?",
      a: "Absolutely. We utilize overlap hours for live meetings and maintain asynchronous agile project management tools, ensuring seamless communication across EST, CST, MST, and PST zones."
    },
    {
      q: "Do your custom software builds comply with US data regulations?",
      a: "Yes. We architect software with compliance in mind, ensuring your databases and AI integrations align with state-specific regulations like the CCPA (California) and federal standards like HIPAA for healthcare."
    },
    {
      q: "Why should a US company hire ABUQITMIRLABS.TECH over a local agency?",
      a: "We provide Silicon Valley-caliber engineering and elite semantic SEO strategies at a highly optimized ROI, combining global tech talent with a deep understanding of the American consumer market."
    },
    {
      q: "How do you approach SEO for nationwide US companies?",
      a: "For national reach, we focus on programmatic SEO, building topical authority through E-E-A-T compliant content silos that target state, city, and industry-specific semantic entities."
    },
    {
      q: "Can your AI agents handle US-specific customer service nuances?",
      a: "Yes. Our LLM agents are trained on your proprietary data and can be fine-tuned to understand American cultural nuances, regional slang, and specific US customer service expectations."
    },
    {
      q: "What payment gateways do you integrate for US e-commerce?",
      a: "We seamlessly integrate secure, high-conversion US gateways including Stripe, PayPal, Apple Pay, Google Pay, and Square into your web and mobile applications."
    },
    {
      q: "How fast can you deploy a scalable MVP for a US startup?",
      a: "Depending on complexity, we can architect and deploy a robust, investor-ready Minimum Viable Product within 8 to 12 weeks, allowing you to secure funding faster."
    }
  ];

  return (
    <div className="bg-[#090909] text-[#d3c8b8] min-h-screen font-sans selection:bg-[#ff5b36] selection:text-white">
      <Helmet>
        <title>Software & Web Development Services USA | ABUQITMIRLABS</title>
        <meta name="description" content="Premium software and web engineering for the US market by ABUQITMIRLABS .TECH. Specialized AI solutions and aggressive SEO for American startups, from Silicon Valley to NYC." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/us-market" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Elite Software Engineering for the US Market | ABUQITMIRLABS" />
        <meta property="og:description" content="Premium software and web engineering for the US market by ABUQITMIRLABS .TECH. Specialized AI solutions and aggressive SEO for American startups." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/us-market" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 md:pt-40 md:px-10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))] pointer-events-none"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#ff5b36]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>

        <div className="relative mx-auto max-w-7xl w-full">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
              Coast-to-Coast Digital Excellence — USA Market
            </motion.div>

            <div className="mb-12">
              <HeroText text="U.S.A" />
            </div>

            <MagicText 
              text="From Silicon Valley tech startups to established East Coast enterprises, ABUQITMIRLABS .TECH delivers world-class custom software, autonomous AI agents, and aggressive semantic SEO strategies tailored to dominate the highly competitive US digital landscape."
              className="max-w-2xl text-lg md:text-xl text-[#9f978a]"
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 mt-8"
            >
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5b36] text-white px-12 py-8 rounded-3xl font-bold text-lg hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2"
              >
                <ArrowUpRight size={24} />
                Partner with Us in the US
              </a>
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 text-[#d3c8b8] px-12 py-8 rounded-3xl font-bold text-lg hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-2"
              >
                <Smartphone size={24} className="text-[#ff5b36]" />
                Get a Free US Market Audit
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Branding */}
      <section className="overflow-hidden border-y border-white/5 bg-[#0b0b0b] py-16 md:py-24">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-5xl md:text-8xl font-semibold uppercase tracking-tight opacity-90 italic">
          <span>Silicon Valley Standards</span> <span className="text-[#ff5b36]">·</span>
          <span>East Coast Execution</span> <span className="text-[#ff5b36]">·</span>
          <span>Enterprise Scaling</span> <span className="text-[#ff5b36]">·</span>
          <span>Semantic SEO Dominance</span> <span className="text-[#ff5b36]">·</span>
          <span>Autonomous AI Agents</span> <span className="text-[#ff5b36]">·</span>
          {/* Repeat for continuous effect */}
          <span>Silicon Valley Standards</span> <span className="text-[#ff5b36]">·</span>
          <span>East Coast Execution</span> <span className="text-[#ff5b36]">·</span>
          <span>Enterprise Scaling</span> <span className="text-[#ff5b36]">·</span>
          <span>Semantic SEO Dominance</span> <span className="text-[#ff5b36]">·</span>
          <span>Autonomous AI Agents</span> <span className="text-[#ff5b36]">·</span>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#bfb4a3] mb-8 block">The Challenge</span>
              <AnimatedShinyText 
                text="Standing Out in the US Hyper-Competitive Market." 
                textClassName="text-4xl md:text-7xl"
              />
            </div>
            <div className="text-xl text-[#8d8579] leading-relaxed space-y-6">
              <p>
                The United States is the epicenter of global technological innovation. Whether you are operating out of New York, Texas, or California, the digital noise is deafening.
              </p>
              <p>
                Relying on generic WordPress templates or basic search marketing is no longer enough to capture the American consumer. US businesses are bleeding capital on inefficient manual workflows and losing local market share to competitors who have already adopted AI automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#bfb4a3] mb-8 block">The ABUQITMIRLABS .TECH Edge</span>
            <AnimatedShinyText 
              text="Silicon Valley Standards, Global Scalability." 
              textClassName="text-4xl md:text-7xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Jamstack Engineering",
                desc: "We build high-performance JAMstack websites that pass rigorous Core Web Vitals, ensuring you capture impatient US web traffic.",
                icon: <Zap className="text-[#ff5b36]" size={32} />
              },
              {
                title: "Custom LLM Agents",
                desc: "By integrating Custom LLM Agents into your workflows, we help you mitigate high domestic labor costs through 24/7 automation.",
                icon: <Cpu className="text-[#ff5b36]" size={32} />
              },
              {
                title: "Semantic Entity SEO",
                desc: "Designed to outrank massive US corporations by targeting high-intent, hyper-local, and long-tail market gaps with authority.",
                icon: <Search className="text-[#ff5b36]" size={32} />
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/5 hover:border-[#ff5b36]/30 transition-all group flex flex-col items-center text-center">
                <div className="mb-6">{feature.icon}</div>
                <AnimatedBreathingText text={feature.title} className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-white" />
                <MagicText text={feature.desc} className="text-[#8d8579]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryMarquee />

      {/* Core Services Section */}
      <section className="py-32 px-6 md:px-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedShinyText 
              text="Core Services Tailored for the US." 
              textClassName="text-4xl md:text-7xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 border border-white/5 bg-[#0d0d0d] flex flex-col items-center text-center group hover:border-blue-500/30 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                  <Globe className="text-blue-500" />
                </div>
                <AnimatedBreathingText text="Coast-to-Coast Local SEO & Map Dominance" className="text-3xl font-bold uppercase tracking-tight mb-6 italic" />
                <MagicText 
                  text="Whether you are a law firm in Chicago or a real estate agency in Miami, we optimize your Google Business Profile (GBP) and build hyper-local semantic authority to ensure you capture the 'near me' searches that drive immediate US revenue."
                  className="text-lg text-[#8d8579]"
                />
              </div>
              <div className="mt-12 flex items-center gap-4 text-[#ff5b36] font-bold uppercase tracking-widest text-sm">
                Explore Strategy <div className="h-px w-10 bg-[#ff5b36]"></div>
              </div>
            </div>

            <div className="p-12 border border-white/5 bg-[#0d0d0d] flex flex-col items-center text-center group hover:border-[#ff5b36]/30 transition-all">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ff5b36]/10 flex items-center justify-center mb-8 group-hover:bg-[#ff5b36]/20 transition-colors">
                  <Smartphone className="text-[#ff5b36]" />
                </div>
                <AnimatedBreathingText text="Scalable Enterprise SaaS & App Development" className="text-3xl font-bold uppercase tracking-tight mb-6 italic" />
                <MagicText 
                  text="We build cross-platform mobile apps (React Native/Flutter) and scalable cloud-native software (AWS) designed to handle the massive traffic spikes and stringent data security requirements of the American consumer market."
                  className="text-lg text-[#8d8579]"
                />
              </div>
              <div className="mt-12 flex items-center gap-4 text-[#ff5b36] font-bold uppercase tracking-widest text-sm">
                View Tech Stack <div className="h-px w-10 bg-[#ff5b36]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#ff5b36] font-mono text-xs uppercase tracking-[0.5em] block mb-6">FAQ</span>
            <AnimatedShinyText 
              text="Frequently Asked Questions." 
              textClassName="text-4xl md:text-7xl italic leading-[0.85]"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#0b0b0b] border border-white/5 p-8 cursor-pointer hover:border-[#ff5b36]/30 transition-all"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#d3c8b8] uppercase tracking-tight pr-6">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-[135deg] text-[#ff5b36]' : 'text-[#7d766c]'}`}>
                    <Plus size={24} />
                  </div>
                </div>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-8 text-[#8d8579] font-light leading-relaxed border-t border-white/5 mt-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-48 relative border-t border-white/5 overflow-hidden text-center bg-black">
        <div className="absolute inset-x-0 top-0 h-full bg-[#ff5b36]/5 blur-[150px] pointer-events-none z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <AnimatedShinyText 
            text="architect US Advantage." 
            textClassName="text-6xl md:text-[8rem] text-white italic"
          />
          
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff5b36] text-white text-xl font-bold px-16 py-8 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase tracking-tighter shadow-[0_0_50px_rgba(255,91,54,0.3)]"
            >
               Initiate US Audit Protocol
            </a>
            <div className="text-[#7d766c] font-mono text-[10px] uppercase tracking-[0.3em] max-w-[300px] text-left border-l-2 border-white/10 pl-8 leading-relaxed h-16 flex items-center">
               EST. MARKET PENETRATION: 90 DAYS // US PROJECT CAPACITY: 4 SPOTS LEFT
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default USMarketPage;
