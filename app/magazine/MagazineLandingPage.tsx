"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, PenSquare } from "lucide-react";
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
import { cosmicEditions, type CosmicEdition } from "@/data/cosmic";
import { cn } from "@/lib/utils";

export function MagazineLandingPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <EditionsGrid />
        <EditorialProcess />
        <SubmitCTA />
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
      <Particles count={30} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl space-y-6">
          <div data-reveal>
            <Pill pulsing>Editorial · Quarterly</Pill>
          </div>
          <h1
            data-reveal
            className="font-display font-extrabold tracking-tighter leading-[0.9]"
            style={{
              fontSize: "clamp(4rem, 14vw, 14rem)",
              letterSpacing: "-0.05em",
            }}
          >
            <GradientText variant="animated">COSMIC</GradientText>
          </h1>
          <p
            data-reveal
            className="text-lg md:text-2xl text-muted max-w-2xl leading-relaxed"
          >
            The editorial voice of InnovateX — essays, deep-dives, interviews,
            and student writing from the frontier of AI and computing.
          </p>
        </div>
      </div>
    </section>
  );
}

function EditionsGrid() {
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
            · Archive
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Four <GradientText>editions</GradientText>. Years of stories.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-fr">
          {cosmicEditions.map((edition) => {
            const featured = edition.status === "upcoming";
            return (
              <div
                key={edition.slug}
                className={cn(
                  "lg:col-span-3",
                  featured && "lg:col-span-6 lg:row-span-2"
                )}
              >
                <EditionShowcase edition={edition} featured={featured} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EditionShowcase({
  edition,
  featured,
}: {
  edition: CosmicEdition;
  featured: boolean;
}) {
  return (
    <div data-reveal className="h-full">
      <Link href={edition.href} className="group block h-full">
        <GlassCard
          variant={featured ? "conic" : "default"}
          hoverable
          className={cn(
            "h-full overflow-hidden relative",
            featured && "shadow-glow-md"
          )}
        >
          {featured && <Particles count={20} />}
          <div
            className={cn(
              "p-6 flex flex-col gap-5 relative h-full",
              featured && "p-8 md:p-12"
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl bg-gradient-to-br flex items-center justify-center",
                edition.gradient,
                featured ? "aspect-[3/4]" : "aspect-[4/3]"
              )}
            >
              {!featured && edition.pageCount ? (
                <img
                  src={`/magazines/${edition.slug}/page_001.jpeg`}
                  alt={`${edition.title} Cover`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  <BookOpen
                    size={featured ? 40 : 24}
                    className="absolute top-4 left-4 text-white/40"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">
                      Edition {edition.edition}
                    </p>
                    <p
                      className={cn(
                        "font-display font-black leading-none",
                        featured ? "text-5xl md:text-7xl" : "text-3xl"
                      )}
                    >
                      {edition.title}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <p
                  className={cn(
                    "uppercase tracking-[0.2em] text-purple-300 font-display",
                    featured ? "text-sm" : "text-xs"
                  )}
                >
                  {edition.theme}
                </p>
                {edition.status === "upcoming" && (
                  <Badge variant="soon">Soon</Badge>
                )}
              </div>
              <p
                className={cn(
                  "text-muted leading-relaxed",
                  featured ? "text-base md:text-lg line-clamp-4" : "text-sm line-clamp-3"
                )}
              >
                {edition.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-muted font-display">
                {edition.releaseDate}
                {edition.articleCount && ` · ${edition.articleCount} pieces`}
              </span>
              <span
                className={cn(
                  "font-display font-semibold text-purple-300 group-hover:text-magenta transition-colors flex items-center gap-1",
                  featured ? "text-base" : "text-sm"
                )}
              >
                {edition.status === "upcoming" ? "Notify me" : "Read"}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </GlassCard>
      </Link>
    </div>
  );
}

function EditorialProcess() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);
  const steps = [
    { phase: "Concept", description: "Theme picked. Voices identified." },
    { phase: "Research", description: "Deep work. Interviews. Reading." },
    { phase: "Writing", description: "Drafts circulate. Edits sharpen." },
    { phase: "Design", description: "Visuals, typography, layout." },
    { phase: "Publish", description: "Live for the community." },
  ];

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · How We Make It
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Editorial <GradientText>process</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <GlassCard
              key={step.phase}
              data-reveal
              hoverable
              className="p-6 relative"
            >
              <div className="absolute -top-3 left-6 h-7 w-7 rounded-full glass-card-strong flex items-center justify-center font-display text-[10px] font-bold gradient-text">
                {(idx + 1).toString().padStart(2, "0")}
              </div>
              <div className="space-y-2 pt-2">
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {step.phase}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubmitCTA() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <GlassCard data-reveal variant="conic" className="overflow-hidden">
          <Particles count={25} />
          <div className="relative z-10 p-12 md:p-20 text-center space-y-6">
            <Badge variant="upcoming">Open Submissions</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Got a story for <GradientText>COSMIC 4.0</GradientText>?
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
              Essays, interviews, research roundups, tutorials, projects you
              shipped — we&apos;re reading.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button size="lg" icon={<PenSquare size={16} />} iconPosition="left">
                <Link href="/contact">Pitch a Story</Link>
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
