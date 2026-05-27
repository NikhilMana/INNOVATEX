"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "magnetic";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const variantMap: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-magenta via-purple-500 to-purple-700 text-white shadow-glow-md hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "glass-card-strong text-white border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10",
  ghost:
    "text-white border border-white/10 hover:border-purple-400/50 hover:bg-white/5",
  magnetic:
    "bg-gradient-to-r from-magenta via-purple-500 to-purple-700 text-white shadow-glow-md hover:shadow-glow-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-wide transition-all duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none",
          sizeMap[size],
          variantMap[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
