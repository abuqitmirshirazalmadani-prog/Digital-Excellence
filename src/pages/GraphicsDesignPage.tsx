"use client";

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Layers, 
  MousePointer2, 
  Share2, 
  FileText, 
  ChevronRight, 
  Plus,
  Monitor,
  Layout,
  Figma,
  PenTool,
  Image as ImageIcon,
  Video,
  ArrowRight,
  ArrowUpRight,
  Crosshair,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';

const GraphicsDesignPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const capabilities = [
    {
      num: "01",
      title: "Complete Brand Identity Design",
      desc: "We build brands from scratch or breathe new life into existing ones. We design memorable, vector-based logos, define professional typography guidelines, and create cohesive color palettes that perfectly communicate your company’s core values and industry authority.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      num: "02",
      title: "UI/UX Design for Web and Mobile",
      desc: "User Experience (UX) is how it works; User Interface (UI) is how it looks. We design intuitive wireframes and stunning, high-fidelity prototypes. By focusing on thumb-friendly navigation and clear visual hierarchies, we ensure your software or website is a joy to use.",
      icon: <Layout className="w-8 h-8" />
    },
    {
      num: "03",
      title: "Engaging Social Media Creatives",
      desc: "Stop the scroll. We design high-impact graphics for Facebook, Instagram, LinkedIn, and TikTok. From animated ad creatives to educational carousel posts, our designs are formatted perfectly for each platform’s algorithm to maximize engagement and click-through rates.",
      icon: <Share2 className="w-8 h-8" />
    },
    {
      num: "04",
      title: "Corporate Marketing Collateral",
      desc: "Arm your sales team with professional materials. We design investor pitch decks, corporate brochures, business cards, and digital whitepapers that exude professionalism and make closing deals significantly easier.",
      icon: <FileText className="w-8 h-8" />
    }
  ];

  const techStack = [
    { category: "Prototyping & UI/UX", items: ["Figma", "Adobe XD"], icon: <Monitor className="text-zinc-500" /> },
    { category: "Vector & Branding", items: ["Adobe Illustrator", "CorelDRAW"], icon: <PenTool className="text-zinc-500" /> },
    { category: "Photo Manipulation", items: ["Adobe Photoshop", "Lightroom"], icon: <ImageIcon className="text-zinc-500" /> },
    { category: "Motion & Video", items: ["After Effects", "Premiere Pro", "Canva Pro"], icon: <Video className="text-zinc-500" /> }
  ];

  const faqData = [
    {
      q: "What is included in a brand identity package?",
      a: "A standard package includes a primary logo, secondary logo variations, a defined color palette, typography guidelines, and a comprehensive brand book to ensure consistency across all your marketing."
    },
    {
      q: "Will I get the source files for my designs?",
      a: "Yes. Upon project completion and final payment, we provide all original, high-resolution source files (AI, PSD, Figma, SVG, EPS) so you have full ownership."
    },
    {
      q: "How many design revisions do you offer?",
      a: "We typically include up to 3 rounds of revisions for major design projects to ensure the final product aligns perfectly with your vision and expectations."
    },
    {
      q: "What is the exact difference between UI and UX design?",
      a: "UX (User Experience) focuses on the logic, wireframes, and how a user easily navigates a product. UI (User Interface) focuses on the visual aesthetics—colors, buttons, and typography."
    },
    {
      q: "Do you design social media graphics and paid ad creatives?",
      a: "Yes. We create visually striking, platform-specific graphics and video animations designed specifically to lower your Cost-Per-Click (CPC) and boost ad engagement."
    },
    {
      q: "Can you redesign an existing logo to make it modern?",
      a: "Absolutely. We offer brand refresh services where we take your legacy logo and modernize it using contemporary design trends while retaining your core brand recognition."
    },
    {
      q: "How does good design actually improve my conversion rate?",
      a: "Good design removes visual clutter and cognitive load. By using strategic colors for Call-to-Action buttons and establishing a clear visual hierarchy, we guide the user effortlessly toward the checkout or contact form."
    }
  ];

  return (
    <div className="bg-[#050505] text-neutral-300 font-sans antialiased overflow-x-hidden min-h-screen relative selection:bg-[#ccff00] selection:text-black">
      <Helmet>
        <title>Premium Graphics Design & Brand Identity ABUQITMIRLABS</title>
        <meta name="description" content="Elevate your digital identity with ABUQITMIRLABS .TECH. Premium brand identity design, conversion-focused UI/UX layouts, and high-fidelity social media creatives." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/graphics-design" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium Graphics Design | ABUQITMIRLABS" />
        <meta property="og:description" content="Elevate your digital identity with ABUQITMIRLABS .TECH. Premium brand identity design and conversion-focused UI/UX layouts." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/graphics-design" />
        <meta property="og:type" content="website" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Graphics Design & Branding",
            "description": "We craft conversion-focused brand identities, intuitive UI/UX layouts, and compelling social media creatives.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "Design Services",
            "areaServed": ["US", "UK", "CA", "PK", "PL", "AE", "SA"]
          })}
        </script>
      </Helmet>
      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
        {/* Background Image Area (Matching Reference) */}
        <div className="absolute inset-0 md:left-[35%] z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop&fm=webp" 
            alt="futuristic premium graphics design background texture" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale contrast-150"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
        </div>

        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="md:w-3/4 lg:w-2/3">
            {/* Top Label */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-4 mb-8"
            >
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full border border-zinc-700 bg-zinc-900"></div>
                <div className="w-5 h-5 rounded-full border border-zinc-700 bg-zinc-800"></div>
                <div className="w-5 h-5 rounded-full border border-zinc-700 bg-zinc-700"></div>
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">Global Design Standard</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] leading-[0.95] font-bold tracking-tighter text-white uppercase mb-10">
                Premium Graphics<br />
                <span className="text-[#ccff00]">Designing.</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl leading-relaxed mb-12"
            >
              Design is the silent ambassador of your brand. We craft conversion-focused brand identities, intuitive UI/UX layouts, and compelling social media creatives that capture attention, build instant credibility, and turn your target audience into loyal customers.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ccff00] text-black text-xs font-bold tracking-widest uppercase px-10 py-6 flex flex-col items-center gap-2 hover:bg-white transition-all transform hover:scale-105 active:scale-95 group"
              >
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Request a Design Quote
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('video-portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.href = '/#video-portfolio';
                }}
                className="border border-zinc-800 text-white text-xs font-bold tracking-widest uppercase px-10 py-6 flex flex-col items-center gap-2 hover:bg-white hover:text-black transition-all group"
              >
                <Layout className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Our Design Portfolio
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Accent element from reference */}
        <div className="absolute right-6 bottom-32 md:right-[20%] md:bottom-[15%] w-40 h-40 md:w-56 md:h-56 bg-[#ccff00] flex items-end justify-start p-6 shadow-2xl z-20 group cursor-pointer hover:bg-white transition-colors duration-500 rounded-2xl md:rounded-none">
          <Crosshair className="w-10 h-10 text-black group-hover:rotate-90 transition-transform duration-500" strokeWidth={1} />
        </div>
      </section>

      {/* Marquee Section */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8 backdrop-blur-3xl overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center px-10">
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">roi-driven brand identity</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>high-converting ui/ux</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">custom brand assets</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>marketing graphics</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">professional brand kit</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>landing page design</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">visual storytelling</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>affordable logo design</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">social media ad creatives</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>investor pitch deck design</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">vector illustration services</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>corporate brochure design</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase opacity-20">custom icon set design</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>product packaging visuals</span>
              <Sparkles className="text-[#ccff00] opacity-40" size={40} />
            </div>
          ))}
        </div>
      </div>

      {/* The Problem Section */}
      <section className="py-32 md:py-64 bg-black border-b border-white/5 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#ccff00] uppercase tracking-[0.4em] block mb-8">[ SECTION_01: THE_PROBLEM ]</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.9] mb-12">
              Why Bad Design <br />
              <span className="text-zinc-600">is Costing You Sales.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed italic border-l-2 border-[#ccff00] pl-8">
              In the digital age, users judge your business within 50 milliseconds of landing on your website or seeing your ad.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              If your logo looks outdated, your website is cluttered, or your social media graphics lack consistency, potential clients immediately assume your services are also low quality. Poor UI/UX design creates friction, confusing users and causing them to abandon their shopping carts or leave your site without contacting you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-32 md:py-64 bg-[#050505] relative overflow-hidden group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-32"
          >
            <span className="text-xs font-bold text-[#ccff00] uppercase tracking-[0.5em] block mb-8">The ABUQITMIRLABS .TECH Solution</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.8] mb-12">
              Strategic, <br />
              <span className="italic text-transparent" style={{ WebkitTextStroke: '1px white' }}>ROI-Driven</span> Design
            </h2>
            <p className="text-xl md:text-3xl font-light text-zinc-400 leading-tight">
              We do not just make things "look pretty." We engineer visuals with a psychological purpose. 
            </p>
          </motion.div>

          <p className="text-lg md:text-xl text-zinc-400 text-center max-w-3xl mx-auto leading-relaxed">
            Our premium graphics designing services are rooted in user behavior, color psychology, and accessible design principles. We align your visual identity with your business goals, ensuring every pixel we place serves to guide the user’s eye, build absolute trust, and drive profitable actions.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 md:py-64 bg-black border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-24">
            <Crosshair className="text-[#ccff00]" size={24} />
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.4em]">Core Design Capabilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {capabilities.map((cap, i) => (
              <div 
                key={i} 
                className="group p-10 md:p-20 bg-black hover:bg-white/[0.02] transition-colors duration-500 relative overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute top-0 right-0 p-8 text-4xl font-mono text-zinc-900 group-hover:text-[#ccff00]/10 transition-colors">{cap.num}</div>
                <div className="mb-10 text-[#ccff00]/40 group-hover:text-[#ccff00] transition-colors group-hover:scale-110 group-hover:rotate-3 flex origin-left items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                  {cap.title}
                </h3>
                <p className="text-lg text-zinc-500 leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                  {cap.desc}
                </p>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 md:py-64 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div>
              <span className="text-xs font-bold text-[#ccff00] uppercase tracking-[0.4em] block mb-6">[ SECTION_03: TECH_STACK ]</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.9]">
                Our Creative <br />
                <span className="text-zinc-600">Tech Stack.</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest max-w-xs">Using industrial-grade tools to ensure pixel-perfect vector scalability and motion fidelity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, i) => (
              <div key={i} className="group p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-[#ccff00]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ccff00]/5 flex flex-col items-center text-center">
                <div className="mb-8 w-12 h-12 rounded-xl bg-black border border-white/5 flex items-center justify-center group-hover:bg-[#ccff00] group-hover:text-black transition-colors duration-500">
                  {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-6 pb-4 border-b border-white/5 leading-none">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, j) => (
                    <li key={j} className="text-zinc-400 font-light flex items-center gap-3 group-hover:text-white transition-colors">
                      <div className="w-1 h-1 bg-zinc-700 rounded-full" />
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

      {/* Final CTA Strip */}
      <section className="py-48 relative border-t border-white/5 overflow-hidden text-center bg-[#050505]">
        <div className="absolute inset-0 bg-[#ccff00]/5 blur-[200px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-[9rem] font-bold text-white tracking-tighter mb-16 uppercase leading-[0.8] mix-blend-difference">
            Design <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>The Future.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a 
              href="https://wa.me/923233260859"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ccff00] text-black text-xl font-bold px-16 py-8 rounded-full hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center uppercase tracking-tighter"
            >
               Start A Visual Audit
            </a>
            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-[280px] text-left border-l-2 border-white/10 pl-8 leading-relaxed h-16 flex items-center">
               Est. PROJECT LOAD: 3-4 Weeks // CAPACITY: 88%
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 md:py-64 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs font-bold text-[#ccff00] uppercase tracking-[0.4em] block mb-8">FAQ</span>
            <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">Common Inquiries</h3>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/5 rounded-2xl hover:border-[#ccff00]/30 transition-colors overflow-hidden"
              >
                <button 
                  className="flex items-center justify-between w-full p-8 text-left"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="text-lg md:text-xl font-bold text-zinc-200 uppercase tracking-tight pr-6">{faq.q}</span>
                  <div className={`shrink-0 transition-transform duration-500 ${activeFaq === idx ? 'rotate-45 text-[#ccff00]' : 'text-zinc-500'}`}>
                    <Plus size={28} />
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
                      <p className="p-8 pt-0 text-zinc-400 text-lg font-light leading-relaxed">
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

export default GraphicsDesignPage;
