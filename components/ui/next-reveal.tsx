'use client';

import { cn } from "@/lib/utils";
import React, { useState } from 'react';

interface FlipTextProps {
  word?: string;
  className?: string;
  titleClassName?: string;
}

export default function FlipTextReveal({ word = "DIGITAL REALITY", className = "", titleClassName = "" }: FlipTextProps) {
  const [key, setKey] = useState(0);

  const replay = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className={cn("flip-container", className)}>
      
      <div key={key} className="text-wrapper">
        <h1 className={cn("title", titleClassName)} aria-label={word}>
          {word.split("").map((char, i) => (
            <span
              key={`${key}-${i}`}
              className="char"
              style={{ "--index": i } as React.CSSProperties}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      <button className="replay-button" onClick={replay}>
        <span className="btn-text">Replay Action</span>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        /* --- MODIFIED FOR TRANSPARENT INTEGRATION --- */
        .flip-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: transparent; 
          color: white;
          overflow: hidden;
          width: 100%;
          perspective: 800px; 
        }

        /* --- Typography --- */
        .title {
          font-weight: 900;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          transform-style: preserve-3d;
          text-align: center;
        }

        /* --- 3D Character Animation --- */
        .char {
          display: inline-block;
          color: inherit;
          transform-origin: bottom center;
          
          opacity: 0;
          transform: rotateX(-90deg) translateY(20px);
          
          animation: flip-up 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: calc(0.06s * var(--index));
          will-change: transform, opacity;
        }

        /* --- Button --- */
        .replay-button {
          margin-top: 2rem;
          padding: 0.6rem 1.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 99px;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .replay-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }
        
        .replay-button:active {
          transform: scale(0.95);
        }

        /* --- Keyframes --- */
        @keyframes flip-up {
          0% {
            opacity: 0;
            transform: rotateX(-90deg) translateY(40px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .char {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}} />
    </div>
  );
}
