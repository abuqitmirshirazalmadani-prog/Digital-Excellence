"use client";

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  ShieldCheck, 
  ShoppingCart, 
  Briefcase, 
  Smartphone, 
  RefreshCw, 
  ArrowRight,
  ArrowUpRight,
  Plus,
  Monitor,
  Terminal,
  Database,
  Cloud,
  Layers,
  Rocket,
  Star,
  Cpu,
  Code2,
  Lock,
  Layout,
  MessageSquare
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';

const WebDevelopmentPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const capabilities = [
    {
      id: "01",
      title: "Headless E-Commerce Solutions",
      content: "Take total control of your customer’s shopping experience. We build headless commerce platforms that separate your frontend storefront from your backend inventory system (like Shopify or BigCommerce). This allows for lightning-fast product pages, ultra-customized checkout flows, and seamless omnichannel selling.",
      icon: <ShoppingCart />,
      accent: "blue"
    },
    {
      id: "02",
      title: "Corporate & B2B Web Portals",
      content: "Your website is your digital headquarters. We develop robust corporate websites that serve as powerful lead-generation engines. By integrating semantic SEO structures directly into the code and ensuring frictionless UI/UX, we position your brand as the undisputed authority in your industry.",
      icon: <Briefcase />,
      accent: "indigo"
    },
    {
      id: "03",
      title: "Progressive Web Apps (PWAs)",
      content: "Give your users an app-like experience directly in their browser. We build PWAs that offer offline capabilities, push notifications, and hardware integration without forcing the user to visit an app store. It is the perfect bridge between a website and a native mobile app.",
      icon: <Monitor />,
      accent: "sky"
    },
    {
      id: "04",
      title: "Seamless CMS Migration Services",
      content: "Trapped in an outdated CMS? We provide zero-downtime migration services. We seamlessly transfer your existing content, SEO metadata, and user databases to a modern Headless CMS (like Sanity or Contentful), empowering your marketing team to publish faster while keeping the frontend blazing fast.",
      icon: <RefreshCw />,
      accent: "violet"
    }
  ];

  const faqData = [
    {
      q: "What is Jamstack and why do I need it?",
      a: "Jamstack pre-builds your website pages and serves them via a CDN. It guarantees sub-second load times, unbreakable security, and cheaper scaling compared to standard WordPress sites."
    },
    {
      q: "What are Google's Core Web Vitals?",
      a: "They are metrics Google uses to measure load speed, visual stability, and interactivity. Passing these is mandatory for good SEO, and our custom websites easily ace these tests."
    },
    {
      q: "Can my marketing team still edit the website easily?",
      a: "Yes. We integrate user-friendly Headless CMS platforms (like Sanity or Contentful) so your team can publish content without touching any code."
    },
    {
      q: "Will my website be fully responsive on mobile devices?",
      a: "We use a mobile-first design approach. Your website will look and function perfectly across all smartphones, tablets, and desktop monitors."
    },
    {
      q: "How do you ensure the website is secure from hackers?",
      a: "Because we decouple the frontend from the backend, there is no direct database connection exposed to the internet, eliminating 99% of common hacking vulnerabilities like SQL injections."
    },
    {
      q: "Can you integrate third-party payment gateways?",
      a: "Absolutely. We integrate secure, PCI-compliant payment gateways like Stripe, PayPal, and regional providers directly into your checkout flow."
    },
    {
      q: "What is the difference between a website and a web app?",
      a: "A website is primarily informational (like a blog or portfolio), whereas a web application is highly interactive, allowing users to log in, manipulate data, and perform complex tasks."
    }
  ];

  return (
    <div className="bg-[#050505] text-axiom-sub font-body antialiased overflow-x-hidden min-h-screen relative selection:bg-blue-500/30 selection:text-white">
      <Helmet>
        <title>Web Development Company | High-Performance Ecosystems ABUQITMIRLABS</title>
        <meta name="description" content="ABUQITMIRLABS .TECH delivers high-speed, secure web ecosystems. Specialized in Jamstack, Headless CMS, and conversion-optimized web applications with scalable architecture." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/web-development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Development Company | ABUQITMIRLABS" />
        <meta property="og:description" content="ABUQITMIRLABS .TECH delivers high-speed, secure web ecosystems. Specialized in Jamstack, Headless CMS, and conversion-optimized web applications." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Company | ABUQITMIRLABS" />
        <meta name="twitter:description" content="ABUQITMIRLABS .TECH delivers high-speed, secure web ecosystems. Specialized in Jamstack, Headless CMS, and conversion-optimized web applications." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development",
            "description": "Stop losing customers to slow loading screens. We engineer high-performance, secure, and infinitely scalable websites.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "Web Engineering",
            "areaServed": ["US", "UK", "CA", "PK", "PL", "AE", "SA"],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Engineering Services",
                "itemListElement": capabilities.map(c => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": c.title
                    }
                }))
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })}
        </script>

        {/* HowTo Schema (Web Process) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Our Web Development Process",
            "description": "A 5-step engineering pipeline optimized for speed and SEO to build high-performance web platforms.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Audit & Specs",
                "text": "Technical analysis of current assets and goal setting."
              },
              {
                "@type": "HowToStep",
                "name": "UX Architecture",
                "text": "Mapping user flows for sub-second navigation."
              },
              {
                "@type": "HowToStep",
                "name": "Jamstack Build",
                "text": "Engineering the frontend with Next.js and Tailwind."
              },
              {
                "@type": "HowToStep",
                "name": "CMS Sync",
                "text": "Connecting secure headless content management."
              },
              {
                "@type": "HowToStep",
                "name": "Edge Deploy",
                "text": "Global distribution via Vercel Edge networks."
              }
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://abuqitmirlabs.tech"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Web Development",
                "item": "https://abuqitmirlabs.tech/web-development"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 md:pt-32 pb-20 px-6 z-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
            Performance Engineering Protocol
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white text-center mb-8 leading-[1.1] max-w-5xl"
        >
          Web Development <br />
          <span className="text-neutral-500">Services for Modern Business.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-neutral-400 text-center max-w-2xl mb-12 leading-relaxed font-light"
        >
          Stop losing customers to slow loading screens. We engineer high-performance, secure, and infinitely scalable websites using modern Jamstack and headless CMS architectures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <a 
            href="https://wa.me/923233260859"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-8 rounded-3xl text-sm font-bold transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 group bg-white text-black hover:bg-neutral-200"
          >
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Get a Free Website Audit
          </a>
          <button 
            onClick={() => {
              const el = document.getElementById('work-action');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-8 rounded-3xl border-2 border-white/10 text-sm font-bold transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 bg-white/5 text-white hover:bg-white/10 group"
          >
            <Layout className="w-6 h-6 group-hover:scale-110 transition-transform text-[#00E5FF]" />
            View Our Web Portfolio
          </button>
        </motion.div>

        {/* Visual Terminal/Dashboard Based on Snippet */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl w-full mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20" />
          <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="flex-1 flex justify-center pr-12">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none">Axiom // Web_Vitals_Monitor</span>
              </div>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Site Analysis</div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-2">
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="h-full bg-blue-500" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-blue-400">
                    <span>Performance</span>
                    <span>98%</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-2">
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      className="h-full bg-indigo-500" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-indigo-400">
                    <span>Best Practices</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 p-6 rounded-lg bg-white/5 border border-white/5 relative">
                <div className="flex justify-between items-start mb-6">
                   <div className="text-xs font-medium text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                     Live Engineering Session
                   </div>
                   <div className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded uppercase font-bold">Protocol Active</div>
                </div>
                <p className="font-mono text-xs text-blue-300 leading-loose">
                  $ npx axiom-audit --mode=performance<br />
                  <span className="text-neutral-500">Checking Core Web Vitals... [OK]</span><br />
                  <span className="text-neutral-500">Minifying bundle size... [DONE]</span><br />
                  <span className="text-white font-bold ml-4">LCP: 0.8s | CLS: 0.01 | INP: 24ms</span><br />
                  <span className="text-green-400">$ architecture synchronized with Vercel Edge.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="z-20 border-y bg-black/30 w-full border-white/10 pt-6 pb-6 relative backdrop-blur-sm overflow-hidden">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center px-8">
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">high-performance jamstack</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>custom next.js development</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">headless cms integration</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>pwa development</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">seo-friendly structure</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>scalable full-stack</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">modern responsive agency</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>progressive web apps</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">react web development</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>custom wordpress themes</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">web accessibility compliance</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>responsive web design help</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-40">speed optimized websites</span>
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(59, 130, 246, 0.4)' }}>corporate website design</span>
            </div>
          ))}
        </div>
      </div>

      {/* The Problem Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="glass-panel p-12 md:p-20 rounded-2xl relative z-10 max-w-4xl mx-auto text-center border-l-4 border-l-blue-600 bg-white/[0.02] border-white/10">
              <h2 className="text-xs font-mono text-blue-500 mb-8 uppercase tracking-[0.3em]">[ SYSTEM_PROFILE: LEGACY_MONOLITH ]</h2>
              <p className="text-2xl md:text-4xl text-neutral-200 font-light leading-relaxed tracking-tight">
                Traditional websites are <span className="text-white font-bold border-b border-blue-500">slowly killing your business</span>. 
                Bloated code and plugin-heavy builds results in sluggish mobile performance that causes Google to penalize your rankings.
              </p>
           </div>
        </div>
      </section>

      {/* Solution Approach (Accordion Style from snippet) */}
      <section className="py-32 border-t border-white/5" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-16">
            <Layers className="text-blue-500" width={24} />
            <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">Core Protocols // Digital Solutions</h2>
          </div>

          <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] gap-2">
            {capabilities.map((item) => (
              <div 
                key={item.id}
                className="group relative flex-accordion flex-1 hover:flex-[2.5] bg-neutral-900/50 border border-white/10 overflow-hidden cursor-pointer transition-all duration-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-b from-${item.accent}-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Default State */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                  <span className="text-5xl font-black text-white/5 absolute top-8 right-8">{item.id}</span>
                  <div className="text-blue-500 mb-6">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}</div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tighter rotate-0 lg:-rotate-90 lg:origin-bottom-left lg:translate-x-16 lg:translate-y-[-1rem] whitespace-nowrap transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>

                {/* Expanded State */}
                <div className="absolute inset-0 p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-center">
                  <div className="text-blue-400 mb-6">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 48 })}</div>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-6">{item.title}</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    {item.content}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest group/btn border-b border-transparent hover:border-blue-500 w-fit transition-all pb-1">
                    Initialize Protocol
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack (3D Cards from snippet pattern) */}
      <section className="py-32 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
             <h2 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-[0.3em] font-bold">[ WEB_ENGINEERING_STACK ]</h2>
             <p className="text-3xl font-bold text-white uppercase tracking-tight">Our Mastered Toolset</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend Frameworks", items: ["Next.js", "React.js", "Vue.js"], icon: <Monitor />, color: "blue" },
              { category: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "Animations"], icon: <Zap />, color: "indigo" },
              { category: "Headless CMS", items: ["Sanity", "Contentful", "Strapi"], icon: <Database />, color: "sky" },
              { category: "Cloud Delivery", items: ["Vercel", "AWS", "Cloudflare"], icon: <Cloud />, color: "violet" }
            ].map((stack, idx) => (
              <div key={idx} className="group h-[380px] [perspective:1000px] cursor-pointer">
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-xl p-8 flex flex-col justify-between [backface-visibility:hidden]">
                    <div className={`text-${stack.color}-500 opacity-60`}>
                      {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 40 })}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">Protocol {idx + 1}</div>
                      <h4 className="text-2xl font-bold text-white uppercase leading-tight">{stack.category}</h4>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-black border border-blue-500/30 rounded-xl p-8 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <ul className="space-y-4">
                      {stack.items.map(item => (
                        <li key={item} className="flex items-center gap-3 text-sm text-neutral-200 font-bold uppercase tracking-tight">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CountryMarquee />

      {/* Our Proven Step Development Process */}
      <section id="development-process" className="py-32 px-6 relative overflow-hidden bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-mono text-blue-500 mb-4 uppercase tracking-[0.3em] font-bold">[ ENGINEERING_LIFECYCLE ]</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-8">Our Proven Web Process</h3>
              <p className="max-w-2xl mx-auto text-lg text-neutral-400 font-light leading-relaxed">
                We bridge the gap between design and high-performance code through a meticulous development pipeline optimized for speed and SEO.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
             {/* Background Connector line for desktop */}
             <div className="absolute top-12 left-0 right-0 h-[1px] bg-white/10 hidden md:block" />
             
             {[
               { title: "Audit & Specs", desc: "Technical analysis of current assets and goal setting.", icon: <Terminal /> },
               { title: "UX Architecture", desc: "Mapping user flows for sub-second navigation.", icon: <Layers /> },
               { title: "Jamstack Build", desc: "Engineering the frontend with Next.js and Tailwind.", icon: <Code2 /> },
               { title: "CMS Sync", desc: "Connecting secure headless content management.", icon: <Database /> },
               { title: "Edge Deploy", desc: "Global distribution via Vercel Edge networks.", icon: <Rocket /> }
             ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative z-10 p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center group hover:bg-blue-500/5 hover:border-blue-500/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 20 })}
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-3 italic">Step 0{idx + 1}: {step.title}</h4>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* See Our Work in Action */}
      <section id="work-action" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-[0.3em] font-bold">[ PROJECT_SHOWCASE ]</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-8">
              See Our Work in Action: <br />
              <span className="text-neutral-500">Real Projects, Real Results</span>
            </h3>
            <p className="max-w-3xl text-xl text-neutral-400 font-light leading-relaxed">
              We believe that exceptional work speaks for itself. Explore our recent case studies and project breakdowns below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Digital Architecture",
                desc: "Watch our lead architect at ABUQITMIRLABS .TECH breakdown complex digital ecosystems.",
                videoId: "v25Fo6O3iy4"
              },
              {
                title: "Advanced Engineering Solutions",
                desc: "Deep dive into High-Performance Web Tech and scalable backend systems.",
                videoId: "110zeH-eEEk"
              },
              {
                title: "AI-Driven Business Growth",
                desc: "How we implement autonomous LLM agents to automate business workflows.",
                videoId: "HgPP7c9fftw"
              },
              {
                title: "Strategic Consulting Session",
                desc: "A look at our detailed technical roadmap building for enterprise clients.",
                videoId: "M4m1rplTxDk"
              },
              {
                title: "Modern Tech Explained",
                desc: "Quick insights into modern tech stacks and semantic search optimization.",
                videoId: "KowPMteJA-E"
              },
              {
                title: "Future of Digital Assets",
                desc: "A vision for secure, fast, and highly intelligent digital transformations.",
                videoId: "X9xyYiT79Cc"
              }
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all p-4 shadow-2xl"
              >
                <div className="aspect-video relative w-full rounded-2xl overflow-hidden bg-black mb-6 border border-white/10">
                  <iframe 
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-4 pb-2">
                  <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{video.title}</h4>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter mb-12 uppercase leading-[0.85]">
            Ready to <span className="text-neutral-600">Architect</span> <br />
            Your Advantage?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 px-12 rounded-full text-base font-bold bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-105 flex items-center justify-center uppercase tracking-tight"
            >
               Request a Technical Audit
            </a>
            <div className="text-neutral-500 font-mono text-[11px] uppercase tracking-[0.2em] text-left border-l border-white/10 pl-6 h-12 flex items-center">
               Avg. Discovery Time: 14 Days <br />
               Current Lead Time: 4 Weeks
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Glass style) */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-[0.3em]">[ OPERATIONAL_INQUIRIES ]</h2>
            <h3 className="text-4xl font-bold text-white uppercase tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors"
              >
                <button 
                  className="flex items-center justify-between w-full p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-bold text-neutral-200 uppercase tracking-tight">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 text-blue-400' : 'text-neutral-500'}`}>
                    <Plus width={24} />
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
                      <p className="p-6 pt-0 text-neutral-400 text-lg font-light leading-relaxed">
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

      {/* Internal Linking / Related Services */}
      <section className="py-24 bg-[#050505] border-t border-white/5 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-mono text-neutral-500 mb-12 uppercase tracking-[0.4em] font-bold">[ RELATED_SYSTEMS ]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Software", path: "/custom-software", icon: <Code2 className="w-5 h-5" /> },
              { title: "Mobile Apps", path: "/mobile-app-development", icon: <Smartphone className="w-5 h-5" /> },
              { title: "AI Agents", path: "/ai-agent-development", icon: <Cpu className="w-5 h-5" /> },
              { title: "SEO Strategy", path: "/seo-mastery", icon: <Star className="w-5 h-5" /> }
            ].map((link, i) => (
              <Link 
                key={i} 
                to={link.path} 
                className="group flex items-center justify-between p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-500 bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {link.icon}
                  </div>
                  <span className="font-bold uppercase tracking-tight text-white">{link.title}</span>
                </div>
                <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
