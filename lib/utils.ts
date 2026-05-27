import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
}

export function isClient() {
  return typeof window !== "undefined";
}

export function prefersReducedMotion() {
  if (!isClient()) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
