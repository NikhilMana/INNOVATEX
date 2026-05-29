"use client";

import { RobotImage, type RobotImageProps } from "@/components/robot/RobotImage";

/**
 * @deprecated Use RobotImage — kept for backward-compatible imports.
 */
export function RobotMascot(props: RobotImageProps) {
  return <RobotImage {...props} />;
}
