import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPage = () => {
  return (
    <div className="bg-[#050505] text-zinc-400 min-h-screen font-sans selection:bg-white/10 selection:text-white">
      <Helmet>
        <title>Privacy Policy | ABUQITMIRLABS .TECH</title>
        <meta name="description" content="Read the ABUQITMIRLABS .TECH Privacy Policy. We are committed to protecting your data and maintaining the highest standards of digital privacy during our software development process." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/privacy" />
      </Helmet>

      <Header />
      <Breadcrumbs />

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-white/5 p-10 md:p-20 rounded-[3rem] shadow-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12 leading-none">
            Privacy <br />
            <span className="text-zinc-600">Policy.</span>
          </h1>

          <div className="space-y-12 text-lg leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">1. Information Collection</h2>
              <p>
                We collect information that you provide directly to us through contact forms, WhatsApp communications, and email inquiries. This may include your name, email address, phone number, and project details. We also collect non-identifiable technical data through cookies to improve our website performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">2. Use of Information</h2>
              <p>
                The information we collect is used strictly to:
              </p>
              <ul className="list-disc pl-8 mt-4 space-y-3">
                <li>Communicate with you regarding project inquiries.</li>
                <li>Deliver and customize our software development services.</li>
                <li>Provide technical support and security updates.</li>
                <li>Improve our localized SEO and marketing strategies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">3. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (like cloud hosting or CRM platforms) only to the extent necessary to fulfill our service obligations to you, under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">4. Security Measures</h2>
              <p>
                We implement industrial-grade security protocols, including SSL encryption and secure API handling, to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">5. Global Compliance (GDPR, APP)</h2>
              <p>
                We respect international data privacy laws. If you are accessing our services from the UK, EU, or Australia, we ensure our data handling processes align with the GDPR and Australian Privacy Principles respectively.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">6. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain site features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">7. Changes to Policy</h2>
              <p>
                ABUQITMIRLABS .TECH reserves the right to update this Privacy Policy at any time. Significant changes will be noted on this page with an updated "Last Modified" date.
              </p>
            </section>

            <section className="pt-20 border-t border-white/5">
              <p className="text-sm font-mono text-zinc-600 uppercase tracking-widest">
                Last Modified: May 2026 // Privacy Shield Enabled
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
