"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface ParticlesProps {
  count?: number;
  className?: string;
}

export function Particles({ count = 30, className }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate random positions only on the client to avoid SSR hydration mismatch.
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 6,
        opacity: Math.random() * 0.4 + 0.2,
      }))
    );
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-purple-400 animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 4}px rgba(168,85,247,0.6)`,
          }}
        />
      ))}
    </div>
  );
}
