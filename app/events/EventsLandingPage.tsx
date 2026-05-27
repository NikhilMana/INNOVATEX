"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Badge } from "@/components/ui/Badge";
import { Particles } from "@/components/ui/Particles";
import { Button } from "@/components/ui/Button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { events } from "@/data/events";
import { upcomingEvents } from "@/data/upcoming";

export function EventsLandingPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <FlagshipFeature />
        <AllEvents />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef, { stagger: 0.12 });

  return (
    <section
      ref={rootRef}
      className="relative min-h-[60dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-32"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={25} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl space-y-6">
          <div data-reveal>
            <Pill pulsing>All Events</Pill>
          </div>
          <h1
            data-reveal
            className="font-display font-extrabold tracking-tighter leading-[0.95]"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Our <GradientText variant="animated">programs</GradientText>.
          </h1>
          <p
            data-reveal
            className="text-lg md:text-2xl text-muted max-w-2xl"
          >
            Five programs spanning hackathons, talks, workshops, and the annual
            department fest — each built around a different mode of learning.
          </p>
        </div>
      </div>
    </section>
  );
}

function FlagshipFeature() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);
  const visionX = upcomingEvents.find((e) => e.id === "vision-x");
  if (!visionX) return null;

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <GlassCard
          data-reveal
          variant="conic"
          className="relative overflow-hidden"
        >
          <Particles count={20} />
          <div className="relative z-10 p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <Badge variant="featured">
                <Sparkles size={10} className="-ml-0.5" />
                Flagship · Upcoming
              </Badge>
              <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
                <GradientText variant="animated">Vision X</GradientText>
              </h2>
              <p className="text-purple-300 text-base md:text-lg font-medium">
                Department Fest 2025 · December
              </p>
              <p className="text-muted text-base leading-relaxed">
                {visionX.description}
              </p>
              <div className="pt-2">
                <Button size="lg" icon={<ArrowRight size={18} />}>
                  <Link href="/events/vision-x">View Vision X</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-magenta via-purple-500 to-purple-700 opacity-90 shadow-glow-lg" />
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/70 mb-3">
                    Department Fest
                  </p>
                  <p className="font-display text-7xl md:text-9xl font-black leading-none">
                    VX
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mt-4">
                    2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function AllEvents() {
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
            · Annual Programs
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Four flagship <GradientText>programs</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Link
              key={event.slug}
              href={event.href}
              data-reveal
              className="group block"
            >
              <GlassCard variant="conic" hoverable className="overflow-hidden">
                <div className="p-8 min-h-[260px] flex flex-col justify-between gap-6">
                  <div className="flex items-start justify-between">
                    {event.logo ? (
                      <div className="h-14 w-14 rounded-2xl overflow-hidden glass-card-strong p-1">
                        <Image
                          src={event.logo}
                          alt={event.title}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover rounded-xl"
                        />
                      </div>
                    ) : (
                      <div
                        className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center font-display font-extrabold text-xl`}
                      >
                        {event.title.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-3xl font-extrabold tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-purple-300 text-sm font-medium">
                      {event.tagline}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-purple-300 group-hover:text-magenta transition-colors">
                    Explore
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
