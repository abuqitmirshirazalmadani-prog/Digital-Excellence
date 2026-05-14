"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  Code2, 
  Cpu, 
  Target, 
  Zap, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MousePointer2,
  Terminal,
  Layers,
  Search,
  PenTool,
  Smartphone,
  Layout,
  Palette
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutPage = () => {
  const stats = [
    { label: "Years of learning & building", value: "6+", icon: <Zap className="w-5 h-5 text-zinc-500" /> },
    { label: "Industry certifications earned", value: "9", icon: <Award className="w-5 h-5 text-zinc-500" /> },
    { label: "End-to-end project ownership", value: "100%", icon: <ShieldCheck className="w-5 h-5 text-zinc-500" /> },
  ];

  const certifications = [
    { title: "Digital Marketing", issuer: "IDM Pakistan", year: "2021", icon: <Globe className="w-5 h-5" /> },
    { title: "Web Development", issuer: "DigiSkills.pk", year: "2021", icon: <Code2 className="w-5 h-5" /> },
    { title: "Mobile App Development", issuer: "DigiSkills.pk", year: "2022", icon: <Smartphone className="w-5 h-5" /> },
    { title: "UI/UX Design", issuer: "DigiSkills.pk", year: "2022", icon: <Layout className="w-5 h-5" /> },
    { title: "SEO & Local SEO", issuer: "DigiSkills.pk", year: "2023", icon: <Search className="w-5 h-5" /> },
    { title: "Graphics Design", issuer: "DIP", year: "2023", icon: <Palette className="w-5 h-5" /> },
    { title: "Content Writing", issuer: "DigiSkills.pk", year: "2023", icon: <PenTool className="w-5 h-5" /> },
    { title: "Custom Software Development", issuer: "DigiSkills.pk", year: "2024", icon: <Layers className="w-5 h-5" /> },
    { title: "Technology Solutions & AI", issuer: "DigiSkills.pk", year: "2025", icon: <Cpu className="w-5 h-5" /> },
  ];

  const pillars = [
    { title: "Performance", desc: "Every website I deliver is fast by design, ensuring no potential lead is lost to slow load times.", icon: <Zap /> },
    { title: "Purpose", desc: "I focus strictly on your business goals, building tools that solve real-world problems, not just templates.", icon: <Target /> },
    { title: "Precision", desc: "Crafted with attention to detail that sets it apart from template-built competition.", icon: <MousePointer2 /> },
  ];

  return (
    <div className="bg-[#050505] text-zinc-400 font-sans antialiased overflow-x-hidden min-h-screen relative selection:bg-white/10 selection:text-white">
      <Helmet>
        <title>About Shiraz Almadani | AI Mobile App & SaaS Expert ABUQITMIRLABS</title>
        <meta name="description" content="Discover the vision behind ABUQITMIRLABS .TECH. We are a global software engineering lab dedicated to building high-performance digital ecosystems, AI-driven architectures, and scalable business solutions." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/about" />
        
        {/* OG Tags */}
        <meta property="og:title" content="About Shiraz Almadani | ABUQITMIRLABS" />
        <meta property="og:description" content="Discover the vision behind ABUQITMIRLABS .TECH. Specialized in high-performance digital ecosystems and AI-driven architectures." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Shiraz Almadani | ABUQITMIRLABS" />
        <meta name="twitter:description" content="Discover the vision behind ABUQITMIRLABS .TECH. Specialized in high-performance digital ecosystems and AI-driven architectures." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 md:pt-40 pb-20 overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-12 mb-12">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-500 mb-8"
             >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                Available for worldwide deployment
             </motion.div>
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-[8rem] font-bold text-white tracking-tighter uppercase leading-[0.85] mb-8"
             >
                Full Stack <br />
                <span className="text-zinc-600">Developer</span> & <br />
                Custom Software Specialist.
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl font-light text-zinc-500 uppercase tracking-widest max-w-4xl"
             >
                Based in Pakistan <span className="text-white/20 mx-4">/</span> Serving clients across the USA, UK & worldwide
             </motion.p>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl group hover:border-white/20 transition-all"
                  >
                      <div className="mb-4">{stat.icon}</div>
                      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium">{stat.label}</div>
                  </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-24 md:py-48 bg-black border-y border-white/5 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 mx-auto lg:mx-0 p-2">
                    <img 
                        src="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" 
                        alt="futuristic professional portrait of Shiraz Almadani - Lead Architect at ABUQITMIRLABS.TECH" 
                        className="w-full h-full object-cover rounded-[2.8rem] transition-all duration-1000 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
                <div className="space-y-6">
                    <span className="text-xs font-bold text-zinc-600 uppercase tracking-[0.4em] block">WHO I AM</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                        Engineer. <br />
                        <span className="text-zinc-600 italic">Thinker.</span>
                    </h2>
                </div>
 
                <div className="space-y-8 max-w-xl">
                    <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed italic border-l border-white/20 pl-8">
                       "At ABUQITMIRLABS .TECH, we don't just build websites; we engineer complete digital experiences."
                    </p>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                        ABUQITMIRLABS .TECH is a premier Full Stack Web Development and Custom Software specialist firm with over a decade of continuous learning and hands-on development. From the first wireframe to live deployment and beyond, we handle it all.
                    </p>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                        With an M.B.A. in Commerce from Karachi University and nine industry certifications, I combine strategic business thinking with deep technical expertise to deliver solutions that genuinely move the needle for clients.
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Education */}
              <div className="lg:col-span-4">
                  <div className="sticky top-24">
                      <span className="text-xs font-bold text-zinc-600 uppercase tracking-[0.4em] block mb-8">ACADEMIC FOUNDATION</span>
                      <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-12">Education</h3>
                      <div className="p-10 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-md">
                          <GraduationCap className="text-white mb-6" size={40} strokeWidth={1} />
                          <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">M.B.A. — Commerce</h4>
                          <p className="text-zinc-500 font-light mb-8">University of Karachi, Pakistan</p>
                          <div className="text-xs font-bold text-white/40 uppercase tracking-widest border-t border-white/5 pt-6 inline-block">Graduated 2010</div>
                      </div>
                  </div>
              </div>

              {/* Certifications Grid */}
              <div className="lg:col-span-8">
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-[0.4em] block mb-8">INDUSTRY COMMAND</span>
                  <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-12">Professional Certifications</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {certifications.map((cert, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-3xl flex items-center justify-between group hover:border-white/20 transition-all"
                          >
                              <div className="flex items-center gap-6">
                                  <div className="w-12 h-12 rounded-xl bg-black border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                                      {cert.icon}
                                  </div>
                                  <div>
                                      <h5 className="text-white font-bold uppercase tracking-tight text-sm mb-1">{cert.title}</h5>
                                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{cert.issuer}</p>
                                  </div>
                              </div>
                              <div className="text-[10px] font-mono text-zinc-600 group-hover:text-white transition-colors">
                                  {cert.year}
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* The Pillars (Bento) */}
      <section className="py-24 md:py-48 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
                <span className="text-xs font-bold text-zinc-600 uppercase tracking-[0.4em] block mb-8">PHILOSOPHY</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">My Three <span className="text-zinc-700">Pillars.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white mb-10 group-hover:bg-white group-hover:text-black transition-all">
                            {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1 })}
                        </div>
                        <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-6">{pillar.title}</h3>
                        <p className="text-lg text-zinc-500 font-light leading-relaxed">{pillar.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 md:py-64 relative overflow-hidden bg-[#050505] text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-6 relative z-10">
              <span className="text-xs font-bold text-white/20 uppercase tracking-[0.5em] block mb-12">THE TRANSFORMATION</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.95] mb-16">
                 Your business deserves <br />
                 <span className="text-transparent italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>more than a template.</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto mb-20">
                 I design and develop custom websites, mobile-ready web apps, and AI-integrated platforms — built from scratch, built to perform.
              </p>
              
              <a 
                  href="https://wa.me/923233260859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-16 py-8 bg-white text-black text-xl font-bold uppercase tracking-tighter rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group flex items-center gap-4 mx-auto"
              >
                  Let's Build Something Great 
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
