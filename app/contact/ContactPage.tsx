"use client";

import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/Particles";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { contactInfo } from "@/data/navigation";

export function ContactPage() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <ContactGrid />
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
      className="relative min-h-[50dvh] flex items-center overflow-hidden ai-mesh noise-overlay pt-32"
    >
      <div className="ai-grid absolute inset-0 opacity-25 pointer-events-none" />
      <Particles count={25} />

      <div className="container-x relative z-10 px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-4xl space-y-6">
          <div data-reveal>
            <Pill pulsing>Get in Touch</Pill>
          </div>
          <h1
            data-reveal
            className="font-display font-extrabold tracking-tighter leading-[0.95]"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Let&apos;s <GradientText variant="animated">talk</GradientText>.
          </h1>
          <p
            data-reveal
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            Want to join, sponsor, speak, or collaborate? Drop us a line —
            we&apos;re reading.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactGrid() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealAnimation(rootRef);

  return (
    <section ref={rootRef} className="relative section-padding overflow-hidden">
      <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5 space-y-4">
          <GlassCard data-reveal hoverable className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-display mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-display text-base font-semibold hover:text-purple-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard data-reveal hoverable className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-display mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="font-display text-base font-semibold hover:text-purple-300 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard data-reveal hoverable className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted font-display mb-1">
                  Visit
                </p>
                <p className="font-display text-sm font-semibold leading-relaxed">
                  {contactInfo.department}
                  <br />
                  <span className="text-muted font-normal">
                    {contactInfo.institution}
                    <br />
                    {contactInfo.address}
                  </span>
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard
            data-reveal
            variant="conic"
            className="p-6 overflow-hidden"
          >
            <Particles count={12} />
            <div className="relative z-10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="font-display font-bold text-base">Want to join?</p>
                <p className="text-xs text-muted mt-1">
                  We open recruitment every semester. Drop your interest below.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "general", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <GlassCard data-reveal className="p-6 md:p-10">
      {sent ? (
        <div className="text-center py-12 space-y-4">
          <Sparkles className="mx-auto text-magenta" size={32} />
          <h3 className="font-display text-3xl font-bold">
            Message <GradientText>received</GradientText>.
          </h3>
          <p className="text-muted">We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-purple-400">
              · Drop us a message
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              Tell us <GradientText>what you need</GradientText>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-base"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-base"
                placeholder="you@email.com"
              />
            </Field>
          </div>

          <Field label="What's it about?">
            <select
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              className="input-base"
            >
              <option value="general">General Inquiry</option>
              <option value="join">Join InnovateX</option>
              <option value="speak">Speak at Arghya</option>
              <option value="sponsor">Sponsor an event</option>
              <option value="cosmic">Pitch to COSMIC</option>
              <option value="other">Other</option>
            </select>
          </Field>

          <Field label="Message">
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input-base resize-none"
              placeholder="Tell us more…"
            />
          </Field>

          <div className="pt-2">
            <Button type="submit" size="lg" icon={<Send size={16} />}>
              Send Message
            </Button>
          </div>
        </form>
      )}

      <style jsx>{`
        :global(.input-base) {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(168, 85, 247, 0.15);
          border-radius: 16px;
          padding: 14px 18px;
          color: white;
          font-size: 14px;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }
        :global(.input-base:focus) {
          outline: none;
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
        }
        :global(.input-base::placeholder) {
          color: rgba(139, 139, 154, 0.6);
        }
      `}</style>
    </GlassCard>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="block text-[10px] uppercase tracking-[0.25em] text-muted font-display">
        {label}
      </span>
      {children}
    </label>
  );
}
