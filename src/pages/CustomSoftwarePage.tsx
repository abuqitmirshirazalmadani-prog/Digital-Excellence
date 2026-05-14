"use client";

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  ArrowRight, 
  Plus,
  Monitor,
  Layers,
  Star,
  Server,
  Zap,
  Activity,
  CheckCircle2,
  RotateCcw,
  Library,
  ChevronRight,
  Play,
  Layout,
  Boxes,
  Code2,
  ShieldCheck,
  Smartphone,
  Globe,
  Settings,
  ArrowUpRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';
import HeroText from '../components/ui/hero-shutter-text';

const CustomSoftwarePage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activePlaybook, setActivePlaybook] = useState<'collab' | 'templates' | 'safety'>('collab');

  const services = [
    {
      id: "01",
      title: "Scalable MVP Development for Startups",
      content: "Got a disruptive idea? We help tech startups launch faster with robust Minimum Viable Products (MVPs). We focus on core functionalities that attract early adopters and investors, built on a scalable architecture that allows for rapid feature expansion once market fit is proven.",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      id: "02",
      title: "Enterprise ERP & CRM Systems",
      content: "Unify your data and streamline your operations. We build custom Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) tools that provide real-time analytics, automate data entry, and give your leadership team a crystal-clear, 360-degree view of your entire business.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      id: "03",
      title: "Legacy System Modernization",
      content: "Outdated software is a security risk and an operational anchor. We seamlessly migrate your legacy systems to modern, cloud-native architectures with zero downtime. We ensure your historical data is perfectly preserved while your interface and processing speeds are dramatically upgraded.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      id: "04",
      title: "SaaS Product Development",
      content: "Looking to build the next big Software-as-a-Service? We design multi-tenant SaaS architectures that handle high traffic securely. Our team manages everything from the user subscription flows to the backend database structuring, ensuring a flawless experience for your subscribers.",
      icon: <Cloud className="w-8 h-8" />,
    }
  ];

  const playbookData = {
    collab: {
      title: 'Real-time collaboration',
      tagline: 'EDIT SCRIPTS TOGETHER WITH LIVE CURSORS AND VERSIONED SAVES.',
      p1: 'Edit remediation scripts together in real time with live cursors, inline comments and versioned saves.',
      p2: 'Everyone on call sees changes immediately so your team can author and run fixes together during an incident.',
      code: `// shared live script\nconst s = Runlyx.Script.open("recover-workers");\n\ns.apply("restartWorkers()", { user: "jordan" });\ns.comment(2, "Check CPU before restart");\ns.save("v1.2.1", "Add safety check");`
    },
    templates: {
      title: 'Parameterized templates',
      tagline: 'REUSABLE PLAYBOOKS WITH TYPED INPUTS AND SANE DEFAULTS.',
      p1: 'Publish reusable playbooks with typed inputs and sane defaults so teams can standardize fixes.',
      p2: 'Validate inputs before execution and stamp every run with immutable parameters for auditing.',
      code: `// template inputs\ntype Params = { service: "api" | "worker", region: string }\n\nconst s = Runlyx.Template.use<Params>("scale-service");\ns.run({ service: "worker", region: "us-east-1" });`
    },
    safety: {
      title: 'Safety and approvals',
      tagline: 'GUARDRAILS, DRY RUNS, AND MULTI-STEP APPROVALS.',
      p1: 'Protect production with guardrails: dry runs, blast-radius checks and multi-step approvals.',
      p2: 'Require reviewers on sensitive playbooks and log every decision for compliance.',
      code: `// safety first\nconst p = Runlyx.Playbook("db-failover");\np.requireApproval({ teams: ["SRE"], min: 2 });\np.dryRun().assert("replicasHealthy > 2");\np.execute();`
    }
  };

  const faqData = [
    {
      q: "How much does custom software development cost?",
      a: "The cost varies entirely based on complexity, features, and integrations. An MVP starts at a lower tier, while an enterprise ERP requires a larger investment. We provide transparent, itemized quotes after discovery."
    },
    {
      q: "How long does it take to build custom software?",
      a: "A scalable MVP takes 8 to 12 weeks to design and deploy. Complex enterprise solutions can take 4 to 6 months. We use Agile methodology to deliver usable features rapidly."
    },
    {
      q: "Do I own the source code after development?",
      a: "Absolutely. Once the project is completed and fully paid for, 100% of the Intellectual Property (IP) and source code ownership is transferred to you."
    },
    {
      q: "Do you provide ongoing support and maintenance?",
      a: "Yes. We offer comprehensive Service Level Agreements (SLAs) that include bug fixes, security patches, server monitoring, and feature upgrades to keep your software running flawlessly."
    },
    {
      q: "Will the new software integrate with my existing tools?",
      a: "Yes. We build custom API bridges to ensure your new software communicates seamlessly with your existing CRMs, accounting tools, or third-party databases."
    },
    {
      q: "How do you ensure the security of the custom software?",
      a: "We implement enterprise-grade security, including end-to-end data encryption, role-based access control (RBAC), and regular vulnerability testing to protect against cyber threats."
    },
    {
      q: "Can you take over an incomplete software project?",
      a: "Yes. We start with a comprehensive code audit to assess the quality and security of the existing codebase, then create a roadmap to stabilize and complete your project."
    }
  ];

  return (
    <div className="bg-[#000000] text-slate-100 font-sans antialiased overflow-x-hidden min-h-screen relative selection:bg-blue-500/30 selection:text-white">
      <Helmet>
        <title>Custom Software Engineering | SaaS & Enterprise Solutions ABUQITMIRLABS</title>
        <meta name="description" content="Professional custom software engineering by ABUQITMIRLABS .TECH. We build tailor-made enterprise ERPs, specialized SaaS platforms, and secure backend architectures for startups." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/custom-software" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Custom Software Development | ABUQITMIRLABS" />
        <meta property="og:description" content="Professional custom software engineering by ABUQITMIRLABS .TECH. Tailor-made enterprise ERPs and secure backend architectures." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/custom-software" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development | ABUQITMIRLABS" />
        <meta name="twitter:description" content="Professional custom software engineering by ABUQITMIRLABS .TECH. Tailor-made enterprise ERPs and secure backend architectures." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "We engineer tailor-made software solutions that streamline operations and give your business a decisive competitive edge.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "Software Development",
            "areaServed": ["US", "UK", "CA", "PK", "PL", "AE", "SA"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Engineering Services",
              "itemListElement": services.map((s, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s.title
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

        {/* HowTo Schema (Development Process) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Our Custom Software Development Process",
            "description": "A 5-step rigorous technical methodology to engineer robust, secure, and scalable software assets.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Strategic Discovery",
                "text": "Analyze business operations to identify where custom software can drive the most ROI."
              },
              {
                "@type": "HowToStep",
                "name": "Architecture & UI",
                "text": "Blueprint a scalable multi-tenant architecture and high-fidelity interface design."
              },
              {
                "@type": "HowToStep",
                "name": "Clean Engineering",
                "text": "Produce modular, typed code adhering to clean architecture principles for performance."
              },
              {
                "@type": "HowToStep",
                "name": "Security Audits & QA",
                "text": "Perform stress tests and end-to-end security audits to ensure zero vulnerabilities."
              },
              {
                "@type": "HowToStep",
                "name": "Launch & Optimization",
                "text": "Manage seamless deployment and provide continuous optimization based on usage data."
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
                "name": "Custom Software Development",
                "item": "https://abuqitmirlabs.tech/custom-software"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Unicorn Mask Background */}
      <div className="fixed inset-0 unicorn-mask pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10" />
      </div>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="animate-enter-delay-2 relative pt-24 md:pt-32 pb-20 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Floating Labels */}
            <div className="pointer-events-none relative select-none">
              <motion.span 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[55%] -top-12 -translate-x-1/2 hidden md:block"
              >
                <span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">AI Engineered</span>
                <span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
              </motion.span>
              <motion.span 
                animate={{ y: [0, 8, 0], x: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[2%] top-12 hidden translate-x-8 translate-y-12 md:block"
              >
                <span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Precision Code</span>
                <span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
              </motion.span>
              <motion.span 
                animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[10%] bottom-6 hidden sm:block"
              >
                <span className="block whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.4)] ring-1 ring-black/5">Enterprise Scale</span>
                <span className="mx-auto -mt-1 block h-2 w-2 rotate-45 rounded-sm bg-white"></span>
              </motion.span>
            </div>

            {/* Headline */}
            <div className="text-center relative z-10">
              <div className="mb-4">
                <HeroText text="ENGINEERING" />
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-5xl text-3xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl uppercase font-black"
              >
                Custom Software <br />
                <span className="text-[#3b82f6]">Development Services.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-slate-300 font-light"
              >
                We don't just write code; we build digital assets. We engineer tailor-made software solutions that streamline operations and give your business a decisive competitive edge.
              </motion.p>

              {/* CTAs */}
              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a 
                  href="https://wa.me/923233260859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wrapper" 
                  style={{ '--dot-size': '8px', '--line-weight': '1px', '--animation-speed': '0.35s', '--dot-color': '#fffa', '--line-color': '#fffa', '--grid-color': '#fff3' } as any}
                >
                  <div className="line horizontal top"></div>
                  <div className="line vertical right"></div>
                  <div className="line horizontal bottom"></div>
                  <div className="line vertical left"></div>
                  <div className="dot top left"></div>
                  <div className="dot top right"></div>
                  <div className="dot bottom right"></div>
                  <div className="dot bottom left"></div>
                  <div className="btn flex flex-col items-center justify-center p-6 min-w-[240px] gap-2">
                    <ArrowRight className="btn-svg text-white w-6 h-6" />
                    <span className="btn-text text-white font-bold uppercase tracking-widest text-sm">Start Your Project</span>
                  </div>
                </a>
                
                <button 
                  onClick={() => {
                    const el = document.getElementById('video-portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#video-portfolio';
                  }}
                  className="relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-8 py-4 text-base font-medium text-white/90 shadow-[0_0_15px_rgba(59,130,246,0.15)] ring-1 ring-white/10 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] uppercase tracking-tight"
                >
                  Watch Process
                  <Play className="h-4 w-4 fill-current ml-2" />
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative mt-24 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40"
            >
                {/* Window Controls */}
                <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-400/80 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
                        <span className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Axiom_Custom_Software // build_v1.0.4</div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
                    {/* Left Sidebar */}
                    <aside className="hidden md:block col-span-3 border-r border-white/10 bg-black/20 p-5 p-y-8">
                        <div className="flex items-center gap-3 mb-10 px-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                                <Library className="w-4 h-4 text-blue-400" />
                            </div>
                            <span className="text-xs font-bold text-slate-400">PLAYBOOKS</span>
                        </div>
                        
                        <div className="space-y-1">
                            {[
                                { name: 'DB Failover Script', status: 'Ready', icon: <CheckCircle2 className="w-4 h-4 text-green-500" /> },
                                { name: 'Scale Workers', status: 'Active', icon: <Activity className="w-4 h-4 text-blue-500" /> },
                                { name: 'Restart Service', status: 'Ready', icon: <RotateCcw className="w-4 h-4 text-slate-400" /> },
                                { name: 'Deploy Rollback', status: 'Paused', icon: <ChevronRight className="w-4 h-4 text-slate-600" /> }
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${i === 1 ? 'bg-white/10 text-white border border-white/5' : 'text-slate-400 hover:bg-white/5'}`}>
                                    {item.icon}
                                    <span className="flex-1 text-[13px]">{item.name}</span>
                                    <span className="text-[10px] opacity-60 font-mono">{item.status}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-white/5 rounded-xl p-4 border border-white/5">
                            <div className="flex items-center gap-2 mb-4">
                                <Activity className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Execution Stats</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-[11px] mb-1.5">
                                        <span className="text-slate-400 font-mono">Success Rate</span>
                                        <span className="text-white font-bold">98.5%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500" style={{ width: '98.5%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[11px] mb-1.5">
                                        <span className="text-slate-400 font-mono">Avg Duration</span>
                                        <span className="text-white font-bold">2.3s</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-white/40" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="col-span-9 bg-black/10">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-slate-200">recover-workers.playbook</span>
                                <div className="h-4 w-px bg-white/10" />
                                <span className="text-xs text-slate-500">Live editing</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] text-slate-600">Saved 1m ago</span>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-black" />
                                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-black" />
                                    <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center text-[8px]">+3</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="bg-black/60 rounded-xl border border-white/5 p-8 min-h-[400px] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none" />
                                <pre className="font-mono text-sm leading-relaxed text-blue-300">
                                    <span className="text-slate-500">{"// Axion Shared Live Script Engine v1.0"}</span><br />
                                    <span className="text-purple-400">const</span> s = <span className="text-blue-400">Runlyx</span>.Script.<span className="text-indigo-400">open</span>(<span className="text-green-400">"recover-workers"</span>);<br /><br />
                                    s.<span className="text-indigo-400">apply</span>(<span className="text-green-400">"restartWorkers()"</span>, {"{ "} <span className="text-orange-400">user</span>: <span className="text-green-400">"axiom_admin"</span> {"}"});<br />
                                    s.<span className="text-indigo-400">comment</span>(<span className="text-orange-400">2</span>, <span className="text-green-400">"Initialize cluster health check"</span>);<br />
                                    s.<span className="text-indigo-400">save</span>(<span className="text-green-400">"v1.2.1"</span>, <span className="text-green-400">"Deploy critical fix"</span>);
                                </pre>

                                {/* Floating Code Comment */}
                                <motion.div 
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl max-w-xs"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500" />
                                        <span className="text-[10px] font-bold text-white">SYSTEM_REPORTER</span>
                                    </div>
                                    <p className="text-[11px] text-slate-300 leading-normal">Optimization complete. Infrastructure is now behaving according to specified protocol. Performance boost: +42% throughput.</p>
                                </motion.div>
                            </div>

                            <div className="mt-8 grid grid-cols-4 gap-4">
                                {[
                                    { name: 'Run', sub: 'Execute', color: 'bg-white text-black' },
                                    { name: 'Test', sub: 'Dry Run', color: 'bg-white/5 text-white' },
                                    { name: 'Share', sub: 'Collaborate', color: 'bg-white/5 text-white' },
                                    { name: 'Export', sub: 'Download', color: 'bg-white/5 text-white' }
                                ].map((btn, i) => (
                                    <button key={i} className={`flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 transition-transform active:scale-95 ${btn.color}`}>
                                        <span className="text-sm font-bold uppercase tracking-tight">{btn.name}</span>
                                        <span className="text-[9px] opacity-60 uppercase">{btn.sub}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="overflow-hidden z-20 bg-white/5 w-full border-y border-white/10 py-10 relative backdrop-blur-xl">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-20 px-10">
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">custom software for startups</span>
              <Star className="text-blue-500 opacity-60" fill="currentColor" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>affordable build for small business</span>
              <Star className="text-blue-500 opacity-60" fill="currentColor" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">process automation software</span>
              <Star className="text-blue-500 opacity-60" fill="currentColor" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>scalable enterprise architecture</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">tailored crm development</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>legacy system modernization</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">secure cloud-native systems</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>bespoke internal tools</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">custom inventory management</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>api integration specialists</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">software maintenance services</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>expert node.js developers</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">enterprise portal development</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>rapid prototype application</span>
              <Star className="text-blue-500 opacity-60" size={40} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>

      {/* Problem Section (Bottleneck) */}
      <section className="py-32 lg:py-48 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-blue-600/10 text-blue-400 font-bold px-4 py-1 rounded-full border border-blue-500/20 mb-10 text-sm uppercase tracking-widest">
                The Bottleneck
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-10 leading-[0.9] lowercase">
                off-the-shelf <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>software is</span> <br />
                holding you back.
              </h2>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-500 uppercase tracking-[0.4em] mb-12">
                <Activity className="animate-pulse text-red-500" size={16} />
                [ PERFORMANCE_LIMIT_DETECTED ]
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/[0.03] border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none" />
              <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-300">
                As your business grows, generic software solutions become a bottleneck. You find your team managing scattered data across multiple platforms, dealing with limited API integrations, and paying exorbitant monthly fees for features you do not even use. Forced to adapt your unique workflows to match rigid software, your operational efficiency plummets, and scaling becomes a technical nightmare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 lg:py-48 bg-white/[0.02] border-y border-white/10 relative z-10 px-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-xs font-mono text-blue-500 mb-6 uppercase tracking-[0.5em] font-bold">[ SYSTEM_CAPABILITIES ]</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.8] mb-8">
              Precision <span className="text-zinc-600">Engineering.</span>
            </h3>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
               We do not just write code; we solve complex business problems. Software engineered for your entire digital ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                whileHover={{ y: -10 }}
                className="bg-white/[0.04] border border-white/10 p-10 md:p-14 rounded-[3rem] group hover:bg-white/[0.08] transition-all duration-500 cursor-default relative overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
                <div className="mb-10 w-20 h-20 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-blue-400" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-6 text-white leading-none">{service.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed font-light">{service.content}</p>
                <div className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 group-hover:gap-4 transition-all">
                    Initiate Protocol <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook Tabs */}
      <section className="py-32 lg:py-48 px-6 relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
            <div className="mb-20">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase">Automation playbooks</h2>
                <p className="mt-4 max-w-2xl text-xl text-white/50 font-light leading-relaxed">Build, test and run safe automations that turn alerts into fixes. Centralized operational intelligence for high-scale teams.</p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 items-stretch rounded-[3rem] border border-white/10 bg-white/[0.02] overflow-hidden backdrop-blur-3xl">
                <div className="p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="flex flex-wrap gap-2 mb-16">
                        {Object.keys(playbookData).map((key) => (
                            <button 
                                key={key}
                                onClick={() => setActivePlaybook(key as any)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activePlaybook === key ? 'bg-white text-black' : 'bg-white/5 text-slate-500 hover:text-white hover:bg-white/10'}`}
                            >
                                {playbookData[key as keyof typeof playbookData].title}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-xl">
                        <h3 className="mb-4 text-3xl font-bold tracking-tight text-white uppercase italic">{playbookData[activePlaybook].title}</h3>
                        <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-blue-500 font-bold">{playbookData[activePlaybook].tagline}</p>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-6">{playbookData[activePlaybook].p1}</p>
                        <p className="text-lg leading-relaxed text-white/70 font-light mb-10">{playbookData[activePlaybook].p2}</p>
                        
                        <a 
                          href="https://wa.me/923233260859"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-14 items-center gap-3 rounded-2xl bg-white px-8 text-sm font-bold text-black shadow-2xl transition hover:bg-slate-200 hover:scale-105 active:scale-95 uppercase tracking-tight"
                        >
                            Learn more
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                
                <div className="p-10 lg:p-20 flex flex-col justify-center bg-black/40 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-white/20"></span>
                                <span className="h-2 w-2 rounded-full bg-white/15"></span>
                                <span className="h-2 w-2 rounded-full bg-white/10"></span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                                {"// system_remediation_active"}
                            </div>
                        </div>
                        <pre className="whitespace-pre-wrap p-8 font-mono text-[13px] leading-relaxed text-blue-300">
                            {playbookData[activePlaybook].code}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <CountryMarquee />

      {/* Our Proven Step Development Process */}
      <section id="development-process" className="bg-[#000000] py-32 px-6 relative overflow-hidden border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-24">
                  <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                  >
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-6 block">
                          The Development Lifecycle
                      </span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                          Our Proven 5-Step <br /> 
                          <span className="text-zinc-600">Custom Software Process</span>
                      </h2>
                      <p className="mt-8 text-lg text-slate-400 leading-relaxed font-light">
                          Precision engineering requires a rigorous methodology. We follow an evidence-based development cycle to ensure your software is robust, secure, and ready to scale.
                      </p>
                  </motion.div>
              </div>

              <div className="relative max-w-5xl mx-auto">
                  {/* Spine Line */}
                  <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-[18px] md:-translate-x-1/2 rounded-full border border-white/10 bg-white/[0.02] shadow-inner z-0">
                      <div className="absolute inset-y-4 left-1/2 w-[2px] -translate-x-1/2 bg-white/5 overflow-hidden">
                          <motion.div 
                              animate={{ y: ["0%", "100%", "200%"] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                              className="absolute left-0 top-0 w-full h-[140px] bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_18px_rgba(59,130,246,0.65)]"
                          />
                      </div>
                  </div>

                  {/* Steps */}
                  <div className="relative z-10 pt-12 md:pt-0">
                    {[
                      {
                          title: "Strategic Discovery",
                          desc: "We analyze your business operations to find where custom software can drive the most ROI, identifying technical requirements and performance targets.",
                          icon: <Rocket className="w-5 h-5" />,
                          progress: 92,
                          label: "ROI_PROJECTION: 4.2x",
                          color: "blue"
                      },
                      {
                          title: "Architecture & UI",
                          desc: "We blueprint a scalable multi-tenant architecture and design a high-fidelity interface optimized for your specific operational workflows.",
                          icon: <Layers className="w-5 h-5" />,
                          progress: 88,
                          label: "ARCH_STABILITY: MAX",
                          color: "blue"
                      },
                      {
                          title: "Clean Engineering",
                          desc: "Our senior developers write modular, typed code adhering to clean architecture principles, ensuring high performance and ease of maintenance.",
                          icon: <Code2 className="w-5 h-5" />,
                          progress: 95,
                          label: "CODE_COVERAGE: 100%",
                          color: "blue"
                      },
                      {
                          title: "Security Audits & QA",
                          desc: "We subject the software to rigorous stress tests and end-to-end security audits to ensure zero vulnerabilities before deployment.",
                          icon: <ShieldCheck className="w-5 h-5" />,
                          progress: 100,
                          label: "SECURITY_SCORE: A+",
                          color: "blue"
                      },
                      {
                          title: "Launch & Optimization",
                          desc: "We manage the seamless deployment to your servers and provide continuous optimization based on real-world usage data and growing traffic.",
                          icon: <Zap className="w-5 h-5" />,
                          progress: 99,
                          label: "UPTIME: 99.99%",
                          color: "blue"
                      }
                    ].map((step, idx) => {
                      const isEven = idx % 2 === 1;
                      return (
                        <div key={idx} className="relative flex flex-col md:grid md:grid-cols-2 items-center gap-8 mb-24 last:mb-0">
                          {/* Content Side */}
                          <div className={`${isEven ? 'md:order-2 md:pl-14' : 'md:text-right md:pr-14'}`}>
                              <motion.h3 
                                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  className="text-2xl font-bold text-white tracking-tight uppercase"
                              >
                                  {step.title}
                              </motion.h3>
                              <p className={`mt-2 text-slate-400 max-w-md font-light ${!isEven ? 'md:ml-auto' : ''}`}>
                                  {step.desc}
                              </p>
                          </div>

                          {/* Visual Side */}
                          <div className={`${isEven ? 'md:order-1 md:pr-14' : 'md:pl-14'} w-full`}>
                              <motion.div 
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  className="rounded-[2rem] border border-white/10 p-6 flex items-center gap-4 bg-white/[0.02] backdrop-blur-md shadow-2xl"
                              >
                                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-black border border-white/10 text-blue-400 shadow-inner">
                                      {step.icon}
                                  </div>
                                  <div className="flex-1 overflow-hidden">
                                      <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                                          <motion.div 
                                              initial={{ width: 0 }}
                                              whileInView={{ width: `${step.progress}%` }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 1.5, ease: "easeOut" }}
                                              className="h-full bg-blue-500"
                                          />
                                      </div>
                                      <div className="flex justify-between items-center mt-3">
                                          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">{step.label}</div>
                                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                      </div>
                                  </div>
                              </motion.div>
                          </div>

                          {/* Central Node */}
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] hidden md:block">
                              <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center bg-black shadow-xl">
                                  <div className="w-3 h-3 rounded-full border border-black bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.65)]" />
                              </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
              </div>
          </div>
      </section>

      {/* See Our Work in Action */}
      <section className="py-32 px-6 border-b border-white/10 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
              See Our Work in Action: <br />
              <span className="text-zinc-600">Real Projects, Real Results</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-400 font-light leading-relaxed">
              We believe that exceptional work speaks for itself. Explore our recent case studies and project breakdowns below. See exactly how we transform complex challenges into elegant digital solutions.
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
                className="group flex flex-col items-center text-center bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all shadow-xl p-4"
              >
                <div className="aspect-video relative w-full rounded-2xl overflow-hidden bg-black mb-6 border border-white/5">
                  <iframe 
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-4 pb-4">
                  <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{video.title}</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Cards */}
      <section className="py-32 lg:py-48 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
             <div>
                <h2 className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-[0.5em] font-bold">[ ENGINEERING_RESOURCES ]</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.8]">
                   the stack <br />
                   <span className="text-zinc-600">we command.</span>
                </h3>
             </div>
             <div className="md:text-right">
                <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] max-w-[300px] mb-4">Optimized for horizontal scaling and sub-second latency targets.</p>
                <div className="flex gap-2 justify-end">
                    {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />)}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { category: "Backend Mastery", items: ["Node.js", "Python (FastAPI)", "Java"], icon: <Server /> },
              { category: "Frontend Core", items: ["React.js", "Next.js", "TypeScript"], icon: <Layout /> },
              { category: "Data Storage", items: ["PostgreSQL", "MongoDB", "Redis"], icon: <Database /> },
              { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Kubernetes"], icon: <Layers /> }
            ].map((stack, idx) => (
              <div key={idx} className="group relative h-[400px] perspective-1000 cursor-pointer">
                <div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between backface-hidden backdrop-blur-xl">
                    <div className="text-blue-500/60 font-medium">
                      {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-3">Resource Type // {idx + 1}</div>
                      <h4 className="text-2xl font-bold text-white uppercase tracking-tight leading-none">{stack.category}</h4>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-blue-600 border border-blue-400/30 rounded-[2.5rem] p-10 flex flex-col justify-center rotate-y-180 backface-hidden shadow-2xl">
                    <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-b border-white/20 pb-4 text-white uppercase">Capability Set</h4>
                    <ul className="space-y-4">
                      {stack.items.map(item => (
                        <li key={item} className="flex items-center gap-4 text-white font-bold uppercase tracking-tight text-lg">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                           <span>{item}</span>
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

      {/* Final CTA Strip */}
      <section className="py-48 relative border-t border-white/10 overflow-hidden text-center bg-black">
        <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-full bg-blue-600 blur-[150px] pointer-events-none z-0" 
        />
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <h2 className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter mb-12 uppercase leading-[0.8] italic">
            architect <br />
            <span className="text-zinc-700">Your advantage.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wrapper" 
              style={{ '--dot-size': '10px', '--line-weight': '1.5px', '--animation-speed': '0.4s', '--dot-color': '#fff', '--line-color': '#fff', '--grid-color': '#fff4' } as any}
            >
                <div className="line horizontal top"></div>
                <div className="line vertical right"></div>
                <div className="line horizontal bottom"></div>
                <div className="line vertical left"></div>
                <div className="dot top left"></div>
                <div className="dot top right"></div>
                <div className="dot bottom right"></div>
                <div className="dot bottom left"></div>
                <div className="btn px-12 py-6 text-xl">
                    <span className="btn-text text-white font-black uppercase tracking-tight">Initiate Audit Protocol</span>
                </div>
            </a>

            <div className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-[280px] text-left border-l-2 border-white/10 pl-8 leading-relaxed h-16 flex items-center">
               NEXT SLOT: JULY 2026 // DISCOVERY TIME: 14 DAYS
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-32 lg:py-48 bg-white/[0.02] border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24 space-y-6">
             <div className="inline-block px-10 py-2 bg-blue-600/10 text-blue-400 font-bold uppercase tracking-[0.4em] rounded-full border border-blue-500/20 text-[10px]">Operational Inquiries</div>
             <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.85] italic">FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="group bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-3xl hover:border-white/20 transition-all">
                <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="flex justify-between items-center w-full p-8 md:p-10 cursor-pointer select-none text-left"
                >
                  <span className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">{faq.q}</span>
                  <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 bg-white text-black' : 'text-white'}`}>
                    <Plus className="w-6 h-6" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="p-10 pt-0 border-t border-white/5"
                    >
                        <p className="text-xl font-light leading-relaxed text-slate-300 pt-8 pb-4">
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
      <section className="py-24 bg-black border-t border-white/5 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-mono text-slate-500 mb-12 uppercase tracking-[0.4em] font-bold">[ RELATED_SYSTEMS ]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Web Development", path: "/web-development", icon: <Globe className="w-5 h-5" /> },
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
                <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftwarePage;
