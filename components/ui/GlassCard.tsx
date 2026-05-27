"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "bordered" | "conic";
  hoverable?: boolean;
  glow?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      glow = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles: Record<string, string> = {
      default: "glass-card",
      strong: "glass-card-strong",
      bordered: "border-gradient p-px",
      conic: "border-conic",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          variantStyles[variant],
          hoverable &&
            "transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-glow-sm",
          glow && "shadow-glow-sm",
          className
        )}
        {...props}
      >
        {variant === "bordered" ? (
          <div className="bg-surface rounded-[23px] p-6">{children}</div>
        ) : (
          children
        )}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";
