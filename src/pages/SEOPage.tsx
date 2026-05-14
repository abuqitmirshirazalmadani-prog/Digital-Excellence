"use client";

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  BarChart3, 
  SearchCode, 
  Workflow, 
  Target, 
  ShieldCheck, 
  ArrowUpRight,
  Plus,
  Monitor,
  LayoutGrid,
  FileSearch,
  Globe,
  Star,
  Zap,
  TrendingUp,
  Code2,
  Smartphone,
  Cpu,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';
import HeroText from '../components/ui/hero-shutter-text';

const SEOPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const strategies = [
    {
      title: "1. Technical & Architecture SEO Audits",
      content: "We fix what is broken under the hood. We conduct exhaustive technical audits to resolve crawl errors, fix indexing bloat, optimize your site architecture, and implement dynamic XML sitemaps to ensure Google bots can effortlessly read and rank your pages.",
      icon: <FileSearch className="w-10 h-10 text-black" />
    },
    {
      title: "2. Semantic Content Siloing",
      content: "We organize your website into topical clusters. By interlinking related service pages and deeply researched blog posts, we prove to search engines that you have exhaustive knowledge on your subject, dramatically boosting your ranking power across hundreds of long-tail variations.",
      icon: <Workflow className="w-10 h-10 text-black" />
    },
    {
      title: "3. Advanced Schema Markup Implementation",
      content: "We speak directly to search robots. We write custom JSON-LD schema markup (such as LocalBusiness, FAQPage, and Service) to feed Google exact, structured data about your prices, reviews, and services, helping you secure high-visibility \"Rich Snippets\" at the top of the search results.",
      icon: <SearchCode className="w-10 h-10 text-black" />
    },
    {
      title: "4. Hyper-Local SEO & Google Business Profile (GBP)",
      content: "Capture the customers in your immediate vicinity. We optimize your Google Business Profile with geotagged images, localized semantic descriptions, and consistent NAP (Name, Address, Phone) citations across high-tier directories, ensuring you show up first when locals search for your services.",
      icon: <MapPin className="w-10 h-10 text-black" />
    }
  ];

  const faqData = [
    {
      q: "How long does it take to see SEO results?",
      a: "True semantic authority takes 3 to 6 months to mature. While technical fixes yield quick bumps, compounding organic ROI requires consistent effort."
    },
    {
      q: "What is Semantic Entity SEO?",
      a: "It is optimizing for concepts, not just single keywords. We structure content to help Google understand your brand as an \"Entity,\" allowing you to rank for thousands of related search queries."
    },
    {
      q: "Why is my Google Business Profile not showing on the map?",
      a: "Map visibility relies on distance, relevance, and prominence. We fix inconsistent citations, generate localized content, and manage reviews to build local trust."
    },
    {
      q: "Do you guarantee the #1 spot on Google?",
      a: "No reputable agency can guarantee a #1 spot due to Google's dynamic algorithm. However, we guarantee data-driven strategies, ethical white-hat tactics, and transparent traffic growth."
    },
    {
      q: "What is the difference between On-Page and Off-Page SEO?",
      a: "On-page refers to optimizations on your site (content, speed, structure). Off-page refers to external signals like high-quality backlinks and directory citations. We handle both."
    },
    {
      q: "How do you measure the success of an SEO campaign?",
      a: "We track transparent KPIs: organic traffic growth, keyword ranking improvements, click-through rates (CTR), and most importantly, qualified lead conversions."
    },
    {
      q: "Will SEO work if my industry is highly competitive?",
      a: "Yes. In highly competitive niches, we pivot away from generic terms and focus on high-intent, long-tail semantic keywords that your competitors are ignoring."
    }
  ];

  return (
    <div className="bg-[#f4f4f5] text-black font-display antialiased overflow-x-hidden min-h-screen relative selection:bg-[#ccff00]">
      <Helmet>
        <title>SEO Services | Semantic Entity SEO & Local Search Mastery ABUQITMIRLABS</title>
        <meta name="description" content="Dominate search results with ABUQITMIRLABS .TECH. Advanced Semantic Entity SEO, Local Map Mastery, and E-E-A-T focused content strategies designed to drive organic ROI." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/seo-mastery" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SEO Mastery | ABUQITMIRLABS" />
        <meta property="og:description" content="Dominate search results with ABUQITMIRLABS .TECH. Advanced Semantic Entity SEO, Local Map Mastery, and E-E-A-T focused content strategies." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/seo-mastery" />
        <meta property="og:type" content="website" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Mastery",
            "description": "We specialize in data-driven Semantic Entity SEO and hyper-local map strategies to establish your brand's topical authority.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "Search Engine Optimization",
            "areaServed": ["US", "UK", "CA", "PK", "PL", "AE", "SA"]
          })}
        </script>
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 md:pt-32 pb-20 px-6 z-10">

        <motion.div 
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 1, rotate: -2 }}
          className="inline-block bg-white border-4 border-black px-6 py-2 rounded-full font-black mb-8 brutalist-shadow lowercase text-xl"
        >
          We build digital empires
        </motion.div>

        <div className="mb-4">
          <HeroText text="RANKING" />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-black text-center mb-10 leading-[0.95] max-w-6xl uppercase"
        >
          SEO Services <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>& Local Search</span> <br />
          <span className="text-[#ccff00]">Mastery.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl text-zinc-800 text-center max-w-3xl mb-12 leading-tight font-bold lowercase"
        >
          Ranking on Google requires more than just keyword stuffing. We utilize data-driven Semantic Entity SEO and hyper-local map strategies to establish your brand's topical authority. We do not just drive traffic; we capture high-intent buyers ready to convert.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a 
            href="https://wa.me/923233260859"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-8 bg-black text-[#ccff00] text-xl font-black border-4 border-black rounded-3xl brutalist-shadow hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2 uppercase"
          >
            <Zap size={24} />
            Request an SEO Strategy Plan
          </a>
          <button 
            onClick={() => {
              const el = document.getElementById('video-portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.href = '/#video-portfolio';
            }}
            className="px-12 py-8 bg-white text-black text-xl font-black border-4 border-black rounded-3xl brutalist-shadow hover:scale-105 transition-transform flex flex-col items-center justify-center gap-2 uppercase"
          >
            <Star size={24} />
            See Our Ranking Case Studies
          </button>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden transform z-20 bg-[#ccff00] w-full border-y-[6px] border-black py-6 relative shadow-[0_12px_0_0_rgba(0,0,0,1)] -rotate-1">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 text-4xl md:text-6xl font-black tracking-tighter uppercase items-center text-black px-12">
              <span>semantic entity seo services</span> <Star className="fill-current" size={48} />
              <span>topical authority building help</span> <Star className="fill-current" size={48} />
              <span>local map pack optimization</span> <Star className="fill-current" size={48} />
              <span>eeat content strategy experts</span> <Star className="fill-current" size={48} />
              <span>advanced schema implementation</span> <Star className="fill-current" size={48} />
              <span>technical seo performance audit</span> <Star className="fill-current" size={48} />
              <span>high-roi organic search growth</span> <Star className="fill-current" size={48} />
              <span>local seo for dentists</span> <Star className="fill-current" size={48} />
              <span>lawyer seo experts</span> <Star className="fill-current" size={48} />
              <span>ecommerce organic growth</span> <Star className="fill-current" size={48} />
              <span>google search console audit</span> <Star className="fill-current" size={48} />
              <span>semantic keyword mapping</span> <Star className="fill-current" size={48} />
              <span>backlink profile cleanup</span> <Star className="fill-current" size={48} />
              <span>content silo architecture</span> <Star className="fill-current" size={48} />
            </div>
          ))}
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-32 border-b-[8px] border-black bg-white relative z-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-[#ff0099] text-white font-black px-6 py-2 border-4 border-black rounded-lg mb-8 transform -rotate-3 brutalist-shadow uppercase text-xl">
              The Warning
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-8 leading-[0.9] lowercase">
              the death of <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>traditional</span> <br />
              keyword seo.
            </h2>
          </div>
          <div className="bg-[#ccff00]/10 border-4 border-black p-12 rounded-[40px] brutalist-shadow">
            <p className="text-2xl font-bold leading-relaxed text-black">
              If you are paying an agency to simply paste exact-match keywords into your content and buy spammy backlinks, you are burning your budget. Google's AI-driven Search Generative Experience (SGE) now understands context, not just text. Standard SEO tactics lead to algorithmic penalties, invisible search rankings, and a complete lack of verified trust in the eyes of the consumer.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-[#ccff00] relative z-10 px-6 border-b-[8px] border-black shadow-[inset_0_20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block bg-black text-[#ccff00] font-black px-6 py-2 border-4 border-black rounded-lg mb-8 transform rotate-2 brutalist-shadow uppercase text-xl">
            Our Solution
          </div>
          <h2 className="text-6xl md:text-[8rem] font-black text-black tracking-tighter mb-10 leading-[0.8] lowercase">
            E-E-A-T and <br />
            <span className="text-white">Entity Optimization.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-16">
             <div className="p-12 border-4 border-black bg-white rounded-3xl brutalist-shadow">
                <p className="text-2xl font-bold leading-relaxed">
                  We treat your business as a digital entity. Our strategy is built entirely around Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, and Trustworthiness). We structure your website's architecture, schema markup, and content silos so search engines mathematically recognize you as the ultimate authority in your niche. For local businesses, we aggressively optimize your digital footprint to dominate the local Map Pack.
                </p>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div className="p-10 border-4 border-black bg-white rounded-3xl brutalist-shadow transition-transform hover:-translate-y-2 flex flex-col items-center text-center">
                <Target className="w-16 h-16 text-black mb-6" />
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">Topical Authority</h3>
                <p className="text-lg font-bold">We structure your website so engines mathematically recognize you as the ultimate authority in your niche.</p>
             </div>
             <div className="p-10 border-4 border-black bg-white rounded-3xl brutalist-shadow transition-transform hover:-translate-y-2 flex flex-col items-center text-center">
                <MapPin className="w-16 h-16 text-black mb-6" />
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">Map Pack Dominance</h3>
                <p className="text-lg font-bold">For local businesses, we aggressively optimize your digital footprint to dominate the local Map Pack results.</p>
             </div>
             <div className="p-10 border-4 border-black bg-white rounded-3xl brutalist-shadow transition-transform hover:-translate-y-2 flex flex-col items-center text-center">
                <ShieldCheck className="w-16 h-16 text-black mb-6" />
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">EEAT Compliance</h3>
                <p className="text-lg font-bold">Aligning every signal with Experience, Expertise, Authoritativeness, and Trustworthiness metrics.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-32 bg-white relative z-10 px-6 border-b-[8px] border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-20 lowercase">
            Our Core Search <br />
            <span className="text-[#a855f7]">Visibility Strategies.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {strategies.map((item, idx) => (
              <div key={idx} className="bg-[#f4f4f5] p-12 border-4 border-black rounded-[40px] brutalist-shadow hover:bg-[#ccff00]/20 transition-colors group flex flex-col items-center text-center">
                <div className="mb-8 w-20 h-20 bg-white border-4 border-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-xl font-bold leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Tools Section */}
      <section className="py-32 bg-black text-white relative z-10 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ccff00]/20 blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-20 lowercase">
            The SEO Tools <br />
            <span className="text-[#ccff00]">We Command.</span>
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { category: "Analytics & Tracking", items: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Search Console"], icon: <BarChart3 /> },
              { category: "Data & Auditing", items: ["Ahrefs", "SEMrush", "Screaming Frog"], icon: <Search /> },
              { category: "Semantic Mapping", items: ["SurferSEO", "In-house NLP Entity tools"], icon: <TrendingUp /> }
            ].map((stack, idx) => (
              <div key={idx} className="bg-zinc-900 border-4 border-zinc-800 p-10 rounded-3xl brutalist-shadow shadow-zinc-800 flex flex-col items-center text-center">
                <div className="text-[#ccff00] mb-8">
                   {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 64, strokeWidth: 2.5 })}
                </div>
                <h4 className="font-black text-2xl uppercase tracking-tighter mb-6 text-white">{stack.category}</h4>
                <ul className="space-y-4">
                  {stack.items.map(item => (
                    <li key={item} className="flex items-center gap-4 text-xl font-bold text-zinc-400">
                       <div className="w-3 h-3 bg-[#ccff00] border-2 border-black"></div>
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

      {/* CTA Section */}
      <section className="bg-[#ccff00] py-48 relative z-10 px-6 text-center border-t-[8px] border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-7xl md:text-9xl font-black text-black tracking-tighter mb-12 lowercase leading-[0.8]">
            Dominate Every <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '3px black' }}>Search Intent.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-black text-[#ccff00] text-2xl md:text-3xl font-black px-12 py-8 border-4 border-black rounded-full brutalist-shadow hover:scale-105 transition-transform duration-300 uppercase"
            >
               Request an SEO Strategy Plan
            </a>
            <div className="text-black font-black text-sm uppercase tracking-widest max-w-[250px] text-left border-l-4 border-black pl-6">
               NEXT AUDIT SLOT: OCT 2026 / AVG. RESULTS TIME: 90-120 DAYS
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#f4f4f5] border-t-[8px] border-black relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-6xl font-black font-display mb-12 text-center uppercase tracking-tight">
            FAQ
          </h1>

          <div className="space-y-6">
            {faqData.map((faq, idx) => (
              <details key={idx} className="group bg-white border-4 border-black rounded-2xl brutalist-shadow open:bg-white transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none group-open:bg-gray-100 rounded-t-xl transition-colors">
                  <span className="text-xl font-bold font-display uppercase tracking-tighter">{faq.q}</span>
                  <div className="w-10 h-10 border-4 border-black rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45 bg-[#ccff00]">
                    <Plus className="w-6 h-6" />
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t-4 border-black mt-4">
                  <p className="text-xl font-bold leading-relaxed pt-6">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      {/* Internal Linking / Related Services */}
      <section className="py-24 bg-[#f4f4f5] border-t-8 border-black relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-mono text-black/40 mb-12 uppercase tracking-[0.4em] font-bold">[ RELATED_SYSTEMS ]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Software", path: "/custom-software", icon: <Code2 className="w-5 h-5" /> },
              { title: "Web Development", path: "/web-development", icon: <Globe className="w-5 h-5" /> },
              { title: "Mobile Apps", path: "/mobile-app-development", icon: <Smartphone className="w-5 h-5" /> },
              { title: "AI Agents", path: "/ai-agent-development", icon: <Cpu className="w-5 h-5" /> }
            ].map((link, i) => (
              <Link 
                key={i} 
                to={link.path} 
                className="group flex items-center justify-between p-8 bg-white border-4 border-black rounded-2xl brutalist-shadow transition-all hover:-translate-y-1 hover:bg-[#ccff00]"
              >
                <div className="flex items-center gap-4">
                  <div className="text-black bg-[#f4f4f5] border-2 border-black p-3 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
                    {link.icon}
                  </div>
                  <span className="font-bold uppercase tracking-tight text-black">{link.title}</span>
                </div>
                <ArrowUpRight className="text-black/30 group-hover:text-black transition-colors" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOPage;
