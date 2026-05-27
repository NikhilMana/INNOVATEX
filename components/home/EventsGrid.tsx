"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { events, type EventEntry } from "@/data/events";

export function EventsGrid() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="events"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · Our Programs
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Four flagship
            <br />
            <GradientText>programs</GradientText>, one mission.
          </h2>
          <p data-reveal className="text-muted text-base md:text-lg">
            Each program is built around a different mode of learning — from
            peer-led discussion to industry talks to hands-on builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: EventEntry }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div data-reveal style={{ perspective: "1200px" }}>
      <Link href={event.href} className="group block">
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
            variant="conic"
            hoverable
            className="relative overflow-hidden h-full"
          >
            <div className="p-8 md:p-10 min-h-[280px] flex flex-col justify-between gap-6">
              <div
                className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${event.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
              />

              <div className="relative flex items-start justify-between">
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
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted font-display">
                  {event.status}
                </span>
              </div>

              <div className="relative space-y-3">
                <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
                  {event.title}
                </h3>
                <p className="text-purple-300 text-sm font-medium">
                  {event.tagline}
                </p>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">
                  {event.description}
                </p>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {event.highlights.slice(0, 2).map((h) => (
                    <span
                      key={h}
                      className="text-[10px] uppercase tracking-widest text-muted/80 border border-white/5 rounded-full px-2 py-1"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-sm font-display font-semibold text-purple-300 group-hover:text-magenta transition-colors">
                  Explore
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
