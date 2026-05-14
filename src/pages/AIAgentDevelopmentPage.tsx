"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Settings, 
  ArrowRight,
  Plus,
  Cpu,
  Database,
  Brain,
  Code,
  Sparkles,
  Terminal,
  Download,
  FileText,
  MousePointer2,
  Lock,
  Globe,
  Star,
  Activity,
  ArrowUpRight,
  Monitor,
  Smartphone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';

const AIAgentDevelopmentPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const solutions = [
    {
      id: "01",
      title: "24/7 Autonomous Customer Support Agents",
      content: "Provide instant, highly accurate support to your clients in any language. Our support agents ingest your entire knowledge base and past ticket history to resolve complex queries, process refunds, and escalate only the highly sensitive issues to your human team.",
      icon: <MessageSquare className="w-8 h-8" />,
      tag: "SUPPORT"
    },
    {
      id: "02",
      title: "Internal Data Analysis & Reporting Agents",
      content: "Stop digging through spreadsheets. We build internal AI assistants for your leadership and marketing teams. Simply ask your agent, \"What were our top-selling products in Q3?\" and it will instantly query your database, analyze the trends, and generate a visual report.",
      icon: <BarChart3 className="w-8 h-8" />,
      tag: "ANALYTICS"
    },
    {
      id: "03",
      title: "Automated Lead Generation & Qualification Agents",
      content: "Never let a hot lead go cold. Our AI agents can engage with website visitors in real-time, ask qualifying questions based on your specific criteria, capture contact information, and automatically book meetings directly into your sales team's calendar.",
      icon: <Users className="w-8 h-8" />,
      tag: "SALES"
    },
    {
      id: "04",
      title: "Specialized Workflow Automations",
      content: "Whether you are in real estate (automating contract drafting), healthcare (secure patient onboarding), or e-commerce (dynamic inventory management), we build specialized agents tailored to the unique regulatory and operational needs of your industry.",
      icon: <Settings className="w-8 h-8" />,
      tag: "WORKFLOW"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Initialize Protocol",
      label: "STEP 1 of 4",
      desc: "Securely define your business goals, ingest knowledge bases, and configure agent permissions.",
      code: [
        { text: "$ morpheye init-agent --domain customer_service", type: "cmd" },
        { text: "✓ Found knowledge_base/docs/", type: "success" },
        { text: "✓ Vector database initialized", type: "success" },
        { text: "→ Enter system prompt: [Analyzing...]", type: "sys" }
      ]
    },
    {
      num: "02",
      title: "Logic Training",
      label: "STEP 2 of 4",
      desc: "Design the reasoning chains and tool-calling capabilities that allow the agent to solve tasks independently.",
      code: [
        { text: "$ morpheye train --reasoning logical --tools zapier,crm", type: "cmd" },
        { text: "✓ Tool connections verified: 124 available", type: "success" },
        { text: "✓ Reasoning chain generated: [E-E-A-T enabled]", type: "success" },
        { text: "! Warning: Conflict detected in Step 4. Resolving...", type: "warn" }
      ]
    },
    {
      num: "03",
      title: "Autonomous Deployment",
      label: "STEP 3 of 4",
      desc: "Launch your agents into production with full API connectivity and real-time monitoring.",
      code: [
        { text: "$ morpheye deploy --target cloud_node_01", type: "cmd" },
        { text: "✓ Container build complete", type: "success" },
        { text: "[LIVE] Agent online @ wss://api.morpheye.sh", type: "success" },
        { text: "$ monitoring active connections...", type: "sys" }
      ]
    },
    {
      num: "04",
      title: "Monitor & Scaling",
      label: "STEP 4 of 4",
      desc: "Review logs, optimize performance, and scale your agent workforce as your business grows.",
      code: [
        { text: "$ morpheye dashboard --live", type: "cmd" },
        { text: "Avg Latency: 12ms", type: "success" },
        { text: "Success Rate: 99.8%", type: "success" },
        { text: "Total Tokens: 1.2M [OK]", type: "sys" }
      ]
    }
  ];

  const faqData = [
    {
      q: "What is the difference between a chatbot and an AI Agent?",
      a: "A chatbot follows rigid scripts. An AI Agent uses an LLM (like GPT-4) to understand intent, break down complex requests, and autonomously use tools to execute tasks."
    },
    {
      q: "Will the AI expose my company's confidential data?",
      a: "No. We use Retrieval-Augmented Generation (RAG) and private vector databases. Your proprietary data is siloed and explicitly blocked from training public AI models."
    },
    {
       q: "How does the AI agent learn from past customer interactions?",
       a: "By ingesting your historical ticket logs and knowledge bases, the AI learns your specific brand voice and historical problem-solving methods."
    },
    {
      q: "Is there a human-in-the-loop fallback?",
      a: "Yes. If an issue is too complex or sensitive, the AI seamlessly escalates the chat and full context to a human representative."
    },
    {
      q: "Are there ongoing costs to run an AI agent?",
      a: "Yes, utilizing LLMs requires API tokens (like OpenAI usage costs) and server hosting. However, these costs are a fraction of what you would pay for a manual human workforce."
    }
  ];

  return (
    <div className="bg-black text-[#E8E8ED] font-sans antialiased overflow-x-hidden min-h-screen relative selection:bg-[#00E5FF]/20 selection:text-white">
      <Helmet>
        <title>AI Agent Development | Autonomous Workflow Automation ABUQITMIRLABS</title>
        <meta name="description" content="ABUQITMIRLABS .TECH engineers autonomous AI agents and LLM-powered workflow automations. Specialized in RAG implementation, intelligent chatbots, and custom AI personas for enterprise efficiency." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/ai-agent-development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Agent Development | ABUQITMIRLABS" />
        <meta property="og:description" content="ABUQITMIRLABS .TECH engineers autonomous AI agents and LLM-powered workflow automations. Specialized in RAG implementation, chatbots, and custom AI personas." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/ai-agent-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Agent Development | ABUQITMIRLABS" />
        <meta name="twitter:description" content="ABUQITMIRLABS .TECH engineers autonomous AI agents and LLM-powered workflow automations. Specialized in RAG implementation, chatbots, and custom AI personas." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Agent Development",
            "description": "We build custom Large Language Model (LLM) agents that understand your proprietary data, execute complex tasks, and automate workflows 24/7.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "AI Engineering",
            "areaServed": ["US", "UK", "CA", "PK", "PL", "AE", "SA"]
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

        {/* HowTo Schema (AI Development Process) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Our AI Agent Development Process",
            "description": "Our rigorous 5-step methodology ensures every AI agent we build is smart, safe, and perfectly aligned with your business logic.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Knowledge Audit",
                "text": "Analyze your documentation and databases to build a high-fidelity Knowledge Base."
              },
              {
                "@type": "HowToStep",
                "name": "Model Selection & RAG",
                "text": "Select the optimal LLM and implement RAG to ensure zero hallucinations."
              },
              {
                "@type": "HowToStep",
                "name": "Agent Logic Design",
                "text": "Define precise persona constraints and Tool-Calling capabilities."
              },
              {
                "@type": "HowToStep",
                "name": "Adversarial Stress Testing",
                "text": "Attempt to break the agent with injection attacks to ensure safe operational bounds."
              },
              {
                "@type": "HowToStep",
                "name": "Seamless Integration",
                "text": "Deploy the agent to your primary channels like Slack, Web, and CRM."
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
                "name": "AI Agent Development",
                "item": "https://abuqitmirlabs.tech/ai-agent-development"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center pt-24 md:pt-32 pb-20 text-center px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#00E5FF]/5 blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#0099AA]/5 blur-[100px] animate-pulse pointer-events-none delay-1000" />
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="w-[400px] h-[400px] rounded-full border border-[#00E5FF]/10 animate-[spin_12s_linear_infinite] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#00E5FF] rounded-full shadow-[0_0_10px_#00E5FF]"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-dashed border-[#00E5FF]/5 animate-[spin_20s_linear_infinite_reverse]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00E5FF]/60 rounded-full"></div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 bg-[#00E5FF]/5 border border-[#00E5FF]/20 px-4 py-2 text-[10px] uppercase font-mono tracking-[0.2em] text-[#00E5FF] mb-10">
            <Activity size={14} className="animate-pulse" />
            Agentic AI Protocol Active
          </div>
          
          <h1 className="text-4xl md:text-[4rem] lg:text-[5rem] font-bold tracking-tighter leading-[0.95] text-white uppercase mb-10">
             AI Agent Development <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80F2FF] via-[#00E5FF] to-[#0099AA]">for Workflow Automation.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-mono text-zinc-500 max-w-4xl mx-auto mb-12 leading-relaxed">
             Transform your business with autonomous AI. We build custom Large Language Model (LLM) agents that understand your proprietary data, execute complex tasks, and automate workflows 24/7—dramatically reducing operational costs and human error.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
             <a 
               href="https://wa.me/923233260859"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#00E5FF] text-black font-mono font-bold text-sm px-10 py-6 flex flex-col items-center gap-2 hover:bg-[#80F2FF] transition-all transform hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(0,229,255,0.4)] uppercase"
             >
                <ArrowRight size={20} />
                Request an AI Consultation
             </a>
             <button 
               onClick={() => {
                 const el = document.getElementById('video-portfolio');
                 if (el) el.scrollIntoView({ behavior: 'smooth' });
                 else window.location.href = '/#video-portfolio';
               }}
               className="border border-[#00E5FF]/30 text-white font-mono text-sm px-10 py-6 flex flex-col items-center gap-2 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all transform hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(0,229,255,0.15)] uppercase"
             >
                <Activity size={20} />
                See AI Agents in Action
             </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12">
             <div className="flex items-center gap-3">
                <span className="text-xl font-mono text-[#00E5FF]">12ms</span>
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Avg Latency</span>
             </div>
             <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-[#00E5FF]/20 to-transparent"></div>
             <div className="flex items-center gap-3">
                <span className="text-xl font-mono text-[#00E5FF]">99.8%</span>
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Strat Win Rate</span>
             </div>
             <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-[#00E5FF]/20 to-transparent"></div>
             <div className="flex items-center gap-3">
                <span className="text-xl font-mono text-[#00E5FF]">24/7</span>
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">Node Uptime</span>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Grid Marquee */}
      <div className="bg-[#060606] border-y border-[#00E5FF]/10 py-10 relative overflow-hidden">
         <div className="flex whitespace-nowrap w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center px-10">
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">custom ai agent development</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest">llm-powered automation</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">rag implementation experts</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest">specialized ai personas</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">secure enterprise ai</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest">ai workflow integration</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">autonomous ai experts</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">langchain dev experts</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest">custom gpt implementation</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">ai sales assistants</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest">vector database setup</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">rag architecture build</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest">generative ai consultation</span>
                <Star className="text-cyan-500/30" size={16} />
                <span className="text-zinc-800 font-mono text-xl uppercase tracking-widest text-[#00E5FF]/20">automated lead qualification</span>
                <Star className="text-cyan-500/30" size={16} />
              </div>
            ))}
         </div>
      </div>

      {/* Problem & Solution Sections */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-8">THE CHALLENGE</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-10 leading-tight">
                The Problem: <br />
                <span className="text-zinc-600">The High Cost of Manual Repetition</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                Your most valuable resource is human intellect, yet your team is likely spending countless hours on repetitive, low-value tasks. Traditional customer support is expensive to scale, manual data entry leads to costly errors, and standard "chatbots" frustrate your clients because they cannot understand context or stray from rigid scripts. Scaling your operations currently means linearly increasing your payroll, eating directly into your profit margins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-[#00E5FF]/20 bg-[#00E5FF]/5 relative"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[length:30px_30px] opacity-20 pointer-events-none"></div>
              <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-8 underline decoration-zinc-800 underline-offset-8">THE EVOLUTION</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-10 leading-tight">
                The Solution: <br />
                <span className="text-[#00E5FF]">Autonomous Custom LLM Agents</span>
              </h2>
              <p className="text-lg text-zinc-300 font-light leading-relaxed">
                Welcome to the era of Agentic AI. Unlike basic chatbots that just "talk," AI Agents are capable of "doing." We develop highly sophisticated, autonomous AI agents using frameworks like LangChain and Semantic Kernel. By securely connecting these agents to your internal databases, CRMs, and APIs, they can reason through problems, fetch real-time data, draft responses, and execute multi-step workflows entirely on their own.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Capabilities */}
      <section className="py-24 md:py-48 bg-[#060606] relative z-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
                <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-8">SERVICE STACK</span>
                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">Custom AI Agent <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80F2FF] to-[#0099AA]">Solutions We Build.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {solutions.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, borderColor: "rgba(0, 229, 255, 0.4)" }}
                    className="group bg-black border border-[#00E5FF]/10 p-8 relative overflow-hidden transition-all duration-500 flex flex-col items-center text-center"
                  >
                     <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none"></div>
                     <div className="relative z-10 flex flex-col items-center">
                        <div className="flex items-center justify-between mb-10 w-full">
                           <div className="text-[#00E5FF]/40 group-hover:text-[#00E5FF] transition-colors">{item.icon}</div>
                           <span className="text-[10px] font-mono font-bold px-2 py-1 bg-[#00E5FF]/5 border border-[#00E5FF]/20 text-[#00E5FF]">{item.tag}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6 leading-tight">{item.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8 group-hover:text-zinc-300 transition-colors">{item.content}</p>
                        <div className="flex items-center gap-2 text-[#00E5FF]/40 text-[9px] font-mono font-bold uppercase tracking-widest group-hover:text-[#00E5FF] transition-colors">
                           Initialize Instance <ArrowRight size={12} />
                        </div>
                     </div>
                     {/* Corner accetns */}
                     <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#00E5FF]/50"></div>
                     <div className="absolute top-0 left-0 w-[1px] h-3 bg-[#00E5FF]/50"></div>
                     <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#00E5FF]/50"></div>
                     <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-[#00E5FF]/50"></div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Secure RAG Architecture Section (Fixed, no sticky scroll) */}
      <section className="relative py-24 bg-black border-t border-white/5">
         <div className="flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,229,255,0.05)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,153,170,0.05)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               {/* Left Controls */}
               <div className="flex flex-col gap-12">
                  <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-[0.4em]">SECURE RAG ARCHITECTURE</span>
                  <div className="relative">
                     <div className="flex flex-col gap-6">
                        <div className="text-[8rem] md:text-[12rem] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">
                           01
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                           How We Build Secure AI Agents
                        </h3>
                        <p className="text-lg md:text-xl text-zinc-500 font-light max-w-sm">
                           Security and accuracy are our top priorities. We utilize Retrieval-Augmented Generation (RAG). This means the AI does not just guess answers based on its public training data. Instead, it securely searches your private company data first, reads it, and formulates an answer based strictly on your internal facts.
                        </p>
                        <div className="space-y-4 pt-6">
                           <div className="flex items-start gap-4">
                              <ShieldCheck size={24} className="text-[#00E5FF] shrink-0" />
                              <div>
                                 <div className="text-white font-bold uppercase text-xs tracking-widest mb-1">Zero Hallucinations</div>
                                 <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Fact-checked outputs grounded in your data.</p>
                              </div>
                           </div>
                           <div className="flex items-start gap-4">
                              <Lock size={24} className="text-[#00E5FF] shrink-0" />
                              <div>
                                 <div className="text-white font-bold uppercase text-xs tracking-widest mb-1">Data Privacy</div>
                                 <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Your proprietary data is never used to train public models.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Terminal Window */}
               <div className="relative aspect-[4/3] w-full">
                  <div className="absolute inset-0 bg-[#00E5FF]/10 blur-[100px] opacity-30 pointer-events-none" />
                  <div className="relative bg-[#050505] border border-[#00E5FF]/30 h-full p-8 shadow-2xl overflow-hidden group">
                     {/* Window UI */}
                     <div className="flex items-center justify-between border-b border-[#00E5FF]/10 pb-6 mb-8">
                        <div className="flex gap-3">
                           <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">morpheye@node-01: ~</div>
                     </div>

                     <div className="font-mono text-sm space-y-6">
                        <div className="space-y-4">
                           {steps[0].code.map((line, lidx) => (
                              <div 
                                 key={lidx} 
                                 className={`flex gap-4 ${line.type === 'cmd' ? 'text-[#00E5FF]' : line.type === 'success' ? 'text-green-400' : line.type === 'warn' ? 'text-yellow-400' : 'text-zinc-500'}`}
                              >
                                 <span className="opacity-30 select-none">{lidx + 1}</span>
                                 <span>{line.text}</span>
                              </div>
                           ))}
                           <div className="flex gap-4 text-[#00E5FF]">
                              <span className="opacity-30 select-none">{steps[0].code.length + 1}</span>
                              <span className="animate-pulse">_</span>
                           </div>
                        </div>
                     </div>

                     {/* Shimmer effect */}
                     <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#00E5FF]/5 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite]"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Tech Stack Visualized */}
      <section className="py-24 bg-[#060606] border-t border-[#00E5FF]/10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
               <div>
                  <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-6">INTEGRATION LAYER</span>
                  <h2 className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.8]">The AI <br /><span className="text-zinc-800">Tech Stack.</span></h2>
               </div>
               <p className="max-w-xs text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] leading-relaxed">Using industrial-grade frameworks to ensure pixel-perfect logic scalability and sub-second execution.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "LLM Providers", items: ["OpenAI (GPT-4)", "Anthropic (Claude 3)", "Google (Gemini)"], icon: <Brain /> },
                  { title: "Agentic Frameworks", items: ["LangChain", "LlamaIndex", "AutoGen"], icon: <Bot /> },
                  { title: "Vector Databases", items: ["Pinecone", "Weaviate", "Milvus"], icon: <Database /> },
                  { title: "Backend Integration", items: ["Python", "Node.js", "REST APIs"], icon: <Code /> }
               ].map((stack, i) => (
                  <div key={i} className="group p-10 bg-black border border-[#00E5FF]/5 hover:border-[#00E5FF]/30 transition-all duration-500 relative flex flex-col items-center text-center">
                     <div className="mb-10 text-[#00E5FF]/40 group-hover:text-[#00E5FF] transition-colors">
                        {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                     </div>
                     <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-8 pb-4 border-b border-white/5">{stack.title}</h4>
                     <ul className="space-y-4">
                        {stack.items.map((item, j) => (
                           <li key={j} className="text-zinc-500 font-mono text-[11px] flex items-center gap-3 group-hover:text-zinc-300 transition-colors">
                              <div className="w-1 h-1 bg-[#00E5FF]/40 rounded-full" />
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

      {/* Our Proven Step Development Process */}
      <section id="development-process" className="py-32 bg-[#000] px-6 relative overflow-hidden border-t border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-24">
                  <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                  >
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500 mb-6 block">
                          AI Intelligence Lifecycle
                      </span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
                          Our Proven 5-Step <br /> 
                          <span className="text-zinc-600">AI Development Process</span>
                      </h2>
                      <p className="mt-8 text-lg text-slate-400 leading-relaxed font-light">
                          Our rigorous methodology ensures every AI agent we build is not just smart, but safe, reliable, and perfectly aligned with your business logic.
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
                              className="absolute left-0 top-0 w-full h-[140px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent shadow-[0_0_18px_rgba(6,182,212,0.65)]"
                          />
                      </div>
                  </div>

                  {/* Steps */}
                  <div className="relative z-10 pt-12 md:pt-0">
                    {[
                      {
                        title: "Knowledge Audit",
                        desc: "We analyze your documentation, spreadsheets, and databases to build a high-fidelity 'Knowledge Base' for your AI to master.",
                        icon: <Database className="w-5 h-5" />,
                        progress: 94,
                        label: "KNOWLEDGE_MAP: COMPLETE"
                      },
                      {
                        title: "Model Selection & RAG",
                        desc: "We select the optimal LLM and implement Retrieval-Augmented Generation to ensure your agent never halluncinates.",
                        icon: <Brain className="w-5 h-5" />,
                        progress: 91,
                        label: "HALLUCINATION_RATE: <0.01%"
                      },
                      {
                        title: "Agent Logic Design",
                        desc: "We define precise persona constraints and 'Tool-Calling' capabilities so your agent can execute tasks like a human expert.",
                        icon: <Cpu className="w-5 h-5" />,
                        progress: 98,
                        label: "LOGIC_PRECISION: MAX"
                      },
                      {
                        title: "Adversarial Stress Testing",
                        desc: "We attempt to break the agent with injection attacks and edge cases to ensure it always remains within its safe operational bounds.",
                        icon: <Lock className="w-5 h-5" />,
                        progress: 100,
                        label: "GUARDRAIL_SCORE: A+"
                      },
                      {
                        title: "Seamless Integration",
                        desc: "We deploy the agent to your primary communication channels (Slack, Web, CRM) and provide continuous fine-tuning.",
                        icon: <Globe className="w-5 h-5" />,
                        progress: 96,
                        label: "DEPLOYMENT_SYNC: LIVE"
                      }
                    ].map((step, idx) => {
                      const isEven = idx % 2 === 1;
                      return (
                        <div key={idx} className="relative flex flex-col md:grid md:grid-cols-2 items-center gap-8 mb-24 last:mb-0">
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

                          <div className={`${isEven ? 'md:order-1 md:pr-14' : 'md:pl-14'} w-full`}>
                              <motion.div 
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  className="rounded-[2rem] border border-white/10 p-6 flex items-center gap-4 bg-white/[0.02] backdrop-blur-md shadow-2xl"
                              >
                                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-black border border-white/10 text-cyan-400 shadow-inner">
                                      {step.icon}
                                  </div>
                                  <div className="flex-1 overflow-hidden">
                                      <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                                          <motion.div 
                                              initial={{ width: 0 }}
                                              whileInView={{ width: `${step.progress}%` }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 1.5, ease: "easeOut" }}
                                              className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                          />
                                      </div>
                                      <div className="flex justify-between items-center mt-3">
                                          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">{step.label}</div>
                                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                      </div>
                                  </div>
                              </motion.div>
                          </div>

                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] hidden md:block">
                              <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center bg-black shadow-xl">
                                  <div className="w-3 h-3 rounded-full border border-black bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.65)]" />
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
      <section className="py-32 px-6 border-t border-white/10 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
              See Our Work in Action: <br />
              <span className="text-zinc-600">Real Projects, Real Results</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-400 font-light leading-relaxed">
              Experience how our intelligent agents handle complex business workflows and deliver sub-millisecond reasoning.
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
                className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all shadow-xl p-4"
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden bg-black mb-6 border border-white/5">
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

      {/* CTA Final */}
      <section className="py-32 md:py-64 bg-[#050505] relative overflow-hidden text-center">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />
         
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter uppercase leading-[0.8] mb-16">
               Automate your <br />
               <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>competitive Edge.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
               <a 
                 href="https://wa.me/923233260859"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-[#00E5FF] text-black font-mono font-bold text-xl px-16 py-8 hover:bg-[#80F2FF] transition-all transform hover:scale-105 flex items-center justify-center uppercase tracking-tighter"
               >
                  INITIALIZE CONSULTATION
               </a>
               <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-[280px] text-left border-l-2 border-white/10 pl-8 leading-relaxed flex items-center h-16">
                  NEXT AGENT SLOT: SEPT 2026 / AVG. DEPLOYMENT: 21-45 DAYS
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-48 bg-black border-t border-[#00E5FF]/10">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-[#00E5FF] font-mono text-xs uppercase tracking-[0.5em] block mb-8">FAQ</span>
               <h3 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter">COMMON INQUIRIES</h3>
            </div>

            <div className="space-y-4">
               {faqData.map((faq, idx) => (
                  <div 
                     key={idx} 
                     className="bg-[#050505] border border-[#00E5FF]/10 p-8 cursor-pointer hover:border-[#00E5FF]/40 transition-colors"
                     onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                     <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white uppercase tracking-tight pr-6">{faq.q}</span>
                        <div className={`transition-transform duration-500 ${activeFaq === idx ? 'rotate-[135deg] text-[#00E5FF]' : 'text-zinc-600'}`}>
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
                              <p className="pt-8 text-zinc-500 font-light leading-relaxed border-t border-white/5 mt-8">
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
          <h3 className="text-xs font-mono text-zinc-600 mb-12 uppercase tracking-[0.4em] font-bold">[ RELATED_SYSTEMS ]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Software", path: "/custom-software", icon: <Settings className="w-5 h-5" /> },
              { title: "Web Development", path: "/web-development", icon: <Globe className="w-5 h-5" /> },
              { title: "Mobile Apps", path: "/mobile-app-development", icon: <Smartphone className="w-5 h-5" /> },
              { title: "SEO Strategy", path: "/seo-mastery", icon: <Star className="w-5 h-5" /> }
            ].map((link, i) => (
              <Link 
                key={i} 
                to={link.path} 
                className="group flex items-center justify-between p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-[#00E5FF]/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#00E5FF] bg-[#00E5FF]/10 p-3 rounded-lg group-hover:bg-[#00E5FF] group-hover:text-black transition-all">
                    {link.icon}
                  </div>
                  <span className="font-bold uppercase tracking-tight text-white">{link.title}</span>
                </div>
                <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgentDevelopmentPage;
