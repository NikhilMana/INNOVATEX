"use client";

import { cn } from "@/lib/utils";

interface RobotAuraProps {
  className?: string;
  /** Show orbiting particle ring */
  orbit?: boolean;
}

export function RobotAura({ className, orbit = true }: RobotAuraProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    >
      <div
        className="absolute inset-[-12%] rounded-full animate-pulse-glow"
        data-robot-glow
        style={{
          background:
            "radial-gradient(circle, rgba(217,70,239,0.4), rgba(168,85,247,0.2) 45%, transparent 72%)",
          filter: "blur(48px)",
        }}
      />
      {orbit && <OrbitRing />}
    </div>
  );
}

function OrbitRing() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * 360;
        const duration = 10 + i * 1.2;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `spin-slow ${duration}s linear infinite`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            }}
          >
            <span
              className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.95)]"
              style={{ opacity: 0.7 - i * 0.09 }}
            />
          </div>
        );
      })}
    </>
  );
}
