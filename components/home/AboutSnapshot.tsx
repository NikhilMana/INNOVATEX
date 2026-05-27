"use client";

import { useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/data/events";

export function AboutSnapshot() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
            >
              · About InnovateX
            </p>
            <h2
              data-reveal
              className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Where <GradientText>Curiosity</GradientText>
              <br />
              Meets Code
            </h2>
            <p
              data-reveal
              className="text-muted text-base md:text-lg leading-relaxed max-w-xl"
            >
              We&apos;re a student-led community within the CSE Artificial
              Intelligence &amp; Machine Learning department at MIT Mysore —
              building, learning, and shipping the future. Our work spans
              hackathons, research, talks, and a quarterly editorial.
            </p>
            <p
              data-reveal
              className="text-muted text-base md:text-lg leading-relaxed max-w-xl"
            >
              Four flagship programs. One mission: turn curiosity into output.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  useCountUp(numRef, value, { suffix });

  return (
    <GlassCard
      data-reveal
      hoverable
      glow={index === 0}
      className="p-6 md:p-8"
    >
      <div className="space-y-2">
        <div className="font-display text-5xl md:text-6xl font-extrabold gradient-text leading-none">
          <span ref={numRef}>0{suffix}</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
          {label}
        </p>
      </div>
    </GlassCard>
  );
}
