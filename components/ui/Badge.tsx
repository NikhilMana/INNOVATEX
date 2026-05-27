import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "upcoming" | "soon" | "featured" | "live";
  className?: string;
}

const variantMap = {
  default:
    "bg-white/5 border border-white/10 text-muted",
  upcoming:
    "bg-purple-500/10 border border-purple-400/40 text-purple-300",
  soon: "bg-magenta/10 border border-magenta/40 text-pink-300",
  featured:
    "bg-gradient-to-r from-magenta to-purple-500 text-white border border-purple-300/50",
  live: "bg-green-500/10 border border-green-400/40 text-green-300",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const isPulsing = variant === "live" || variant === "upcoming";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-display font-semibold uppercase tracking-[0.18em] backdrop-blur-md",
        variantMap[variant],
        className
      )}
    >
      {isPulsing && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
