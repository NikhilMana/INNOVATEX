"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { upcomingEvents, type UpcomingEvent } from "@/data/upcoming";
import { cn } from "@/lib/utils";

export function UpcomingEvents() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="upcoming"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · What&apos;s Next
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Upcoming on the
            <br />
            <GradientText>InnovateX</GradientText> calendar.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-px md:-translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

          <div className="space-y-8 md:space-y-16">
            {upcomingEvents.map((event, idx) => (
              <TimelineItem
                key={event.id}
                event={event}
                side={idx % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  side,
}: {
  event: UpcomingEvent;
  side: "left" | "right";
}) {
  return (
    <div data-reveal className="relative">
      <div
        className={cn(
          "absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10",
          "h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
          "before:absolute before:inset-[-6px] before:rounded-full before:bg-purple-500/30 before:animate-ping"
        )}
      />

      <div
        className={cn(
          "pl-14 md:pl-0 grid md:grid-cols-2 gap-8 items-start",
          side === "right" && "md:[direction:rtl]"
        )}
      >
        <div className={cn("md:[direction:ltr]", side === "right" && "md:text-right md:pr-12", side === "left" && "md:pl-12 md:order-2")}>
          <Link href={event.href} className="group block">
            <GlassCard
              variant={event.featured ? "conic" : "default"}
              hoverable
              className={cn(
                "relative overflow-hidden",
                event.featured && "shadow-glow-md"
              )}
            >
              <div className={cn("p-6 md:p-8", event.featured && "md:p-10")}>
                {event.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-magenta to-transparent" />
                )}

                <div className="flex items-center justify-between gap-3 mb-4">
                  {event.badge && (
                    <Badge
                      variant={
                        event.badge === "FLAGSHIP"
                          ? "featured"
                          : event.badge === "LAUNCHING"
                            ? "soon"
                            : "upcoming"
                      }
                    >
                      {event.featured && (
                        <Sparkles size={10} className="-ml-0.5" />
                      )}
                      {event.badge}
                    </Badge>
                  )}
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-muted font-display">
                    <Calendar size={10} />
                    {event.month} · {event.day}
                  </div>
                </div>

                <h3
                  className={cn(
                    "font-display font-extrabold tracking-tight mb-1",
                    event.featured
                      ? "text-4xl md:text-5xl gradient-text"
                      : "text-2xl md:text-3xl"
                  )}
                >
                  {event.title}
                </h3>
                {event.subtitle && (
                  <p className="text-sm text-purple-300 font-medium mb-3">
                    {event.subtitle}
                  </p>
                )}

                <p className="text-muted text-sm leading-relaxed mb-5">
                  {event.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-purple-300 group-hover:text-magenta transition-colors">
                  {event.featured ? "View Details" : "Learn more"}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </GlassCard>
          </Link>
        </div>
      </div>
    </div>
  );
}
