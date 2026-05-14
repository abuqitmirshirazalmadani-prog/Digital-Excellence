"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Layers, 
  Settings, 
  Share2, 
  Zap, 
  Star, 
  ArrowUpRight, 
  Cloud,
  ShieldCheck,
  CreditCard,
  Layout,
  Code,
  Plus,
  Twitter,
  Linkedin,
  Globe,
  Settings as SettingsIcon,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CountryMarquee from '../components/CountryMarquee';

const MobileAppDevelopmentPage = () => {
  const faqData = [
    { 
      q: "What is the difference between Flutter and React Native?", 
      a: "Both are cross-platform frameworks. React Native is JavaScript-based and highly flexible, while Flutter uses Dart and is incredible for complex custom animations. We select the best fit for your project." 
    },
    { 
      q: "Will my app work offline?", 
      a: "Yes. We can build robust offline-first architectures using local databases. Users can browse content offline, which seamlessly syncs to the cloud when the internet connects." 
    },
    { 
      q: "Do you help with app maintenance after it launches?", 
      a: "Absolutely. We offer maintenance packages to ensure compatibility with new iOS/Android updates, monitor crash reports, and deploy new features." 
    },
    { 
      q: "Do you design the app UI/UX or just write the code?", 
      a: "We provide end-to-end development. Our design team creates wireframes, prototypes, and final UI/UX designs before our engineers start coding." 
    },
    { 
      q: "Will you upload the app to the Apple App Store and Google Play?", 
      a: "Yes. We handle the strict compliance guidelines, App Store Optimization (ASO), and the entire submission process for both platforms." 
    },
    { 
      q: "How do you secure user data and payments in the app?", 
      a: "We use tokenization, encrypted databases, biometric login integration (FaceID/Fingerprint), and secure REST APIs to ensure complete data protection." 
    },
    { 
      q: "Can my app scale if it suddenly gets thousands of users?", 
      a: "Yes. We build mobile apps on cloud-native backend infrastructures (like AWS or Firebase) that auto-scale server resources instantly to handle massive traffic spikes." 
    }
  ];

  return (
    <div className="bg-white text-black font-sans selection:bg-[#ff0099] selection:text-white overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Mobile App Development Company | Flutter & React Native ABUQITMIRLABS</title>
        <meta name="description" content="ABUQITMIRLABS .TECH specializes in Flutter and React Native mobile development. We build futuristic, high-performance cross-platform apps with premium UI/UX and scalable backends." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/mobile-app-development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mobile App Development Company | ABUQITMIRLABS" />
        <meta property="og:description" content="ABUQITMIRLABS .TECH specializes in Flutter and React Native mobile development. High-performance cross-platform apps with premium UI/UX." />
        <meta property="og:url" content="https://abuqitmirlabs.tech/mobile-app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Company | ABUQITMIRLABS" />
        <meta name="twitter:description" content="ABUQITMIRLABS .TECH specializes in Flutter and React Native mobile development. High-performance cross-platform apps with premium UI/UX." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "We design and develop high-performance, native-feeling mobile applications using advanced cross-platform frameworks.",
            "provider": {
              "@type": "Organization",
              "name": "ABUQITMIRLABS .TECH",
              "url": "https://abuqitmirlabs.tech"
            },
            "serviceType": "Mobile Engineering",
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

        {/* HowTo Schema (Mobile App Process) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Our Mobile App Development Process",
            "description": "A high-octane 5-step development process that transforms cross-platform app ideas into high-performance digital solutions.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Explosive Discovery",
                "text": "Deep dive into app ideas, mapping out user journeys and technical requirements."
              },
              {
                "@type": "HowToStep",
                "name": "Brutal UI/UX Prototyping",
                "text": "Design bold, thumb-friendly interfaces that stand out in the app store."
              },
              {
                "@type": "HowToStep",
                "name": "High-Octane Development",
                "text": "Build using React Native or Flutter with a single codebase that runs like native."
              },
              {
                "@type": "HowToStep",
                "name": "Intense Testing & QA",
                "text": "Crash-test on dozens of devices to ensure zero bugs and smooth performance."
              },
              {
                "@type": "HowToStep",
                "name": "Launch & Support",
                "text": "Handle store submissions and assets, then scale the app to the moon."
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
                "name": "Mobile App Development",
                "item": "https://abuqitmirlabs.tech/mobile-app-development"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 px-6 md:px-10 overflow-hidden bg-[#ccff00]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] lowercase font-display text-black pt-4">
              Mobile App <br />
              <span className="text-[#7000ff]">Development.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-black/70 max-w-xl leading-relaxed mx-auto">
              Put your business in the pockets of your customers. We design and develop high-performance, native-feeling mobile applications using advanced cross-platform frameworks. Launch faster, scale efficiently.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 justify-center">
              <a 
                href="https://wa.me/923233260859"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-lg font-bold px-12 py-8 rounded-3xl brutalist-shadow transition-transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
              >
                <Smartphone size={24} className="text-[#ccff00]" />
                Discuss Your App
              </a>
              <Link 
                to="/contact"
                className="bg-white text-black text-lg font-bold px-12 py-8 border-4 border-black rounded-3xl brutalist-shadow transition-all hover:bg-gray-100 flex flex-col items-center justify-center gap-2 uppercase tracking-tighter"
              >
                <ArrowUpRight size={24} />
                Get Pricing
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
             <motion.div 
               initial={{ rotate: 10, y: 50, opacity: 0 }}
               animate={{ rotate: 5, y: 0, opacity: 1 }}
               whileHover={{ rotate: 0, scale: 1.05 }}
               className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-black rounded-[4rem] p-3 shadow-2xl overflow-hidden"
             >
                {/* Internal Screen */}
                <div className="w-full h-full bg-[#f8f8f8] rounded-[3.2rem] overflow-hidden relative flex flex-col p-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
                  
                  <div className="mt-8 space-y-4">
                    <div className="w-2/3 h-6 bg-black/10 rounded-full"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square bg-[#ccff00] rounded-3xl"></div>
                      <div className="aspect-square bg-[#ff0099] rounded-3xl"></div>
                    </div>
                    <div className="w-full h-32 bg-white border-2 border-black/5 rounded-3xl p-4 shadow-sm">
                       <div className="w-1/2 h-4 bg-black/10 rounded-full mb-3"></div>
                       <div className="w-full h-16 bg-[#7000ff]/5 rounded-2xl"></div>
                    </div>
                  </div>

                  <div className="mt-auto mb-4 w-full h-12 bg-black rounded-2xl"></div>
                </div>
             </motion.div>

             {/* Floating UI Elements */}
             <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute top-10 -left-10 bg-white border-4 border-black p-4 rounded-2xl shadow-xl z-20 hidden md:block"
             >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ff0099] rounded-xl flex items-center justify-center text-white">
                    <Zap fill="currentColor" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-black/40">Performance</p>
                    <p className="text-sm font-bold text-black">99% Faster</p>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 bg-white overflow-hidden -mt-10 mb-10 relative z-20">
        <div className="bg-black py-6 border-y-4 border-white rotate-1 shadow-xl flex items-center h-20">
          <div className="flex w-max animate-marquee items-center gap-12 px-4">
             <div className="flex items-center gap-12 whitespace-nowrap text-white font-black text-4xl uppercase tracking-tighter">
                <span>cross-platform mobile apps</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>affordable react native</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>ios and android custom</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>user-centric ui/ux design</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>performance-optimized flutter</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>app maintenance services</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>startup app agency</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>native ios app build</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>mobile commerce development</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>real-time chat apps</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>fitness tracking app dev</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>custom banking apps</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>hybrid app cost</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>mobile app ui audit</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
             </div>
             <div className="flex items-center gap-12 whitespace-nowrap text-white font-black text-4xl uppercase tracking-tighter">
                <span>cross-platform mobile apps</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>affordable react native</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>ios and android custom</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>user-centric ui/ux design</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>performance-optimized flutter</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>app maintenance services</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>startup app agency</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>native ios app build</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>mobile commerce development</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>real-time chat apps</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>fitness tracking app dev</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
                <span>custom banking apps</span>
                <Layers className="text-[#7000ff] fill-[#7000ff]" />
                <span>hybrid app cost</span>
                <Star className="text-[#ccff00] fill-[#ccff00]" />
                <span>mobile app ui audit</span>
                <Zap className="text-[#ff0099] fill-[#ff0099]" />
             </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Problem */}
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="flex flex-col items-center text-center">
                <h2 className="text-5xl font-black font-display mb-8 lowercase tracking-tight">
                  the <span className="bg-[#ff0099] text-white px-3 border-2 border-black inline-block rotate-2 brutal-shadow-sm">problem</span>
                </h2>
                <h3 className="text-3xl font-bold mb-6 leading-tight">App Abandonment and High Development Costs</h3>
                <p className="text-xl text-black/70 leading-relaxed font-medium">
                  Today's users are ruthless; if an app crashes, drains their battery, or has a confusing interface, they will uninstall it within seconds. Furthermore, for startups and SMEs, hiring two entirely separate development teams to build native apps for both iOS (Swift) and Android (Kotlin) is financially draining and doubles your time-to-market.
                </p>
             </div>
             <div className="bg-gray-100 border-4 border-black p-10 brutal-shadow -rotate-2 rounded-[2rem]">
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-4 bg-white border-2 border-black p-4 brutal-shadow-sm rounded-xl">
                      <div className="w-10 h-10 bg-red-500 border-2 border-black rounded-full flex items-center justify-center text-white">X</div>
                      <div className="h-3 w-1/2 bg-black/10 rounded-full"></div>
                    </div>
                  ))}
                </div>
             </div>
           </div>

           {/* Solution */}
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 bg-[#ccff00] border-4 border-black p-10 brutal-shadow rotate-2 rounded-[2rem] flex items-center justify-center">
                <Smartphone className="w-48 h-48 text-black" />
             </div>
             <div className="order-1 md:order-2 flex flex-col items-center text-center">
                <h2 className="text-5xl font-black font-display mb-8 lowercase tracking-tight">
                  the <span className="bg-[#7000ff] text-white px-3 border-2 border-black inline-block -rotate-2 brutal-shadow-sm">solution</span>
                </h2>
                <h3 className="text-3xl font-bold mb-6 leading-tight">High-Fidelity Cross-Platform Engineering</h3>
                <p className="text-xl text-black/70 leading-relaxed font-medium">
                  We build one app that rules both platforms. Using state-of-the-art technologies like React Native and Flutter, we write a single, unified codebase that deploys flawlessly to both Apple and Android devices. You get the butter-smooth animations, hardware access, and blazing speed of a native app, but at a fraction of the cost and development time.
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50 border-y-[8px] border-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-black font-display mb-20 text-center tracking-tight lowercase">
            mobile <span className="bg-[#ccff00] px-3 border-2 border-black inline-block -rotate-2 brutal-shadow-sm">services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Cross-Platform Development",
                content: "We specialize in building feature-rich applications tailored to your business model. Whether you need an on-demand booking app, a secure fintech wallet, or a comprehensive e-learning platform, our cross-platform solutions guarantee a uniform, premium experience across all operating systems.",
                icon: <Smartphone className="text-[#7000ff]" />,
                color: "bg-white"
              },
              {
                title: "Intuitive Mobile UI/UX Design",
                content: "Thumb-friendly design is critical. Our UI/UX team strictly adheres to Apple’s Human Interface Guidelines and Google’s Material Design principles. We create intuitive navigation, accessible typography, and engaging micro-interactions that keep users returning to your app daily.",
                icon: <Layout className="text-[#ff0099]" />,
                color: "bg-white",
                rotate: "rotate-1"
              },
              {
                title: "Robust API & Backend Integration",
                content: "An app is only as strong as its backend. We architect highly secure, scalable cloud backends and RESTful APIs to handle your user authentication, real-time database syncing, push notifications, and secure payment gateway integrations (like Stripe or PayPal).",
                icon: <Settings className="text-[#ccff00]" />,
                color: "bg-black",
                rotate: "-rotate-1",
                dark: true
              },
              {
                title: "App Store Deployment & Optimization (ASO)",
                content: "Building the app is only half the battle. We handle the rigorous compliance reviews required to successfully publish your app on the Apple App Store and Google Play Store. Furthermore, we optimize your app's title, keywords, and screenshots to ensure it ranks high in store search results.",
                icon: <Cloud className="text-blue-400" />,
                color: "bg-white"
              }
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} ${item.rotate || ''} border-4 border-black p-10 brutal-shadow rounded-[2rem] bouncy group cursor-default flex flex-col items-center text-center`}>
                <div className="mb-8 p-4 border-2 border-black rounded-2xl group-hover:scale-110 transition-transform bg-white">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className={`text-2xl font-bold font-display mb-4 lowercase tracking-tight ${item.dark ? 'text-[#ccff00]' : 'text-black'}`}>
                  {item.title}
                </h3>
                <p className={`font-medium leading-relaxed ${item.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black font-display mb-20 lowercase tracking-tight">
            the <span className="text-[#7000ff]">tech stack</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "App Frameworks", items: ["Flutter", "React Native"], icon: <Smartphone />, color: "bg-[#ccff00]" },
              { category: "Backend & Cloud", items: ["Firebase", "AWS Amplify", "Node.js"], icon: <Cloud />, color: "bg-[#7000ff] text-white" },
              { category: "State Management", items: ["Redux", "Riverpod", "BLoC"], icon: <Layers />, color: "bg-[#ff0099] text-white" },
              { category: "Payments", items: ["Stripe", "Razorpay", "Apple Pay / Google Pay"], icon: <CreditCard />, color: "bg-black text-white" }
            ].map((stack, idx) => (
              <div key={idx} className={`${stack.color} border-4 border-black p-8 brutal-shadow rounded-2xl bouncy hover:-translate-y-2 flex flex-col items-center text-center`}>
                <div className="mb-6 opacity-80">
                   {React.cloneElement(stack.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <h4 className="font-display font-black text-lg mb-4 uppercase tracking-[0.1em]">{stack.category}</h4>
                <ul className="space-y-2 opacity-90 font-bold">
                  {stack.items.map(item => (
                    <li key={item} className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full border border-current"></span>
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
      <section id="development-process" className="py-32 bg-white border-y-[8px] border-black px-6">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                  <h2 className="text-6xl font-black font-display tracking-tight leading-[0.9] lowercase mb-8">
                     our <span className="bg-[#ff0099] text-white px-3 border-2 border-black inline-block rotate-2 brutal-shadow-sm">proven</span> <br /> 
                     step development process
                  </h2>
                  <p className="max-w-2xl mx-auto text-xl font-medium text-black/70">
                      We don't do boring, and we don't do disorganization. Our high-octane development process keeps your project on track and hitting performance benchmarks.
                  </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                  {/* Steps */}
                  <div className="space-y-12">
                    {[
                      {
                          title: "Explosive Discovery",
                          desc: "We dive deep into your app idea, mapping out user journeys and technical requirements to ensure a perfect market fit.",
                          icon: <Smartphone className="w-6 h-6" />,
                          color: "bg-[#ccff00]"
                      },
                      {
                          title: "Brutal UI/UX Prototyping",
                          desc: "We design bold, thumb-friendly interfaces that stand out in the app store, testing every interaction for maximum feedback.",
                          icon: <Layout className="w-6 h-6" />,
                          color: "bg-[#ff0099] text-white"
                      },
                      {
                          title: "High-Octane Development",
                          desc: "Using React Native or Flutter, we build your app with a single codebase that runs like 100% native fire on both platforms.",
                          icon: <Code className="w-6 h-6" />,
                          color: "bg-[#7000ff] text-white"
                      },
                      {
                          title: "Intense Testing & QA",
                          desc: "We crash-test your app on dozens of devices, ensuring zero bugs and butter-smooth performance before the final bell.",
                          icon: <ShieldCheck className="w-6 h-6" />,
                          color: "bg-black text-white"
                      },
                      {
                          title: "Launch & Support",
                          desc: "We handle the store submissions and marketing assets, then stick around to ensure your app scales to the moon.",
                          icon: <Zap className="w-6 h-6" />,
                          color: "bg-[#ccff00]"
                      }
                    ].map((step, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className={`flex items-center gap-6 p-8 border-4 border-black brutal-shadow rounded-2xl ${step.color}`}
                        >
                            <div className="w-16 h-16 border-4 border-black rounded-full bg-white flex items-center justify-center shrink-0">
                                <span className="text-black font-black text-2xl">{idx + 1}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black lowercase mb-2 font-display">{step.title}</h3>
                                <p className="font-bold opacity-80">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                  </div>
              </div>
          </div>
      </section>

      {/* See Our Work in Action */}
      <section className="py-32 bg-gray-50 border-b-[8px] border-black px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-6xl font-black font-display tracking-tight leading-[0.9] lowercase mb-8">
              see our <span className="bg-[#ccff00] px-3 border-2 border-black inline-block -rotate-2 brutal-shadow-sm">work</span> in action
            </h2>
            <p className="max-w-2xl mx-auto text-xl font-medium text-black/70">
              Exceptional work speaks for itself. Explore how we transform complex mobile challenges into elegant digital solutions with these project case studies.
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center bg-white border-4 border-black rounded-3xl overflow-hidden hover:-translate-y-2 transition-all brutal-shadow p-4"
              >
                <div className="aspect-video relative w-full rounded-2xl overflow-hidden bg-black mb-6 border-2 border-black">
                  <iframe 
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-4 pb-4">
                  <h4 className="text-xl font-black lowercase mb-2 font-display">{video.title}</h4>
                  <p className="text-sm font-bold text-black/60 leading-relaxed">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ccff00] pt-32 pb-48 relative overflow-hidden text-center px-6 border-t-[8px] border-black">
        <div className="absolute top-20 left-10 text-black opacity-10 animate-brutal-float">
          <Zap size={140} />
        </div>
        <div className="absolute bottom-40 right-20 text-black opacity-10 animate-brutal-float delay-1000">
          <Star size={120} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-7xl md:text-9xl font-black font-display leading-[0.85] tracking-tighter mb-12 text-black lowercase">
            don't be<br />
            <span className="text-[#7000ff]">boring.</span>
          </h2>
          
          <a 
            href="https://wa.me/923233260859"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-black text-[#ccff00] text-2xl md:text-3xl font-black px-12 py-6 border-4 border-black rounded-full brutal-shadow bouncy hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-4 lowercase">
              Start Building Now
              <ArrowUpRight size={32} />
            </span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#f4f4f5] border-t-[8px] border-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-5xl font-black font-display mb-12 text-center lowercase tracking-tight">
            wtf is <span className="text-[#7000ff]">important?</span>
          </h2>

          <div className="space-y-6">
            {[
              { 
                q: "What is the difference between Flutter and React Native?", 
                a: "Both are cross-platform frameworks. React Native is JavaScript-based and highly flexible, while Flutter uses Dart and is incredible for complex custom animations. We select the best fit for your project." 
              },
              { 
                q: "Will my app work offline?", 
                a: "Yes. We can build robust offline-first architectures using local databases. Users can browse content offline, which seamlessly syncs to the cloud when the internet connects." 
              },
              { 
                q: "Do you help with app maintenance after it launches?", 
                a: "Absolutely. We offer maintenance packages to ensure compatibility with new iOS/Android updates, monitor crash reports, and deploy new features." 
              },
              { 
                q: "Do you design the app UI/UX or just write the code?", 
                a: "We provide end-to-end development. Our design team creates wireframes, prototypes, and final UI/UX designs before our engineers start coding." 
              },
              { 
                q: "Will you upload the app to the Apple App Store and Google Play?", 
                a: "Yes. We handle the strict compliance guidelines, App Store Optimization (ASO), and the entire submission process for both platforms." 
              },
              { 
                q: "How do you secure user data and payments in the app?", 
                a: "We use tokenization, encrypted databases, biometric login integration (FaceID/Fingerprint), and secure REST APIs to ensure complete data protection." 
              },
              { 
                q: "Can my app scale if it suddenly gets thousands of users?", 
                a: "Yes. We build mobile apps on cloud-native backend infrastructures (like AWS or Firebase) that auto-scale server resources instantly to handle massive traffic spikes." 
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white border-4 border-black rounded-2xl brutal-shadow open:bg-white transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer select-none group-open:bg-gray-100 rounded-t-xl transition-colors">
                  <span className="text-xl font-bold font-display lowercase">{faq.q}</span>
                  <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45 bg-[#ccff00]">
                    <Plus className="w-6 h-6" />
                  </div>
                </summary>
                <div className="p-6 pt-0 border-t-2 border-black/10 mt-4">
                  <p className="text-lg font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking / Related Services */}
      <section className="py-24 bg-white border-t-8 border-black relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-mono text-black/50 mb-12 uppercase tracking-[0.4em] font-bold">[ RELATED_SYSTEMS ]</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Software", path: "/custom-software", icon: <SettingsIcon className="w-5 h-5" /> },
              { title: "Web Development", path: "/web-development", icon: <Globe className="w-5 h-5" /> },
              { title: "AI Agents", path: "/ai-agent-development", icon: <Cpu className="w-5 h-5" /> },
              { title: "SEO Strategy", path: "/seo-mastery", icon: <Star className="w-5 h-5" /> }
            ].map((link, i) => (
              <Link 
                key={i} 
                to={link.path} 
                className="group flex items-center justify-between p-8 bg-gray-50 border-4 border-black rounded-2xl brutalist-shadow transition-all hover:-translate-y-1 hover:bg-[#ccff00]"
              >
                <div className="flex items-center gap-4">
                  <div className="text-black bg-white border-2 border-black p-3 rounded-lg group-hover:bg-black group-hover:text-white transition-all">
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

      <section className="bg-[#ccff00] border-t-[8px] border-black pt-20 pb-8 relative overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none z-0">
             <span className="text-[15vw] font-black text-black opacity-10 whitespace-nowrap tracking-tighter block translate-y-[40%] lowercase font-display">
                 ABUQITMIRLABS .TECH
             </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="md:col-span-2">
                    <div className="w-16 h-16 bg-[#ccff00] border-4 border-black rounded-full flex items-center justify-center font-bold text-3xl mb-6 brutal-shadow-sm">
                        q
                    </div>
                    <p className="text-xl font-medium max-w-sm">
                        building the internet for the next generation of digital leaders.
                    </p>
                </div>
                
                <div className="">
                    <h4 className="font-display font-black text-xl mb-6 lowercase bg-black text-white inline-block px-2 rotate-2">services</h4>
                    <ul className="space-y-4 font-bold">
                        <li><Link to="/custom-software" className="hover:underline decoration-4 decoration-[#ff0099]">custom software</Link></li>
                        <li><Link to="/mobile-app-development" className="hover:underline decoration-4 decoration-[#ff0099]">mobile apps</Link></li>
                        <li><Link to="/#services" className="hover:underline decoration-4 decoration-[#ff0099]">all services</Link></li>
                    </ul>
                </div>

                <div className="">
                    <h4 className="font-display font-black text-xl mb-6 lowercase bg-black text-white inline-block px-2 -rotate-2">company</h4>
                    <ul className="space-y-4 font-bold">
                        <li><Link to="/#about" className="hover:underline decoration-4 decoration-[#7000ff]">about us</Link></li>
                        <li><Link to="/#contact" className="hover:underline decoration-4 decoration-[#7000ff]">contact</Link></li>
                        <li><Link to="/#faq" className="hover:underline decoration-4 decoration-[#7000ff]">faq</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end border-t-4 border-black pt-8">
                <p className="font-bold text-sm">© 2026 ABUQITMIRLABS.TECH</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-[#ccff00] transition-colors brutal-shadow-sm">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-[#7000ff] hover:text-white transition-colors brutal-shadow-sm">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
