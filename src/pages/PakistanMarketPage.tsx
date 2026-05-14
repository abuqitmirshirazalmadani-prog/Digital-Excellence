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
  Smartphone,
  CheckCircle2,
  Lock,
  MessagesSquare,
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

const PakistanMarketPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Do you provide services across all cities in Pakistan?",
      a: "Yes. While we are based in Karachi, our digital solutions, custom software, and SEO services empower businesses in Lahore, Islamabad, Faisalabad, and nationwide."
    },
    {
      q: "Can you integrate local Pakistani payment gateways?",
      a: "Absolutely. We securely integrate local gateways such as PayFast, Safepay, JazzCash, EasyPaisa, and direct bank APIs into your custom web and mobile applications."
    },
    {
      q: "How does Local SEO help my business in Pakistan?",
      a: "Local SEO ensures your business appears at the top of Google Maps and local search results. When someone in your city searches for your service, your verified business, phone number, and directions appear first."
    },
    {
      q: "Is custom software affordable for a Pakistani SME?",
      a: "Yes. We offer scalable solutions. We can start by building a core MVP (Minimum Viable Product) to digitize your most critical workflow, and then scale the software as your business grows."
    },
    {
      q: "Can your AI agents understand Roman Urdu or local context?",
      a: "We can fine-tune LLM AI agents to understand contextual queries, Roman Urdu, and English, allowing them to provide natural, intelligent customer support to the local demographic."
    },
    {
      q: "Why should I invest in a Jamstack website instead of WordPress?",
      a: "Jamstack sites load instantly, which is crucial in areas with fluctuating mobile internet speeds (3G/4G). They are also virtually un-hackable, protecting your business from local and global cyber threats."
    },
    {
      q: "Do you offer continuous support for local clients?",
      a: "Yes. We are your local tech partners. We provide ongoing server maintenance, SEO monitoring, software updates, and direct WhatsApp support for all our Pakistani clients."
    }
  ];

  return (
    <div className="bg-[#090909] text-[#d3c8b8] min-h-screen font-sans selection:bg-[#ff5b36] selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Software Development Services in Pakistan | ABUQITMIRLABS</title>
        <meta name="description" content="Driving digital innovation in Pakistan. ABUQITMIRLABS .TECH provides top-tier custom software, AI agent integration, and hyper-local SEO for businesses in Karachi, Lahore, and Islamabad." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/pakistan-market" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Transforming Pakistan's Digital Landscape | ABUQITMIRLABS" />
        <meta property="og:description" content="Driving digital innovation in Pakistan. ABUQITMIRLABS .TECH provides top-tier custom software, AI agent integration, and hyper-local SEO." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/pakistan-market" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 md:pt-40 md:px-10 overflow-hidden">

        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))] pointer-events-none"></div>

        <div className="relative mx-auto max-w-7xl w-full">
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
              Karachi to Islamabad — Pakistan's Premier Tech Agency
            </motion.div>

            <div className="mb-8 md:mb-12">
              <HeroText text="PAKISTAN" />
            </div>

            <MagicText 
              text="Empowering Pakistani startups, SMEs, and large-scale industries with world-class technology. ABUQITMIRLABS .TECH delivers cutting-edge custom software, intelligent AI agents, and hyper-local SEO."
              className="max-w-3xl text-xl md:text-2xl text-[#9f978a]"
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 mt-8 md:mt-12"
            >
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5b36] hover:bg-white text-white hover:text-black px-12 py-10 rounded-3xl font-black text-xl transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 uppercase tracking-tighter brutalist-shadow"
              >
                <ArrowUpRight size={28} />
                Get a Free Consultation
              </a>
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/20 text-[#d3c8b8] px-12 py-10 rounded-3xl font-black text-xl hover:bg-white/5 transition-all uppercase tracking-tighter flex flex-col items-center justify-center gap-2"
              >
                <Smartphone size={28} className="text-[#ff5b36]" />
                Transform Your Business
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Branding Section */}
      <section className="overflow-hidden border-y border-white/5 bg-[#0b0b0b] py-16 md:py-24 text-[#d3c8b8]">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-6xl md:text-9xl font-semibold uppercase tracking-tight opacity-90 italic">
          <span>Digital Pakistan</span> <span className="text-[#ff5b36]">·</span>
          <span>Karachi Excellence</span> <span className="text-[#ff5b36]">·</span>
          <span>Lahore Growth</span> <span className="text-[#ff5b36]">·</span>
          <span>Islamabad Innovation</span> <span className="text-[#ff5b36]">·</span>
          <span>SME Empowerment</span> <span className="text-[#ff5b36]">·</span>
          {/* Repeating for loop */}
          <span>Digital Pakistan</span> <span className="text-[#ff5b36]">·</span>
          <span>Karachi Excellence</span> <span className="text-[#ff5b36]">·</span>
          <span>Lahore Growth</span> <span className="text-[#ff5b36]">·</span>
          <span>Islamabad Innovation</span> <span className="text-[#ff5b36]">·</span>
          <span>SME Empowerment</span> <span className="text-[#ff5b36]">·</span>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 px-6 md:px-10 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff5b36] mb-8 block">The Digital Gap</span>
              <AnimatedShinyText 
                text="Pakistan's Expanding Market." 
                textClassName="text-5xl md:text-8xl"
              />
            </div>
            <div className="space-y-10">
              <p className="text-2xl text-[#d3c8b8] font-light leading-relaxed">
                Pakistan’s digital ecosystem is exploding, but many local businesses are missing out. Relying on WhatsApp groups and Facebook pages is no longer a sustainable strategy for growth.
              </p>
              <div className="space-y-6 text-xl text-[#7d766c] leading-relaxed">
                <p>Local companies suffer from slow, unoptimized websites, a lack of custom software, and poor visibility on Google Maps.</p>
                <div className="h-px w-full bg-white/10 my-8"></div>
                <p>As international competitors enter the market, traditional Pakistani businesses risk becoming obsolete if they do not aggressively digitize and optimize.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0b0b] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,91,54,0.03),transparent_40%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff5b36] mb-8 block">ABUQITMIRLABS .TECH Solution</span>
            <AnimatedShinyText 
              text="Driving Digital Pakistan Forward." 
              textClassName="text-5xl md:text-9xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Karachi Pulse",
                desc: "We understand the local market pulse better than anyone, bringing global tech standards to your doorstep.",
                icon: <MapPin size={32} />
              },
              {
                title: "Process Automation",
                desc: "Replace manual, paper-based workflows with scalable custom software and mobile apps built for efficiency.",
                icon: <Zap size={32} />
              },
              {
                title: "24/7 AI Support",
                desc: "Deploy AI agents trained in Roman Urdu and local contexts to handle customer inquiries round the clock.",
                icon: <MessagesSquare size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="p-12 border border-white/5 bg-[#0d0d0d] hover:border-[#ff5b36]/30 transition-all flex flex-col items-center text-center">
                <div className="text-[#ff5b36] mb-8">{item.icon}</div>
                <AnimatedBreathingText text={item.title} className="text-2xl font-bold uppercase mb-6 tracking-tight" />
                <MagicText text={item.desc} className="text-[#7d766c]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryMarquee />

      {/* Core Services Section */}
      <section className="py-32 px-6 md:px-10 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <AnimatedShinyText 
              text="Services Engineered for Pakistan." 
              textClassName="text-4xl md:text-7xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 border border-white/10 bg-[#111111] group hover:border-[#ff5b36]/40 transition-all flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <Search className="text-[#ff5b36] mb-10" size={48} strokeWidth={1} />
                <AnimatedBreathingText text="Local SEO & Google Maps Dominance" className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 italic" />
                <MagicText 
                  text="From Karachi tech startups to Lahore retail brands—we help you capture maximum local traffic. We optimize your GBP, secure local citations, and build semantic relevance to outrank your competitors."
                  className="text-xl text-[#8d8579] mb-10"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#7d766c] uppercase w-full">
                <div className="h-px flex-1 bg-white/5"></div>
                Rank #1 Nationally <div className="h-px flex-1 bg-white/5"></div>
              </div>
            </div>

            <div className="p-12 border border-white/10 bg-[#111111] group hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <Smartphone className="text-blue-500 mb-10" size={48} strokeWidth={1} />
                <AnimatedBreathingText text="Digital Transformation for SMEs" className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 italic" />
                <MagicText 
                  text="High-performance Web & Mobile Apps tailored to the budgets and operational needs of Pakistani SMEs, ensuring maximum ROI and operational efficiency in 3G/4G environments."
                  className="text-xl text-[#8d8579] mb-10"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#7d766c] uppercase w-full">
                <div className="h-px flex-1 bg-white/5"></div>
                Optimized for Local Speeds <div className="h-px flex-1 bg-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#ff5b36] font-mono text-xs uppercase tracking-[0.5em] block mb-8">NATIONWIDE FAQ</span>
            <AnimatedShinyText 
              text="Local Insights. Global Answers." 
              textClassName="text-5xl md:text-8xl"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/5 bg-[#090909] p-8 cursor-pointer hover:border-[#ff5b36]/20 transition-all"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold uppercase tracking-tight pr-6">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-[135deg] text-[#ff5b36]' : 'text-[#7d766c]'}`}>
                    <Plus size={28} />
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
                      <p className="pt-8 text-xl text-[#8d8579] font-light leading-relaxed border-t border-white/5 mt-8">
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

      {/* Final CTA Section */}
      <section className="py-48 relative border-t border-white/5 overflow-hidden text-center bg-black">
        <div className="absolute inset-0 bg-[#ff5b36]/5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <AnimatedShinyText 
            text="Scale Digital Pakistan." 
            textClassName="text-7xl md:text-[10rem] text-white"
          />
          
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-2xl font-bold px-16 py-8 rounded-full hover:bg-[#ff5b36] hover:text-white transition-all transform hover:scale-105 uppercase tracking-tighter shadow-2xl"
            >
               Start Local Audit
            </a>
            <div className="text-[#7d766c] font-mono text-[10px] uppercase tracking-[0.4em] max-w-[300px] text-left border-l-2 border-white/10 pl-8 leading-relaxed h-16 flex items-center">
               WHATSAPP SUPPORT INCLUDED // ZERO-HACK JAMSTACK ARCHITECTURE
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PakistanMarketPage;
