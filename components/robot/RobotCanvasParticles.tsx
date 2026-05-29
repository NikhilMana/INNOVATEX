"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RobotCanvasParticlesProps {
  className?: string;
  density?: number;
}

/**
 * Lightweight canvas particles orbiting the robot hero zone.
 * Disabled when prefers-reduced-motion is on.
 */
export function RobotCanvasParticles({
  className,
  density = 48,
}: RobotCanvasParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const particles = Array.from({ length: density }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 0.25 + Math.random() * 0.35,
      speed: 0.0004 + Math.random() * 0.0012,
      size: 1 + Math.random() * 2.5,
      opacity: 0.2 + Math.random() * 0.5,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const base = Math.min(w, h) * 0.42;

      for (const p of particles) {
        p.angle += p.speed * 60;
        const x = cx + Math.cos(p.angle) * base * p.radius;
        const y = cy + Math.sin(p.angle) * base * p.radius * 0.85;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 181, 253, ${p.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      aria-hidden
    />
  );
}
