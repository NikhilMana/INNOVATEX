"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Options {
  interactive?: boolean;
  tilt?: number;
  scale?: number;
}

export function useRobotHover({
  interactive = true,
  tilt = 12,
  scale = 1.04,
}: Options = {}) {
  const reduced = useReducedMotion();
  const innerRef = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    innerRef.current = node;
  }, []);

  useEffect(() => {
    if (!interactive || reduced || !innerRef.current) return;
    const el = innerRef.current;
    const visual = el.querySelector("[data-robot-visual]");
    if (!visual) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(visual, {
        rotateY: px * tilt,
        rotateX: -py * tilt,
        scale,
        duration: 0.45,
        ease: "power2.out",
        transformPerspective: 900,
      });
    };

    const onLeave = () => {
      gsap.to(visual, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.45)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [interactive, reduced, tilt, scale]);

  return setRef;
}
