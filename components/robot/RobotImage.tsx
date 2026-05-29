"use client";

import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { ROBOT_ASSET, ROBOT_ASSET_FALLBACK } from "@/lib/robot";
import { RobotAura } from "@/components/robot/RobotAura";
import { useRobotHover } from "@/hooks/useRobotHover";

export interface RobotImageProps {
  className?: string;
  /** Pixel width hint for layout (height follows aspect). */
  size?: number;
  priority?: boolean;
  decor?: boolean;
  interactive?: boolean;
}

export const RobotImage = forwardRef<HTMLDivElement, RobotImageProps>(
  function RobotImage(
    {
      className,
      size = 380,
      priority = false,
      decor = true,
      interactive = true,
    },
    forwardedRef
  ) {
    const [src, setSrc] = useState(ROBOT_ASSET);
    const hoverSetRef = useRobotHover({ interactive });

    const mergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        hoverSetRef(node);
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef, hoverSetRef]
    );

    return (
      <div
        ref={mergedRef}
        data-robot-image
        className={cn(
          "relative flex items-center justify-center will-change-transform",
          className
        )}
        style={{ width: size, maxWidth: "100%", minHeight: size * 0.6 }}
      >
        {decor && <RobotAura />}

        <div
          data-robot-visual
          className="relative z-10 w-full drop-shadow-[0_0_40px_rgba(168,85,247,0.55)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="relative w-full overflow-hidden rounded-3xl"
            style={{ aspectRatio: "1 / 1.45" }}
          >
            <img
              data-robot-sheet
              src={src}
              alt="InnovateX AI companion robot"
              className="block h-full w-[300%] max-w-none select-none object-cover will-change-transform"
              style={{
                transform: "translateX(0%)",
                transformOrigin: "center center",
              }}
              draggable={false}
              loading={priority ? "eager" : "lazy"}
              onError={() => {
                if (src !== ROBOT_ASSET_FALLBACK) setSrc(ROBOT_ASSET_FALLBACK);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);
