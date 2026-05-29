"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Drives the fixed desktop RobotScene through homepage sections:
 * hero center → about right → events left → fade near footer.
 */
export function useRobotScrollNarrative(
  sceneRef: React.RefObject<HTMLElement | null>,
  robotRef: React.RefObject<HTMLDivElement | null>
) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sceneRef.current || !robotRef.current) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    const ctx = gsap.context(() => {
      const robot = robotRef.current!;
      const visual = robot.querySelector("[data-robot-visual]");
      const sheet = robot.querySelector("[data-robot-sheet]");
      const main = document.getElementById("main");
      if (!main) return;

      gsap.set(robot, {
        xPercent: -50,
        yPercent: -50,
        left: "50%",
        top: "42%",
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
        },
      });

      tl.to(
        robot,
        {
          top: "38%",
          scale: 1.05,
          ease: "none",
          duration: 0.25,
        },
        0
      )
        .to(
          robot,
          {
            left: "72%",
            top: "48%",
            scale: 0.72,
            ease: "none",
            duration: 0.35,
          },
          0.25
        )
        .to(
          robot,
          {
            left: "28%",
            top: "58%",
            scale: 0.65,
            ease: "none",
            duration: 0.35,
          },
          0.6
        )
        .to(
          robot,
          {
            left: "50%",
            top: "72%",
            scale: 0.5,
            opacity: 0.35,
            ease: "none",
            duration: 0.4,
          },
          0.85
        );

      if (visual) {
        tl.fromTo(
          visual,
          { rotateY: 0 },
          { rotateY: 18, ease: "none", duration: 0.5 },
          0.25
        ).to(visual, { rotateY: -12, ease: "none", duration: 0.35 }, 0.6);
      }
      if (sheet) {
        tl.to(sheet, { xPercent: -33.333, ease: "none", duration: 0.32 }, 0.2)
          .to(sheet, { xPercent: -66.666, ease: "none", duration: 0.32 }, 0.52)
          .to(sheet, { xPercent: -33.333, ease: "none", duration: 0.24 }, 0.82);
      }
    }, sceneRef);

    const onResize = () => {
      if (!mq.matches) ctx.revert();
      else ScrollTrigger.refresh();
    };
    mq.addEventListener("change", onResize);

    return () => {
      mq.removeEventListener("change", onResize);
      ctx.revert();
    };
  }, [sceneRef, robotRef, reduced]);
}
