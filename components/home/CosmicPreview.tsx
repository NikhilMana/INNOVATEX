"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Particles } from "@/components/ui/Particles";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { cosmicEditions, type CosmicEdition } from "@/data/cosmic";
import { cn } from "@/lib/utils";

export function CosmicPreview() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="cosmic"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · COSMIC Magazine
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            The editorial voice
            <br />
            of <GradientText>InnovateX</GradientText>.
          </h2>
          <p data-reveal className="text-muted text-base md:text-lg max-w-lg">
            Four editions of essays, deep-dives, interviews, and student writing
            from the frontier of AI and computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cosmicEditions.map((edition) => (
            <EditionCard key={edition.slug} edition={edition} />
          ))}
        </div>

        <div data-reveal className="mt-12 text-center">
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
          >
            View all editions
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function EditionCard({ edition }: { edition: CosmicEdition }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const upcoming = edition.status === "upcoming";

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div data-reveal style={{ perspective: "1200px" }}>
      <Link href={edition.href} className="group block">
        <div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.3s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          <GlassCard
            variant={upcoming ? "conic" : "default"}
            hoverable
            className={cn(
              "relative overflow-hidden h-full",
              upcoming && "shadow-glow-md"
            )}
          >
            {upcoming && <Particles count={15} />}
            <div className="p-6 space-y-4 min-h-[380px] flex flex-col">
              <div
                className={`relative h-44 rounded-xl overflow-hidden bg-gradient-to-br ${edition.gradient} flex items-center justify-center`}
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <BookOpen
                  size={32}
                  className="absolute top-4 left-4 text-white/40"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">
                    Edition {edition.edition}
                  </p>
                  <p className="font-display text-3xl font-extrabold leading-tight">
                    {edition.title}
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-300 font-display">
                    {edition.theme}
                  </p>
                  {upcoming && <Badge variant="soon">Soon</Badge>}
                </div>
                <p className="text-muted text-sm leading-relaxed line-clamp-3">
                  {edition.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-muted font-display">
                  {edition.releaseDate}
                  {edition.articleCount && ` · ${edition.articleCount} pieces`}
                </span>
                <span className="text-sm font-display font-semibold text-purple-300 group-hover:text-magenta transition-colors flex items-center gap-1">
                  {upcoming ? "Notify me" : "Read"}
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </Link>
    </div>
  );
}
