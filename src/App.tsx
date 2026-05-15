/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

// Lazy load all pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CustomSoftwarePage = lazy(() => import('./pages/CustomSoftwarePage'));
const MobileAppDevelopmentPage = lazy(() => import('./pages/MobileAppDevelopmentPage'));
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage'));
const AIAgentDevelopmentPage = lazy(() => import('./pages/AIAgentDevelopmentPage'));
const SEOPage = lazy(() => import('./pages/SEOPage'));
const GraphicsDesignPage = lazy(() => import('./pages/GraphicsDesignPage'));
const ContentWritingPage = lazy(() => import('./pages/ContentWritingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const USMarketPage = lazy(() => import('./pages/USMarketPage'));
const UKMarketPage = lazy(() => import('./pages/UKMarketPage'));
const PakistanMarketPage = lazy(() => import('./pages/PakistanMarketPage'));
const CanadaMarketPage = lazy(() => import('./pages/CanadaMarketPage'));
const PolandMarketPage = lazy(() => import('./pages/PolandMarketPage'));
const AustraliaMarketPage = lazy(() => import('./pages/AustraliaMarketPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

// Loading fallback
const PageLoader = () => (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#ccff00]/20 border-t-[#ccff00] rounded-full animate-spin"></div>
    </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/923233260859"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-[9999] group"
    aria-label="Contact on WhatsApp"
  >
    {/* Floating label */}
    <div className="absolute right-full mr-4 bottom-2 bg-black text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none border border-white/20">
      Mission Briefing
    </div>

    {/* Brutalist Button Container */}
    <div className="relative w-16 h-16 flex items-center justify-center transform transition-all group-hover:scale-105 active:scale-95 group-hover:-rotate-3">
      {/* Brutalist Background Square */}
      <div className="absolute inset-0 bg-[#25D366] border-2 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
      
      {/* Technical scanning lines (decorative) */}
      <div className="absolute inset-2 border-t border-black/10 animate-pulse pointer-events-none"></div>
      <div className="absolute inset-2 border-b border-black/10 animate-pulse delay-75 pointer-events-none"></div>

      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 border-2 border-black rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20">
        1
      </div>

      {/* WhatsApp Icon */}
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        fill="black"
        className="relative z-10"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.541 4.193 1.57 6.05L0 24l6.117-1.605a11.845 11.845 0 005.932 1.583h.005c6.627 0 12.032-5.403 12.035-12.039.001-3.207-1.246-6.222-3.504-8.48z" />
      </svg>
    </div>
  </a>
);

export default function App() {
  useEffect(() => {
    // Only dispatch in production/build time for pre-rendering
    const trigger = () => {
      // Small delay to ensure animations or lazy content settled
      setTimeout(() => {
        document.dispatchEvent(new Event('x-render-trigger'));
      }, 500);
    };
    
    trigger();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <FloatingWhatsApp />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/custom-software" element={<CustomSoftwarePage />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/ai-agent-development" element={<AIAgentDevelopmentPage />} />
            <Route path="/seo-mastery" element={<SEOPage />} />
            <Route path="/graphics-design" element={<GraphicsDesignPage />} />
            <Route path="/content-writing" element={<ContentWritingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/us-market" element={<USMarketPage />} />
            <Route path="/uk-market" element={<UKMarketPage />} />
            <Route path="/pakistan-market" element={<PakistanMarketPage />} />
            <Route path="/canada-market" element={<CanadaMarketPage />} />
            <Route path="/poland-market" element={<PolandMarketPage />} />
            <Route path="/australia-market" element={<AustraliaMarketPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
