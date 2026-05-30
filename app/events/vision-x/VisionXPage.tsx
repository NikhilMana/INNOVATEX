"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  MapPin,
  Calendar,
  Plus,
  Minus,
  Code,
  Mic,
  Wrench,
  Layers,
  Trophy,
  Brain,
  Palette,
  Music,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Badge } from "@/components/ui/Badge";
import { Particles } from "@/components/ui/Particles";
import { Countdown } from "@/components/events/Countdown";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { visionX, type Session, type TrackFormat } from "@/data/vision-x";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  mic: Mic,
  tool: Wrench,
  layers: Layers,
  trophy: Trophy,
  brain: Brain,
  palette: Palette,
  music: Music,
};

const formatColor: Record<TrackFormat, string> = {
  hackathon: "bg-magenta/15 border-magenta/30 text-pink-300",
  workshop: "bg-purple-500/15 border-purple-400/30 text-purple-300",
  talk: "bg-blue-500/15 border-blue-400/30 text-blue-300",
  expo: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
  competition: "bg-amber-500/15 border-amber-400/30 text-amber-300",
  cultural: "bg-rose-500/15 border-rose-400/30 text-rose-300",
};

export function VisionXPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Poster />
        <About />
        <Tracks />
        <Schedule />
        <FAQs />
        <RegisterCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef, { stagger: 0.15 });

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-24"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={40} />

      <div className="absolute top-1/4 right-[10%] h-[40vmax] w-[40vmax] rounded-full bg-magenta/20 blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] h-[45vmax] w-[45vmax] rounded-full bg-purple-700/30 blur-[120px] animate-float-slow [animation-direction:reverse] pointer-events-none" />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="space-y-8 text-center max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
          <div data-reveal>
            <Pill pulsing>Department Fest 2026</Pill>
          </div>

          <h1
            data-reveal
            className="font-display font-black tracking-tighter leading-[0.95] w-full"
            style={{
              fontSize: "clamp(2.5rem, 12vw, 14rem)",
              letterSpacing: "-0.05em",
            }}
          >
            <span className="gradient-text-animated">VISION</span>{" "}
            <span className="text-white">X</span>
          </h1>

          <p
            data-reveal
            className="text-base sm:text-lg md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed text-balance"
          >
            {visionX.tagline}
          </p>

          <div
            data-reveal
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2 w-full max-w-full"
          >
            <div className="flex items-center gap-2 glass-card rounded-full px-4 py-2 text-xs sm:text-sm text-center">
              <Calendar size={14} className="text-purple-400 shrink-0" />
              <span>{visionX.dateLong}</span>
            </div>
            <div className="flex items-center gap-2 glass-card rounded-full px-4 py-2 text-xs sm:text-sm text-center">
              <MapPin size={14} className="text-purple-400 shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">{visionX.venue}</span>
            </div>
          </div>

          <div data-reveal className="flex justify-center pt-6 w-full max-w-full overflow-hidden">
            <div className="scale-75 sm:scale-100 transform origin-center flex justify-center w-full">
              <Countdown target={visionX.date} />
            </div>
          </div>

          <div
            data-reveal
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4 w-full"
          >
            <a href={visionX.registerUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" icon={<ArrowRight size={18} />} fullWidth>
                Register Now
              </Button>
            </a>
            {visionX.feedbackUrl && (
              <a href={visionX.feedbackUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" fullWidth>
                  Feedback Form
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Poster() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative py-12 md:py-24 overflow-hidden">
      <div className="container-x relative z-10 flex justify-center">
        <div data-reveal className="relative w-full max-w-4xl h-[70vh] md:h-[85vh] rounded-3xl overflow-hidden glass-card-strong shadow-glow-lg border-white/10 bg-black/20">
          <Image
            src="/images/vision x poster.JPEG"
            alt="Vision X Event Poster"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · About Vision X
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            One day. <GradientText>Two tracks</GradientText>.
            <br />
            One ecosystem of ideas.
          </h2>
          <p
            data-reveal
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            {visionX.overview}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {visionX.kpis.map((kpi) => (
              <GlassCard
                key={kpi.label}
                data-reveal
                hoverable
                className="p-6 md:p-8"
              >
                <div className="space-y-2">
                  <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text leading-none">
                    {kpi.value}
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                    {kpi.label}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);
  const [filter, setFilter] = useState<TrackFormat | "all">("all");

  const filtered =
    filter === "all"
      ? visionX.tracks
      : visionX.tracks.filter((t) => t.format === filter);

  const formats: Array<{ key: TrackFormat | "all"; label: string }> = [
    { key: "all", label: "All" },
    { key: "hackathon", label: "Hackathon" },
    { key: "workshop", label: "Workshop" },
    { key: "talk", label: "Talks" },
    { key: "expo", label: "Expo" },
    { key: "competition", label: "Competitions" },
    { key: "cultural", label: "Cultural" },
  ];

  return (
    <section
      ref={rootRef}
      id="tracks"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · Programs
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <GradientText>Tracks</GradientText> &amp; Events
          </h2>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((track) => {
            const Icon = iconMap[track.icon] || Code;
            return (
              <GlassCard
                key={track.id}
                data-reveal
                hoverable
                className="p-6 md:p-7"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl glass-card-strong flex items-center justify-center text-purple-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                    {track.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {track.description}
                  </p>
                  <a 
                    href={visionX.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
                  >
                    Register
                    <ArrowRight size={12} />
                  </a>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section
      ref={rootRef}
      id="schedule"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · Event Schedule
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            What&apos;s <GradientText>happening</GradientText> when.
          </h2>
        </div>

        <div data-reveal className="flex gap-2 mb-8">
          {visionX.schedule.map((day, idx) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(idx)}
              className={cn(
                "rounded-2xl px-4 py-3 text-left transition-all duration-300 flex-1 md:flex-none",
                activeDay === idx
                  ? "glass-card-strong border-purple-400/40 shadow-glow-sm"
                  : "glass-card hover:border-purple-400/30"
              )}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-display">
                {day.date}
              </p>
              <p className="font-display font-bold text-sm mt-0.5">
                {day.label}
              </p>
            </button>
          ))}
        </div>

        <GlassCard data-reveal className="overflow-hidden">
          <div className="divide-y divide-white/5">
            {visionX.schedule[activeDay].sessions.map((session, idx) => (
              <SessionRow key={idx} session={session} />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function SessionRow({ session }: { session: Session }) {
  return (
    <div className="p-5 md:p-6 grid grid-cols-12 gap-4 items-center hover:bg-white/[0.02] transition-colors">
      <div className="col-span-3 md:col-span-2">
        <p className="font-display font-extrabold text-xl md:text-2xl gradient-text tabular-nums">
          {session.time}
        </p>
      </div>
      <div className="col-span-9 md:col-span-10 space-y-1">
        <p className="font-display font-semibold text-base md:text-lg">
          {session.title}
        </p>
        {session.speaker && (
          <p className="text-xs text-purple-300">{session.speaker}</p>
        )}
        {session.venue && (
          <p className="text-xs text-muted flex items-center gap-1">
            <MapPin size={10} />
            {session.venue}
          </p>
        )}
      </div>
    </div>
  );
}





function FAQs() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={rootRef}
      id="faq"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10 max-w-3xl mx-auto">
        <div className="mb-12 space-y-4 text-center">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · Questions
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Frequently <GradientText>asked</GradientText>.
          </h2>
        </div>

        <div className="space-y-3">
          {visionX.faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <GlassCard key={idx} data-reveal className="overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-semibold pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={cn(
                      "h-8 w-8 shrink-0 rounded-full glass-card-strong flex items-center justify-center transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out-expo",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RegisterCTA() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="register"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <GlassCard
          variant="conic"
          data-reveal
          className="relative overflow-hidden"
        >
          <Particles count={25} />
          <div className="relative z-10 p-12 md:p-20 text-center space-y-6">
            <Badge variant="featured">Limited Seats</Badge>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Be part of <GradientText>Vision X</GradientText>.
            </h2>
            <p className="text-muted text-base md:text-xl max-w-xl mx-auto">
              One day. Two tracks. Hundreds of builders. Lock in your seat.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" icon={<ArrowRight size={18} />}>
                <a href={visionX.registerUrl} target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
              {visionX.feedbackUrl && (
                <Button size="lg" variant="secondary">
                  <a href={visionX.feedbackUrl} target="_blank" rel="noopener noreferrer">Feedback Form</a>
                </Button>
              )}
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
              >
                Back to all events
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
