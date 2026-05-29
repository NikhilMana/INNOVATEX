"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STORAGE_KEY = "innovatex-splash-shown";

export function IntroSplash() {
  const reduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);

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

      gsap.set(logoWrapRef.current, { scale: 0.95, opacity: 0 });

      tl.to(
          logoWrapRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          }
        )
        .to(
          rootRef.current,
          {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "+=2.5" // keep it on screen longer since it's a video animation
        );
        
      // Hard fallback to unmount the splash screen after 5.5s just in case GSAP hangs on mobile
      setTimeout(() => {
        setHidden(true);
        window.dispatchEvent(new CustomEvent("splash-done"));
      }, 5500);
    }, rootRef.current);

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        ctx.revert();
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${hidden ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      aria-label="Loading InnovateX"
    >
      <div className="ai-grid absolute inset-0 opacity-30" />

      <div
        ref={logoWrapRef}
        className="absolute inset-0 z-10 flex items-center justify-center bg-black"
      >
        <video 
          src="/videos/splash.mp4" 
          autoPlay 
          muted 
          playsInline 
          className="w-full h-full object-cover" 
        />
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted/60">
        Press ESC to skip
      </p>
    </div>
  );
}
