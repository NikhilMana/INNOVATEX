"use client";

import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Particles } from "@/components/ui/Particles";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function AboutPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Mission />
        <Values />
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
      className="relative min-h-[70dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-32"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={28} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-reveal>
              <Pill pulsing>About InnovateX</Pill>
            </div>
            <h1
              data-reveal
              className="font-display font-extrabold tracking-tighter leading-[0.95]"
              style={{
                fontSize: "clamp(3rem, 9vw, 8rem)",
                letterSpacing: "-0.04em",
              }}
            >
              We&apos;re building
              <br />
              <GradientText variant="animated">the future</GradientText>.
            </h1>
            <p
              data-reveal
              className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
            >
              InnovateX is the innovation ecosystem of the CSE Artificial
              Intelligence &amp; Machine Learning department at MIT Mysore — a
              student-led community of builders, researchers, writers, and
              organizers.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div data-reveal className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card-strong shadow-glow-md">
              <Image
                src="/images/logos/logo.png"
                alt="CSE AI & ML — MIT Mysore"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 max-w-4xl">
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display mb-4"
        >
          · The Mission
        </p>
        <h2
          data-reveal
          className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Turn <GradientText>curiosity</GradientText> into output.
        </h2>
        <div className="space-y-6 text-muted text-lg md:text-xl leading-relaxed">
          <p data-reveal>
            InnovateX exists because curiosity, on its own, decays. It needs
            structure, peers, and a deadline. We&apos;re a community built
            around four programs that turn raw interest in AI/ML into
            shippable work — workshops that build, talks that inspire, sessions
            that teach, and hackathons that demand demos.
          </p>
          <p data-reveal>
            We&apos;re student-led. Faculty-mentored. Industry-engaged. And
            stubbornly biased toward shipping over discussing.
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  const values = [
    {
      title: "Build over Talk",
      description:
        "Working demos beat slides. Always. Every program is designed to produce something that runs.",
    },
    {
      title: "Open by Default",
      description:
        "Code, sessions, archives, magazine — all open. Knowledge compounds when it&apos;s shared.",
    },
    {
      title: "Student-Led",
      description:
        "Every program is owned by students. Faculty mentor; we drive.",
    },
    {
      title: "Curious, Always",
      description:
        "The field moves fast. We move with it — but never just because something is trending.",
    },
  ];

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · What We Believe
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Four <GradientText>principles</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((v, idx) => (
            <GlassCard
              key={v.title}
              data-reveal
              hoverable
              variant={idx % 2 === 0 ? "default" : "conic"}
              className="p-8 md:p-10"
            >
              <div className="space-y-3">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-purple-400">
                  0{idx + 1}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {v.title}
                </h3>
                <p
                  className="text-muted text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.description }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
