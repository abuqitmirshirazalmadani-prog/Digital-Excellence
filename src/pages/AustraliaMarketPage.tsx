import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  MapPin,
  Anchor
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';
import HeroText from '../components/ui/hero-shutter-text';
import { AnimatedShinyText } from '../components/ui/animated-shiny-text';
import { AnimatedBreathingText } from '../components/ui/animated-breathing-text';
import { MagicText } from '../components/ui/magic-text';

const AustraliaMarketPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Do you offer localized support for Australian business hours?",
      a: "Yes. We synchronize our development cycles to ensure significant overlap with AEST/AEDT, providing real-time communication for our clients in Sydney, Melbourne, Brisbane, and Perth."
    },
    {
      q: "Are your solutions compliant with Australian Privacy Principles (APP)?",
      a: "Absolutely. We design all our digital assets with data privacy as a priority, ensuring full compliance with the Australian Privacy Act and the APPs for secure data handling."
    },
    {
      q: "Can you integrate with Australian payment gateways like CommBank or Westpac?",
      a: "Yes. We specialize in integrating with major Australian financial institutions, as well as local-first solutions like eWAY, Pin Payments, and Stripe (AUD)."
    },
    {
      q: "How does your SEO strategy target the Australian search landscape?",
      a: "We perform dedicated keyword research using AU-specific data (google.com.au) to capture high-intent traffic from Australian consumers and businesses, focusing on local search intent."
    },
    {
      q: "Do you build custom ecommerce solutions for Australian startups?",
      a: "Yes. We build scalable, high-performance ecommerce platforms tailored for the AU market, including GST calculation logic and integration with local shipping providers like Australia Post."
    },
    {
      q: "How can AI agents improve customer service for an AU-based company?",
      a: "Our AI agents provide 24/7 intelligent support, handling common inquiries and bookings even while your local team is offline, ensuring you never miss a lead in the competitive AU market."
    }
  ];

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans selection:bg-[#66fcf1] selection:text-black">
      <Helmet>
        <title>Tech Solutions & Software Development Australia | ABUQITMIRLABS</title>
        <meta name="description" content="Future-proofing Australian businesses with elite software engineering. ABUQITMIRLABS .TECH provides APP-compliant tech, localized SEO, and AI solutions for Sydney, Melbourne, and Perth." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/australia-market" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Australia Digital Transformation | ABUQITMIRLABS" />
        <meta property="og:description" content="Future-proofing Australian businesses with elite software engineering. ABUQITMIRLABS .TECH provides APP-compliant tech and localized SEO." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/australia-market" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Solutions Australia | ABUQITMIRLABS" />
        <meta name="twitter:description" content="Future-proofing Australian businesses with elite software engineering. ABUQITMIRLABS .TECH provides APP-compliant tech and localized SEO." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 md:pt-40 md:px-10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,252,241,0.05),transparent_70%)] pointer-events-none"></div>
        
        <div className="relative mx-auto max-w-7xl w-full text-center">
          <div className="flex flex-col gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#45a29e]"
            >
              <Anchor size={16} className="text-[#66fcf1]" />
              Dominating the Southern Cross Digital Frontier
            </motion.div>

            <div className="mb-8">
              <HeroText text="AUSTRALIA" />
            </div>

            <MagicText 
              text="Empower your Australian enterprise with futuristic tech from ABUQITMIRLABS .TECH. We deliver high-performance custom software, secure web ecosystems, and localized SEO strategies crafted for the unique AU economic landscape."
              className="max-w-3xl text-xl md:text-2xl text-[#c5c6c7] mx-auto leading-relaxed"
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 mt-12"
            >
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#66fcf1] text-black px-12 py-8 rounded-full font-black text-xl hover:bg-white transition-all flex items-center justify-center gap-3 uppercase tracking-tighter shadow-2xl shadow-[#66fcf1]/20"
              >
                <ArrowUpRight size={24} />
                Connect in AU Time
              </a>
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#66fcf1]/40 text-[#66fcf1] px-12 py-8 rounded-full font-black text-xl hover:bg-[#66fcf1]/10 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
              >
                <Globe size={24} />
                Explore AU Solutions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Australia Specific Highlights */}
      <section className="py-32 px-6 md:px-10 bg-[#1f2833] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-[#66fcf1] uppercase tracking-[0.4em] mb-6 block">Localized Excellence</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-10">
              Tech Built for <br />
              <span className="text-[#45a29e] italic">The Outback Hubs.</span>
            </h2>
            <p className="text-xl text-[#c5c6c7] font-light leading-relaxed mb-8">
              From the vibrant tech scene in Sydney to the innovative startups of Melbourne, we understand that Australia is a land of vast opportunity and specific digital demands.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra'].map((city) => (
                <span key={city} className="px-4 py-2 bg-black/40 border border-white/10 rounded-full text-xs font-mono tracking-widest text-[#66fcf1]">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              { title: "AU-GST Ready", icon: <BarChart3 className="text-[#66fcf1]" /> },
              { title: "APP Compliant", icon: <ShieldCheck className="text-[#66fcf1]" /> },
              { title: "AEST Overlap", icon: <Cpu className="text-[#66fcf1]" /> },
              { title: "AU Local SEO", icon: <Search className="text-[#66fcf1]" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-black/30 border border-white/5 rounded-3xl flex flex-col items-center text-center group hover:border-[#66fcf1]/30 transition-all">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <AnimatedShinyText text="AU Domain Dominance." textClassName="text-5xl md:text-9xl text-white" />
            <p className="text-xl text-[#45a29e] max-w-2xl mx-auto font-light">Custom digital architecture designed to capture the Australian market share.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bespoke AU Web Dev",
                desc: "High-speed, conversion-optimized websites built for Australian network speeds and user expectations.",
                icon: <Globe className="w-10 h-10" />
              },
              {
                title: "Mobile App Prowess",
                desc: "Native iOS and Android apps designed for the thumb-friendly AU lifestyle, from health-tech to fintech.",
                icon: <Smartphone className="w-10 h-10" />
              },
              {
                title: "AI Integration AU",
                desc: "Deploying intelligent AI agents that understand local business nuances and customer service standards.",
                icon: <Zap className="w-10 h-10" />
              }
            ].map((service, i) => (
              <div key={i} className="p-12 border border-white/5 bg-[#1f2833]/30 rounded-[3rem] hover:border-[#66fcf1]/20 transition-all group">
                <div className="text-[#66fcf1] mb-10 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">{service.title}</h3>
                <p className="text-[#8d8d8d] leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryMarquee />

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#66fcf1] font-mono text-xs uppercase tracking-[0.5em] block mb-8">AU MARKET FAQ</span>
            <h3 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none italic">Common Queries</h3>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#66fcf1]/30 transition-all cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between p-10">
                  <span className="text-xl font-bold text-white uppercase tracking-tight pr-6">{faq.q}</span>
                  <div className={`transition-all duration-500 ${activeFaq === idx ? 'rotate-45 text-[#66fcf1]' : 'text-zinc-600'}`}>
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
                      <p className="px-10 pb-10 text-xl text-[#c5c6c7] font-light leading-relaxed">
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

      {/* Final CTA */}
      <section className="py-48 relative border-t border-white/5 overflow-hidden text-center bg-black">
        <div className="absolute inset-0 bg-[#66fcf1]/5 blur-[200px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <h2 className="text-6xl md:text-[9rem] font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-16">
            Build The <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #66fcf1' }}>AU Future.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#66fcf1] text-black text-2xl font-bold px-20 py-10 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase tracking-tighter shadow-2xl shadow-[#66fcf1]/20"
            >
               Request AU Tech Audit
            </a>
            <div className="text-[#45a29e] font-mono text-[10px] uppercase tracking-[0.4em] max-w-[320px] text-left border-l-2 border-[#66fcf1] pl-8 leading-relaxed h-16 flex items-center">
               AUSTRALIA COMPLIANCE READY // GMT+10/11 SLOTS: OPEN
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AustraliaMarketPage;
