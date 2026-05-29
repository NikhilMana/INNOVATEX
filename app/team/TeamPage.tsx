"use client";

import { useRef } from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Particles } from "@/components/ui/Particles";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { coreTeam, type TeamMember } from "@/data/team";

export function TeamPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <CoreGrid />
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
      <Particles count={28} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl space-y-6">
          <div data-reveal>
            <Pill pulsing>The Team</Pill>
          </div>
          <h1
            data-reveal
            className="font-display font-extrabold tracking-tighter leading-[0.95]"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Meet the <GradientText variant="animated">minds</GradientText>.
          </h1>
          <p
            data-reveal
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            A student-led core team and faculty mentors driving every InnovateX
            program. We&apos;re a small group with a wide brief.
          </p>
        </div>
      </div>
    </section>
  );
}

function CoreGrid() {
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
            · The Roots of InnovateX
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            ExeCom <GradientText>Team</GradientText>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {coreTeam.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
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
            className={`relative h-40 md:h-52 rounded-2xl overflow-hidden bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
          >
            {member.image ? (
              <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-center" />
            ) : (
              <span className="relative font-display text-5xl md:text-6xl font-extrabold text-white/90">
                {member.initials}
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            <div className="absolute inset-0 flex items-end justify-center gap-2 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg/70 backdrop-blur-sm">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-colors">
                <Github size={14} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500 transition-colors">
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
