"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Scroll-scrubbed hero parallax: robot, glow, and background layers
 * move at different speeds (Active Theory–style depth).
 */
export function useRobotHeroScroll(
  rootRef: RefObject<HTMLElement | null>,
  robotRef: RefObject<HTMLElement | null>
) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (!rootRef.current || !robotRef.current || reduced) return;

    const ctx = gsap.context(() => {
      const robot = robotRef.current!;
      const visual = robot.querySelector("[data-robot-visual]");
      const sheet = robot.querySelector("[data-robot-sheet]");
      const glow = robot.querySelector("[data-robot-glow]");
      const parallaxSlow = rootRef.current!.querySelectorAll("[data-parallax-slow]");
      const parallaxFast = rootRef.current!.querySelectorAll("[data-parallax-fast]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      if (visual) {
        tl.fromTo(
          visual,
          { y: 0, scale: 1, rotate: 0 },
          { y: -80, scale: 0.88, rotate: -4, ease: "none" },
          0
        );
      }
      if (sheet) {
        tl.fromTo(
          sheet,
          { xPercent: 0 },
          { xPercent: -33.333, ease: "none" },
          0
        );
      }

      if (glow) {
        tl.fromTo(
          glow,
          { scale: 1, opacity: 1 },
          { scale: 1.35, opacity: 0.55, ease: "none" },
          0
        );
      }

      tl.fromTo(
        robot,
        { y: 0 },
        { y: -40, ease: "none" },
        0
      );

      if (parallaxSlow.length) {
        tl.fromTo(
          parallaxSlow,
          { y: 0 },
          { y: -120, ease: "none" },
          0
        );
      }

      if (parallaxFast.length) {
        tl.fromTo(
          parallaxFast,
          { y: 0 },
          { y: -200, ease: "none" },
          0
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, robotRef, reduced]);
}
