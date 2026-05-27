"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Options {
  selector?: string;
  y?: number;
  stagger?: number;
  delay?: number;
  start?: string;
  duration?: number;
  ease?: string;
}

export function useRevealAnimation(
  ref: RefObject<HTMLElement | null>,
  {
    selector = "[data-reveal]",
    y = 40,
    stagger = 0.08,
    delay = 0,
    start = "top 85%",
    duration = 0.9,
    ease = "expo.out",
  }: Options = {}
) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current) return;
    const root = ref.current;

    const ctx = gsap.context(() => {
      const targets = root.querySelectorAll(selector);
      if (!targets.length) return;

      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { opacity: 0, y });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            ease,
            stagger,
            delay,
          });
        },
      });
    }, root);

    return () => ctx.revert();
  }, [ref, selector, y, stagger, delay, start, duration, ease, reduced]);
}
