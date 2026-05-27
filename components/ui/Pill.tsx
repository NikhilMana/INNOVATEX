import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: ReactNode;
  icon?: ReactNode;
  pulsing?: boolean;
  className?: string;
}

export function Pill({ children, icon, pulsing = false, className }: PillProps) {
  return (
    <div
      className={cn(
        "glass-pill inline-flex items-center gap-2 px-4 py-2 text-[11px] font-display font-medium uppercase tracking-[0.25em] text-white/90",
        className
      )}
    >
      {pulsing && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </span>
      )}
      {icon && <span className="text-purple-400">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
