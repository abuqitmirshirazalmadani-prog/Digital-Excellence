"use client";
import React from "react";
import { motion } from "motion/react";
import { Star, UserCircle } from "lucide-react";

export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xs w-full hover:bg-[#B9FF66] transition-colors group" 
                  key={`${index}-${i}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-black text-black" />
                    ))}
                  </div>
                  <div className="font-medium text-sm leading-relaxed mb-6 italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/10">
                    <UserCircle className="w-10 h-10 text-black/20 group-hover:text-black transition-colors" strokeWidth={1} />
                    <div className="flex flex-col">
                      <div className="font-black text-xs uppercase tracking-tighter leading-tight">{name}</div>
                      <div className="text-[10px] font-mono text-black/60 uppercase tracking-widest">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
