"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  target: string;
}

function calculate(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, live: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    live: false,
  };
}

export function Countdown({ target }: CountdownProps) {
  const [time, setTime] = useState(() => calculate(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(calculate(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!mounted) return null;

  if (time.live) {
    return (
      <div className="inline-flex items-center gap-2 glass-card-strong rounded-full px-6 py-3 shadow-glow-md animate-pulse-glow">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
        <span className="font-display font-semibold text-sm uppercase tracking-widest">
          Live Now
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 md:gap-5">
      <Unit value={time.days} label="Days" />
      <Sep />
      <Unit value={time.hours} label="Hours" />
      <Sep />
      <Unit value={time.minutes} label="Min" />
      <Sep />
      <Unit value={time.seconds} label="Sec" />
    </div>
  );
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card-strong shadow-glow-sm rounded-2xl px-4 md:px-6 py-3 md:py-4 min-w-[68px] md:min-w-[88px]">
        <span
          className="block text-center font-display text-3xl md:text-5xl font-extrabold gradient-text tabular-nums"
          style={{ lineHeight: 1 }}
        >
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted font-display">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <span
      className="font-display text-3xl md:text-5xl font-extrabold text-purple-500/50"
      aria-hidden
    >
      :
    </span>
  );
}
