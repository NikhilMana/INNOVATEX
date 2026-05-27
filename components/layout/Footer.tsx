"use client";

import Link from "next/link";
import { Instagram, Linkedin, Github, Youtube, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navigation, contactInfo } from "@/data/navigation";
import { GradientText } from "@/components/ui/GradientText";

const socialIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
};

export function Footer() {
  const eventLinks = navigation.find((n) => n.label === "Events")?.children ?? [];

  return (
    <footer className="relative ai-mesh noise-overlay overflow-hidden">
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magenta to-transparent animate-shimmer bg-[length:200%_100%]" />
      </div>

      <div className="container-x px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-block font-display text-3xl font-extrabold tracking-tight"
            >
              Innovate<GradientText>X</GradientText>
            </Link>
            <p className="text-sm leading-relaxed text-muted max-w-sm">
              The innovation ecosystem of the CSE Artificial Intelligence &
              Machine Learning department at MIT Mysore — building, learning,
              and shipping the future.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { Icon: Github, label: "GitHub", href: "https://github.com" },
                { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full glass-card transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-glow-sm"
                >
                  <Icon
                    size={16}
                    className="text-muted transition-colors group-hover:text-purple-400"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Explore">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/magazine">Magazine</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Programs">
              {eventLinks.map((e) => (
                <FooterLink key={e.href} href={e.href} badge={e.badge}>
                  {e.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Contact">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin size={14} className="mt-0.5 shrink-0 text-purple-400" />
                <span className="leading-relaxed">
                  {contactInfo.department}
                  <br />
                  {contactInfo.institution}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Mail size={14} className="text-purple-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Phone size={14} className="text-purple-400" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} InnovateX — MIT Mysore CSE AI & ML. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <span className="text-magenta animate-pulse">●</span> by InnovateX
            Tech Team
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full glass-card px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-purple-400/60"
            aria-label="Back to top"
          >
            <ArrowUp size={12} />
            <span className="text-[10px] uppercase tracking-widest">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-5 font-display text-xs uppercase tracking-[0.3em] text-purple-400">
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  badge,
}: {
  href: string;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
        </span>
        {badge && (
          <span className="rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 px-1.5 py-0.5 text-[8px] tracking-widest font-display uppercase">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
}
