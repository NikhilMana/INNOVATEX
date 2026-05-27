import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { Particles } from "@/components/ui/Particles";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen ai-mesh noise-overlay">
      <div className="ai-grid absolute inset-0 opacity-30" />
      <div className="container-x section-padding relative">
        <header className="mb-16 space-y-4">
          <Pill pulsing>InnovateX Design System</Pill>
          <h1 className="font-display text-6xl font-extrabold md:text-7xl">
            Design{" "}
            <GradientText variant="animated">Tokens</GradientText>
          </h1>
          <p className="max-w-2xl text-muted">
            Visual QA of every design utility, color, gradient, and component.
            Remove this route before deploying to production.
          </p>
        </header>

        <Section title="Color Palette">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ColorSwatch name="Background" value="#0D0D1A" />
            <ColorSwatch name="Surface" value="#151524" />
            <ColorSwatch name="Surface-2" value="#1C1C2E" />
            <ColorSwatch name="Muted" value="#8B8B9A" />
            <ColorSwatch name="Purple 400" value="#C084FC" />
            <ColorSwatch name="Purple 500" value="#A855F7" />
            <ColorSwatch name="Purple 700" value="#7E22CE" />
            <ColorSwatch name="Magenta" value="#D946EF" />
          </div>
        </Section>

        <Section title="Typography">
          <div className="space-y-6">
            <h1 className="font-display text-7xl font-extrabold tracking-tight">
              Display 7xl — <GradientText>Cinematic</GradientText>
            </h1>
            <h2 className="font-display text-5xl font-bold">Display 5xl</h2>
            <h3 className="font-display text-3xl font-semibold">Display 3xl</h3>
            <p className="font-body text-lg">
              Body 1 — Inter at 18px for readable long-form content with
              generous line-height and balanced tracking.
            </p>
            <p className="font-body text-sm text-muted">
              Body 2 — Inter at 14px in muted color for secondary content.
            </p>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">
              Eyebrow — Poppins uppercase tracking-widest
            </p>
          </div>
        </Section>

        <Section title="Gradient Text">
          <div className="space-y-4 font-display text-4xl font-extrabold">
            <p>
              <GradientText>Default Gradient</GradientText>
            </p>
            <p>
              <GradientText variant="soft">Soft Gradient</GradientText>
            </p>
            <p>
              <GradientText variant="animated">Animated Gradient</GradientText>
            </p>
            <p className="glow-text">Glow Text</p>
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button icon={<ArrowRight size={16} />}>Primary</Button>
            <Button variant="secondary" icon={<Sparkles size={16} />}>
              Secondary
            </Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="lg" icon={<Zap size={18} />}>
              Large Magnetic
            </Button>
            <Button size="sm">Small</Button>
          </div>
        </Section>

        <Section title="Badges & Pills">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="upcoming">Upcoming</Badge>
            <Badge variant="soon">Soon</Badge>
            <Badge variant="featured">★ Featured</Badge>
            <Badge variant="live">Live</Badge>
            <Pill pulsing>Mit Mysore · CSE AI & ML</Pill>
            <Pill icon={<Sparkles size={12} />}>With Icon</Pill>
          </div>
        </Section>

        <Section title="Glass Cards">
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard hoverable className="p-6">
              <h3 className="mb-2 font-display text-xl font-bold">Default</h3>
              <p className="text-sm text-muted">
                Subtle backdrop blur with purple-tinted border.
              </p>
            </GlassCard>
            <GlassCard variant="strong" hoverable className="p-6">
              <h3 className="mb-2 font-display text-xl font-bold">Strong</h3>
              <p className="text-sm text-muted">
                Heavier blur, purple-tinted background.
              </p>
            </GlassCard>
            <GlassCard variant="conic" hoverable className="p-6">
              <h3 className="mb-2 font-display text-xl font-bold">Conic</h3>
              <p className="text-sm text-muted">
                Animated conic-gradient border rotating around the card.
              </p>
            </GlassCard>
          </div>
        </Section>

        <Section title="Effects">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-3xl glass-card">
              <Particles count={20} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-2xl font-bold">Floating Particles</p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl glass-card-strong glow-purple flex items-center justify-center">
              <p className="font-display text-2xl font-bold">Purple Glow Shadow</p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <h2 className="mb-8 font-display text-xs uppercase tracking-[0.3em] text-purple-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="glass-card p-4">
      <div
        className="mb-3 h-20 w-full rounded-xl border border-white/10"
        style={{ background: value }}
      />
      <p className="font-display text-sm font-semibold">{name}</p>
      <p className="font-mono text-xs text-muted">{value}</p>
    </div>
  );
}
