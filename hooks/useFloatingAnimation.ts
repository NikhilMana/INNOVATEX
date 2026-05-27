"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Options {
  y?: number;
  duration?: number;
  delay?: number;
  rotation?: number;
}

export function useFloatingAnimation(
  ref: RefObject<HTMLElement | null>,
  { y = 20, duration = 6, delay = 0, rotation = 0 }: Options = {}
) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -y,
        rotation: rotation,
        duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, y, duration, delay, rotation, reduced]);
}
