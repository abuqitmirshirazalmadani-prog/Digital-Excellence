/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Footer from './components/Footer';
import AetherFlowHero from '@/components/ui/aether-flow-hero';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      <Header />
      <AetherFlowHero />
      
      {/* Additional sections can be added here */}
      <section className="relative z-10 py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">Intelligent AI Agents</h3>
                <p className="text-gray-400 leading-relaxed">Automate your complex workflows with custom-trained AI models that learn your business DNA.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">Scalable MVP Dev</h3>
                <p className="text-gray-400 leading-relaxed">Turning visionary ideas into robust, market-ready products with speed and technical precision.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">Semantic SEO</h3>
                <p className="text-gray-400 leading-relaxed">Dominate search rankings by focusing on intent and topical authority, not just keywords.</p>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
