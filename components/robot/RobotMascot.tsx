"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface RobotMascotProps {
  className?: string;
  /** Pixel size of the robot SVG square. */
  size?: number;
  /** Show the glowing aura + orbiting particles behind the robot. */
  decor?: boolean;
}

/**
 * A self-contained SVG AI robot mascot — no image asset required.
 * Glowing eyes blink, the antenna pulses, and it floats gently.
 */
export function RobotMascot({
  className,
  size = 320,
  decor = true,
}: RobotMascotProps) {
  const uid = useId().replace(/:/g, "");
  const bodyGrad = `body-${uid}`;
  const faceGrad = `face-${uid}`;
  const glowGrad = `glow-${uid}`;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      {decor && (
        <>
          <div
            className="absolute inset-[-10%] rounded-full animate-pulse-glow"
            style={{
              background:
                "radial-gradient(circle, rgba(217,70,239,0.35), rgba(168,85,247,0.18) 45%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <OrbitRing />
        </>
      )}

      <svg
        viewBox="0 0 240 260"
        className="relative z-10 h-full w-full animate-float drop-shadow-[0_0_30px_rgba(168,85,247,0.45)]"
        role="img"
        aria-label="InnovateX AI companion robot"
      >
        <defs>
          <linearGradient id={bodyGrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5F3FF" />
            <stop offset="45%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <radialGradient id={faceGrad} cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#1C1C2E" />
            <stop offset="100%" stopColor="#0D0D1A" />
          </radialGradient>
          <radialGradient id={glowGrad} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#A855F7" />
          </radialGradient>
        </defs>

        {/* Antenna */}
        <line
          x1="120"
          y1="34"
          x2="120"
          y2="8"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="120" cy="8" r="7" fill={`url(#${glowGrad})`}>
          <animate
            attributeName="r"
            values="6;8;6"
            dur="1.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Ears / side modules */}
        <rect x="18" y="92" width="24" height="60" rx="12" fill={`url(#${bodyGrad})`} />
        <rect x="198" y="92" width="24" height="60" rx="12" fill={`url(#${bodyGrad})`} />
        <circle cx="30" cy="122" r="5" fill="#D946EF" />
        <circle cx="210" cy="122" r="5" fill="#D946EF" />

        {/* Head */}
        <rect
          x="40"
          y="34"
          width="160"
          height="150"
          rx="40"
          fill={`url(#${bodyGrad})`}
        />

        {/* Face screen */}
        <rect
          x="58"
          y="58"
          width="124"
          height="102"
          rx="28"
          fill={`url(#${faceGrad})`}
        />

        {/* Eyes */}
        <g fill="#67E8F9">
          <circle cx="96" cy="104" r="13">
            <animate
              attributeName="ry"
              values="13;13;2;13;13"
              keyTimes="0;0.45;0.5;0.55;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="144" cy="104" r="13">
            <animate
              attributeName="ry"
              values="13;13;2;13;13"
              keyTimes="0;0.45;0.5;0.55;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        {/* Eye glow halos */}
        <circle cx="96" cy="104" r="18" fill="#67E8F9" opacity="0.18" />
        <circle cx="144" cy="104" r="18" fill="#67E8F9" opacity="0.18" />

        {/* Smile */}
        <path
          d="M100 134 Q120 148 140 134"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Neck */}
        <rect x="104" y="182" width="32" height="16" rx="6" fill="#7E22CE" />

        {/* Body */}
        <rect
          x="64"
          y="196"
          width="112"
          height="56"
          rx="26"
          fill={`url(#${bodyGrad})`}
        />
        <circle cx="120" cy="224" r="12" fill={`url(#${glowGrad})`}>
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        <rect x="92" y="240" width="56" height="5" rx="2.5" fill="#7E22CE" opacity="0.5" />
      </svg>
    </div>
  );
}

function OrbitRing() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * 360;
        const duration = 11 + i * 0.9;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `spin-slow ${duration}s linear infinite`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            }}
          >
            <span
              className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"
              style={{ opacity: 0.65 - i * 0.08 }}
            />
          </div>
        );
      })}
    </div>
  );
}
