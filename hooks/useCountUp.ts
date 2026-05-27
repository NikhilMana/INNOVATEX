"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  end: number,
  { duration = 2, suffix = "" }: { duration?: number; suffix?: string } = {}
) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    if (reduced) {
      el.textContent = `${end}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [ref, end, duration, suffix, reduced]);
}
