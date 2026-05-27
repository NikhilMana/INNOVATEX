"use client";

import { useRef } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { sponsors } from "@/data/sponsors";

export function SponsorsMarquee() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  const doubled = [...sponsors, ...sponsors];

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 mb-12">
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display text-center"
        >
          · Backed By
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        data-reveal
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none"
          aria-hidden
        />

        <div className="flex animate-marquee gap-12 py-6 hover:[animation-play-state:paused]">
          {doubled.map((sponsor, idx) => (
            <div
              key={`${sponsor.name}-${idx}`}
              className="flex-shrink-0 group"
            >
              <div className="h-16 px-8 flex items-center justify-center glass-card rounded-2xl transition-all duration-500 hover:border-purple-400/40 hover:shadow-glow-sm">
                <span className="font-display text-lg font-bold text-muted whitespace-nowrap group-hover:gradient-text transition-all">
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
