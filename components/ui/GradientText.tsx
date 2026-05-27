import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  as?: ElementType;
  children: ReactNode;
  variant?: "default" | "soft" | "animated";
  className?: string;
}

export function GradientText({
  as: Component = "span",
  children,
  variant = "default",
  className,
}: GradientTextProps) {
  const variantClass =
    variant === "animated"
      ? "gradient-text-animated"
      : variant === "soft"
        ? "gradient-text-soft"
        : "gradient-text";

  return (
    <Component className={cn(variantClass, className)}>{children}</Component>
  );
}
