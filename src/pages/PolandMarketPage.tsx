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
  Code,
  Layout,
  MessageSquare,
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

const PolandMarketPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Are your digital solutions compliant with EU GDPR?",
      a: "Strictly yes. We implement privacy-by-design in all our custom software, ensuring secure data encryption, explicit consent flows, and full compliance with the European Union's GDPR."
    },
    {
      q: "Can you help a Polish company rank in English-speaking markets?",
      a: "Absolutely. Our native-level, E-E-A-T compliant English content writing and international SEO strategies are specifically designed to help Polish businesses rank in the US, UK, and global search results."
    },
    {
      q: "What is the advantage of Jamstack for a Polish tech company?",
      a: "Polish tech companies need to project cutting-edge expertise. Jamstack provides sub-second load times, unbreakable security, and modern headless architectures that instantly prove your technical superiority."
    },
    {
      q: "How do you handle local SEO for Polish cities like Warsaw or Poznan?",
      a: "We optimize your Google Business Profile, build localized Polish directory citations, and write semantic content targeting specific regional search queries to capture local market share."
    },
    {
      q: "Can your AI agents handle multi-lingual European support?",
      a: "Yes. We build custom LLM agents capable of understanding and responding fluently in Polish, English, German, and other European languages, centralizing your continental customer support."
    },
    {
      q: "Do you build mobile apps for the European market?",
      a: "Yes. We use cross-platform frameworks like Flutter to build fast, intuitive native apps for iOS and Android, ensuring your Polish brand delivers a premium mobile experience across the EU."
    },
    {
      q: "How do we communicate effectively across the EU time zones?",
      a: "Our agile workflows are perfectly suited for the CET (Central European Time) zone. We utilize tools like Slack, Jira, and Zoom for seamless, daily syncs and transparent project management."
    }
  ];

  return (
    <div className="bg-[#090909] text-[#d3c8b8] min-h-screen font-sans selection:bg-[#ff5b36] selection:text-white">
      <Helmet>
        <title>Software Development Services Poland | ABUQITMIRLABS</title>
        <meta name="description" content="ABUQITMIRLABS .TECH bridges the gap between Polish tech excellence and global standards. Specialized software engineering and EU-targeted SEO for the growing Polish market." />
        <meta property="og:title" content="Software Development Services Poland | ABUQITMIRLABS" />
        <meta property="og:description" content="Polish tech excellence meets global standards by ABUQITMIRLABS .TECH. Specialized software engineering and EU-targeted SEO." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/poland-market" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Services Poland | ABUQITMIRLABS" />
        <meta name="twitter:description" content="Polish tech excellence meets global standards by ABUQITMIRLABS .TECH. Specialized software engineering and EU-targeted SEO." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/poland-market" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 md:pt-40 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)] pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl w-full">
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
              EU Digital Hub — Polish Market Solutions
            </motion.div>

            <div className="mb-8">
              <HeroText text="NEXT-GEN" />
            </div>

            <MagicText 
              text="Capitalize on Europe’s fastest-growing digital economy. ABUQITMIRLABS .TECH delivers high-end custom software architecture, AI agent integration, and EU-targeted Semantic SEO for innovative Polish startups."
              className="max-w-2xl text-xl md:text-2xl text-[#9f978a]"
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
                Talk to Our Tech Experts
              </a>
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/20 text-[#d3c8b8] px-12 py-10 rounded-3xl font-black text-xl hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
              >
                <Smartphone size={28} className="text-[#ff5b36]" />
                Explore EU Digital Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Challenge Section */}
      <section className="py-32 px-6 md:px-10 border-y border-white/5 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff5b36] mb-8 block">The IT Frontier</span>
              <AnimatedShinyText 
                text="Europe's Glistening IT Boom." 
                textClassName="text-5xl md:text-8xl"
              />
            </div>
            <div className="space-y-10">
              <p className="text-2xl text-[#d3c8b8] font-light leading-relaxed">
                Poland has rapidly become the crown jewel of Europe’s IT and tech startup scene. 
              </p>
              <p className="text-xl text-[#7d766c] leading-relaxed">
                Because the local talent pool is heavily focused on backend engineering, many Polish businesses lack the holistic digital marketing and frontend conversion strategies needed to sell their products globally. Companies with slow legacy websites are being outranked by digitally agile competitors across the EU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The ABUQITMIRLABS.TECH Edge */}
      <section className="py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(255,91,54,0.03),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <AnimatedShinyText 
              text="Holistic Software Engineering & Growth." 
              textClassName="text-5xl md:text-[8rem]"
            />
            <MagicText 
              text="We bridge the gap between world-class code and global visibility. For Polish companies looking to dominate locally or expand across the European Union, we offer the complete package."
              className="max-w-3xl text-xl text-[#8d8579]"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Jamstack Platforms",
                desc: "We build ultra-fast Jamstack web platforms that project cutting-edge expertise and security to global clients.",
                icon: <Zap size={32} />
              },
              {
                title: "Cross-Platform Apps",
                desc: "Modern mobile apps built with React Native/Flutter for premium experiences across iOS and Android.",
                icon: <Smartphone size={32} />
              },
              {
                title: "Entity-Based SEO",
                desc: "Aggressive Semantic SEO and E-E-A-T content strategies that push your brand to the top of Google EU wide.",
                icon: <Search size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 border border-white/5 bg-[#0d0d0d] hover:border-[#ff5b36]/30 transition-all flex flex-col items-center text-center">
                <div className="text-[#ff5b36] mb-8 group-hover:scale-110 transition-transform duration-500">
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

      {/* Core Services Section */}
      <section className="py-32 px-6 md:px-10 border-t border-white/5 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <div className="mb-10 text-blue-500">
                  <Cpu size={48} strokeWidth={1} />
                </div>
                <AnimatedBreathingText text="Custom AI Agents & SaaS Development" className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 italic text-white" />
                <MagicText 
                  text="We help Polish startups build intelligent, scalable SaaS products. By integrating custom LLMs and RAG architectures, we elevate your software offerings, making them highly competitive in the broader European market."
                  className="text-xl text-[#8d8579] mb-10"
                />
              </div>
              <div className="font-mono text-xs text-blue-500 tracking-[0.4em] uppercase">Enterprise Scaling Protocol</div>
            </div>

            <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:border-[#ff5b36]/30 transition-all flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <div className="mb-10 text-[#ff5b36]">
                  <Globe size={48} strokeWidth={1} />
                </div>
                <AnimatedBreathingText text="Global & Local SEO for Polish Enterprises" className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 italic text-white" />
                <MagicText 
                  text="Whether you are targeting local B2B clients in Krakow or launching globally, our Entity-Based SEO and technical content writing establish your brand's international authority."
                  className="text-xl text-[#8d8579] mb-10"
                />
              </div>
              <div className="font-mono text-xs text-[#ff5b36] tracking-[0.4em] uppercase">EU Visibility Dominance</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#7d766c] font-mono text-[10px] uppercase tracking-[0.5em] block mb-6">POLAND MARKET FAQ</span>
            <AnimatedShinyText 
              text="Local Focus. Global Reach." 
              textClassName="text-5xl md:text-8xl"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="group border-b border-white/10 p-8 cursor-pointer hover:bg-white/[0.01] transition-all"
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
                      <p className="pt-10 text-xl text-[#8d8579] font-light leading-relaxed">
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
        <div className="absolute inset-0 bg-[#ff5b36]/5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <AnimatedShinyText 
            text="architect EU Potential." 
            textClassName="text-7xl md:text-[9rem] text-white"
          />
          
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-2xl font-bold px-16 py-8 rounded-full hover:bg-[#ff5b36] hover:text-white transition-all transform hover:scale-105 uppercase tracking-tighter"
            >
               Initiate Polish Tech Audit
            </a>
            <div className="text-[#7d766c] font-mono text-[10px] uppercase tracking-[0.4em] max-w-[300px] text-left border-l-2 border-white/10 pl-8 leading-relaxed h-16 flex items-center">
               GDPR COMPLIANT ARCHITECTURE // CET ZONE COLLABORATION // AGILE SCRUM
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PolandMarketPage;
