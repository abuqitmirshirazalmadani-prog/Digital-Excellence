import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star } from 'lucide-react';
import NexusHero from '@/components/ui/nexus-hero';
import TrustSection from '../components/TrustSection';
import ApproachSection from '../components/ApproachSection';
import DifferentiatorsSection from '../components/DifferentiatorsSection';
import ImpactSection from '../components/ImpactSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import CountryMarquee from '../components/CountryMarquee';
import TechStackSection from '../components/TechStackSection';
import PortfolioSection from '../components/PortfolioSection';
import VideoPortfolio from '../components/VideoPortfolio';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/20 selection:text-white">
      <Helmet>
        <title>AI Mobile App Development Company | SaaS & Flutter Apps ABUQITMIRLABS</title>
        <meta name="description" content="ABUQITMIRLABS .TECH builds futuristic AI-powered mobile apps, SaaS platforms, Flutter applications, and no-code startup solutions with premium UI/UX and scalable architecture." />
        <link rel="canonical" href="https://abuqitmirlabs.tech" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Mobile App Development Company | SaaS & Flutter Apps ABUQITMIRLABS" />
        <meta property="og:description" content="ABUQITMIRLABS .TECH builds futuristic AI-powered mobile apps, SaaS platforms, Flutter applications, and no-code startup solutions with premium UI/UX and scalable architecture." />
        <meta property="og:url" content="https://abuqitmirlabs.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Mobile App Development Company | SaaS & Flutter Apps ABUQITMIRLABS" />
        <meta name="twitter:description" content="ABUQITMIRLABS .TECH builds futuristic AI-powered mobile apps, SaaS platforms, Flutter applications, and no-code startup solutions with premium UI/UX and scalable architecture." />
        <meta name="twitter:image" content="https://i.postimg.cc/hjLzDQHK/abuqitmir222.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
            "name": "ABUQITMIRLABS.TECH",
            "url": "https://abuqitmirlabs.tech",
            "logo": "https://abuqitmirlabs.tech/logo.svg",
            "alternateName": "Abu Qitmir Labs",
            "image": "https://i.postimg.cc/hjLzDQHK/abuqitmir222.png",
            "description": "ABUQITMIRLABS .TECH builds futuristic AI-powered mobile apps, SaaS platforms, Flutter applications, and no-code startup solutions with premium UI/UX and scalable architecture.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.5074,
              "longitude": -0.1278
            },
            "priceRange": "$$$",
            "sameAs": [
              "https://twitter.com/abuqitmirlabs",
              "https://www.linkedin.com/company/abuqitmirlabs",
              "https://www.facebook.com/profile.php?id=61583768706452",
              "https://www.instagram.com/abuqitmirshirazalmadani/",
              "https://www.youtube.com/@AbuQitmir"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+923233260859",
              "contactType": "customer service",
              "areaServed": ["US", "UK", "CA", "PK", "PL"],
              "availableLanguage": ["en", "pl", "ur"]
            },
            "founder": {
                "@type": "Person",
                "name": "Shiraz Almadani"
            }
          })}
        </script>

        {/* Breadcrumb Schema (Home) */}
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
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <NexusHero />
      
      <div className="overflow-hidden transform z-20 bg-[#B9FF66] w-full border-y-4 pt-4 pb-4 relative shadow-[0_8px_0_0_rgba(0,0,0,1)] -rotate-1">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 text-3xl md:text-5xl font-black tracking-tighter uppercase items-center text-black px-10">
              <span>Comprehensive digital strategy</span> <Star className="fill-current" size={32} />
              <span>End-to-end software engineering</span> <Star className="fill-current" size={32} />
              <span>Performance-focused web development</span> <Star className="fill-current" size={32} />
              <span>Strategic SEO and content growth</span> <Star className="fill-current" size={32} />
              <span>Custom AI-powered automation</span> <Star className="fill-current" size={32} />
              <span>Conversion-driven UI/UX design</span> <Star className="fill-current" size={32} />
              <span>Scalable mobile app solutions</span> <Star className="fill-current" size={32} />
            </div>
          ))}
        </div>
      </div>

      <TrustSection />
      
      <ApproachSection />
      
      <DifferentiatorsSection />
      
      <ImpactSection />

      <ServicesSection />
      
      <CountryMarquee />
      
      <ProcessSection />

      <TechStackSection />
      
      <PortfolioSection />
      <VideoPortfolio />

      <TestimonialsSection />

      <FAQSection />

      <Footer />
    </main>
  );
}
