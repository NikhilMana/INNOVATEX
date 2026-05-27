"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Options {
  speed?: number;
  axis?: "y" | "x";
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  { speed = 0.5, axis = "y" }: Options = {}
) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      const distance = 100 * speed;
      const prop = axis === "y" ? "y" : "x";

      gsap.fromTo(
        el,
        { [prop]: -distance },
        {
          [prop]: distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, speed, axis, reduced]);
}
