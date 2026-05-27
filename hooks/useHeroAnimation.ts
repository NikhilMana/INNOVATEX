"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useHeroAnimation(rootRef: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      const pill = rootRef.current!.querySelector("[data-hero-pill]");
      const headlineWords = rootRef.current!.querySelectorAll(
        "[data-hero-word]"
      );
      const headlineGradient = rootRef.current!.querySelector(
        "[data-hero-gradient]"
      );
      const sub = rootRef.current!.querySelector("[data-hero-sub]");
      const ctas = rootRef.current!.querySelectorAll("[data-hero-cta]");
      const robot = rootRef.current!.querySelector("[data-hero-robot]");
      const stats = rootRef.current!.querySelectorAll("[data-hero-stat]");

      if (reduced) {
        gsap.set(
          [pill, headlineWords, headlineGradient, sub, ctas, robot, stats],
          { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }
        );
        return;
      }

      gsap.set(pill, { opacity: 0, y: -20 });
      gsap.set(headlineWords, { opacity: 0, y: 60, rotateX: -45 });
      gsap.set(headlineGradient, { opacity: 0, scale: 1.15 });
      gsap.set(sub, { opacity: 0, y: 30 });
      gsap.set(ctas, { opacity: 0, y: 24, scale: 0.95 });
      gsap.set(stats, { opacity: 0, y: 20 });
      if (robot) gsap.set(robot, { opacity: 0, x: 80, scale: 0.85 });

      tl.to(pill, { opacity: 1, y: 0, duration: 0.6 })
        .to(
          headlineWords,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.08,
            ease: "expo.out",
          },
          "-=0.3"
        )
        .to(
          headlineGradient,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.6"
        )
        .to(sub, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to(
          ctas,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          stats,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.4"
        );

      if (robot) {
        tl.to(
          robot,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "expo.out",
          },
          "-=1.4"
        );
      }

      const onSplashDone = () => tl.play();
      window.addEventListener("splash-done", onSplashDone);

      if (sessionStorage.getItem("innovatex-splash-shown")) {
        tl.play();
      }

      return () => {
        window.removeEventListener("splash-done", onSplashDone);
      };
    }, rootRef.current);

    return () => ctx.revert();
  }, [rootRef, reduced]);
}
