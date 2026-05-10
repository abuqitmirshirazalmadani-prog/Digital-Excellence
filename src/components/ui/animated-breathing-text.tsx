"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  fontSize?: number
  minWeight?: number
  maxWeight?: number
  animationDuration?: number
  delayMultiplier?: number
  className?: string
}

export function AnimatedBreathingText({
  text,
  minWeight = 300,
  maxWeight = 900,
  animationDuration = 2,
  delayMultiplier = 0.1,
  className = ""
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll("span")
    const numLetters = spans.length

    spans.forEach((span, i) => {
      const mappedIndex = i - numLetters / 2
      span.style.animationDelay = mappedIndex * delayMultiplier + "s"
    })
  }, [text, delayMultiplier])

  const words = text.split(" ");
  
  let charIndex = 0;
  const content = words.map((word, wIdx) => {
    const wordChars = word.split("").map((char) => {
      const currentIdx = charIndex++;
      return (
        <span
          key={currentIdx}
          aria-hidden="true"
          style={{
            animation: `breath ${animationDuration}s alternate cubic-bezier(0.37, 0, 0.63, 1) infinite`,
            animationFillMode: "both",
            fontVariationSettings: `"wght" ${minWeight}`,
            display: "inline-block"
          }}
        >
          {char}
        </span>
      );
    });

    charIndex++; // for the space
    
    return (
      <span key={wIdx} className="inline-block whitespace-nowrap">
        {wordChars}
        {wIdx < words.length - 1 && (
          <span aria-hidden="true" style={{ display: "inline-block" }}>
            &nbsp;
          </span>
        )}
      </span>
    );
  });

  return (
    <div className={`flex items-center ${className}`}>
      <p
        ref={containerRef}
        aria-label={text}
        className="font-sans m-0 leading-tight"
        style={{
          fontFeatureSettings: '"wght"',
        }}
      >
        {content}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes breath {
            0% {
              font-variation-settings: "wght" ${minWeight};
            }
            100% {
              font-variation-settings: "wght" ${maxWeight};
            }
          }
        ` }} />
      </p>
    </div>
  )
}
