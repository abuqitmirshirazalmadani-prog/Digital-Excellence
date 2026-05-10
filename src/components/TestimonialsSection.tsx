"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";

const testimonials = [
  {
    text: "ABUQITMIRLABS.TECH tumhara shokria mere Liye itni achi mobile app banane ke Liye . I love ABUQITMIRLABS.TECH work. Thanks.",
    name: "Fareed Khan",
    role: "Mobile App Client",
  },
  {
    text: "Aap ka bht shokria aap mujhe atni achi website bana kr di.",
    name: "Hammad Sheikh33",
    role: "Website Client",
  },
  {
    text: "ABUQITMIRLABS.TECH delivered a stunning, high-performance website that perfectly captures our brand. The site loads lightning-fast, is fully responsive, and has already boosted our online inquiries significantly. Highly recommend for any website project.",
    name: "Rafay Badar",
    role: "Brand Director",
  },
  {
    text: "Main ne apni ecommerce website bnwai thi km paison main achi website banai hai.",
    name: "Khurram Jawad",
    role: "E-commerce Owner",
  },
  {
    text: "ABUQITMIRLABS.TECH's team nailed our brand storytelling with compelling copy that resonates with our audience. The website they built is fast, mobile-optimized, and conversion-focused. Our bounce rate dropped by 35%, and leads have skyrocketed. True professionals!",
    name: "David Ruiz",
    role: "CEO, Innovatech Solutions",
  },
  {
    text: "Working with ABUQITMIRLABS.TECH transformed our outdated website into a sleek, user-friendly platform. Their UI/UX design expertise made navigation intuitive, and the SEO optimizations boosted our search rankings overnight. We've seen a 50% increase in organic traffic!",
    name: "Sarah Jenkins",
    role: "Owner, GreenLeaf Organics",
  },
  {
    text: "Good public relations. Very good website developer",
    name: "Samad Abbasi",
    role: "Business Partner",
  },
  {
    text: "Exceptional service and deep technical expertise. ABUQITMIRLABS.TECH transformed our operational efficiency with custom AI agents.",
    name: "Fawad Ahmed",
    role: "Tech Entrepreneur",
  },
  {
    text: "The best in the market for high-speed React applications and SEO mastery. My search traffic doubled in just 3 months.",
    name: "Maria Kowalski",
    role: "Marketing Head",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden border-y-4 border-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[800px] mx-auto mb-16"
        >
          <div className="bg-[#B9FF66] border-2 border-black py-1 px-4 rounded-lg font-mono text-[10px] font-black uppercase tracking-widest text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            GMB Verification Active
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center text-white uppercase mb-6 leading-none">
            Verified Client <span className="text-[#B9FF66]">Intel</span>
          </h2>
          <p className="text-center text-zinc-400 font-mono text-sm uppercase tracking-widest leading-relaxed">
            Direct feedback from our global network of high-performance partners.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[800px] overflow-hidden lg:px-12">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
    </section>
  );
}
