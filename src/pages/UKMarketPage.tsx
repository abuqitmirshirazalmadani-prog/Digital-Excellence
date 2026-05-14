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
  ShieldAlert,
  BarChart3,
  Lock,
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

const UKMarketPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Are your digital solutions compliant with UK GDPR?",
      a: "Yes. Data privacy is foundational to our architecture. We ensure all custom software, AI agent data-handling, and web forms strictly comply with the UK General Data Protection Regulation."
    },
    {
      q: "Do you understand the UK digital market and search intent?",
      a: "Absolutely. We conduct localized keyword and entity research specifically using UK search data to ensure our SEO and content writing resonate with British consumer behavior."
    },
    {
      q: "Can you integrate with UK-specific payment and banking APIs?",
      a: "Yes. We regularly integrate with Open Banking APIs, Stripe, GoCardless (for Direct Debits), and other major UK financial gateways for seamless e-commerce and SaaS billing."
    },
    {
      q: "How do we collaborate given the UK time zone?",
      a: "We schedule overlap working hours tailored to GMT/BST, ensuring you have direct, real-time access to our developers and project managers via WhatsApp and video calls."
    },
    {
      q: "Do you build apps for both iOS and Android in the UK?",
      a: "Yes. We use cross-platform frameworks like Flutter and React Native to deliver flawless native experiences to both Apple and Android users across the UK simultaneously."
    },
    {
      q: "How can AI agents benefit a traditional UK business?",
      a: "AI agents can automate routine admin tasks, provide 24/7 intelligent customer support (even on bank holidays), and analyze large datasets to help traditional retail or B2B sectors cut overhead costs."
    },
    {
      q: "What is your approach to E-E-A-T in the UK market?",
      a: "We build topical authority by creating highly technical, researched content that establishes your brand as a trusted British entity, passing Google's strict quality rater guidelines."
    }
  ];

  return (
    <div className="bg-[#090909] text-[#d3c8b8] min-h-screen font-sans selection:bg-[#ff5b36] selection:text-white">
      <Helmet>
        <title>Tech Solutions & Software Development UK | ABUQITMIRLABS</title>
        <meta name="description" content="World-class digital transformation for UK businesses by ABUQITMIRLABS .TECH. GDPR-compliant software development, high-performance web apps, and London-centric local SEO." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/uk-market" />
        
        {/* Open Graph */}
        <meta property="og:title" content="UK Digital Transformation | ABUQITMIRLABS" />
        <meta property="og:description" content="World-class digital transformation for UK businesses by ABUQITMIRLABS .TECH. GDPR-compliant software development and high-performance web apps." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/uk-market" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 md:pt-40 md:px-10 overflow-hidden text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))] pointer-events-none"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#ff5b36]/5 blur-[120px] rounded-full"></div>

        <div className="relative mx-auto max-w-7xl w-full text-center">
          <div className="flex flex-col gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#ff5b36]"></span>
              British Digital Transformation — UK Market
            </motion.div>

            <div className="mb-8">
              <HeroText text="ELITE" />
            </div>

            <MagicText 
              text="Propel your UK business forward with ABUQITMIRLABS .TECH. We provide bespoke custom software, high-performance web development, and UK-targeted local SEO designed to help British enterprises and London-based startups thrive."
              className="max-w-3xl text-xl md:text-2xl text-[#9f978a] mx-auto"
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
                className="bg-white text-black px-12 py-10 rounded-3xl font-black text-xl hover:bg-[#ff5b36] hover:text-white transition-all flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
              >
                <ArrowUpRight size={28} />
                Book a UK Strategy Call
              </a>
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/20 text-[#d3c8b8] px-12 py-10 rounded-3xl font-black text-xl hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
              >
                <Smartphone size={28} className="text-[#ff5b36]" />
                Explore UK Tech Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 md:px-10 border-y border-white/5 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ff5b36] mb-8 block">The Market Reality</span>
              <AnimatedShinyText 
                text="Agile Tech In A Shifting Economy." 
                textClassName="text-5xl md:text-8xl"
              />
            </div>
            <div className="space-y-8">
              <p className="text-2xl text-[#d3c8b8] font-light leading-relaxed">
                The UK market, from the financial hubs of London to the booming tech sectors of Manchester and Edinburgh, demands agility. 
              </p>
              <p className="text-xl text-[#7d766c] leading-relaxed">
                Traditional British businesses are finding their legacy systems too slow and their outdated websites penalized by Google. Furthermore, strict data privacy laws make integrating new technology intimidating, leaving many UK companies trailing behind their international competitors in AI adoption and organic search visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,91,54,0.03),transparent_40%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <AnimatedShinyText 
              text="Secure & Compliant Yield." 
              textClassName="text-5xl md:text-9xl"
            />
            <MagicText 
              text="We build digital resilience for the British market. Our bespoke software development and mobile apps are engineered with strict adherence to UK data protection standards."
              className="max-w-2xl text-xl text-[#8d8579]"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Legacy Modernization",
                desc: "We modernize your outdated legacy systems to cut operational costs and improve performance, ensuring you don't get left behind.",
                icon: <Zap size={32} />
              },
              {
                title: "Custom AI Agents",
                desc: "We implement custom AI agents that automate administrative burdens, providing 24/7 intelligent support tailored to UK culture.",
                icon: <Cpu size={32} />
              },
              {
                title: "Localized SEO",
                desc: "Semantic SEO strategies ensure your brand captures high-intent traffic across England, Scotland, Wales, and Northern Ireland.",
                icon: <Search size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 border border-white/5 hover:border-[#ff5b36]/30 transition-all bg-[#0d0d0d] flex flex-col items-center text-center">
                <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mb-8 text-[#ff5b36]">
                  {item.icon}
                </div>
                <AnimatedBreathingText text={item.title} className="text-2xl font-bold uppercase mb-6" />
                <MagicText text={item.desc} className="text-[#7d766c]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryMarquee />

      {/* Services Section */}
      <section className="py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <div className="mb-10 text-blue-500">
                  <Lock size={48} strokeWidth={1} />
                </div>
                <AnimatedBreathingText text="UK GDPR-Compliant Web & Software" className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 italic" />
                <MagicText 
                  text="We build high-performance Jamstack websites and enterprise CRM systems with privacy-by-design architectures, ensuring your customer data is handled securely and in full compliance with UK regulations."
                  className="text-xl text-[#8d8579] mb-10"
                />
              </div>
              <div className="font-mono text-xs text-[#ff5b36] tracking-[0.4em] uppercase">Data Resilience Certified</div>
            </div>

            <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:border-[#ff5b36]/30 transition-all flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <div className="mb-10 text-[#ff5b36]">
                  <Globe size={48} strokeWidth={1} />
                </div>
                <AnimatedBreathingText text="Hyper-Local SEO for British High Streets" className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 italic" />
                <MagicText 
                  text="We optimize your digital entity for the UK market. Through precise Google Business Profile management and local citation building, we drive verified foot traffic and B2B leads."
                  className="text-xl text-[#8d8579] mb-10"
                />
              </div>
              <div className="font-mono text-xs text-blue-500 tracking-[0.4em] uppercase">High Street Dominance</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0b0b]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#ff5b36] font-mono text-xs uppercase tracking-[0.5em] block mb-6 px-4 py-2 border border-[#ff5b36]/20 inline-block rounded-full">UK MARKET FAQ</span>
            <AnimatedShinyText 
              text="Frequently Asked Questions." 
              textClassName="text-5xl md:text-8xl italic leading-[0.85]"
            />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="group border-b border-white/10 p-8 cursor-pointer hover:bg-white/[0.02] transition-all"
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
                      <p className="pt-8 text-xl text-[#8d8579] font-light leading-relaxed">
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
            text="Rule the Digital Kingdom." 
            textClassName="text-7xl md:text-[8rem] text-white"
          />
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-2xl font-bold px-20 py-10 rounded-full hover:bg-[#ff5b36] hover:text-white transition-all transform hover:scale-105 uppercase tracking-tighter shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            >
               Initiate UK Strategy Audit
            </a>
            <div className="text-[#7d766c] font-mono text-xs uppercase tracking-[0.4em] max-w-[300px] text-left border-l-2 border-[#ff5b36] pl-8 leading-relaxed">
               UK COMPLIANCE READY // GMT COLLABORATION SLOTS: OPEN
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UKMarketPage;
