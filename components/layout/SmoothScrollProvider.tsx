"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

let lenisInstance: Lenis | null = null;

/** Smoothly scroll to an element id (or top). Falls back to native when Lenis is off. */
export function scrollToId(id: string) {
  const target = id === "top" ? 0 : document.getElementById(id);
  if (lenisInstance) {
    lenisInstance.scrollTo(target as HTMLElement | number, { offset: -80 });
  } else if (typeof target === "number") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 1,
    });
    lenisInstance = lenis;

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
