"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STORAGE_KEY = "innovatex-splash-shown";

export function IntroSplash() {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown || reduced) {
      setHidden(true);
      window.dispatchEvent(new CustomEvent("splash-done"));
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");

    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          window.dispatchEvent(new CustomEvent("splash-done"));
          setHidden(true);
        },
      });

      gsap.set(logoRef.current, { scale: 0.6, opacity: 0 });
      gsap.set(glowRef.current, { scale: 0.3, opacity: 0 });

      tl.to(glowRef.current, {
        scale: 1.4,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      })
        .to(
          logoRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
          },
          "-=1"
        )
        .to(
          logoRef.current,
          {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
          },
          "+=0.1"
        )
        .to(
          rootRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "expo.in",
          },
          "+=0.2"
        );
    }, rootRef.current);

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        ctx.kill();
        setHidden(true);
        window.dispatchEvent(new CustomEvent("splash-done"));
      }
    };
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
      ctx.revert();
    };
  }, [reduced]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg overflow-hidden"
      aria-label="Loading InnovateX"
    >
      <div className="ai-grid absolute inset-0 opacity-30" />

      <div
        ref={glowRef}
        className="absolute h-[80vmin] w-[80vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217,70,239,0.45), rgba(168,85,247,0.25) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        ref={logoRef}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <div className="relative h-32 w-32 md:h-48 md:w-48 overflow-hidden rounded-3xl glass-card-strong">
          <Image
            src="/images/logos/innovateX.jpg"
            alt="InnovateX"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 128px, 192px"
          />
        </div>
        <p className="font-display text-xs uppercase tracking-[0.5em] text-purple-300/80 mt-4">
          Innovate <span className="text-magenta">X</span>
        </p>
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted/60">
        Press ESC to skip
      </p>
    </div>
  );
}
