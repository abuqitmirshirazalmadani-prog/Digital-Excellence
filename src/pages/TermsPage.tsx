import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const TermsPage = () => {
  return (
    <div className="bg-[#050505] text-zinc-400 min-h-screen font-sans selection:bg-white/10 selection:text-white">
      <Helmet>
        <title>Terms of Service | ABUQITMIRLABS .TECH</title>
        <meta name="description" content="Review the Terms of Service for ABUQITMIRLABS .TECH. Understand our engineering protocols, service agreements, and commitment to delivering high-performance tech solutions." />
        <link rel="canonical" href="https://abuqitmirlabs.tech/terms" />
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
            Terms of <br />
            <span className="text-zinc-600">Service.</span>
          </h1>

          <div className="space-y-12 text-lg leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by ABUQITMIRLABS .TECH ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">2. Services Description</h2>
              <p>
                ABUQITMIRLABS .TECH provides custom software development, web engineering, AI agent automation, SEO strategy, and digital branding services. The specific scope of work for each project will be defined in a separate Statement of Work (SOW) or Service Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">3. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all custom software, designs, and content created specifically for a client remain the intellectual property of the client upon final payment. ABUQITMIRLABS .TECH retains the rights to general engineering patterns, reusable code libraries, and technical methodologies developed during the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">4. Client Responsibilities</h2>
              <p>
                Clients are responsible for providing necessary project requirements, timely feedback, and access to relevant third-party accounts (hosting, domains, etc.). Delays in client feedback may lead to project timeline adjustments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">5. Payment Terms</h2>
              <p>
                Project phases are typically initiated upon receipt of a deposit. Final deliverables or source files are handed over upon full settlement of the agreed project fees. We do not offer refunds once a development phase has been initiated and work has been performed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">6. Limitation of Liability</h2>
              <p>
                ABUQITMIRLABS .TECH is not liable for any indirect, incidental, or consequential damages resulting from the use of our software or services. We strive for excellence but do not guarantee that third-party platforms (Google, Apple, etc.) will maintain consistent algorithm or hosting policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">7. Termination</h2>
              <p>
                Either party may terminate a project if the other party breaches a material term of the agreement. Termination protocols and final billing will be defined in the project SOW.
              </p>
            </section>

            <section className="pt-20 border-t border-white/5">
              <p className="text-sm font-mono text-zinc-600 uppercase tracking-widest">
                Last Updated: May 2026 // Version 1.2 // Secure Protocol Active
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
