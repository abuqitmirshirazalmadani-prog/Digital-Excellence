"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  PenTool, 
  Search, 
  Target, 
  FileText, 
  Mail, 
  MessageSquare, 
  Plus,
  BarChart3,
  BookOpen,
  Quote,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MousePointer2,
  Layers,
  Cpu,
  Globe,
  Star,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountryMarquee from '../components/CountryMarquee';
import Breadcrumbs from '../components/Breadcrumbs';

const ContentWritingPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      id: "01",
      title: "SEO-Optimized Blog & Article Writing",
      desc: "Drive sustainable organic traffic. We write comprehensive, 1000+ word technical articles and blog posts. By seamlessly weaving semantic keywords and answering specific 'People Also Ask' queries, we help you capture high-value search real estate.",
      icon: <Search className="w-8 h-8" />
    },
    {
      id: "02",
      title: "High-Converting Website Copywriting",
      desc: "Your website needs to be your best salesperson. We write persuasive homepage copy, detailed service pages, and landing pages that agitate customer pain points and clearly present your solutions, driving maximum conversions.",
      icon: <Target className="w-8 h-8" />
    },
    {
      id: "03",
      title: "Technical & B2B Content",
      desc: "Selling complex software or B2B services requires specialized knowledge. Our technical writers can break down intricate subjects—like API integrations, AI architecture, or cloud computing—into digestible, authoritative whitepapers and case studies.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: "04",
      title: "Engaging Social Media & Email Copy",
      desc: "Keep your audience engaged off-site. We write punchy, scroll-stopping social media captions and craft automated email drip campaigns designed to nurture cold leads into warm, ready-to-buy prospects.",
      icon: <Mail className="w-8 h-8" />
    }
  ];

  const tools = [
    { category: "Semantic SEO Tools", items: ["SurferSEO", "Clearscope", "Ahrefs"], icon: <BarChart3 /> },
    { category: "Grammar & Readability", items: ["Grammarly Premium", "Hemingway App"], icon: <PenTool /> },
    { category: "Plagiarism & AI Checks", items: ["Copyscape", "Originality.ai"], icon: <CheckCircle2 /> },
    { category: "Content Management", items: ["Google Docs", "Notion", "WordPress"], icon: <BookOpen /> }
  ];

  const faqData = [
    {
      q: "How do you ensure the content ranks on Google?",
      a: "We start with deep keyword and entity research, analyze the top-ranking competitors, create semantic content briefs, and format the text with proper H2/H3 tags and schema-friendly lists."
    },
    {
      q: "Do you use AI to write the content?",
      a: "We use AI strictly as an assistant for outlining, data research, and ideation. However, the actual drafting, editing, and fact-checking are done by human experts to ensure E-E-A-T compliance and a natural brand voice."
    },
    {
      q: "Can you match the specific tone and voice of my brand?",
      a: "Yes. During our onboarding phase, we analyze your existing materials and establish a 'Brand Voice Guideline' to ensure our writing is professional, conversational, witty, or corporate, depending on your needs."
    },
    {
      q: "What is the difference between copywriting and content writing?",
      a: "Content writing is educational and designed to build long-term trust and SEO (like blogs and whitepapers). Copywriting is persuasive and designed to trigger an immediate action or sale (like landing pages and ad text)."
    },
    {
      q: "How long should a blog post be for SEO?",
      a: "There is no magic number, as it depends on user intent. However, for comprehensive, competitive topics, long-form content (1,200 to 2,000+ words) tends to acquire more backlinks and rank higher."
    },
    {
      q: "Do you provide semantic keywords and meta descriptions?",
      a: "Absolutely. Every piece of website content or blog post we deliver comes fully equipped with a perfectly optimized Meta Title, Meta Description, and URL slug recommendation."
    },
    {
      q: "Who owns the copyright to the articles?",
      a: "Once the content is approved and payment is cleared, the full copyright and publishing rights are transferred entirely to you. You can publish it under your name or your company's brand."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-slate-900 font-sans antialiased overflow-x-hidden min-h-screen relative selection:bg-slate-900 selection:text-white">
      <Helmet>
        <title>Content Writing Services | SEO Blogs & Technical Copy ABUQITMIRLABS</title>
        <meta name="description" content="ABUQITMIRLABS .TECH provides high-authority content writing. From technical whitepapers and SEO-optimized blogs to persuasive SaaS copywriting that builds trust and ranks." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/content-writing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Content Writing & Strategy | ABUQITMIRLABS" />
        <meta property="og:description" content="ABUQITMIRLABS .TECH provides high-authority content writing. From technical whitepapers and SEO blogs to persuasive SaaS copywriting." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/content-writing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content Writing & Strategy | ABUQITMIRLABS" />
        <meta name="twitter:description" content="ABUQITMIRLABS .TECH provides high-authority content writing. From technical whitepapers and SEO blogs to persuasive SaaS copywriting." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Content Writing",
            "description": "We provide E-E-A-T focused, meticulously researched content writing that satisfies complex search engine algorithms and builds genuine trust.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "Content Strategy",
            "areaServed": ["US", "UK", "CA", "PK", "PL", "AE", "SA"]
          })}
        </script>
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Floating Pen/Aesthetic Element */}
      <div className="fixed left-1/2 top-40 -translate-x-1/2 pointer-events-none z-0 opacity-10 hidden lg:block">
        <PenTool size={600} strokeWidth={0.5} className="text-slate-900" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200"
            >
                <Sparkles size={14} className="text-slate-500" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">The Power of Persuasion</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight text-slate-900 mb-12"
            >
                Words That <br />
                <span className="text-slate-400 italic">Persuade and Rank.</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-12"
            >
                Break through the noise of AI-generated spam. We provide E-E-A-T focused, meticulously researched content writing by ABUQITMIRLABS .TECH that satisfies complex search engine algorithms and builds genuine trust with human readers.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
                <a 
                  href="https://wa.me/923233260859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-slate-900 text-white font-bold uppercase tracking-widest text-[11px] rounded-lg hover:bg-slate-800 transition-all flex items-center gap-3"
                >
                    Order High-Quality Content
                    <ArrowRight size={16} />
                </a>
                <button 
                  onClick={() => {
                    const el = document.getElementById('video-portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#video-portfolio';
                  }}
                  className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold uppercase tracking-widest text-[11px] rounded-lg hover:bg-slate-50 transition-all"
                >
                    Read Our Content Samples
                </button>
            </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-slate-900 py-10 w-full overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center px-10">
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20 italic">seo-optimized technical writing</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-60">strategic b2b blog posts</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>conversion copywriting</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20 italic">eeat-compliant content</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-60">data-driven articles</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>niche marketing strategy</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20 italic">multi-lingual localization</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>guest post writing service</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20 italic">press release distribution</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>custom whitepaper research</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20 italic">case study writing help</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>email marketing newsletters</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20 italic">affordable blog writing</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>high-quality ghostwriting</span>
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          ))}
        </div>
      </div>

      {/* The Problem: AI Content Penalty */}
      <section className="py-24 md:py-48 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="text-xs font-bold text-red-500 uppercase tracking-[0.4em] mb-8">[ CRITIAL_ALERT: AI_PENALTY ]</div>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter uppercase leading-[0.9] mb-12">
                   The internet is <br />
                   <span className="text-slate-300">flooded with spam.</span>
                </h2>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white border border-slate-200 p-10 md:p-14 rounded-[3rem] shadow-xl relative"
            >
                <Quote className="absolute -top-6 -left-6 text-slate-200 w-16 h-16" />
                <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed">
                   If your website relies on thin, generic content, Google’s "Helpful Content Update" will penalize your rankings. Human readers are highly adept at spotting robotic, soulless writing. If your website copy lacks genuine expertise, empathy, and industry insight, potential clients will bounce from your page immediately.
                </p>
            </motion.div>
        </div>
      </section>

       {/* The Solution: Semantic Writing */}
       <section className="py-24 md:py-48 px-6 bg-white relative z-10">
          <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.5em] block mb-8">The ABUQITMIRLABS.TECH Solution</span>
                <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter uppercase leading-[0.8] mb-12 italic">
                    Semantic <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px #1e293b' }}>Thought</span> Leadership
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                    We bridge the gap between technical SEO and compelling storytelling. Our process focuses heavily on Google’s E-E-A-T guidelines to position your business as the definitive industry leader.
                </p>
              </motion.div>
          </div>
       </section>

       {/* Services Grid */}
       <section className="py-24 md:py-48 px-6 bg-slate-900 text-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 flex items-center justify-between">
                <div>
                    <h2 className="text-xs font-mono text-white/40 uppercase tracking-[0.5em] mb-4">[ CORE_CONTENT_SERVICES ]</h2>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8]">Strategic <span className="text-white/20">Narratives.</span></h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="group bg-white/5 border border-white/10 p-10 md:p-16 rounded-[4rem] flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500"
                    >
                        <div className="w-full flex flex-col items-center">
                            <div className="text-white/20 text-4xl font-mono mb-10 group-hover:text-white transition-colors">{service.id}</div>
                            <div className="mb-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-slate-900 transition-all">
                                {service.icon}
                            </div>
                            <h4 className="text-3xl font-bold uppercase tracking-tighter mb-6 leading-none">{service.title}</h4>
                            <p className="text-lg text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors">{service.desc}</p>
                        </div>
                        <div className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                            Initialize Workflow <ArrowRight size={14} />
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
       </section>

       {/* Tools Section */}
       <section className="py-24 md:py-48 px-6 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-32">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.5em] block mb-6">[ EDITORIAL_STACK ]</span>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter uppercase mb-6">Our Research <span className="text-slate-300">Protocol.</span></h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {tools.map((stack, i) => (
                    <div key={i} className="p-10 border border-slate-100 bg-slate-50 rounded-3xl hover:border-slate-300 transition-all flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-8">
                            {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 20 })}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-8 border-b border-slate-200 pb-4">{stack.category}</h4>
                        <ul className="space-y-4">
                            {stack.items.map((item, j) => (
                                <li key={j} className="text-slate-500 font-light flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
              </div>
          </div>
       </section>

       <CountryMarquee />

       {/* Final CTA Section */}
       <section className="py-48 bg-white relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-slate-900/5 blur-[200px] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className="text-7xl md:text-[10rem] font-bold text-slate-900 tracking-tighter mb-16 uppercase leading-[0.8] mix-blend-difference italic">
                    Your Voice <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px #1e293b' }}>Amplified.</span>
                </h2>
                
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                    <a 
                      href="https://wa.me/923233260859"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-16 py-8 bg-slate-900 text-white font-bold text-xl uppercase tracking-tighter rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl"
                    >
                        Order Content Audit
                    </a>
                    <div className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] max-w-[280px] text-left border-l-2 border-slate-200 pl-8 leading-relaxed flex items-center h-16">
                        AVG turnaround: 5-7 days // current capacity: 92%
                    </div>
                </div>
            </div>
       </section>

      {/* FAQ Section */}
       <section className="py-24 md:py-48 px-6 bg-slate-50 border-y border-slate-200 relative z-10">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-24">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.5em] block mb-8">FAQ</span>
                  <h3 className="text-5xl font-bold text-slate-900 uppercase tracking-tighter">Content Integrity</h3>
              </div>

              <div className="space-y-4 text-left">
                  {faqData.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-400 transition-colors"
                      >
                          <button 
                            className="flex items-center justify-between w-full p-8 md:p-10 text-left cursor-pointer"
                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          >
                              <span className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-tight pr-6">{faq.q}</span>
                              <div className={`shrink-0 transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 text-slate-900' : 'text-slate-300'}`}>
                                <Plus size={32} />
                              </div>
                          </button>
                          <AnimatePresence>
                              {activeFaq === idx && (
                                  <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden"
                                  >
                                      <p className="p-10 pt-0 text-xl font-light text-slate-500 leading-relaxed border-t border-slate-50 mt-4">
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

      <Footer />
    </div>
  );
};

export default ContentWritingPage;
