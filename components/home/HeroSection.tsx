"use client";

import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Particles } from "@/components/ui/Particles";
import { RobotImage } from "@/components/robot/RobotImage";
import { RobotCanvasParticles } from "@/components/robot/RobotCanvasParticles";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { useRobotHeroScroll } from "@/hooks/useRobotHeroScroll";
import { useMagneticButton } from "@/hooks/useMagneticButton";
import { scrollToId } from "@/components/layout/SmoothScrollProvider";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLDivElement>(null);

  useHeroAnimation(rootRef);
  useRobotHeroScroll(rootRef, robotRef);
  useMagneticButton(primaryBtnRef, { strength: 0.25 });

  const scrollTo = (id: string) => scrollToId(id);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden ai-mesh noise-overlay pt-24 md:pt-32"
    >
      <div
        data-parallax-slow
        className="ai-grid absolute inset-0 opacity-25 pointer-events-none"
      />
      <Particles count={28} />
      <RobotCanvasParticles className="lg:hidden" density={36} />

      <div
        data-parallax-fast
        className="absolute top-[15%] right-[8%] h-[40vmax] w-[40vmax] rounded-full bg-magenta/15 blur-[100px] animate-float-slow pointer-events-none"
      />
      <div
        data-parallax-slow
        className="absolute bottom-[5%] left-[5%] h-[45vmax] w-[45vmax] rounded-full bg-purple-700/25 blur-[120px] animate-float-slow [animation-direction:reverse] pointer-events-none"
      />

      <div className="container-x relative z-10 w-full px-6 md:px-12 lg:px-20 py-12 lg:py-24">
        {/* Mobile / tablet: Hero robot is now handled by AetherCanvas */}

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            <div data-hero-pill className="inline-block">
              <Pill pulsing>MIT Mysore · CSE AI & ML</Pill>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight text-balance"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="block overflow-hidden">
                <span data-hero-word className="inline-block">
                  Building&nbsp;
                </span>
                <span data-hero-word className="inline-block">
                  The&nbsp;
                </span>
                <span data-hero-word className="inline-block">
                  Future&nbsp;
                </span>
                <span data-hero-word className="inline-block">
                  Of
                </span>
              </span>
              <span
                data-hero-gradient
                className="block gradient-text-animated mt-1"
              >
                AI Innovation
              </span>
            </h1>

            <p
              data-hero-sub
              className="max-w-xl text-base md:text-lg text-muted leading-relaxed"
            >
              InnovateX is the innovation ecosystem of the CSE AI &amp; ML
              department at MIT Mysore — building, learning, and shipping the
              future, together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div data-hero-cta ref={primaryBtnRef} className="inline-block">
                <Button
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  onClick={() => scrollTo("events")}
                >
                  Explore Events
                </Button>
              </div>
              <div data-hero-cta className="inline-block">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Calendar size={16} />}
                  iconPosition="left"
                  onClick={() => scrollTo("upcoming")}
                >
                  Upcoming Events
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-10 pt-4">
              <StatItem value="137+" label="Members" />
              <Divider />
              <StatItem value="30+" label="Events" />
              <Divider />
              <StatItem value="4" label="Editions" />
            </div>
          </div>

          {/* Desktop: spacer — RobotScene fixed layer fills this column */}
          <div
            data-hero-robot
            className="hidden lg:col-span-5 lg:flex items-center justify-center min-h-[min(52vh,560px)]"
            aria-hidden
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted z-10">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-purple-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div data-hero-stat className="flex flex-col">
      <span className="font-display text-2xl md:text-3xl font-extrabold gradient-text">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted mt-0.5">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <div data-hero-stat className="h-10 w-px bg-white/10" />;
}
