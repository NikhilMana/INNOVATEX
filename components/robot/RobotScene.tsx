"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { RobotImage } from "@/components/robot/RobotImage";
import { RobotCanvasParticles } from "@/components/robot/RobotCanvasParticles";
import { useRobotScrollNarrative } from "@/hooks/useRobotScrollNarrative";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SPLASH_KEY = "innovatex-splash-shown";

/**
 * Fixed desktop companion robot — scroll-driven journey across the homepage.
 * Hidden below lg; hero uses inline RobotImage on mobile/tablet.
 */
export function RobotScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useRobotScrollNarrative(sceneRef, robotRef);

  useLayoutEffect(() => {
    if (!robotRef.current) return;

    const robot = robotRef.current;
    const visual = robot.querySelector("[data-robot-visual]");

    const reveal = () => {
      gsap.to(robot, {
        opacity: 1,
        scale: 1,
        duration: reduced ? 0 : 1.1,
        ease: "expo.out",
      });
      if (visual) {
        gsap.to(visual, {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: reduced ? 0 : 1.2,
          ease: "expo.out",
          delay: reduced ? 0 : 0.05,
        });
      }
    };

    if (reduced) {
      gsap.set(robot, { opacity: 1, scale: 1 });
      if (visual) gsap.set(visual, { opacity: 1, scale: 1, rotateY: 0 });
      return;
    }

    gsap.set(robot, { opacity: 0, scale: 0.85 });
    if (visual) gsap.set(visual, { opacity: 0, scale: 0.7, rotateY: -20 });

    window.addEventListener("splash-done", reveal);
    if (sessionStorage.getItem(SPLASH_KEY)) reveal();

    return () => window.removeEventListener("splash-done", reveal);
  }, [reduced]);

  return (
    <div
      ref={sceneRef}
      className="pointer-events-none fixed inset-0 z-[15] hidden lg:block"
      aria-hidden
    >
      <RobotCanvasParticles density={40} />

      <div
        ref={robotRef}
        className="absolute w-[min(42vw,520px)] will-change-transform pointer-events-auto"
      >
        <RobotImage size={520} decor interactive priority className="mx-auto" />
      </div>
    </div>
  );
}
