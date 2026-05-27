"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Particles } from "@/components/ui/Particles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export interface EventPageData {
  title: string;
  tagline: string;
  description: string;
  logo?: string;
  heroGradient: string;
  pillLabel: string;
  meta: { label: string; value: string; icon?: React.ReactNode }[];
  overview: string;
  timeline: { phase: string; description: string }[];
  stats: { value: string; label: string }[];
  gallery?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export function EventPageTemplate({ data }: { data: EventPageData }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero data={data} />
        <Overview data={data} />
        <Timeline data={data} />
        <Impact data={data} />
        <CTA data={data} />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

function Hero({ data }: { data: EventPageData }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef, { stagger: 0.12 });

  return (
    <section
      ref={rootRef}
      className="relative min-h-[90dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-32"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={30} />

      <div
        className={`absolute top-[15%] right-[10%] h-[40vmax] w-[40vmax] rounded-full blur-[100px] animate-float-slow pointer-events-none opacity-30 bg-gradient-to-br ${data.heroGradient}`}
      />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-reveal>
              <Pill pulsing>{data.pillLabel}</Pill>
            </div>

            <h1
              data-reveal
              className="font-display font-extrabold tracking-tighter leading-[0.95]"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                letterSpacing: "-0.04em",
              }}
            >
              <GradientText variant="animated">{data.title}</GradientText>
            </h1>

            <p
              data-reveal
              className="text-lg md:text-2xl text-purple-300 font-medium"
            >
              {data.tagline}
            </p>

            <p
              data-reveal
              className="max-w-xl text-base md:text-lg text-muted leading-relaxed"
            >
              {data.description}
            </p>

            <div data-reveal className="flex flex-wrap gap-3">
              {data.meta.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm"
                >
                  {m.icon}
                  <span className="text-muted">{m.label}:</span>
                  <span className="font-display font-semibold">{m.value}</span>
                </div>
              ))}
            </div>

            {data.ctaHref && (
              <div data-reveal className="pt-2">
                <Button size="lg" icon={<ArrowRight size={18} />}>
                  <Link href={data.ctaHref}>{data.ctaText || "Register"}</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div
              data-reveal
              className={`relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br ${data.heroGradient} shadow-glow-lg`}
            >
              {data.logo ? (
                <Image
                  src={data.logo}
                  alt={data.title}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-9xl font-black text-white/20">
                    {data.title.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview({ data }: { data: EventPageData }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 max-w-4xl">
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display mb-4"
        >
          · Overview
        </p>
        <h2
          data-reveal
          className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8"
        >
          About <GradientText>{data.title}</GradientText>
        </h2>
        <p
          data-reveal
          className="text-muted text-lg md:text-xl leading-relaxed"
        >
          {data.overview}
        </p>
      </div>
    </section>
  );
}

function Timeline({ data }: { data: EventPageData }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · How it works
          </p>
          <h2
            data-reveal
            className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            The <GradientText>journey</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.timeline.map((phase, idx) => (
            <GlassCard
              key={phase.phase}
              data-reveal
              hoverable
              className="p-6 md:p-7 relative"
            >
              <div className="absolute -top-4 left-6 h-8 w-8 rounded-full glass-card-strong flex items-center justify-center font-display text-xs font-bold gradient-text">
                {(idx + 1).toString().padStart(2, "0")}
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {phase.phase}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact({ data }: { data: EventPageData }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4 text-center mx-auto">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · Impact
          </p>
          <h2
            data-reveal
            className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            By the <GradientText>numbers</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.stats.map((stat) => (
            <GlassCard
              key={stat.label}
              data-reveal
              hoverable
              className="p-6 md:p-8 text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text leading-none mb-2">
                {stat.value}
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ data }: { data: EventPageData }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <GlassCard
          data-reveal
          variant="conic"
          className="relative overflow-hidden"
        >
          <Particles count={20} />
          <div className="relative z-10 p-12 md:p-20 text-center space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Join the <GradientText>{data.title}</GradientText> ecosystem.
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
              {data.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button size="lg" icon={<ArrowRight size={18} />}>
                <Link href={data.ctaHref || "/contact"}>
                  {data.ctaText || "Get Involved"}
                </Link>
              </Button>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
              >
                <ArrowRight size={14} className="rotate-180" />
                All events
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export { Calendar, MapPin };
