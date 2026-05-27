"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Linkedin, Github, Instagram } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { coreTeam, type TeamMember } from "@/data/team";

export function TeamPreview() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section
      ref={rootRef}
      id="team"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-16 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · The Team
          </p>
          <h2
            data-reveal
            className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Meet the <GradientText>minds</GradientText>
            <br />
            behind InnovateX.
          </h2>
          <p data-reveal className="text-muted text-base md:text-lg">
            A student-led core team and faculty mentors driving every program.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {coreTeam.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        <div data-reveal className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
          >
            View full team
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div data-reveal>
      <GlassCard hoverable className="group p-5 md:p-6">
        <div className="space-y-4">
          <div
            className={`relative h-32 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="relative font-display text-4xl md:text-5xl font-extrabold text-white/90">
              {member.initials}
            </span>

            <div className="absolute inset-0 flex items-end justify-center gap-2 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg/60 backdrop-blur-sm">
              <a
                href="#"
                aria-label={`${member.name} on LinkedIn`}
                className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                aria-label={`${member.name} on GitHub`}
                className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-colors"
              >
                <Github size={14} />
              </a>
              <a
                href="#"
                aria-label={`${member.name} on Instagram`}
                className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-colors"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base md:text-lg font-bold gradient-text-soft leading-tight">
              {member.name}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted mt-1">
              {member.role}
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
