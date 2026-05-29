"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, BookOpen, Mail } from "lucide-react";
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
import { type EditionDetail } from "@/data/magazine";
import { MagazineFlipbook } from "@/components/ui/MagazineFlipbook";

export function EditionTemplate({ edition }: { edition: EditionDetail }) {
  const upcoming = edition.status === "upcoming";

  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero edition={edition} />
        {!upcoming && edition.pageCount && <FlipbookSection edition={edition} />}
        {!upcoming && <Articles edition={edition} />}
        <EditorialBoard edition={edition} />
        {upcoming ? <NotifyMe edition={edition} /> : <DownloadCTA edition={edition} />}
        <Related />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

function Hero({ edition }: { edition: EditionDetail }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef, { stagger: 0.12 });
  const upcoming = edition.status === "upcoming";

  return (
    <section
      ref={rootRef}
      className="relative min-h-[90dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-32"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={upcoming ? 50 : 25} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div data-reveal>
              {upcoming ? (
                <Badge variant="soon">Launching Soon</Badge>
              ) : (
                <Pill>{edition.releaseDate} Edition</Pill>
              )}
            </div>

            <p
              data-reveal
              className="text-xs uppercase tracking-[0.4em] text-purple-400 font-display"
            >
              Edition {edition.edition}
            </p>

            <h1
              data-reveal
              className="font-display font-extrabold tracking-tighter leading-[0.95]"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                letterSpacing: "-0.04em",
              }}
            >
              <GradientText variant="animated">{edition.title}</GradientText>
            </h1>

            <p
              data-reveal
              className="text-xl md:text-2xl text-purple-300 font-medium"
            >
              Theme: {edition.theme}
            </p>

            <p
              data-reveal
              className="max-w-xl text-base md:text-lg text-muted leading-relaxed"
            >
              {edition.description}
            </p>

            {upcoming ? (
              <div data-reveal className="pt-4">
                <Countdown target="2025-12-31T00:00:00+05:30" />
              </div>
            ) : (
              <div data-reveal className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" icon={<Download size={16} />} iconPosition="left">
                  Download PDF
                </Button>
                <Button variant="secondary" size="lg" icon={<BookOpen size={16} />} iconPosition="left" onClick={() => document.getElementById('read-online')?.scrollIntoView({ behavior: 'smooth' })}>
                  Read Online
                </Button>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div
              data-reveal
              className="relative aspect-[3/4] max-w-sm mx-auto animate-float"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${edition.gradient} shadow-glow-lg overflow-hidden`}
              >
                {!upcoming && edition.pageCount ? (
                  <img 
                    src={`/magazines/${edition.slug}/page_001.jpeg`}
                    alt={`${edition.title} Cover`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">
                          InnovateX · COSMIC
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                          Edition {edition.edition} · {edition.releaseDate}
                        </p>
                      </div>
                      <div>
                        <p className="font-display text-5xl md:text-6xl font-black leading-[0.85] mb-4">
                          {edition.title}
                        </p>
                        <p className="font-display text-base text-white/80">
                          {edition.theme}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipbookSection({ edition }: { edition: EditionDetail }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  if (!edition.pageCount) return null;

  const flipbookPages = Array.from({ length: edition.pageCount }).map(
    (_, i) => `/magazines/${edition.slug}/page_${String(i + 1).padStart(3, "0")}.jpeg`
  );

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden bg-black/40" id="read-online">
      <div className="container-x relative z-10">
        <div className="text-center mb-10">
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Interactive <GradientText>Flipbook</GradientText>
          </h2>
          <p data-reveal className="text-muted mt-2 max-w-lg mx-auto">
            Experience {edition.title} in full 3D interactive glory. Click or drag to turn pages.
          </p>
        </div>
        
        <div data-reveal className="w-full flex justify-center">
          <MagazineFlipbook pages={flipbookPages} title={edition.title} />
        </div>
      </div>
    </section>
  );
}

function Articles({ edition }: { edition: EditionDetail }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  if (!edition.articles.length) return null;

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-2xl mb-12 space-y-4">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display"
          >
            · In This Issue
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            <GradientText>{edition.articles.length}</GradientText> pieces
          </h2>
          {edition.letterFromEditor && (
            <p data-reveal className="text-muted text-base md:text-lg italic border-l-2 border-purple-500 pl-4">
              &ldquo;{edition.letterFromEditor}&rdquo;
            </p>
          )}
        </div>

        <div className="space-y-3">
          {edition.articles.map((article, idx) => (
            <GlassCard
              key={idx}
              data-reveal
              hoverable
              className="group p-5 md:p-6 cursor-pointer"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <span className="font-display text-2xl md:text-3xl font-extrabold gradient-text tabular-nums">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-8 md:col-span-9 space-y-1">
                  <h3 className="font-display text-base md:text-xl font-semibold group-hover:text-purple-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted">
                    {article.author} · {article.category}
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right flex items-center justify-end gap-3">
                  <span className="text-xs text-muted">{article.readTime}</span>
                  <ArrowRight
                    size={14}
                    className="text-purple-400 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialBoard({ edition }: { edition: EditionDetail }) {
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
            · Editorial Board
          </p>
          <h2
            data-reveal
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            The <GradientText>team</GradientText> behind COSMIC {edition.edition}.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {edition.editorialBoard.map((m) => (
            <GlassCard key={m.name} data-reveal hoverable className="p-6 text-center">
              <div className="space-y-3">
                <div
                  className={`h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br ${edition.gradient} flex items-center justify-center`}
                >
                  <span className="font-display text-2xl font-extrabold">
                    {m.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm">{m.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
                    {m.role}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadCTA({ edition }: { edition: EditionDetail }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <GlassCard data-reveal variant="conic" className="overflow-hidden">
          <Particles count={20} />
          <div className="relative z-10 p-12 md:p-20 text-center space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Read <GradientText>{edition.title}</GradientText>.
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
              {edition.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button size="lg" icon={<Download size={18} />} iconPosition="left">
                Download PDF
              </Button>
              <Button variant="secondary" size="lg" icon={<BookOpen size={18} />} iconPosition="left" onClick={() => document.getElementById('read-online')?.scrollIntoView({ behavior: 'smooth' })}>
                Read Online
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function NotifyMe({ edition }: { edition: EditionDetail }) {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10">
        <GlassCard data-reveal variant="conic" className="overflow-hidden">
          <Particles count={30} />
          <div className="relative z-10 p-12 md:p-20 text-center space-y-6">
            <Badge variant="soon">Launching Soon</Badge>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Be first to read <GradientText>{edition.title}</GradientText>.
            </h2>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
              Drop your email — we&apos;ll send you the launch link the moment
              it&apos;s live.
            </p>
            {submitted ? (
              <p className="font-display text-lg text-purple-300">
                ✨ You&apos;re on the list. See you on launch day.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 glass-card-strong rounded-full px-5 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-purple-400/60 focus:shadow-glow-sm transition-all"
                />
                <Button type="submit" icon={<Mail size={16} />} iconPosition="left">
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Related() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 text-center">
        <p
          data-reveal
          className="text-xs uppercase tracking-[0.3em] text-purple-400 font-display mb-4"
        >
          · Other Editions
        </p>
        <h2
          data-reveal
          className="font-display text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Explore the <GradientText>archive</GradientText>.
        </h2>
        <div data-reveal>
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 font-display font-semibold text-purple-300 hover:text-magenta transition-colors"
          >
            View all editions
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
