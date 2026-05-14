import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowUp,
  Monitor,
  Terminal as TerminalIcon,
  Cpu,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  Smartphone
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const bodyText = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Direct Gmail Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abuqitmirshirazalmadani@gmail.com&su=${subject}&body=${bodyText}`;

    // Simulate terminal processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open Gmail directly
      window.open(gmailUrl, '_blank');
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-[#E8E8ED] font-sans antialiased overflow-x-hidden min-h-screen relative selection:bg-[#00E5FF]/20 selection:text-white">
      <Helmet>
        <title>Contact ABUQITMIRLABS | Hire a Custom Software Specialist</title>
        <meta name="description" content="Connect with the lead architects at ABUQITMIRLABS .TECH. Hire us for custom software development, AI agent automation, and world-class digital engineering projects. Secure communication relay active." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact ABUQITMIRLABS | Let's Build Your Vision" />
        <meta property="og:description" content="Connect with the lead architects at ABUQITMIRLABS .TECH for custom software development and AI automation." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact ABUQITMIRLABS | Hire a Custom Software Specialist" />
        <meta name="twitter:description" content="Connect with the lead architects at ABUQITMIRLABS .TECH for custom software development and AI automation." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />
      </Helmet>

      {/* Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-5" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.1) 2px, rgba(0,229,255,0.1) 4px)' }}></div>
      
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay"></div>
 
      <Header />
      <Breadcrumbs />
 
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-24 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-[#00E5FF]/5 border border-[#00E5FF]/20 px-4 py-2 text-[10px] uppercase font-mono tracking-[0.2em] text-[#00E5FF] mb-10"
             >
                <Cpu size={14} className="animate-pulse" />
                Connectivity Established
             </motion.div>
             
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase mb-8"
             >
                Get In <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80F2FF] to-[#0099AA]">Touch.</span>
             </motion.h1>
             <div className="w-32 h-2 bg-[#00E5FF] mx-auto mb-12"></div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Terminal Style Form */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="bg-black border-4 border-[#00E5FF] p-8 relative overflow-hidden group"
               style={{ boxShadow: '12px 12px 0 rgba(0,229,255,1)' }}
            >
               {/* Terminal Header */}
               <div className="flex items-center gap-2 mb-8 pb-4 border-b-2 border-[#00E5FF]/30">
                  <div className="w-3 h-3 rounded-full bg-[#FF0080]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00E5FF]"></div>
                  <span className="font-mono text-xs ml-4 text-[#00E5FF] tracking-widest">CONTACT_PROTOCOL.SYS</span>
               </div>

               <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div>
                     <label className="font-mono text-xs text-[#00E5FF] mb-3 block tracking-widest">USER_ID / NAME_</label>
                     <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-2 border-[#00E5FF]/30 px-6 py-4 text-white font-mono focus:outline-none focus:border-[#00E5FF] transition-all hover:bg-[#00E5FF]/5" 
                        placeholder="IDENTIFY YOURSELF..."
                     />
                  </div>
                  <div>
                     <label className="font-mono text-xs text-[#00E5FF] mb-3 block tracking-widest">COMMUNICATION_RELAY / EMAIL_</label>
                     <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-2 border-[#00E5FF]/30 px-6 py-4 text-white font-mono focus:outline-none focus:border-[#00E5FF] transition-all hover:bg-[#00E5FF]/5" 
                        placeholder="SECURE RELAY ADDRESS..."
                     />
                  </div>
                  <div>
                     <label className="font-mono text-xs text-[#00E5FF] mb-3 block tracking-widest">TRANSMISSION_PAYLOAD / MESSAGE_</label>
                     <textarea 
                        required
                        rows={6} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-2 border-[#00E5FF]/30 px-6 py-4 text-white font-mono focus:outline-none focus:border-[#00E5FF] transition-all hover:bg-[#00E5FF]/5 resize-none" 
                        placeholder="DECODE YOUR THOUGHTS..."
                     ></textarea>
                  </div>
                  <button 
                     type="submit" 
                     disabled={isSubmitting || submitted}
                     className={`w-full px-10 py-6 font-black text-xl border-4 transition-all duration-300 flex items-center justify-center gap-4 relative overflow-hidden group
                        ${submitted ? 'bg-green-500 border-green-500 text-black' : 'bg-[#00E5FF] border-[#00E5FF] text-black hover:bg-black hover:text-[#00E5FF]'}`}
                  >
                     <AnimatePresence mode="wait">
                        {isSubmitting ? (
                           <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-3"
                           >
                               <Cpu className="animate-spin" />
                               PROCESSING...
                           </motion.div>
                        ) : submitted ? (
                           <motion.div
                              key="success"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-3"
                           >
                               <ShieldCheck />
                               TRANSMISSION SUCCESSFUL
                           </motion.div>
                        ) : (
                           <motion.div
                              key="initial"
                              className="flex items-center gap-3"
                           >
                               <Send size={24} />
                               INITIATE TRANSMISSION
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </button>
               </form>

               {/* Terminal Output */}
               <div className="mt-8 pt-6 border-t-2 border-[#00E5FF]/20 font-mono text-[10px] space-y-2">
                  <p className="text-[#00E5FF]/60">&gt; STATUS: STANDBY</p>
                  <p className="text-[#00E5FF]/60">&gt; ENCRYPTION: AES-256 ACTIVE</p>
                  <p className="text-[#00E5FF]">&gt; {submitted ? 'READY FOR NEXT INPUT' : 'AWAITING USER INPUT'}<span className="animate-pulse">_</span></p>
               </div>

               {/* Background Pattern */}
               <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 pointer-events-none -z-10"></div>
            </motion.div>

            {/* Contact Details & Links */}
            <div className="space-y-12">
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-10"
               >
                  <div className="group">
                     <p className="font-mono text-xs text-[#00E5FF] mb-4 tracking-[0.4em] uppercase">Communication_Relays</p>
                     <div className="space-y-6">
                        <div className="flex items-center gap-6 group/item">
                           <a 
                              href="https://mail.google.com/mail/?view=cm&fs=1&to=abuqitmirshirazalmadani@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-16 h-16 bg-[#00E5FF]/5 border-2 border-[#00E5FF]/20 flex items-center justify-center group-hover/item:border-[#00E5FF] group-hover/item:bg-[#00E5FF]/10 transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                           >
                               <Mail className="text-[#00E5FF]" size={28} />
                           </a>
                           <div>
                              <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Email Protocol [GMAIL]</p>
                              <div className="flex flex-col gap-1">
                                 <a 
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=abuqitmirshirazalmadani@gmail.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 font-mono text-[10px] group-hover/item:text-[#00E5FF] transition-colors hover:underline"
                                 >
                                    abuqitmirshirazalmadani@gmail.com
                                 </a>
                                 <p className="text-[#00E5FF]/40 font-mono text-[9px] uppercase tracking-tighter">Direct Relay Enabled</p>
                              </div>
                           </div>
                        </div>
                        <a 
                           href="https://wa.me/923233260859" 
                           target="_blank"
                           className="flex items-center gap-6 group/item"
                        >
                           <div className="w-16 h-16 bg-[#00E5FF]/5 border-2 border-[#00E5FF]/20 flex items-center justify-center group-hover/item:border-[#00E5FF] group-hover/item:bg-[#00E5FF]/10 transition-all">
                               <MessageCircle className="text-[#00E5FF]" size={28} />
                           </div>
                           <div>
                              <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">WhatsApp Relay</p>
                              <p className="text-zinc-500 font-mono text-xs group-hover/item:text-[#00E5FF] transition-colors">+92-323-3260859 (Direct Chat)</p>
                           </div>
                        </a>
                        <a 
                           href="https://www.google.com/search?q=Abu+Qitmir&stick=H4sIAAAAAAAA_-NgU1I1qEg0SUwyMkw2MzIySUkyTba0MqhITUtOMUgztzRLTTM2TjI3XMTK5ZhUqhCYWZKbWQQAgvyVVDYAAAA&hl=en&mat=CZLYxD3dn4-XElcBTVDHnmXSKVhVcvJTl5LdX-OEaaOViC2V8fJZjkseklE5xuWjtkBxO-4XBgP9s87BonPt73AGlgF_gCfDR0OBlJ87IyZC-1OVUDGmHgKOo0SrOjnijr4&authuser=0" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-6 group/item"
                        >
                           <div className="w-16 h-16 bg-[#00E5FF]/5 border-2 border-[#00E5FF]/20 flex items-center justify-center group-hover/item:border-[#00E5FF] transition-all">
                               <MapPin className="text-[#00E5FF]" size={28} />
                           </div>
                           <div>
                              <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">Base Coordinates</p>
                              <p className="text-zinc-500 font-mono text-xs">Global Services // Remote OPS Available</p>
                           </div>
                        </a>
                     </div>
                  </div>

                  <div className="pt-10 border-t border-white/5">
                     <p className="font-mono text-xs text-[#00E5FF] mb-8 tracking-[0.4em] uppercase">Social_Matrix</p>
                     <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {[
                           { icon: <Facebook />, color: 'hover:bg-[#1877F2]', href: "https://www.facebook.com/profile.php?id=61583768706452" },
                           { icon: <MapPin />, color: 'hover:bg-[#4285F4]', href: "https://www.google.com/search?q=Abu+Qitmir&stick=H4sIAAAAAAAA_-NgU1I1qEg0SUwyMkw2MzIySUkyTba0MqhITUtOMUgztzRLTTM2TjI3XMTK5ZhUqhCYWZKbWQQAgvyVVDYAAAA&hl=en&mat=CZLYxD3dn4-XElcBTVDHnmXSKVhVcvJTl5LdX-OEaaOViC2V8fJZjkseklE5xuWjtkBxO-4XBgP9s87BonPt73AGlgF_gCfDR0OBlJ87IyZC-1OVUDGmHgKOo0SrOjnijr4&authuser=0" },
                           { icon: <Instagram />, color: 'hover:bg-[#E4405F]', href: "https://www.instagram.com/abuqitmirshirazalmadani/" },
                           { icon: <Youtube />, color: 'hover:bg-[#FF0000]', href: "https://www.youtube.com/@AbuQitmir" },
                           { icon: <Linkedin />, color: 'hover:bg-[#0A66C2]', href: "https://www.linkedin.com/in/abu-qitmir-697423390/" },
                           { icon: <Twitter />, color: 'hover:bg-[#1DA1F2]', href: "https://x.com/AbuQitmir" },
                           { icon: <Smartphone />, color: 'hover:bg-[#FF0050]', href: "https://www.tiktok.com/@abuqitmirmohammadshiraz" }
                        ].map((social, i) => (
                           <a 
                              key={i} 
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-full aspect-square bg-[#00E5FF]/5 border-2 border-[#00E5FF]/20 flex items-center justify-center text-white transition-all duration-300 hover:border-transparent hover:scale-110 ${social.color} hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]`}
                           >
                               {React.cloneElement(social.icon as React.ReactElement<any>, { size: 24 })}
                           </a>
                        ))}
                     </div>
                  </div>
               </motion.div>


               {/* Back to Top / Interactive Element */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-10 border-2 border-dashed border-[#00E5FF]/20 group hover:border-[#00E5FF]/40 transition-all flex flex-col items-center justify-center gap-6"
               >
                  <p className="font-mono text-[10px] text-zinc-600 text-center uppercase tracking-widest leading-loose">
                     Our terminal is always active. <br />
                     Deploy your ideas to our production pipeline.
                  </p>
                  <button 
                    onClick={scrollToTop}
                    className="group flex items-center gap-4 px-6 py-3 bg-[#00E5FF] text-black font-black uppercase text-xs tracking-tighter hover:bg-white transition-all transform hover:-translate-y-1"
                    style={{ boxShadow: '4px 4px 0 #000' }}
                  >
                     <ArrowUp size={16} className="group-hover:animate-bounce" />
                     Return to Peak
                  </button>
               </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
