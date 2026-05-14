import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Globe, 
  Zap, 
  Plus, 
  Cpu, 
  Search,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Languages,
  Database,
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

const CanadaMarketPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Can your SEO strategies target multiple Canadian cities simultaneously?",
      a: "Yes. We utilize programmatic SEO and semantic content siloing to build dedicated, high-ranking landing pages for specific locations like Toronto, Montreal, Calgary, and Vancouver."
    },
    {
      q: "Do you ensure compliance with Canadian data privacy laws?",
      a: "Absolutely. Our custom software and AI databases are architected to be fully compliant with PIPEDA (Personal Information Protection and Electronic Documents Act) to secure Canadian user data."
    },
    {
      q: "Can you build bilingual (English/French) digital platforms?",
      a: "Yes. We develop seamless multi-language architectures for web and mobile apps, and our content team can structure your SEO to rank for both English and Canadian French search queries."
    },
    {
      q: "How do you manage communications across Canadian time zones?",
      a: "We are highly flexible. We coordinate overlap hours via Zoom/Google Meet to align with EST, CST, or PST, ensuring smooth agile development sprints and real-time reporting."
    },
    {
      q: "What tech stack do you use for Canadian enterprise software?",
      a: "We utilize modern, scalable stacks including Node.js, Python, React, Next.js, and host on robust cloud infrastructures like AWS or Google Cloud, which have dedicated Canadian data centers."
    },
    {
      q: "How can AI agents help a Canadian e-commerce business?",
      a: "Custom AI agents can automate bilingual customer support, intelligently manage inventory queries, and provide personalized product recommendations 24/7, vastly improving the customer experience."
    },
    {
      q: "Why partner with ABUQITMIRLABS .TECH for the Canadian market?",
      a: "We offer a rare combination of elite technical engineering and deep semantic SEO expertise by ABUQITMIRLABS .TECH. We deliver North American-level quality and innovation with a highly optimized investment ROI."
    }
  ];

  return (
    <div className="bg-[#090909] text-[#d3c8b8] min-h-screen font-sans selection:bg-[#ff5b36] selection:text-white">
      <Helmet>
        <title>Software Engineering & Web Apps Canada | ABUQITMIRLABS</title>
        <meta name="description" content="Empowering Canadian enterprises with futuristic tech. ABUQITMIRLABS .TECH delivers PIPEDA-compliant software, specialized web apps, and AI automation for Vancouver, Toronto, and beyond." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/canada-market" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Canadian Enterprise Tech Solutions | ABUQITMIRLABS" />
        <meta property="og:description" content="Empowering Canadian enterprises with futuristic tech. ABUQITMIRLABS .TECH delivers PIPEDA-compliant software and specialized web apps." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/canada-market" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 md:pt-40 md:px-10 overflow-hidden text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))] pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-white/5 blur-[150px] rounded-full"></div>

        <div className="relative mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c] mb-10"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
                Coast-to-Coast Innovation — Canadian Market
              </motion.div>

              <div className="mb-12">
                <HeroText text="CANADA" />
              </div>

              <MagicText 
                text="Accelerate your growth in the Canadian tech landscape. ABUQITMIRLABS .TECH provides scalable custom software engineering and entity-based SEO strategies for businesses nationwide."
                className="max-w-2xl text-xl md:text-2xl text-[#9f978a] mb-12"
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
                  className="bg-[#ff5b36] text-white px-12 py-10 rounded-3xl font-black text-xl hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
                >
                  <ArrowUpRight size={28} />
                  Request a Canadian Market Audit
                </a>
                <a 
                  href="https://wa.me/923233260859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 text-[#d3c8b8] px-12 py-10 rounded-3xl font-black text-xl hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
                >
                  <Smartphone size={28} className="text-[#ff5b36]" />
                  View Enterprise Solutions
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
               <div className="relative aspect-square border border-white/5 bg-[#0d0d0d] rounded-3xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,91,54,0.1),transparent_70%)]"></div>
                  <Database size={120} className="text-[#ff5b36] opacity-20" />
                  <div className="absolute top-10 left-10 text-xs font-mono text-[#7d766c] uppercase tracking-widest">[ SECTOR_NORTH ]</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Stripe */}
      <section className="overflow-hidden border-y border-white/5 bg-[#0b0b0b] py-16 md:py-24">
        <div className="flex animate-marquee whitespace-nowrap gap-16 text-5xl md:text-8xl font-semibold uppercase tracking-tight opacity-90 italic">
          <span>Toronto Innovation</span> <span className="text-[#ff5b36]">·</span>
          <span>Vancouver Scaling</span> <span className="text-[#ff5b36]">·</span>
          <span>Montreal Multi-Language</span> <span className="text-[#ff5b36]">·</span>
          <span>Waterloo Tech Hub</span> <span className="text-[#ff5b36]">·</span>
          <span>PIPEDA Compliant</span> <span className="text-[#ff5b36]">·</span>
          {/* Repeating */}
          <span>Toronto Innovation</span> <span className="text-[#ff5b36]">·</span>
          <span>Vancouver Scaling</span> <span className="text-[#ff5b36]">·</span>
          <span>Montreal Multi-Language</span> <span className="text-[#ff5b36]">·</span>
          <span>Waterloo Tech Hub</span> <span className="text-[#ff5b36]">·</span>
          <span>PIPEDA Compliant</span> <span className="text-[#ff5b36]">·</span>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 md:px-10 border-b border-white/5 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff5b36] mb-8 block">The Market Challenge</span>
              <AnimatedShinyText 
                text="Diverse Tech Ecosystem." 
                className="mb-12" 
                textClassName="text-5xl md:text-8xl"
              />
            </div>
            <div className="space-y-10">
              <p className="text-2xl text-[#d3c8b8] font-light leading-relaxed">
                Canada boasts a massive, tech-savvy consumer base spread across vast regions. However, businesses often struggle with high domestic costs and diverse local markets.
              </p>
              <p className="text-xl text-[#7d766c] leading-relaxed">
                Outdated software architectures prevent seamless scaling, while generic SEO strategies fail to capture the nuanced, localized search intent of Canadian consumers from Ontario to British Columbia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The ABUQITMIRLABS .TECH Edge */}
      <section className="py-32 px-6 md:px-10 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(255,91,54,0.03),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <AnimatedShinyText 
              text="Cross-Border Excellence." 
              textClassName="text-5xl md:text-9xl"
            />
            <MagicText 
              text="We provide Canadian companies with the technical firepower needed to dominate their provinces and expand globally."
              className="max-w-md text-xl text-[#8d8579] border-l-2 border-white/10 pl-8"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud-Native Build",
                desc: "We build cloud-native custom software that delivers flawless performance from coast to coast with zero latency.",
                icon: <Zap size={32} />
              },
              {
                title: "AI Cost Reduction",
                desc: "By integrating custom LLM agents, we help you reduce high domestic overhead costs through intelligent automation.",
                icon: <Cpu size={32} />
              },
              {
                title: "Entity-Based SEO",
                desc: "Our strategies map out your digital entity, ensuring you capture high-value organic traffic in specific cities.",
                icon: <Search size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="p-12 border border-white/5 bg-[#090909] group hover:border-[#ff5b36]/30 transition-all flex flex-col items-center text-center">
                <div className="mb-8 text-[#ff5b36] bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <AnimatedBreathingText text={item.title} className="text-2xl font-bold uppercase mb-6 tracking-tight" />
                <MagicText text={item.desc} className="text-[#7d766c]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryMarquee />

      {/* Services Grid */}
      <section className="py-32 px-6 md:px-10 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-16 border border-white/5 bg-[#111111] flex flex-col items-center text-center hover:border-blue-500/30 transition-all">
               <div className="flex flex-col items-center">
                  <div className="mb-10 text-blue-500">
                    <Smartphone size={48} strokeWidth={1} />
                  </div>
                  <AnimatedBreathingText text="Scalable Architectures for Startups" className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 italic" />
                  <MagicText 
                    text="Empowering tech hubs in Toronto, Waterloo, and Vancouver with robust MVP development and cross-platform apps that help you secure funding and scale rapidly."
                    className="text-xl text-[#8d8579] mb-12"
                  />
               </div>
               <div className="flex items-center gap-6 w-full">
                  <div className="h-px flex-1 bg-white/10"></div>
                  <span className="text-[10px] font-mono text-[#ff5b36] uppercase tracking-[0.4em]">Investor Ready</span>
                  <div className="h-px flex-1 bg-white/10"></div>
               </div>
            </div>

            <div className="p-16 border border-white/5 bg-[#111111] flex flex-col items-center text-center hover:border-[#ff5b36]/30 transition-all">
               <div className="flex flex-col items-center">
                  <div className="mb-10 text-[#ff5b36]">
                    <Globe size={48} strokeWidth={1} />
                  </div>
                  <AnimatedBreathingText text="Province-Specific Semantic SEO" className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 italic" />
                  <MagicText 
                    text="Canada is vast. We implement hyper-localized Semantic SEO and E-E-A-T strategies to ensure your business dominates Google in your specific target provinces."
                    className="text-xl text-[#8d8579] mb-12"
                  />
               </div>
               <div className="flex items-center gap-6 w-full">
                  <div className="h-px flex-1 bg-white/10"></div>
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">Hyper-Local Power</span>
                  <div className="h-px flex-1 bg-white/10"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#ff5b36] font-mono text-xs uppercase tracking-[0.5em] block mb-8">CANADIAN MARKET FAQ</span>
            <AnimatedShinyText 
              text="Localized Intelligence." 
              textClassName="text-5xl md:text-8xl"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#090909] border border-white/5 p-8 md:p-10 cursor-pointer hover:border-[#ff5b36]/20 transition-all"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold uppercase tracking-tight pr-6">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-[135deg] text-[#ff5b36]' : 'text-[#7d766c]'}`}>
                    <Plus size={32} />
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
                      <div className="pt-10 mt-10 border-t border-white/5">
                        <p className="text-xl text-[#8d8579] font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Feature Strip */}
      <section className="py-24 bg-white text-black overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
               <div className="flex gap-4 mb-6">
                  <Languages size={24} className="text-red-600" />
                  <span className="font-bold uppercase tracking-widest text-sm">Bilingual Advantage</span>
               </div>
               <AnimatedBreathingText text="Native Multi-Language Support." className="text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight text-black" />
               <MagicText 
                text="We develop seamless multi-language architectures and rank for both English and Canadian French search queries across Quebec and the rest of Canada."
                className="text-xl font-medium opacity-60 max-w-xl text-black"
               />
            </div>
            <div className="shrink-0">
               <div className="w-64 h-64 border-8 border-black rounded-full flex items-center justify-center text-8xl font-black italic">
                  EN/FR
               </div>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5"></div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-48 relative border-t border-white/5 overflow-hidden text-center bg-black">
        <div className="absolute inset-0 bg-[#ff5b36]/5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <AnimatedShinyText 
            text="Architect Canadian Advantage." 
            textClassName="text-7xl md:text-[8rem] text-white"
          />
          
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-2xl font-bold px-20 py-10 rounded-full hover:bg-[#ff5b36] hover:text-white transition-all transform hover:scale-105 uppercase tracking-tighter shadow-2xl"
            >
               Initiate Market Audit
            </a>
            <div className="text-[#7d766c] font-mono text-[10px] uppercase tracking-[0.4em] max-w-[300px] text-left border-l-2 border-white/10 pl-8 leading-relaxed h-16 flex items-center">
               PIPEDA COMPLIANT // STABLE NORTH AMERICAN INFRASTRUCTURE // GMT-5/8
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CanadaMarketPage;
